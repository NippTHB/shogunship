# ShogunShip V1 Conceptual Domain Model

## Purpose

This document answers: **What business objects and relationships must ShogunShip preserve?** It is conceptual, provider-neutral, and not a database schema. A concept may become a table, an embedded value, a relationship record, or behavior inside an aggregate after implementation design.

Business rules come from [OPERATING_MODEL.md](./OPERATING_MODEL.md), terms from [DOMAIN_VOCABULARY.md](./DOMAIN_VOCABULARY.md), high-level boundaries from [ARCHITECTURE.md](./ARCHITECTURE.md), transitions from [TRANSITION_CONTRACTS.md](./TRANSITION_CONTRACTS.md), and unresolved matters from [RESEARCH_TBD.md](./RESEARCH_TBD.md).

## Classification guide

- **Aggregate/entity:** independently identified business object controlling a consistency boundary.
- **Supporting record:** persisted context subordinate to another concept.
- **Relationship record:** explicit association carrying business meaning, quantity, allocation, or lineage.
- **Immutable record:** accepted historical fact not edited in place.
- **Append-oriented record:** history extended by new entries, reversals, or adjustments.
- **Mutable current state:** efficient current projection whose material changes remain audited.
- **Derived concept:** calculated from authoritative facts rather than independently asserted.

## A. Identity and access

### Guest Submission Identity

- **Purpose:** preserves the contact identity and submission context of a person who has not authenticated.
- **Classification:** supporting persisted record; mutable only for controlled contact correction, with audit where material.
- **Relationships:** may originate many Requests and receive Guest Links; may later be associated with one verified Customer.
- **Invariant:** it is not an authenticated identity and cannot create Authorization.
- **Implementation note:** it may be represented within guest-submission records rather than as a standalone table.

### Customer

- **Purpose:** verified person entitled to manage their own ShogunShip records and perform binding actions.
- **Classification:** core aggregate/entity with mutable account state and immutable identity/security history where material.
- **Relationships:** owns or is allocated Requests, Purchases, Physical Parcels, financial records, Service Requests, and Shipments.
- **Invariant:** backend ownership checks apply to every protected resource; Customer activity remains distinguishable from Staff activity.

### Staff

- **Purpose:** individually identifies a founder/operator acting for ShogunShip.
- **Classification:** core security entity with mutable access state and append-oriented security history.
- **Relationships:** receives Role/Permission Assignments and acts in Audit Events.
- **Invariant:** no shared Staff credentials; Staff cannot create Customer Authorization.

### Role

- **Purpose:** names a coherent permission set such as Owner/Admin or Operator.
- **Classification:** supporting security concept, potentially configured rather than independently modeled.
- **Relationships:** assigned to Staff through Permission Assignment.
- **Invariant:** Operator does not implicitly receive unrestricted Staff-management or financial-adjustment authority.

### Permission Assignment

- **Purpose:** records which Staff identity receives which role/permission and during what interval.
- **Classification:** append-oriented relationship record.
- **Relationships:** Staff ↔ Role/permission; assigned/revoked by an authorized Staff actor.
- **Invariant:** material assignment changes are audited; historical attribution survives revocation.

### Guest Link

- **Purpose:** grants scoped read-only access to one guest response/Request.
- **Classification:** security record with mutable validity and append-oriented access/revocation history.
- **Relationships:** belongs to one intended Request and guest contact context.
- **Cardinality:** a Request may have multiple rotated/reissued links; each link scopes to one Request.
- **Invariant:** secret is unguessable, only a digest is retained server-side, and the link cannot authorize binding action.

## B. Request, quote, and authorization

### Listing

- **Purpose:** identifies one exact third-party marketplace/merchant offer.
- **Classification:** core reference entity with mutable current observations.
- **Relationships:** one Listing may be referenced by multiple Requests where policy allows; auction exclusivity constrains active authorization, not initial submission.
- **Invariant:** marketplace/platform plus unique listing identifier is used where available; a different listing requires a different Request.

### Listing Snapshot

- **Purpose:** preserves what was observed and materially presented at a point in time.
- **Classification:** immutable evidence record.
- **Relationships:** derived from a Listing observation and referenced by Quote Versions and Authorization Snapshots.
- **Invariant:** a changed live Listing never silently rewrites an earlier Snapshot.

### Request

- **Purpose:** represents one Guest/Customer inquiry concerning one exact Listing and requested quantity.
- **Classification:** core aggregate root with mutable current state and preserved transition history.
- **Relationships:** references one Listing; owns Request Reviews and Quote Versions; is later associated with a Customer and may lead to one successful Purchase.
- **Cardinality:** exactly one Listing per Request; quantity may exceed one only for units from that Listing.
- **Invariant:** grouping never merges Request identity; partial quantity is not silently acquired.

### Request Review

- **Purpose:** records eligibility, availability, restrictions, required information, and Staff assessment.
- **Classification:** versioned supporting record; material revisions preserved.
- **Relationships:** belongs to one Request; may cite Listing Snapshots and evidence.
- **Invariant:** review is not Quote, Authorization, or guaranteed availability.

### Quote

- **Purpose:** logical non-binding commercial proposal for a Request.
- **Classification:** aggregate-owned logical concept; may be represented by its versions rather than a separate persisted object.
- **Relationships:** belongs to one Request and consists of one or more Quote Versions.
- **Invariant:** Quote never constitutes purchase Authorization.

### Quote Version

- **Purpose:** preserves one exact revision of amounts, assumptions, warnings, and validity.
- **Classification:** immutable record after publication.
- **Relationships:** owned by one Request; references Listing Snapshot and may be referenced by Authorization.
- **Cardinality:** one Request has zero or many Quote Versions; an Authorization references exactly the applicable version.
- **Invariant:** newer versions supersede but do not erase older versions; Quote expiry remains TBD.

### Authorization

- **Purpose:** records an authenticated Customer's binding approval of one exact action.
- **Classification:** immutable core record.
- **Relationships:** references Customer, target entity/version, Authorization Snapshot, and relevant proposal/Quote Version.
- **Invariant:** email, Guest Link access, and Staff preparation are not Authorization; accepted records are never edited in place.

### Authorization Snapshot

- **Purpose:** preserves the exact material payload presented and accepted.
- **Classification:** immutable evidence record.
- **Relationships:** one-to-one or logically inseparable from Authorization; references Listing Snapshot and evidence where applicable.
- **Invariant:** includes action, amounts, line items, warnings, terms/policy version, selections, actor/security context, time, and payload integrity/version identifier.

## C. Acquisition and merchant activity

### Purchase

- **Purpose:** represents the successful acquisition allocated to one Customer from one Request.
- **Classification:** core entity with mutable fulfilment projection and immutable acquisition facts.
- **Relationships:** normally one successful Purchase per Request; linked to Merchant Order Line(s), Customer Allocation, and Parcel Content.
- **Invariant:** remains independently traceable through grouped payment, merchant combination, parcel combination, and Shipment.

### Fixed-Price Acquisition

- **Purpose:** records attempts and outcomes for a directly priced Listing.
- **Classification:** specialized workflow/supporting entity associated with Request and Purchase.
- **Relationships:** consumes an applicable Authorization and confirmed Payment allocation; successful result creates Purchase.
- **Invariant:** Payment does not guarantee success; no substitute Listing is purchased without new Authorization.
- **Implementation note:** may be implemented as an acquisition type and attempt history rather than a separate table.

### Preorder Commitment

- **Purpose:** records the future-fulfilment characteristics of an accepted qualifying Preorder.
- **Classification:** specialized acquisition/Purchase extension with mutable fulfilment state and immutable acceptance basis.
- **Relationships:** tied to Request, Authorization, Purchase, and Merchant Order.
- **Invariant:** expected fulfilment was no more than 30 calendar days away when accepted; later delay does not rewrite eligibility; storage begins only at physical Arrival.

### Auction

- **Purpose:** coordinates the distinct competitive-bidding lifecycle for one exact auction Listing.
- **Classification:** core aggregate.
- **Relationships:** belongs to a Request/Listing; owns Auction Authorizations and Bid Submissions; references Bid Deposit, handling-fee obligations, and eventual Purchase/Merchant Order.
- **Invariant:** at most one active accepted/authorized/funded ShogunShip Customer per exact auction Listing.

### Auction Authorization

- **Purpose:** preserves the approved maximum, funds, costs, warnings, and auction conditions.
- **Classification:** immutable specialized Authorization or action-specific extension.
- **Relationships:** references Auction and general Authorization Snapshot.
- **Invariant:** an increased maximum creates a new Authorization; the prior maximum remains effective until the new maximum is successfully funded and submitted.

### Maximum Bid

- **Purpose:** represents the highest JPY amount currently authenticated and funded for ShogunShip to bid on one exact Auction.
- **Classification:** immutable value within an Auction Authorization plus a derived current-effective projection.
- **Relationships:** belongs to one Auction Authorization; actual Bid Submissions must reference the maximum that governed them.
- **Invariant:** ShogunShip never intentionally submits above it; a proposed increase is not effective until newly authorized, funded, and successfully submitted.

### Bid Deposit

- **Purpose:** represents Customer money reserved for the authorized auction maximum and applicable known auction costs.
- **Classification:** business concept implemented through a scoped Customer Funds Lot, Financial Obligation, Payment Allocation, and later Refund Allocation.
- **Relationships:** belongs to one Auction/Authorization funding purpose.
- **Invariant:** it is not ShogunShip revenue; unused funds return to the original payment method; no reusable V1 wallet is created.

### Auction Handling Fee

- **Purpose:** represents the separately disclosed fee for successfully submitting a valid authorized bid.
- **Classification:** Financial Obligation line whose earned state is established by a Fee-Earning Event.
- **Relationships:** tied to Auction and valid Bid Submission.
- **Invariant:** it is not earned when ShogunShip declines or no valid bid is submitted; amount and relationship to the normal service fee remain TBD.

### Bid Submission

- **Purpose:** proves an operational attempt/result of submitting an authorized bid.
- **Classification:** immutable operational record/event.
- **Relationships:** belongs to Auction and exact Auction Authorization; identifies Staff actor and marketplace result.
- **Invariant:** valid submission is the Auction Handling Fee earning event; ShogunShip never intentionally exceeds the authorized maximum.

### Merchant Order

- **Purpose:** represents ShogunShip's merchant/platform-facing transaction.
- **Classification:** core supporting aggregate with mutable fulfilment state and preserved external references/history.
- **Relationships:** contains one or more Merchant Order Lines and may produce one or more Physical Parcels.
- **Invariant:** it is not Request, Purchase, Physical Parcel, or Customer Allocation.

### Merchant Order Line

- **Purpose:** allocates merchant-facing quantities, prices, charges, and outcomes to independent Purchases.
- **Classification:** relationship record with append-oriented corrections.
- **Relationships:** Merchant Order ↔ Purchase.
- **Invariant:** seller refund/cancellation effects remain attributable to affected Purchases.

### Customer Allocation

- **Purpose:** records exclusive allocation of an acquired item/quantity to the authorizing Customer.
- **Classification:** core relationship record with preserved history.
- **Relationships:** Customer ↔ Purchase/item quantity.
- **Invariant:** not equivalent to legal title, physical Custody, payment state, or unrestricted right to move property.

## D. Finance

All authoritative monetary values are whole JPY amounts. Processor currency/conversion metadata is supplementary.

### Financial Obligation

- **Purpose:** records an authoritative JPY amount owed for a defined business purpose and party.
- **Classification:** core financial entity; append-oriented through revisions/adjustments rather than destructive editing.
- **Relationships:** owns Obligation Lines; may be grouped into Checkout and satisfied by Payment Allocations.
- **Invariant:** acquisition and international-shipping obligations remain distinct stages.

### Obligation Line

- **Purpose:** attributes item price, domestic shipping, fee, service, storage, or shipping components.
- **Classification:** supporting financial record.
- **Relationships:** belongs to one Financial Obligation and references the relevant Request/Purchase/service/package where applicable.
- **Invariant:** line attribution survives grouped collection and partial refund.

### Checkout

- **Purpose:** provides one Customer payment experience for one or more independent obligations.
- **Classification:** convenience aggregate/presentation concept; likely persisted for reconciliation.
- **Relationships:** groups obligations and Payment attempts.
- **Invariant:** never merges underlying Request, obligation, allocation, or outcome identity.

### Payment

- **Purpose:** records an external payment attempt, confirmation, failure, or review.
- **Classification:** core financial entity with append-oriented provider events and mutable current projection.
- **Relationships:** associated with Checkout and Processor Transaction Records; distributed through Payment Allocations.
- **Invariant:** it does not belong exclusively to one Request.

### Payment Allocation

- **Purpose:** attributes Payment value to exact obligations and underlying domain subjects.
- **Classification:** append-oriented relationship/ledger record.
- **Relationships:** Payment ↔ Financial Obligation/line.
- **Invariant:** allocations and reversals reconcile to usable Payment value; grouped checkout remains request-traceable.

### Refund

- **Purpose:** records return of money through the original payment method.
- **Classification:** core financial entity with append-oriented provider status.
- **Relationships:** supported by Refund Allocations and Processor Transaction Records.
- **Invariant:** authoritative refund obligation is calculated in JPY; V1 does not convert it into wallet credit.

### Refund Allocation

- **Purpose:** attributes a Refund to original Payment Allocations and business reasons.
- **Classification:** append-oriented relationship/ledger record.
- **Invariant:** cannot exceed the corresponding refundable allocation and preserves partial-failure attribution.

### Customer Funds Lot

- **Purpose:** distinguishes restricted/refundable Customer money from earned ShogunShip revenue, especially Auction Bid Deposits.
- **Classification:** append-oriented financial subledger concept.
- **Relationships:** funded by Payment Allocation; consumed by auction outcome or returned by Refund Allocation.
- **Invariant:** scoped to a defined purpose; no reusable V1 wallet; unused funds return to the original payment method.

### Fee-Earning Event

- **Purpose:** records the business fact that makes a conditional fee earned.
- **Classification:** immutable financial/business event.
- **Relationships:** references fee Obligation and triggering subject, such as a valid Bid Submission.
- **Invariant:** receipt of money alone does not necessarily earn the fee.

### Financial Adjustment

- **Purpose:** records an approved correction, waiver, exclusion, or manual financial change.
- **Classification:** append-oriented audited entry.
- **Relationships:** references affected obligations/allocations and approving Staff.
- **Invariant:** requires reason and authority; never silently rewrites history.

### Processor Transaction Record

- **Purpose:** preserves provider identifiers, transaction currency/amount, conversion, fees, settlement, Refund, and Chargeback metadata.
- **Classification:** append-oriented integration/reconciliation record.
- **Invariant:** never replaces the canonical JPY obligation or internal allocation.

## E. Physical custody and services

### Physical Parcel

- **Purpose:** represents one discrete incoming physical package in ShogunShip custody.
- **Classification:** core aggregate with mutable current custody/storage projection and preserved history.
- **Relationships:** contains Parcel Content; has Arrival Record, storage records, Holds, evidence, and service requests.
- **Invariant:** each arrived parcel has one Arrival date and independent 60-day Free Storage Period before consolidation.

### Parcel Content

- **Purpose:** records which Purchase quantities are physically represented in a parcel.
- **Classification:** quantity-aware relationship record.
- **Relationships:** Purchase ↔ Physical Parcel.
- **Cardinality:** many-to-many to support merchant combination and split fulfilment.
- **Invariant:** customer ownership/allocation boundaries are never mixed in seller combination or Consolidation.

```text
Purchase ← Parcel Content → Physical Parcel
```

### Arrival Record

- **Purpose:** establishes recorded receipt, external condition, measurements, carrier/tracking context, and unopened verification.
- **Classification:** immutable operational record with later corrections linked rather than overwritten.
- **Relationships:** belongs to one Physical Parcel; references Arrival Photos and receiving Staff.
- **Invariant:** starts the independent free-storage clock; default Arrival does not imply item inspection.

### Custody Interval

- **Purpose:** records when and why ShogunShip physically holds a parcel/package and relevant location changes.
- **Classification:** append-oriented history/derived operational concept.
- **Relationships:** belongs to Physical Parcel or Outbound Package.
- **Invariant:** Custody is not legal title or Customer Allocation.

### Storage Entitlement

- **Purpose:** preserves the applicable free-storage start/deadline and inherited-deadline rule.
- **Classification:** supporting persisted fact; derived initially from Arrival and policy version.
- **Relationships:** belongs to Physical Parcel or resulting Outbound Package.
- **Invariant:** later arrivals and Consolidation do not reset it; Consolidation uses the earliest selected deadline.

### Storage Accrual

- **Purpose:** records chargeable daily Extended Storage based on physical package size and policy.
- **Classification:** append-oriented financial/operational entry or reproducible billed interval.
- **Invariant:** final tiers/rates are TBD; ShogunShip-caused non-chargeable time is excluded.

### Storage Adjustment

- **Purpose:** corrects or excludes storage time/amount with a reason.
- **Classification:** append-oriented audited entry.
- **Invariant:** does not erase the original calculation.

### Service Request

- **Purpose:** scopes proposed, authorized, paid, and completed optional work.
- **Classification:** core service aggregate with versioned proposal and focused lifecycle.
- **Relationships:** belongs to Customer and target parcel/package; references Authorization, obligation, evidence, and Staff work.
- **Invariant:** Staff may prepare scope but Customer must authorize paid or materially irreversible work.

### Condition Photos Request

- **Purpose:** specializes Service Request for opening, visual examination, and detailed item/retail-packaging photos.
- **Classification:** specialized service workflow, possibly implemented as a service type.
- **Invariant:** distinct from Arrival Photos; not authentication, grading, testing, or hidden-defect guarantee.

### Consolidation Job

- **Purpose:** records authorized transformation of two or more received Physical Parcels into an Outbound Package.
- **Classification:** core transformation/service aggregate.
- **Relationships:** consumes source parcels and creates one or more resulting package records if operationally necessary; links Authorization, obligation, evidence, and lineage.
- **Invariant:** preserves source histories, packaging preference, product-packaging protection, earliest deadline, and no-reset rule.

### Repacking Job

- **Purpose:** records paid single-parcel Package Reduction/Repacking.
- **Classification:** specialized transformation/service aggregate.
- **Relationships:** one source Physical Parcel → resulting Outbound Package.
- **Invariant:** distinct from Consolidation; savings are not guaranteed; safe packing takes priority.

### Outbound Package

- **Purpose:** represents a prepared physical package before carrier dispatch.
- **Classification:** core aggregate with current readiness state and immutable measurement revisions.
- **Relationships:** contains Package Content, has Package Lineage, receives Shipping Quotes, and may be dispatched as a Shipment.
- **Invariant:** remains distinct from incoming Physical Parcel and Shipment.

### Package Content

- **Purpose:** records Purchase quantities placed in an Outbound Package.
- **Classification:** quantity-aware relationship record.
- **Invariant:** contents remain traceable back to independent Requests/Purchases.

### Package Lineage

- **Purpose:** preserves physical transformation from source parcels/packages to results.
- **Classification:** immutable relationship/history record.
- **Invariant:** consumed source packages are closed, not erased.

```text
Physical Parcels → Consolidation Job → Outbound Package → Shipment
Physical Parcel  → Repacking Job     → Outbound Package → Shipment
```

## F. Shipping and resolution

### International Shipping Quote

- **Purpose:** presents actual post-packing shipping choices and JPY prices.
- **Classification:** versioned proposal aggregate; published versions become immutable.
- **Relationships:** belongs to Outbound Package and owns Shipping Options.
- **Invariant:** separate from initial acquisition Quote; validity/payment deadline remain TBD.

### Shipping Option

- **Purpose:** records carrier/service, price, transit estimate, tracking, duty model, coverage, exclusions, and shortfall.
- **Classification:** immutable component of a published Shipping Quote Version.
- **Invariant:** no untracked option may be approved for dispatch.

### Customs Information

- **Purpose:** records truthful declaration data and required Customer/importer information.
- **Classification:** versioned supporting record; accepted version preserved in Shipping Authorization.
- **Invariant:** no intentional undervaluation or false gift declaration; classification/tax outcome is not guaranteed.

### Shipping Authorization

- **Purpose:** records authenticated approval of one exact Shipping Option, destination, customs data, coverage, and limitations.
- **Classification:** specialized immutable Authorization.
- **Invariant:** material address, customs, price, method, or coverage change requires new Authorization.

### Shipment

- **Purpose:** represents the carrier dispatch execution of one Outbound Package.
- **Classification:** core aggregate with mutable tracking projection and immutable dispatch facts.
- **Relationships:** references Shipping Authorization, Payment allocation, Customs Information, Carrier Coverage, and Tracking Records.
- **Invariant:** every Shipment uses end-to-end tracking; Shipment is not the Outbound Package.

### Tracking Record

- **Purpose:** preserves carrier observations and current delivery projection.
- **Classification:** append-oriented integration record plus derived current status.
- **Invariant:** duplicate/out-of-order provider events are handled idempotently.

### Carrier Coverage

- **Purpose:** records coverage available under the selected carrier/insurer, including limits and exclusions disclosed.
- **Classification:** immutable shipping evidence/supporting record.
- **Invariant:** not ShogunShip self-insurance and not a guarantee of full value.

### Carrier Claim

- **Purpose:** coordinates loss/damage evidence, submission, decision, compensation receipt, and pass-through.
- **Classification:** core resolution aggregate.
- **Relationships:** belongs to Shipment and may create Holds, evidence, financial obligations, and Refund/payment records.
- **Invariant:** ordinary Customer compensation follows what ShogunShip actually receives, subject to law.

### Dispute

- **Purpose:** coordinates a contested payment, transaction, service, property, or operational outcome.
- **Classification:** core resolution aggregate.
- **Relationships:** may affect Payments, Purchases, Parcels, services, or Shipments and create Holds.
- **Invariant:** does not erase Customer Allocation or decide legal title.

### Chargeback

- **Purpose:** specializes Dispute for a payment-provider/issuer reversal process.
- **Classification:** specialized resolution workflow, possibly implemented as a Dispute type with provider records.
- **Invariant:** may restrict shipment where legally permitted but does not convert property to inventory.

### Hold / Restriction

- **Purpose:** independently blocks a defined operation for a defined reason without corrupting normal lifecycle state.
- **Classification:** core relationship/operational record with start, scope, status, and audited release.
- **Relationships:** attaches to Customer, Request, Purchase, Parcel, Outbound Package, Shipment, Payment, or service as appropriate.
- **Invariant:** blocking scope is explicit; release does not erase the Hold; no Hold invents unresolved legal rights.

### Evidence Record

- **Purpose:** classifies structured evidence or private files establishing material facts.
- **Classification:** immutable or versioned supporting record with mutable visibility/retention state.
- **Relationships:** attaches to controlled domain subjects and links originals/derivatives.
- **Invariant:** private by default; corrections preserve supersession history.

### Communication Record

- **Purpose:** associates material customer/Staff communications with operational subjects.
- **Classification:** append-oriented record.
- **Invariant:** may request or explain a proposal but never becomes binding Authorization by itself.

### Audit Event

- **Purpose:** attributes material Customer, Staff, security, financial, property, and state-changing activity.
- **Classification:** immutable append-only event.
- **Relationships:** references actor, subject, action, time, reason, and relevant before/after values.
- **Invariant:** no every-click logging requirement; material history and security events are preserved.

## Aggregate and ownership summary

- **Request aggregate:** Request, Request Reviews, Quote Versions, and request-scoped Listing evidence.
- **Authorization record:** independently immutable and linked to an exact target/proposal version.
- **Auction aggregate:** exclusivity, Auction Authorizations, Bid Submissions, and outcome; finance remains linked but independently authoritative.
- **Merchant Order aggregate:** merchant-facing order and lines; does not own Customer identity or Physical Parcel history.
- **Finance aggregates:** obligations, Payments, Refunds, and restricted Customer Funds connected by allocations.
- **Physical Parcel aggregate:** Arrival, contents, storage, custody, evidence, and Holds for one incoming package.
- **Service aggregate:** scoped optional work and its proposal/Authorization/execution evidence.
- **Outbound Package aggregate:** prepared contents, lineage, measurements, and readiness.
- **Shipment aggregate:** approved dispatch, carrier, tracking, coverage, and claim relationship.
- **Dispute/Claim aggregates:** independent resolution lifecycles that may attach Holds elsewhere.

These are conceptual consistency boundaries, not instructions to create one database table or service per bullet.

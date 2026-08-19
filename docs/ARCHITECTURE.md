# ShogunShip V1 Architecture

## Purpose and authority

This document is the canonical high-level, provider-neutral technical architecture for ShogunShip V1. It translates the approved business model into system boundaries and invariants without defining vendors, SQL, APIs, or implementation frameworks.

- Product intent: [PRODUCT.md](../PRODUCT.md)
- Canonical business rules: [OPERATING_MODEL.md](./OPERATING_MODEL.md)
- Shared terms: [DOMAIN_VOCABULARY.md](./DOMAIN_VOCABULARY.md)
- Conceptual objects and relationships: [DOMAIN_MODEL.md](./DOMAIN_MODEL.md)
- Business lifecycle overview: [LIFECYCLES.md](./LIFECYCLES.md)
- Enforceable transition requirements: [TRANSITION_CONTRACTS.md](./TRANSITION_CONTRACTS.md)
- Binding customer consent: [AUTHORIZATION_CONTRACTS.md](./AUTHORIZATION_CONTRACTS.md)
- Identity, access, and data protection: [SECURITY_MODEL.md](./SECURITY_MODEL.md)
- Selected V1 infrastructure profile: [INFRASTRUCTURE_DECISIONS.md](./INFRASTRUCTURE_DECISIONS.md)
- Intentionally unresolved matters: [RESEARCH_TBD.md](./RESEARCH_TBD.md)

If this document conflicts with the Operating Model, the Operating Model controls. Architecture must support unresolved policy rather than silently decide it.

## Architectural style

V1 is a **modular monolith**: one coherent backend application with explicit internal domain modules, a relational persistence model, private media/evidence storage, authenticated Customer and Staff interfaces, and a modest durable background-work facility. External payment, email, carrier, authentication, and storage systems integrate through provider-neutral boundaries and validated webhooks.

This choice gives a small operation transactional consistency and straightforward deployment while preserving boundaries that could be separated later if scale genuinely requires it. A module may own behavior and records without requiring a separate service or database.

The current React/Vite landing page is only a presentation client. Frontend state, hidden controls, installed packages, and the historical `base44-import` material do not define backend authority or select providers.

## Core principles

1. **Preserve independent business identity.** Request, Authorization, Payment, Purchase, Merchant Order, Physical Parcel, Service Request, Outbound Package, and Shipment are different concepts even when presented together.
2. **Use relational integrity for relational business facts.** Grouped checkout, parcel contents, merchant lines, and package lineage need explicit, constrained relationships.
3. **Enforce authorization on the backend.** Frontend visibility is never permission.
4. **Treat binding consent as immutable evidence.** Authorization identifies the exact proposal, version, amounts, warnings, terms, evidence, actor, and time.
5. **Keep current state small and histories append-oriented.** Material facts are corrected through versions, reversals, adjustments, and attributable transitions rather than silent replacement.
6. **Keep lifecycle dimensions independent.** Payment, custody, storage, dispute, service, and shipment readiness do not collapse into one status.
7. **Keep JPY authoritative.** Foreign-currency displays and processor metadata are supplementary.
8. **Keep customer funds separate from earned revenue.** Auction bid funds do not become revenue merely because they were received or reserved.
9. **Keep customer allocation separate from legal title and custody.** Unresolved legal rights remain unresolved.
10. **Keep evidence private and proportionate.** Store what is needed for the risk and lifecycle stage; do not expose permanent public evidence URLs.

## Domain modules

### Identity and access

Maintains Guest, Customer, and individually authenticated Staff identities; verified account association; roles and permissions; secure Guest Links; Staff MFA requirements; session controls; and resource-level authorization. Customer identity and Staff identity remain distinguishable even if the same human could theoretically hold both roles.

### Requests and quotes

Owns one-exact-Listing Requests, Listing references and snapshots, Request review, non-binding Quote Versions, expiry/re-review behavior, and the Guest response experience. Different Requests may be grouped for presentation but never merged underneath.

### Authorization

Creates immutable, action-specific Authorization and Authorization Snapshot records. Email, Guest Link access, Staff-prepared proposals, and operational Staff actions cannot substitute for authenticated Customer consent.

### Acquisition

Coordinates fixed-price purchase attempts and successful Purchases. Payment confirms ability to attempt acquisition; it does not guarantee success. A successful Purchase creates exclusive Customer Allocation while remaining distinct from the merchant-facing transaction.

### Auctions

Adds exact-listing exclusivity, Maximum Bid authorization versions, restricted Customer Funds, Bid Submissions, Auction Handling Fee earning, proxy-bidding outcomes, maximum increases, and unused-fund refunds. It does not implement or promise sniping.

### Preorders

Extends acquisition with eligibility based on the expected fulfilment date at acceptance, merchant non-cancellability, delayed fulfilment, and merchant cancellation. Later merchant delay does not rewrite the original eligibility decision.

### Merchant activity

Represents ShogunShip's transaction with a Japanese seller/platform. Merchant Orders and their lines can group several independent Purchases and can produce combined or split physical fulfilment without merging customer records.

### Finance

Maintains canonical JPY obligations, line items, checkouts, Payments, allocations, Customer Funds Lots, fee-earning events, Refunds, refund allocations, adjustments, and processor reconciliation metadata. It is an operational subledger, not an internal general-ledger accounting product.

### Physical custody and storage

Tracks Physical Parcels, quantity-aware contents, Arrival Records, custody, measurements, independent 60-day Free Storage Periods, daily Extended Storage, adjustments, Holds, and physical lineage. It does not infer legal title, lien, abandonment, or disposal rights.

### Paid services

Coordinates scoped, priced, authenticated work including Condition Photos, Consolidation, and single-parcel Package Reduction/Repacking. Necessary operational opening remains distinguishable from paid Condition Photos.

### Outbound packaging

Transforms one or more incoming Physical Parcels into an Outbound Package while preserving source lineage, contents, packaging choices, inherited storage deadline, measurements, and ShogunShip-caused processing exclusions.

### International shipping

Owns versioned International Shipping Quotes, Shipping Options, Customs Information, Shipping Authorization, dispatch, Tracking, Carrier Coverage, and returned-shipment handling. Every dispatched international Shipment must have end-to-end tracking.

### Evidence and media

Classifies structured snapshots and private files by lifecycle stage and sensitivity. Preserves originals where required, links derivatives to sources, records integrity metadata, and supports authenticated or short-lived scoped access.

The evidence lifecycle uses five risk-proportionate tiers: lightweight Guest/Request evidence; Quote-stage structured evidence and a representative image where useful; immutable binding-Authorization evidence including material images presented; ShogunShip-created operational evidence such as Arrival, Condition, packing, and shipping records; and specially restricted sensitive identity/customs/dispute documents. These are policy classes, not necessarily separate storage systems.

### Disputes and claims

Keeps payment disputes, Chargebacks, seller remedies, operational Holds, and Carrier Claims distinct. A dispute can restrict work or dispatch but does not erase Customer Allocation or convert property into inventory.

### Audit and communications

Preserves material business transitions, Staff and Customer actions, corrections, reasons, and relevant communications. Communication records can inform a proposal but cannot authorize it.

### Background work and integrations

Handles time-critical webhooks, scheduled expirations/reminders/accrual, provider polling, evidence processing, and eventually consistent notifications. External callbacks are authenticated, idempotent, and reconciled against internal records.

## Architectural invariants

- One exact Listing corresponds to one Request; multiple units are allowed only from that same Listing.
- Partial quantity is never silently purchased; the final behavior remains TBD.
- A Request owns independent review and Quote Version history.
- Authorization references one exact immutable proposal/version and the material presentation accepted.
- Guest Link viewing, email, and Staff action are never Customer Authorization.
- A grouped Checkout never merges Request, allocation, refund, or outcome identity.
- Payment is independent of Request because one Payment may fund several obligations.
- Payment Allocation connects money back to exact obligations and underlying Requests/services.
- Purchase and Merchant Order are distinct; a Merchant Order may include several Purchases.
- Merchant Order and Physical Parcel are distinct; fulfilment may combine or split.
- Purchase and Physical Parcel use a quantity-aware relationship.
- Same-seller domestic combination is included and distinct from paid post-arrival Consolidation.
- Every arrived Physical Parcel has its own Arrival date and 60-day Free Storage Period.
- Later arrivals and Consolidation do not reset free storage.
- Consolidation inherits the earliest selected deadline and preserves source-package history.
- Physical Parcel and Outbound Package are distinct.
- Outbound Package and Shipment are distinct.
- Default receiving documents the unopened outer parcel; paid Condition Photos documents the actual item visually.
- JPY obligations use exact whole-yen amounts; approximate foreign-currency display is non-authoritative.
- Auction Customer Funds and earned Auction Handling Fees remain distinguishable.
- One active accepted/authorized/funded ShogunShip customer is permitted per exact auction Listing.
- Shipment eligibility is derived from package readiness, authorization, payment, customs completion, eligibility, and absence of blocking Holds.
- Customer Allocation, physical Custody, legal title, payment status, dispute status, and Shipment eligibility remain independent.
- Material history is not silently overwritten.
- Holds/restrictions are independent from normal lifecycle state and declare their blocking scope.
- No architecture rule invents title transfer, lien, abandonment, disposal, donation, resale, or proceeds rights.

## State and consistency strategy

Each aggregate maintains a focused current state plus the dates and facts needed for efficient operation. Material transitions create durable business and audit records. Orthogonal concerns remain separate—for example, a parcel may be in custody, accruing Extended Storage, awaiting instructions, and blocked by a Chargeback at the same time.

Multi-record operations that must agree—such as exact-auction reservation, Payment Allocation, parcel Arrival, and Consolidation lineage—require transactional consistency. External provider calls are not assumed atomic with internal storage: requests use idempotency keys, callbacks are deduplicated, and ambiguous outcomes enter reconciliation rather than being guessed.

Full event sourcing is not required. Current-state records, immutable Authorizations, append-oriented finance, business-transition history, Audit Events, and communications provide the necessary history.

## Background-work classes

- **Time-critical:** provider webhook intake, security revocation, auction operations, and dispute/claim deadlines.
- **Externally triggered:** payment/refund/Chargeback events, carrier tracking, email delivery results, and media processing.
- **Scheduled:** Quote and Guest Link expiry, storage reminders, daily storage accrual, preorder follow-up, retention work, and reconciliation.
- **Eventually consistent:** notifications, thumbnails, tracking polling, reporting, and approximate exchange-rate display.

A durable post-commit work mechanism should prevent a committed business transition from being lost merely because notification delivery fails. V1 does not require a separate broker or service per workload.

## Security and data boundaries

- Public content is separate from customer, financial, evidence, and Staff data.
- Customers access only their own records and permitted evidence.
- Operators perform ordinary fulfilment but do not receive unrestricted Staff-management or financial-adjustment power.
- Owner/Admin actions remain attributable and auditable.
- Staff use individual accounts and mandatory MFA; shared credentials are prohibited.
- Sensitive documents and authentication data receive stricter access and logging.
- Support impersonation, if ever added, must be explicit, visible, constrained, and audited.
- The design must permit future dual approval without choosing thresholds now.

See [SECURITY_MODEL.md](./SECURITY_MODEL.md) for the complete boundary model.

## Non-functional requirements

### Security and privacy

Use least privilege, secure authentication and recovery, encryption in transit and at rest, private evidence, validated uploads, scoped access, rate limiting, abuse controls, and data minimization. Retention and deletion must support legal/privacy decisions that remain TBD.

### Integrity and idempotency

The eventual relational store must support transactions, referential integrity, uniqueness, and concurrency control. Provider operations and webhooks require stable identifiers, idempotency, replay protection, and manual reconciliation paths.

### Auditability and recoverability

Material actions must be attributable. Database and media backups require tested restoration. Corrections and reversals preserve history. Failed jobs and ambiguous external results must be visible to Staff.

### Observability

V1 needs structured logs, error reporting, job/webhook monitoring, security-event visibility, and payment reconciliation. It does not need enterprise-scale telemetry infrastructure.

### Performance, scale, and cost

Design for a small proxy operation: modest concurrency, growing relational history, and potentially significant private media. Prefer a simple correct system over distributed scaling. Large media should not be forced through presentation clients or exposed publicly.

### External-provider failure

Every provider boundary needs retries appropriate to the operation, deduplication, recorded request/result identifiers, timeout ambiguity handling, alerting, and a Staff reconciliation path.

## Provider capability requirements

Provider selection is recorded separately in [INFRASTRUCTURE_DECISIONS.md](./INFRASTRUCTURE_DECISIONS.md). Selected and future providers must satisfy these capabilities:

- relational transactions, constraints, querying, migrations, and reliable backup;
- verified Customer identity, Staff MFA, session revocation, and reauthentication;
- secure server execution, webhooks, scheduled jobs, and private-media authorization;
- JPY payment, international-card, 3D Secure, staged-payment, partial-refund, dispute, and reconciliation needs;
- private object storage, signed access, integrity metadata, lifecycle controls, and derivatives;
- reliable transactional email with delivery reporting;
- durable scheduled/asynchronous work with retries and failure visibility;
- structured monitoring and security/error alerting.

Detailed provider-dependent research remains in [RESEARCH_TBD.md](./RESEARCH_TBD.md).

## Explicit V1 exclusions

V1 does not include:

- microservices;
- full event sourcing;
- a reusable Customer wallet or store credit;
- a multi-currency accounting engine;
- automated marketplace purchasing;
- an auction-sniping system;
- a generalized warehouse-management platform;
- a complex dynamic policy engine;
- customer-directed resale;
- a general domestic-forwarding system;
- permanent public evidence URLs;
- AI customs or listing-decision automation;
- an internal general-ledger accounting product.

These exclusions do not weaken the requirement for relational integrity, immutable Authorization, private evidence, traceable finance, physical lineage, or auditability.

## Intentionally unresolved architecture inputs

The architecture supports but does not decide payment providers, high-value payment methods, exact prices, fee stacking, Quote expiry, partial quantity, storage tiers/rates/maximum duration, shipping-payment deadlines, returned-parcel treatment, authentication technology, exact Staff permissions, dual-approval thresholds, evidence retention, carrier choices/coverage, restricted-item details, or legal title/custody/lien/abandonment/disposal rights.

Those matters remain governed by [RESEARCH_TBD.md](./RESEARCH_TBD.md).

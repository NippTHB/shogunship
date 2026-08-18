# ShogunShip Domain Vocabulary

## Purpose

This glossary defines business terms used throughout the [V1 Operating Model](./OPERATING_MODEL.md), [Lifecycle Requirements](./LIFECYCLES.md), and provider-neutral [Architecture](./ARCHITECTURE.md). It is not a database schema; conceptual objects and relationships are documented separately in [DOMAIN_MODEL.md](./DOMAIN_MODEL.md).

## People and access

### Guest

A person who has not authenticated into a ShogunShip account. A Guest may browse public information, submit a non-binding Request, and use a scoped read-only Guest Link. A Guest cannot authorize a binding action.

### Customer

A verified, authenticated person with a ShogunShip account. A Customer can perform binding actions for their own Requests, Purchases, Parcels, services, and Shipments.

### Staff

An individually authenticated ShogunShip team member. Staff identity is distinct from Customer identity. V1 includes Owner/Admin and Operator roles; Staff actions never substitute for Customer Authorization.

## Request and acquisition

### Request

A customer's inquiry about one exact marketplace Listing, optionally for multiple units from that same Listing. A Request begins non-binding and retains its own review, Quote, Authorization, financial allocation, outcome, and evidence.

### Listing

The exact third-party marketplace or merchant offer identified by platform and unique listing/auction identifier where available. Separate Listings require separate Requests even when they offer the same product.

### Quote

ShogunShip's non-binding response showing its review and the current JPY amounts, assumptions, eligibility information, warnings, and expiry applicable to a Request. A Quote is not purchase Authorization.

### Quote Version

A preserved revision of a Quote. A newer version does not erase prior versions. Binding Authorization identifies the exact Quote Version approved.

### Authorization

An authenticated Customer action approving an exact, materially presented financial, contractual, property, customs, or shipping action. Email and Guest Link possession are not Authorization.

### Fixed-Price Purchase

An acquisition from a Listing whose purchase price is directly available rather than determined by bidding. It becomes binding after authenticated approval, payment, and successful merchant purchase.

### Preorder

A merchant order for future fulfilment. V1 accepts it only when expected release/fulfilment is no more than 30 calendar days away at acceptance. Its storage period begins upon physical Arrival.

### Auction

A marketplace Listing acquired through competitive bidding. An Auction has a distinct maximum, deposit, exclusivity, bid-execution, and outcome lifecycle.

### Maximum Bid

The highest JPY amount a Customer has authenticated and funded ShogunShip to bid for one Auction. ShogunShip must not intentionally exceed it without new Authorization.

### Bid Deposit

Customer money reserved for an Auction's Maximum Bid and applicable known auction costs. It is not ShogunShip revenue. Unused funds return to the original payment method under the approved auction policy.

### Auction Handling Fee

A separately disclosed fee for successfully submitting a valid authorized bid. It becomes earned once the bid is validly submitted, regardless of whether the Auction is won. Its price and relationship to the normal service fee are TBD.

### Merchant Order

The order or transaction recorded with the Japanese marketplace or seller. ShogunShip is commonly the merchant-facing purchaser, while the resulting Purchase is exclusively allocated to the Customer.

### Purchase

The successful acquisition associated with one Request. A Purchase remains independently traceable even when several Requests share checkout, seller-side combination, or a later Shipment.

## Property and receiving

### Physical Parcel

A discrete package physically received and stored by ShogunShip. It may contain one or several Purchases. Every Physical Parcel receives its own Arrival date and storage clock before consolidation.

### Customer Allocation

The exclusive association between a successfully acquired item/Purchase and the Customer who authorized it. Allocation is not the same as physical Custody, merchant-facing purchaser status, payment status, or legally validated title.

### Custody

ShogunShip's physical possession and care of Customer-allocated property while receiving, storing, servicing, consolidating, or shipping it. Precise legal characterization remains subject to Japanese legal review.

### Arrival

The recorded receipt of a Physical Parcel at ShogunShip. Arrival starts that parcel's independent 60-day Free Storage Period.

### Arrival Photo

A photograph of the unopened outer/shipping parcel taken as part of default receiving. It is not a photograph or inspection of the actual item.

### Condition Photos

A paid optional service in which ShogunShip opens the parcel, visually examines the actual item, and supplies detailed photographs. It is not authentication, grading, functional testing, or a hidden-defect guarantee.

## Storage and packing

### Free Storage Period

The 60 calendar days assigned independently to each Physical Parcel from Arrival. Later arrivals and Consolidation do not reset it.

### Extended Storage

Paid storage accruing daily after a parcel's Free Storage Period. The rate is based on objective physical package-size tiers. Rates, thresholds, and maximum duration are TBD.

### Consolidation

A paid ShogunShip service combining two or more already received Physical Parcels into one outgoing package. It requires Customer Authorization and is distinct from Seller-Side Domestic Combination.

### Seller-Side Domestic Combination

An included, best-effort request to one Japanese seller/platform to ship several Purchases belonging to the same Customer together before they reach ShogunShip. ShogunShip receives one Physical Parcel if successful. It is not paid Consolidation.

### Package Reduction / Repacking

A paid service for one received parcel in which ShogunShip removes unnecessary seller shipping material where practical and repacks the item safely. It does not authorize removal of product/retail packaging and does not guarantee savings.

## Shipping and resolution

### Shipment

The final package dispatched internationally under one authenticated shipping approval. A Shipment may contain one or more Purchases and always uses end-to-end tracking.

### International Shipping Quote

The post-packing offer of actual available carrier/service options and JPY prices based on final dimensions and weight. It is separate from the initial acquisition Quote.

### Carrier Coverage

Insurance or compensation offered by the selected carrier or insurer under its limits and exclusions. It is not ShogunShip self-insurance or a guarantee of full item value.

### Claim

A request for carrier/insurer compensation or another recognized remedy for loss, damage, or a shipping event. ShogunShip assists with legitimate evidence and normally passes on compensation actually received.

### Dispute

A contested payment, transaction, service, property, or operational outcome. A Dispute may restrict service or shipment while preserving Customer Allocation and evidence.

### Chargeback

A payment reversal process initiated through a card issuer or payment provider. A Chargeback creates a restricted/disputed state; it does not automatically turn Customer-allocated property into ShogunShip inventory.

## Evidence and audit

### Evidence

A structured record or file preserved to establish what was requested, reviewed, authorized, purchased, received, serviced, packed, shipped, paid, refunded, disputed, or claimed. Evidence is private, classified, and retained proportionately.

### Authorization Snapshot

The immutable evidence record of the exact Listing state, materially relevant images, Quote Version, amounts, warnings, terms version, and authenticated Customer action approved at a binding moment.

### Guest Link

A long, unguessable, scoped, read-only, revocable/expirable link allowing a Guest to view one response or Quote. It cannot authorize payment or any binding action.

### Audit Event

An attributable record of a material staff, customer, security, financial, property, or state-changing action. It records the actor, time, affected subject, action, and relevant before/after values or reason without pretending every UI click is an audit event.

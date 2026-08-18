# ShogunShip V1 Operating Model

## Status and authority

This document is the canonical business and operating-model reference for ShogunShip V1. It records the decisions approved during product discovery. It defines intended behavior, not final legal language or technical implementation.

- Product summary and positioning: [PRODUCT.md](../PRODUCT.md)
- Domain terminology: [DOMAIN_VOCABULARY.md](./DOMAIN_VOCABULARY.md)
- Business lifecycle requirements: [LIFECYCLES.md](./LIFECYCLES.md)
- Provider-neutral technical architecture: [ARCHITECTURE.md](./ARCHITECTURE.md)
- Conceptual domain relationships: [DOMAIN_MODEL.md](./DOMAIN_MODEL.md)
- Transition and authorization contracts: [TRANSITION_CONTRACTS.md](./TRANSITION_CONTRACTS.md) and [AUTHORIZATION_CONTRACTS.md](./AUTHORIZATION_CONTRACTS.md)
- Identity, access, and data protection: [SECURITY_MODEL.md](./SECURITY_MODEL.md)
- Unresolved research and decisions: [RESEARCH_TBD.md](./RESEARCH_TBD.md)

Where this document marks a matter **TBD**, no implementation or customer promise should assume an answer.

## 1. Service model

ShogunShip is a Japan-based proxy purchasing and forwarding service for international customers. It helps a customer review and acquire a specific third-party Japanese marketplace listing, receive the resulting parcel in Nara, store it, perform authorized optional services, and ship it internationally.

ShogunShip is not a marketplace and does not ordinarily buy merchandise into ShogunShip inventory for later resale. A successful acquisition is allocated exclusively to the customer who authorized it.

The intended commercial sequence is:

1. A customer identifies one exact third-party listing.
2. ShogunShip reviews that listing and prepares a non-binding response or quote.
3. The customer authenticates, approves, and funds a defined action.
4. ShogunShip purchases, preorders, or bids according to that authorization.
5. The merchant ships the purchase domestically to ShogunShip.
6. ShogunShip receives and holds the customer-allocated parcel in custody.
7. ShogunShip performs only the included and separately authorized services applicable to it.
8. The customer approves and pays for international shipping after final packing information is available.
9. ShogunShip dispatches the shipment with end-to-end tracking.

The precise legal characterization of agency, title, custody, bailment, possession, and rights while amounts remain unpaid requires Japanese legal validation. The system must not collapse these concepts into a single `owner` concept.

## 2. Customer journey

### 2.1 Public information

Anyone may read public service information without an account, including the landing page, Pricing, FAQ, Contact, Terms, Privacy, item-eligibility information, and other policies.

### 2.2 Initial guest request

No account is required to submit an initial request. A V1 request collects:

- one exact item/listing URL;
- destination country;
- email address;
- requested quantity for that same listing;
- an optional note or question.

The initial submission:

- does not authorize a purchase;
- does not reserve a fixed-price listing;
- does not reserve an auction;
- does not create a payment obligation;
- does not guarantee eligibility, availability, price, or acceptance.

Destination country is required for reasonable carrier, import, and restricted-item screening.

### 2.3 Response and quote access

No account is required merely to read ShogunShip's response. The response may be delivered by email and/or a secure read-only guest link.

A guest response may show:

- the submitted listing and request;
- ShogunShip's review response;
- eligibility or availability information;
- the current quote breakdown;
- quote expiration;
- relevant notes, assumptions, and warnings;
- an option to create an account and proceed.

The response and quote remain non-binding until the customer completes the required authenticated authorization and payment.

### 2.4 Account boundary

An account becomes mandatory only when the customer asks ShogunShip to take a financial, contractual, property-related, customs, shipping, or otherwise binding action.

Authenticated customer confirmation is required for at least:

- approving a purchase quote;
- making or funding a payment;
- authorizing a fixed-price purchase;
- authorizing an auction or changing a maximum bid;
- creating a preorder obligation;
- requesting paid Condition Photos;
- requesting paid consolidation or repacking;
- authorizing disposal of seller shipping packaging;
- approving an international shipment;
- providing or changing material customs or shipping instructions;
- changing a final destination or address;
- any other irreversible or materially significant instruction.

When a guest creates and verifies an account, the existing request must become associated with that account without requiring re-entry of the URL, destination, note, quote, or other collected information.

### 2.5 Dashboard role

The authenticated customer dashboard becomes the permanent operational record for applicable:

- requests and quote versions;
- authorizations;
- fixed-price purchases, auctions, and preorders;
- payments and refunds;
- merchant orders;
- physical parcels;
- arrival dates, storage deadlines, and charges;
- Condition Photos;
- consolidation and repacking;
- international shipping approvals and tracking;
- claims and disputes;
- important customer and staff communications.

Returning customers should normally submit and manage future requests through the dashboard, while the public guest request path remains available.

## 3. Communication and authorization

Email is for communication, not binding authorization. It may be used for questions, explanations, support, notifications, non-binding information, and requests that staff prepare a proposed change.

An email such as "buy it," "raise my maximum," "discard the boxes," or "ship it" does not make that action effective. Staff may prepare the requested action, but the customer must authenticate and approve a screen showing the exact current action and consequences.

Staff entry never substitutes for customer authorization. Any future emergency manual process must use strong identity verification, remain exceptional, and create an auditable record. The precise emergency process is TBD.

## 4. Request and quote model

### 4.1 One listing per request

One ShogunShip request corresponds to one exact marketplace listing. Different listings require separate request records even when they are the same product, come from the same seller, or are submitted together.

Each request retains its own:

- marketplace/platform and unique listing identifier where available;
- listing and requested quantity;
- review and eligibility result;
- quote and quote-version history;
- expiration;
- authorization;
- fees and financial allocations;
- purchase outcome;
- refund allocation;
- evidence and audit history.

A request may specify more than one unit only when those units come from the same listing. Available stock, seller/platform limits, eligibility, and ShogunShip's ability to acquire the requested quantity still apply. Partial-quantity authorization behavior is TBD; ShogunShip must not silently purchase a different quantity unless the customer's authorization expressly permits it.

### 4.2 Grouping without merging

Several independent requests may be grouped visually or paid through one checkout when appropriate. Grouping is a convenience layer only. Every request keeps independent item amounts, fees, payment allocation, refund allocation, status, and audit history.

Fixed-price, auction, and preorder requests remain distinct because their authorization and fulfilment lifecycles differ.

### 4.3 Initial quote

The first-stage quote contains the amounts currently needed to acquire the item:

- item price;
- known Japanese domestic shipping;
- service fee;
- selected optional-service amounts that apply before purchase.

International shipping is not guaranteed at this stage. ShogunShip may provide a practical estimate or range, clearly labelled non-binding, but actual international shipping is a later amount based on the final shipment.

The quote is not purchase authorization. Quote validity is TBD.

## 5. Currency and payments

### 5.1 Canonical currency

JPY is the sole canonical V1 transaction and accounting currency. This applies to item prices, domestic shipping, fees, auction deposits, preorders, Condition Photos, consolidation, repacking, storage, international shipping, refunds, charges, and credits.

V1 does not create binding USD, EUR, GBP, BRL, or other foreign-currency obligations. An approximate local-currency display may be shown for convenience, but:

- JPY remains authoritative;
- the conversion is an estimate;
- ShogunShip does not guarantee the displayed rate;
- ShogunShip does not guarantee the issuer/provider rate or fees;
- ShogunShip does not absorb ordinary exchange-rate movements.

Refund obligations are calculated in JPY. A customer's resulting local-currency value may differ because of issuer/provider conversion and fees.

Financial records must preserve the authoritative JPY amount and, where provided, relevant processor currency, amount, conversion, fee, refund, and transaction identifiers.

### 5.2 Two-stage payment

V1 uses two principal payment stages:

1. **Acquisition stage:** item price, known domestic shipping, service fee, and applicable selected services.
2. **International-shipping stage:** actual approved international shipping and any charges applicable after arrival and packing.

The customer approves and pays the acquisition amount before ShogunShip purchases. After arrival, storage/consolidation choices, and final packing, the customer approves and pays the international-shipping amount.

### 5.3 Payment controls

The provisional risk-controlled direction is card payment with 3D Secure and manual review for suspicious or unusually expensive transactions. The payment provider, high-value ceiling, and high-value alternative remain TBD pending provider research.

PayPal is unapproved, not permanently excluded. It must not be assumed suitable until its protections and rules are verified for proxy purchasing, staged payments, storage, consolidation, and delayed international shipment.

Customers may not pay Japanese merchants directly and use ShogunShip merely as a receiving address in V1.

## 6. Fixed-price purchase rules

Before successful merchant purchase, the customer may cancel and receive the applicable refund. Once ShogunShip successfully purchases the authorized item, buyer-remorse cancellation and refund are unavailable, subject to applicable law.

The approval must clearly identify the exact current listing, quantity, amounts, material listing information, warnings, terms, and consequences. Payment does not guarantee that the listing has been secured.

If the item becomes unavailable before ShogunShip purchases it:

- ShogunShip retains no normal service fee;
- customer funds are refunded to the original payment method, subject to verified processor mechanics;
- ShogunShip does not buy a substitute without new authorization.

If the seller later cancels or refunds, the seller-originated amount remains attributable to the affected customer purchase. Reimbursement occurs according to the actual refund received, legitimately unrecoverable disclosed costs, processor mechanics, and applicable law.

## 7. Preorders

ShogunShip may accept a preorder only when its expected release or merchant-fulfilment date is no more than 30 calendar days away when ShogunShip accepts/purchases it.

An eligible preorder that the merchant makes non-cancellable becomes non-cancellable for customer buyer's remorse after ShogunShip places it. This must be expressly disclosed before payment and authorization.

If the merchant later delays fulfilment beyond the original 30-day window, that does not retroactively invalidate the accepted preorder. Merchant delays, cancellations, product cancellations, and merchant refunds follow the seller-originated resolution model.

The parcel's 60-day storage clock begins only when the physical parcel arrives at ShogunShip.

## 8. Auctions

### 8.1 Prepaid maximum-bid model

The customer authorizes and funds a maximum bid before ShogunShip bids. ShogunShip may bid up to, but never intentionally above, that maximum without new authenticated authorization.

ShogunShip normally uses the marketplace's proxy/automatic-bidding mechanism where available and may place the authorized maximum at any reasonable operational time. It does not offer or guarantee sniping or last-second bidding.

Winning within the authorized maximum creates a binding purchase obligation. A later change of mind does not cancel a marketplace commitment.

### 8.2 Extensions and maximum changes

Automatic marketplace extensions remain covered by the existing maximum. An extension does not increase that maximum or require new approval merely because the closing time changed.

A requested maximum increase requires:

- new authenticated authorization;
- confirmed additional funds or payment authorization;
- successful processing and submission before it becomes effective.

An increase request is not guaranteed to be processed before the auction ends. A submitted bid may not be cancellable, withdrawable, or reducible.

### 8.3 No win guarantee

Acceptance, funding, or an initially competitive maximum does not guarantee a win. Other bidders, seller/platform actions, marketplace rules, outages, request timing, and operational limitations may affect the outcome. Minimum auction-request lead time is TBD.

### 8.4 Domestic shipping

Auctions using `着払い` (`chakubarai`, domestic shipping payable by the recipient on delivery) are not accepted.

An auction whose normal domestic shipping amount is calculated only after winning may be accepted. Before bidding, the customer must acknowledge that:

- domestic shipping is unknown;
- the seller/platform determines it later;
- the customer owes the actual charge;
- winning cannot be cancelled merely because the later charge is higher than expected.

Collection mechanics for that later charge remain TBD.

### 8.5 Bid funds and auction handling fee

The maximum-bid deposit is customer money reserved for the auction, not ShogunShip revenue.

- If the auction is lost, unused funds return to the original payment method.
- If won below the maximum, the unused portion returns after the final price and applicable platform charges are known.
- V1 has no reusable wallet or automatic account-credit balance.

The exact authorization, capture, refund, and processing-fee mechanics depend on the chosen provider and remain TBD.

A separately disclosed auction handling fee becomes earned and non-refundable only after ShogunShip successfully submits a valid authorized bid. It remains earned if the customer is immediately or later outbid. It is not retained if ShogunShip declines the request or no valid bid is submitted.

The fee amount and whether it replaces or supplements the normal successful-purchase service fee remain TBD.

### 8.6 One customer per exact auction

Only one ShogunShip customer may have an active authorization for an exact auction listing. The first request to complete ShogunShip acceptance and required authorization/payment receives the active slot; merely submitting a link does not reserve it.

Later requests may be told that another ShogunShip customer already has an active authorization, because the policy prevents ShogunShip customers from bidding against each other. ShogunShip must never disclose the first customer's identity, contact details, current bid, maximum bid, or other private information.

The restriction applies only to the exact listing, not the product. Another seller's separate listing for the same item remains independently eligible.

The future FAQ should explain the fairness rationale with a hypothetical such as: Customer A authorizes ¥8,000 and Customer B authorizes ¥12,000 for the same auction. Without the second ShogunShip bid, Customer A might win at ¥4,500; competing for both customers could instead push the result above Customer A's maximum and make Customer B win at ¥8,500. ShogunShip therefore accepts only one active customer authorization for an exact auction.

## 9. Same-seller domestic combination

Ordinary same-customer, same-seller domestic combined shipping is an included ShogunShip benefit, not a paid consolidation service. Where operationally safe, ShogunShip may proactively identify eligible purchases and ask the seller/platform to combine domestic shipping.

Availability and savings depend on seller/platform rules and are not guaranteed. ShogunShip must not jeopardize an existing purchase to obtain combination.

Seller-side domestic combination:

- applies only within one customer's purchases;
- never combines purchases belonging to different customers;
- does not merge the underlying request/purchase records;
- may result in one incoming physical parcel linked to several purchases;
- gives that physical parcel one arrival date and storage clock.

It is distinct from ShogunShip's paid multi-parcel consolidation after arrival.

## 10. Receiving and Condition Photos

### 10.1 Default receiving service

Included receiving is unopened outer-parcel verification:

- photograph the unopened outer/shipping parcel;
- check it for obvious external transit damage;
- compare label, sender, size, tracking/order information, and other external information with the expected order;
- record receipt and store the parcel safely.

ShogunShip does not normally open the parcel, inspect the actual item, photograph the item, authenticate it, grade it, function-test it, or guarantee the absence of hidden defects as part of default receiving.

### 10.2 Condition Photos

Condition Photos is a paid optional service. It may include:

- opening/unboxing the shipping parcel;
- visually inspecting the actual item;
- photographing the item and/or retail packaging;
- focusing on visible areas requested by the customer where practical, such as corners, scratches, labels, paint, or packaging condition.

Condition Photos is not professional authentication, grading, functional testing, or a hidden-defect guarantee unless ShogunShip later creates and explicitly defines another service.

### 10.3 Necessary opening

ShogunShip may open a parcel when reasonably necessary for safety, prohibited-item screening, customs, consolidation, damage investigation, or another operational requirement. Necessary opening does not transform default receiving into paid Condition Photos.

## 11. Parcel storage

### 11.1 Independent clocks

Every physical parcel receives its own 60-day free-storage period beginning on its recorded arrival/receipt date. A later parcel does not reset an earlier deadline. Consolidation and new arrivals cannot be used to renew free storage.

The future dashboard must show each parcel's arrival date and free-storage deadline.

Provisional reminders are:

- 30 days remaining;
- 7 days remaining;
- the final free-storage day.

The precise schedule remains adjustable.

### 11.2 Extended storage

After day 60, paid storage accrues daily rather than by whole additional months. The price is based on the dimensions of the physical package being stored, not item value, merchandise category, or subjective appearance.

The size basis is Japanese-style parcel size:

`length + width + height in centimeters`

Customer-friendly tiers such as Small, Standard, Oversized, and Special/Extra-Large must use objective numerical boundaries. Final thresholds and JPY-per-day rates are TBD pending research.

Paid storage compensates ShogunShip for occupied space and discourages indefinite storage. It does not grant an unlimited storage right.

### 11.3 Maximum storage and unclaimed property

An absolute maximum storage period is required, but its duration, notices, and lawful consequences remain TBD pending Japanese legal research.

ShogunShip must not assume that it automatically owns customer-allocated property because storage expires, fees remain unpaid, the customer stops responding, or a chargeback occurs. Any right to retain, dispose of, donate, return, sell, transfer, or apply proceeds against a debt requires validated legal authority and final Terms.

## 12. Consolidation and repacking

### 12.1 Multi-parcel consolidation

Multi-parcel consolidation is a separately charged optional service. The customer selects the parcels and expressly authorizes the work.

The customer must choose one mutually exclusive seller-shipping-packaging preference:

1. **Remove unnecessary seller shipping packaging.** ShogunShip may remove unnecessary seller outer boxes and packing material where practical before combining the items.
2. **Keep seller shipping packaging.** ShogunShip retains individual seller shipping boxes/packaging where practical inside the consolidated shipment.

Keeping seller shipping packaging may significantly increase final size, weight, and cost. Removing it may reduce size or weight but never guarantees savings. Safe shipment takes priority.

"Seller shipping packaging" does not mean original retail, manufacturer, collectible, or product packaging. Product packaging and accessories are preserved by default unless a separate, clear, authenticated instruction authorizes otherwise.

One basic fee may cover a reasonable number of compatible parcels. Complex, excessive, fragile, unusual, or oversized work may receive a separate quote. Amounts and thresholds are TBD.

### 12.2 Single-parcel package reduction

Single-parcel package reduction/repacking is separate from consolidation and is a paid optional service. The customer chooses between:

- forwarding/packing the parcel as received without optional reduction; or
- opening it, removing unnecessary seller shipping material where practical, and repacking safely.

The single-parcel fee should logically be lower than standard multi-parcel consolidation, but all prices remain TBD. Savings are not guaranteed.

### 12.3 Storage after consolidation

Consolidation normally occurs as final shipping preparation, but ShogunShip may permit early consolidation at its discretion to reduce physical storage or for another practical reason.

Before authorization, the system shows:

- selected parcels;
- each parcel's storage deadline;
- accrued storage charges;
- packaging preference;
- requested optional services;
- the resulting post-consolidation deadline.

The consolidated package inherits the earliest free-storage deadline among the selected parcels and receives no new free period. If that deadline has already passed, storage continues based on the consolidated package's new physical dimensions.

Time caused solely by ShogunShip's processing delay must not create extra customer storage charges. The exact accounting method is TBD.

## 13. International shipping

### 13.1 Final shipping quote and approval

After final packing, ShogunShip records the package weight and dimensions and presents available international shipping methods and actual prices.

Before dispatch, the customer explicitly approves:

- carrier and service;
- shipping price;
- destination;
- estimated transit time;
- tracking level;
- customs declared value;
- available carrier insurance/compensation amount;
- known coverage limits, exclusions, and shortfalls;
- other material conditions.

The post-quote selection/payment deadline is TBD.

### 13.2 Tracking

Every ShogunShip international shipment must use a service with end-to-end tracking. V1 offers no untracked international shipping exception.

### 13.3 Carrier-backed coverage

Insurance or compensation is provided by the selected carrier or insurer, not by ShogunShip as self-insurance. ShogunShip does not guarantee that every item can be insured for its full purchase or collectible value.

Coverage available for a shipping method, including known maximums, exclusions, and any shortfall against declared value, must be disclosed before approval. The customer expressly accepts uncovered value.

ShogunShip assists with legitimate claims and supplies available purchase, packing, shipment, tracking, and other evidence. Compensation is normally passed to the customer only after and to the extent ShogunShip receives it from the carrier/insurer.

Service fees, shipping charges, duties/taxes, consequential loss, appreciation, hypothetical resale value, and other uncovered amounts are not automatically reimbursed, subject to applicable law. Customers may be required to retain the box, packing materials, damaged item, and other evidence until a damage claim is resolved.

## 14. Customs and importer responsibility

The customer/recipient is normally the importer of record and is responsible for destination-country import eligibility, duties, taxes, permits, licences, importer/tax identifiers, and other destination requirements.

ShogunShip still performs reasonable screening and may refuse purchase or shipment when legality, safety, documentation, carrier acceptance, Japanese export rules, or destination eligibility is uncertain. It does not provide definitive legal, customs, tariff, or tax advice and cannot guarantee admission by a customs authority.

ShogunShip provides truthful and reasonably accurate customs information based on available transaction records, including description, quantity, value, and origin where known or required. It does not intentionally underdeclare merchandise or falsely mark customer purchases as gifts. It does not guarantee a tariff/HS classification or tax result.

Recipient-paid duties and taxes are the default. Customs duties, import VAT/GST/sales tax, brokerage, inspection, quarantine, permit, destination storage, and similar charges are excluded unless expressly stated otherwise.

DDP/prepaid-duty shipping may be supported later only where a supported service reliably provides it. The customer must always know which duty model applies before approval.

Customer-caused customs delays, returns, storage, disposal, or other costs are normally the customer's responsibility, subject to applicable law. A returned international parcel enters custody only after it safely returns and ShogunShip accepts it; it receives no new 60-day period. Detailed returned-parcel storage treatment is TBD.

## 15. Item eligibility

V1 policies use three categories:

- **Generally Accepted:** ordinary lawful, non-regulated collectibles and merchandise, subject to eligibility screening.
- **Manual Review:** items requiring destination, carrier, legal, safety, rights, size, value, or other review.
- **Not Accepted:** items ShogunShip does not purchase or ship under current policy.

For the foreseeable operating model, not merely as a short launch limitation, ShogunShip does not accept:

- perfume;
- alcohol;
- food;
- weapons and realistic replica weapons;
- similarly regulated or high-compliance categories unless ShogunShip deliberately changes policy after legal, carrier, licensing, insurance, and operational research.

Adult-oriented status alone does not prohibit an otherwise eligible item. Adult goods remain subject to ordinary legality, carrier, destination, and other restrictions.

Customers must not conceal contents or send unsolicited parcels. If an unexpected prohibited item arrives, ShogunShip may isolate it and require a lawful return, disposal, or other permitted resolution at the customer's cost, subject to applicable law.

The complete supported/restricted list remains TBD and may evolve.

## 16. Guest links and security boundary

A guest response/quote link must use a long, unguessable token rather than a sequential request identifier as authorization. It must be:

- read-only;
- scoped to one request;
- revocable and expirable;
- incapable of authorizing payment or another binding action.

Possession of the guest link does not constitute customer authorization. Exact token technology and expiry are TBD.

## 17. Staff accounts, roles, and audit

Each founder or staff member has an individual staff account. Shared administrator credentials are prohibited. Staff identity remains distinct from customer identity, and strong staff authentication with mandatory MFA is required. Exact authentication technology is TBD.

V1 supports at least:

- **Owner/Admin:** all operational functions plus staff/access management, role management, pricing/configuration, refunds, unrestricted financial adjustments, and other sensitive administration.
- **Operator:** routine requests, quotes, purchases, authorized auction operations, receiving, photos, measurements, storage, consolidation, repacking, and shipping preparation, without unrestricted staff or financial-administration powers.

Both founders may initially hold Owner/Admin access.

Material operational, financial, security, customer-property, and state-changing actions create an audit record containing the acting staff account, timestamp, affected entity, action, relevant previous/new values, and reason where required.

Operational, financial, authorization, and audit records should use revisions, reversals, adjustments, or status changes rather than silent destructive replacement. Retention remains subject to legal privacy and deletion duties.

Staff must not silently impersonate customers. Any future view-as-customer capability must be explicit, visibly indicated, narrowly permissioned, audited, and incapable of disguising staff actions as customer actions.

The architecture must support later second approval for sensitive or high-value actions. Thresholds and covered actions are TBD.

## 18. Evidence and media

### 18.1 Evidence principle

ShogunShip preserves sufficient, risk-proportionate evidence to establish:

- what the customer requested;
- what ShogunShip reviewed;
- what the customer authorized;
- what ShogunShip purchased;
- what arrived;
- what paid services were performed;
- how the item was prepared and shipped;
- what is needed for accounting, fraud, disputes, claims, and legal obligations.

ShogunShip does not indiscriminately archive full marketplace sites or every full-resolution image for casual inquiries. A listing snapshot is a logical evidence record, not necessarily a full-page screenshot.

### 18.2 Guest and quote evidence

Guest requests use minimal structured storage: marketplace, listing ID, URL, title, seller where appropriate, price, quantity, condition, domestic shipping, timestamp, note, and other material review data.

At quote stage, preserve the structured listing and quote/version information plus one representative image where useful, its source reference, and review timestamp. Guest inquiries that do not proceed should not accumulate unnecessary media indefinitely.

### 18.3 Binding authorization evidence

Before binding authorization, the customer must be shown the material current listing state, including materially relevant listing images available at that time.

At authorization, preserve independent, storage-efficient evidence copies of the material images actually presented. Marketplace URLs may support display but are not sufficient as sole long-term evidence because listings or images may change or disappear.

Evidence copies may use appropriate resizing, compression, formats, and maximum dimensions while remaining clear enough to establish what the customer authorized. Source URLs remain recorded where available.

The immutable authorization snapshot includes the exact listing, listing ID and URL, title, seller, quantity, price, condition, disclosures, domestic shipping, material images, quote version, amounts/fees, warnings, terms version, authenticated action, timestamp, and relevant audit data.

If material listing information changes between review and authorization, the earlier review must not silently stand in for the changed listing. Re-review and change detection details are TBD.

### 18.4 Operational evidence

Separately classified evidence may include merchant confirmations/receipts, domestic tracking, unopened arrival photos, paid Condition Photos, consolidation/repacking evidence, measurements, final packing evidence, shipping labels, customs documents, international tracking, carrier-claim evidence, and payment/refund records.

Arrival photos remain distinct from paid Condition Photos.

For ShogunShip-created photos, preserve the appropriate original where necessary. Thumbnails and display derivatives remain linked to their source and do not silently replace an original that must be retained. Marketplace authorization images may intentionally be optimized evidence copies rather than maximum-resolution originals.

### 18.5 Access, correction, and retention

ShogunShip-controlled evidence lives in private storage. Customer access uses authenticated authorization or scoped, short-lived signed access where appropriate. Guest links expose only evidence appropriate to that request.

Identity/import documents, addresses, shipping labels, payment information, and other personal data receive stricter access controls than ordinary item photos. Ownership checks must prevent identifier manipulation from exposing another customer's files.

Evidence records retain appropriate type, related entity, source/uploader, timestamp, source URL, filename/type where relevant, version/status, supersession/correction status, and access classification.

Erroneous evidence may be marked corrected, superseded, or replaced without silently erasing relevant history.

Blanket indefinite retention is not a V1 rule. Retention and deletion must account for Japanese privacy law, accounting/tax duties, chargeback windows, carrier claims, fraud prevention, contractual claims, account closure, legitimate operational need, and storage cost. Exact periods and implementation remain TBD.

## 19. Customer allocation, custody, and restricted states

After successful acquisition, the purchase/item is allocated exclusively to the authorizing customer. ShogunShip cannot substitute it, allocate it to another customer, sell it merely because it holds it, or treat it as ordinary inventory.

The architecture must distinguish at least:

- customer allocation;
- merchant/platform-facing purchaser;
- physical custody and location;
- purchase and payment status;
- storage and service status;
- dispute/chargeback status;
- shipment eligibility and status;
- refund/claim status;
- legal title where later validated.

A payment dispute or chargeback places the affected purchase/item into a restricted state. ShogunShip may pause optional work or shipment where legally permitted, preserve evidence, and participate in the dispute process. Opening a dispute does not make the item ShogunShip inventory.

ShogunShip may need to hold an item while legitimate charges remain unpaid, required information is missing, a dispute is active, or eligibility is unresolved. The exact legal rights to retain possession require Japanese validation.

## 20. Seller returns and unsupported property movements

Customer-requested discretionary returns are not a standard V1 service. ShogunShip may coordinate a seller/platform return when permitted and necessary for a legitimate remedy, including a wrong item, accepted material-misrepresentation or damage claim, seller cancellation, or platform-approved return. Acceptance is never guaranteed.

V1 does not promise:

- general domestic forwarding to arbitrary Japanese addresses;
- local customer pickup;
- transfer to another proxy or forwarder;
- customer-directed resale of stored items.

Any future support would require separate fraud, identity, tax, custody, legal, and operational design.

## 21. Matters intentionally unresolved

Prices, legal conclusions, provider behavior, exact retention, carriers, authentication technology, infrastructure providers, and other research-dependent details are not defined here. See [RESEARCH_TBD.md](./RESEARCH_TBD.md).

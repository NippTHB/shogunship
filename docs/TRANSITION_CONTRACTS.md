# ShogunShip V1 Transition Contracts

## Purpose

This document formalizes business-transition requirements that later code must enforce. It is not a database enum, API, or complete legal procedure. Current-state projections may be implemented efficiently, but authoritative records and material history described here must remain traceable.

See [LIFECYCLES.md](./LIFECYCLES.md) for lifecycle overviews, [OPERATING_MODEL.md](./OPERATING_MODEL.md) for business authority, [DOMAIN_MODEL.md](./DOMAIN_MODEL.md) for concepts, [AUTHORIZATION_CONTRACTS.md](./AUTHORIZATION_CONTRACTS.md) for consent, and [RESEARCH_TBD.md](./RESEARCH_TBD.md) for open decisions.

## Common transition rules

Every material transition identifies:

- actor: Guest, authenticated Customer, Staff identity, background process, or verified external provider;
- subject and expected current version/state;
- preconditions and blocking Holds;
- authoritative record(s) created;
- current-state projection changed;
- financial, evidence, and notification effects;
- Audit Event where the action is material;
- idempotency key or equivalent deduplication identity for retries/external events.

A failed external call must not be assumed successful or failed when the result is ambiguous. Such operations enter reconciliation. Notifications normally occur after the authoritative transition commits and do not determine whether it succeeded.

## 1. Guest Request

**Start:** unauthenticated visitor has one exact Listing URL, destination country, email, quantity, and optional note.

**Submit request**

- **Actor:** Guest.
- **Preconditions:** valid minimally required data; abuse controls pass; quantity refers to the same Listing.
- **Creates:** Request, Guest Submission Identity/context, initial Listing reference, submission evidence, Audit/security metadata as appropriate.
- **State effect:** Request becomes submitted/awaiting review.
- **Financial/Hold effect:** none; no obligation, reservation, or Authorization is created.
- **Evidence/audit:** preserve submitted values and time; log rejection/rate-limit security events where appropriate.
- **Background:** acknowledgement and Staff work notification may be queued.
- **Failure/idempotency:** repeat submission protection must not accidentally create binding state; safe duplicates may remain separate Requests unless explicitly deduplicated operationally.

**Review outcomes:** Staff may request information, decline, or proceed to Quote preparation. Every outcome records Staff actor, reason/category, and relevant evidence. Decline creates no retained normal service fee.

## 2. Quote and Quote Version

**Start:** Request has sufficient current review evidence.

**Publish Quote Version**

- **Actor:** authorized Staff.
- **Preconditions:** Listing/review current enough under the eventual material-change policy; line items in JPY; assumptions, warnings, and any non-binding international-shipping estimate identified.
- **Creates:** immutable Quote Version, referenced Listing Snapshot/evidence, Audit Event.
- **State effect:** current Quote points to the new published version; older versions remain historical.
- **Financial effect:** no binding obligation or Payment solely from publication.
- **Background:** Guest/Customer notification and Guest Link issuance/rotation as applicable.
- **Failure/idempotency:** a retry must not publish duplicate versions; partial evidence failure prevents publication or produces an explicit incomplete draft, never an accepted version.

**Revise/expire:** material change creates a new version; expiry marks actionability, not deletion. Exact Quote validity is TBD.

## 3. Guest to Customer Request claim

**Start:** a Guest Request exists and a person chooses to proceed.

**Claim request**

- **Actor:** authenticated, verified Customer.
- **Preconditions:** secure proof of control of the Request contact or approved claim challenge; Request not claimed by another Customer; relevant Guest Link/request token valid or recovered securely.
- **Creates:** Customer–Request association and claim Audit Event; original guest submission remains unchanged.
- **State effect:** Request becomes manageable in the Customer dashboard; Guest access is revoked or remains narrowly read-only according to the TBD link policy.
- **Financial effect:** none.
- **Evidence/security:** preserve verification and claim context without storing unnecessary secrets.
- **Background:** notify relevant contact of claim/security event.
- **Failure/idempotency:** concurrent claims require one transactional winner; repeated successful claim by the same Customer is idempotent.

Claiming does not authorize purchase. Material Listing/Quote change may require re-review before the next step.

## 4. Fixed-price purchase

**Authorize/fund attempt**

- **Actor:** authenticated Customer, followed by verified payment processing.
- **Preconditions:** current Quote Version, required Authorization Snapshot, no blocking Hold, accepted terms, exact quantity, confirmed applicable Payment allocation.
- **Creates:** Authorization, acquisition obligation/allocation, acquisition-attempt readiness record.
- **State effect:** awaiting Staff purchase attempt.

**Cancel before successful merchant purchase**

- **Actor:** authenticated Customer. Staff may explain the consequences or assist the Customer in reaching the authenticated action, but cannot create or fabricate Customer cancellation authorization.
- **Preconditions:** the fixed-price Request has been authorized/funded as required, and no authoritative successful merchant purchase has been recorded. If no merchant purchase attempt is in progress or externally ambiguous, the cancellation may proceed normally.
- **Creates:** one authenticated Customer cancellation record, cancellation evidence, Refund basis, applicable Refund and Refund Allocations, and an Audit Event. The original Authorization, Financial Obligation, Payment, and Payment Allocations remain historical and are not deleted or rewritten.
- **State effect:** prevents a new merchant purchase attempt from beginning and closes/cancels the pending acquisition commitment as appropriate. The Request remains historically traceable as authorized/funded and then cancelled before purchase.
- **Financial effect:** the refundable JPY amount is determined from the affected Request-level allocations and returned through the approved Refund path. Processor-fee treatment remains TBD.
- **Hold/restriction effect:** when no purchase attempt is ambiguous, no reconciliation Hold is required beyond preventing conflicting acquisition work during the cancellation transition.
- **Evidence/audit:** preserve Customer identity, authenticated cancellation action, timestamp, affected Request/acquisition, financial consequence, resulting Refund identifiers/status, and Staff assistance or notes where material.
- **Background:** queue provider-neutral Refund processing and Customer/Staff notifications after the authoritative cancellation commits; later provider events update the existing Refund rather than creating another one.
- **Failure/idempotency:** repeated submissions or retries resolve to the same cancellation outcome and must not create duplicate cancellation records, Refunds, Refund Allocations, or contradictory acquisition states.

**Cancellation racing with an in-progress or ambiguous merchant attempt**

- **Trigger:** the authenticated Customer requests cancellation after Staff/system has begun the merchant attempt but before merchant success or failure is authoritative.
- **Atomicity/concurrency invariant:** cancellation/refund finalization and successful merchant-purchase finalization are mutually exclusive outcomes for the same acquisition commitment. The system must not finalize both, regardless of request ordering, retries, or concurrent Staff/provider activity.
- **Immediate effect:** block further conflicting acquisition actions and place the acquisition under a scoped pending-reconciliation restriction while preserving the cancellation request and in-progress attempt evidence.
- **Resolution if the merchant purchase did not succeed:** make the Customer cancellation effective, close the pending acquisition, calculate the Request-attributable refundable JPY amount, and complete the normal Refund/allocation path.
- **Resolution if the merchant purchase succeeded before cancellation could safely take effect:** preserve the successful Purchase, Customer Allocation, Merchant Order/line, Payment history, and evidence; record that the pre-purchase cancellation could not take effect; do not issue the pre-purchase cancellation Refund. Buyer-remorse cancellation is unavailable after successful purchase, subject to applicable law and seller-originated cancellation/refund rules.
- **Evidence/audit:** preserve the authenticated cancellation timestamp, purchase-attempt timeline, authoritative merchant outcome, reconciliation decision, acting Staff/system identities, financial result, and release of the reconciliation restriction.
- **Failure/idempotency:** reconciliation is uniquely associated with the acquisition attempt. Duplicate merchant callbacks, cancellation retries, or reconciliation jobs cannot produce a second Purchase, cancellation, Refund, or Refund Allocation.

**Record successful purchase**

- **Actor:** authorized Staff.
- **Preconditions:** attempt matches exact authorized Listing/quantity and amount limits; merchant success evidence exists.
- **Creates:** Purchase, Customer Allocation, Merchant Order/line, receipt/evidence, Audit Event, fee-earning record where policy applies.
- **State effect:** acquisition successful/awaiting merchant fulfilment.
- **Financial effect:** allocated acquisition funds become applied according to line purpose; buyer-remorse cancellation is unavailable after success, subject to law.
- **Background:** Customer notification and fulfilment tracking work.
- **Failure/idempotency:** external ambiguity enters reconciliation; merchant reference prevents duplicate purchase recording.

**Unavailable/failed:** records failure reason, creates applicable Refund basis, retains no normal service fee, and never substitutes another Listing without new Authorization.

## 5. Preorder

**Place qualifying Preorder**

- **Actor:** authorized Staff after Customer Authorization and Payment.
- **Preconditions:** expected release/fulfilment was no more than 30 calendar days away when accepted; non-cancellability and delay warnings were shown; no blocking Hold.
- **Creates:** Purchase, Preorder Commitment containing acceptance-time expected date, Merchant Order, Customer Allocation, evidence, Audit Event.
- **State effect:** awaiting expected release/merchant fulfilment.
- **Financial effect:** follows successful acquisition treatment.
- **Background:** release/delay monitoring and Customer notifications.
- **Failure/idempotency:** merchant reference prevents duplicate placement; ambiguous placement is reconciled before retry.

Later merchant delay updates fulfilment history but does not invalidate acceptance. Merchant cancellation follows seller-originated resolution. Storage starts only at physical Arrival. Extended-delay resolution remains TBD.

## 6. Auction

**Accept and reserve exact Auction**

- **Actor:** Customer Authorization plus ShogunShip acceptance/system transaction.
- **Preconditions:** exact auction identity; eligibility; not `着払い`; required maximum/known costs disclosed; Authorization and required funds confirmed; no existing active ShogunShip Customer reservation.
- **Creates:** Auction aggregate, Auction Authorization, exact-listing reservation, Customer Funds Lot, obligations/allocations, evidence, Audit Event.
- **State effect:** authorized/funded and awaiting bid submission.
- **Financial effect:** Bid Deposit remains Customer money; handling fee remains conditional.
- **Background:** operational timing alerts.
- **Failure/idempotency:** exact-auction reservation must be concurrency-safe; a losing concurrent request is declined with the approved privacy-safe reason.

Auction extension changes observed closing time, not authorized maximum. Won, lost/outbid, platform cancellation, and bid-not-submitted outcomes remain explicit and auditable.

## 7. Auction Maximum Increase

- **Actor:** authenticated Customer authorizes; Staff/system submits.
- **Preconditions:** Auction active; new maximum exceeds current authorized maximum; new proposal shows incremental funds/fees and timing warning; additional funds confirmed; no blocking Hold.
- **Creates:** new immutable Auction Authorization and Snapshot, financial records, later Bid Submission attempt.
- **State effect:** requested maximum may be pending; marketplace-effective maximum changes only after successful submission.
- **Financial effect:** additional funds remain scoped Customer Funds.
- **Evidence/audit:** preserve old and new maximum, confirmation, submission result, actors, and times.
- **Background:** time-sensitive Staff alert.
- **Failure/idempotency:** request alone is not effective; failed/late submission leaves the prior effective maximum unchanged and unused incremental funds refundable.

## 8. Bid Submission

- **Actor:** authorized Staff or approved operational executor acting within Customer Authorization.
- **Preconditions:** active Auction reservation, effective Authorization, sufficient funds, marketplace still open/available, submitted amount not above maximum.
- **Creates:** immutable Bid Submission with marketplace response/reference and evidence; Audit Event.
- **State effect:** validly submitted, immediately outbid, leading, or submission failed/ambiguous.
- **Financial effect:** a valid authorized bid creates the Fee-Earning Event for the Auction Handling Fee; invalid/no submission does not.
- **Background:** outcome monitoring/notification.
- **Failure/idempotency:** never blindly retry an ambiguous bid; reconcile marketplace state first. No sniping or win guarantee.

## 9. Payment

**Initiate/confirm Payment**

- **Actor:** authenticated Customer initiates; verified provider event confirms.
- **Preconditions:** valid Checkout/obligations and current Authorization; fraud/security controls pass.
- **Creates:** Payment attempt, Processor Transaction Record, verified provider events, Audit Event where material.
- **State effect:** processing, confirmed, failed, or under review.
- **Financial effect:** confirmation makes funds available for allocation; it does not by itself earn every fee or guarantee acquisition.
- **Hold effect:** suspicious/ambiguous outcomes may create a scoped Hold.
- **Failure/idempotency:** stable provider/idempotency identifiers prevent double collection; webhook signature/replay checks required; ambiguous outcomes reconcile before retry.

## 10. Payment Allocation

- **Actor:** system under defined allocation plan; authorized Staff only for audited exception.
- **Preconditions:** confirmed usable Payment, valid independent obligations, allocation total within available amount.
- **Creates:** append-oriented Payment Allocations.
- **State effect:** obligations become partially/fully satisfied as derived from allocations.
- **Financial effect:** preserves Request/service attribution and separates Customer Funds from earned fee lines.
- **Evidence/audit:** grouped allocation plan and material manual changes are audited.
- **Failure/idempotency:** allocation occurs transactionally; retries cannot exceed Payment value or duplicate an allocation.

## 11. Refund

- **Actor:** authorized Staff/system under policy; provider confirms completion.
- **Preconditions:** documented refund basis, JPY amount, refundable original allocation, required approval, and original payment route capability.
- **Creates:** Refund, Refund Allocations, Processor Transaction Records, financial/audit history.
- **State effect:** processing, completed, failed, or reconciliation required.
- **Financial effect:** reduces exact original allocations; no V1 wallet credit.
- **Background:** provider webhook handling and Customer notification.
- **Failure/idempotency:** stable refund identifier; duplicate callbacks do not duplicate refund; provider failure remains visible for reconciliation.

Processing-fee treatment and provider mechanics remain TBD.

## 12. Merchant Order

- **Actor:** authorized Staff records merchant-facing transaction and updates verified fulfilment facts.
- **Preconditions:** successful acquisition or qualifying Preorder/Auction win; exact Purchase allocation known.
- **Creates:** Merchant Order, lines, external references, evidence, Audit Events.
- **State effect:** confirmed, awaiting fulfilment, delayed, domestically shipped, cancelled, information/action required, or delivered.
- **Financial effect:** platform charges/refunds remain line-attributable.
- **Failure/idempotency:** external order reference and line matching prevent duplicates; corrections preserve prior values.

## 13. Physical Parcel Arrival

- **Actor:** authorized Staff.
- **Preconditions:** a discrete parcel is physically received; unexpected parcels enter identification/restriction handling.
- **Creates:** Physical Parcel if not expected-recorded, Parcel Contents, immutable Arrival Record, Arrival Photos, measurements, custody start, Storage Entitlement, Audit Event.
- **State effect:** in custody/stored after external verification or placed on a scoped Hold.
- **Financial effect:** starts independent 60-day free storage; no paid Condition Photos fee from necessary/default receiving.
- **Evidence:** unopened outer parcel, external damage, label/sender/tracking/order comparison.
- **Background:** Customer notification and storage reminders.
- **Failure/idempotency:** one physical receipt must not create duplicate Arrivals; content uncertainty is recorded, not guessed.

## 14. Free to Extended Storage

- **Actor:** scheduled system calculation.
- **Preconditions:** parcel/package remains in custody beyond its authoritative deadline; policy/rate version and chargeable physical dimensions are known; exclusions applied.
- **Creates:** daily Storage Accrual or reproducible chargeable interval.
- **State effect:** Extended Storage accruing.
- **Financial effect:** daily JPY obligation under future approved tiers/rates.
- **Background:** reminders and Staff visibility.
- **Failure/idempotency:** calculation is deterministic/idempotent per subject/day/policy; missed jobs backfill without double charge.

Rates, thresholds, and absolute maximum remain TBD. Expiry never grants ownership/disposal rights.

## 15. Storage Adjustment

- **Actor:** appropriately permitted Staff; future dual approval where policy requires.
- **Preconditions:** identified error, waiver, or ShogunShip-caused non-chargeable interval with reason.
- **Creates:** append-oriented Storage Adjustment and Audit Event.
- **State/financial effect:** derived storage balance changes; original accrual remains historical.
- **Evidence:** supporting processing interval or correction reason.
- **Failure/idempotency:** repeat adjustment uses stable identity and cannot be applied twice.

## 16. Condition Photos

- **Actor:** authenticated Customer authorizes/pays; Operator performs.
- **Preconditions:** eligible parcel, scoped proposal, applicable warnings, no blocking Hold.
- **Creates:** Service Request, Authorization/Snapshot, obligation/allocation, work records, original photos/derivatives, Audit Events.
- **State effect:** awaiting work → in progress → evidence available/completed, or clarification/impractical/revised proposal.
- **Financial effect:** paid optional service; revised scope requires new proposal/Authorization where material.
- **Invariant:** visual inspection only; not authentication, grading, testing, or hidden-defect guarantee.
- **Failure/idempotency:** work completion is not inferred from upload alone; duplicate uploads remain linked/superseded rather than overwriting originals.

## 17. Same-Seller Domestic Combination

- **Actor:** Staff may request it proactively or after Customer discussion; seller/platform decides.
- **Preconditions:** same Customer, same seller/platform, eligible timing/transactions, and no risk to existing purchases.
- **Creates:** combination attempt/result and Merchant Order/fulfilment evidence; Audit Event where material.
- **State effect:** merchant may ship several Purchases in one Physical Parcel.
- **Financial effect:** no extra ShogunShip service charge; seller savings/charges are allocated to affected Purchases.
- **Failure:** availability and savings are not guaranteed; failed combination does not alter independent Purchases.

## 18. Consolidation

- **Actor:** authenticated Customer authorizes/pays; Operator performs.
- **Preconditions:** eligible selected parcels; deadlines, accrued storage, service scope, packaging preference, product-packaging distinction, resulting earliest deadline, and price presented; no blocking Hold.
- **Creates:** Service Request/Consolidation Job, Authorization/Snapshot, obligation/allocation, lineage, evidence, resulting Outbound Package, final measurements, Audit Events.
- **State effect:** source parcels become consumed/closed physical units after completion; history remains; result awaits shipping or remains stored.
- **Financial/storage effect:** paid service; no new free period; result inherits earliest selected deadline; overdue result continues under its new size; ShogunShip-only delay excluded.
- **Failure/idempotency:** do not physically repeat completed work; partial/complex work enters exception/revised-scope handling.

Early Consolidation is discretionary and follows the same no-reset rule.

## 19. Single-parcel Repacking / Package Reduction

- **Actor:** authenticated Customer authorizes/pays; Operator performs.
- **Preconditions:** one eligible parcel; scope, price, safe-packing priority, product-packaging protection, and no-savings guarantee shown.
- **Creates:** Repacking Job, Authorization/Snapshot, financial records, lineage, evidence, resulting Outbound Package, Audit Events.
- **State/storage effect:** source parcel closes as a physical unit; result retains applicable deadline rather than gaining free storage.
- **Failure/idempotency:** partial or unexpectedly complex work pauses for a revised proposal when material.

## 20. Outbound Package Preparation

- **Actor:** Operator.
- **Preconditions:** selected contents authorized and eligible; all required services complete; Holds evaluated.
- **Creates:** Outbound Package, Package Contents/Lineage, versioned measurements, packing evidence, Audit Event.
- **State effect:** package becomes ready for shipping-option preparation or remains blocked with reason.
- **Financial effect:** applicable packing/storage lines remain attributable.
- **Failure/idempotency:** measurement corrections create revisions/audit; package identity is not duplicated by retry.

## 21. International Shipping Quote

- **Actor:** authorized Staff/system prepares; Staff publishes.
- **Preconditions:** final package measurements, destination, customs inputs, supported tracked options, prices, coverage limits/exclusions, and duty model available.
- **Creates:** immutable published Shipping Quote Version with Shipping Options and evidence.
- **State effect:** awaiting Customer selection.
- **Financial effect:** no binding shipping obligation until the approved flow creates it.
- **Background:** Customer notification and eventual expiry handling.
- **Failure/idempotency:** option retrieval failure does not fabricate a quote. Validity/payment deadline remains TBD.

## 22. Shipping Authorization

- **Actor:** authenticated Customer.
- **Preconditions:** current Shipping Quote Version; exact carrier/service, JPY price, destination, transit estimate, tracking, declared value, coverage/shortfall, duty model, customs data, and material terms presented.
- **Creates:** immutable Shipping Authorization/Snapshot and shipping obligation.
- **State effect:** awaiting Payment or eligible after confirmed allocation, subject to Holds.
- **Evidence/audit:** preserve accepted Shipping Option and customs/address versions.
- **Failure/idempotency:** repeated confirmation creates one Authorization; material changes require a new version and Authorization.

## 23. Shipment Dispatch

- **Actor:** Operator.
- **Preconditions:** Outbound Package ready; valid Shipping Authorization; shipping obligation paid; customs/address complete; end-to-end tracking available; no blocking Hold.
- **Creates:** Shipment, dispatch record, label/customs evidence, Carrier Coverage record, initial Tracking Record, Audit Event.
- **State effect:** package leaves custody/in transit as appropriate.
- **Financial effect:** applies shipping Payment allocation; provider/carrier charges recorded for reconciliation.
- **Background:** tracking updates and Customer notification.
- **Failure/idempotency:** label creation is not dispatch; ambiguous carrier acceptance reconciles before duplicate tender/label action.

## 24. Tracking and delivery

- **Actor:** verified carrier event, scheduled poll, or Staff correction with evidence.
- **Preconditions:** event maps to Shipment and passes authenticity/deduplication checks.
- **Creates:** append-oriented Tracking Record; Staff corrections are audited.
- **State effect:** current tracking projection becomes in transit, delayed, delivered, returned, or claim candidate.
- **Background:** notifications and exception alerts.
- **Failure/idempotency:** duplicate/out-of-order events do not regress truth without explicit reconciliation.

## 25. Seller cancellation / Merchant refund

- **Actor:** Staff records verified seller/platform event; provider/bank confirms funds.
- **Preconditions:** cancellation/refund evidence and affected Merchant Order Lines/Purchases identified.
- **Creates:** seller-resolution event, merchant Refund receipt record, Customer Refund basis/allocation, evidence, Audit Event.
- **State effect:** affected fulfilment/Purchase becomes cancelled or partially resolved without affecting unrelated grouped Requests.
- **Financial effect:** Customer treatment follows actual merchant refund, disclosed unrecoverable costs, processor mechanics, and law; exact calculations remain policy/provider dependent.
- **Failure/idempotency:** seller notice and actual funds receipt remain separate; do not refund twice from duplicate evidence.

## 26. Dispute / Chargeback

- **Actor:** verified provider event, Customer communication, or authorized Staff case creation.
- **Preconditions:** affected Payment/allocations and related property identified as far as possible.
- **Creates:** Dispute/Chargeback case, evidence preservation, scoped Hold(s), provider events, Audit Events.
- **State effect:** independent financial dispute lifecycle; optional work/dispatch may pause where legally permitted.
- **Financial effect:** pending reversal/reserve/fee records remain separate from final outcome.
- **Background:** evidence deadlines, Staff alerts, Customer communications.
- **Failure/idempotency:** provider case identifier deduplicates events; won/lost/partial outcome creates explicit financial resolution.

Customer Allocation remains; property does not become inventory. Post-outcome retention/property rights remain legally TBD.

## 27. Operational Hold / release

**Create Hold**

- **Actor:** authorized Staff, system rule, or verified external event.
- **Preconditions:** defined reason and target; blocking scope justified.
- **Creates:** Hold with scope, reason, source, start time, and evidence; Audit Event.
- **State effect:** normal lifecycle state remains intact while specified actions are prohibited.
- **Background:** Staff/Customer notification where appropriate.

**Release Hold**

- **Actor:** appropriately permitted Staff/system after resolution.
- **Preconditions:** release criteria met and evidence/reason recorded.
- **Creates:** release record/Audit Event; original Hold remains historical.
- **Failure/idempotency:** duplicate release has no repeated side effect; a broad Hold cannot be inferred from a narrow issue.

## 28. Carrier Claim

- **Actor:** Customer reports concern; Staff prepares/submits; carrier decides.
- **Preconditions:** Shipment and coverage identified; claim window/eligibility assessed; Customer warned to preserve merchandise and all packaging.
- **Creates:** Carrier Claim, submitted evidence, carrier correspondence/decisions, compensation receipt, Customer pass-through financial records, Audit Events.
- **State effect:** candidate → prepared → submitted → additional evidence → approved/partial/denied → closed.
- **Hold effect:** evidence/property preservation Hold where appropriate.
- **Financial effect:** ordinary pass-through occurs only after and to the extent compensation is received, subject to law.
- **Failure/idempotency:** carrier claim/reference prevents duplicate submission/payment; exact carrier procedures remain TBD.

## 29. Returned Shipment

- **Actor:** verified carrier tracking and Staff physical receipt.
- **Preconditions:** return event belongs to an existing Shipment; custody restarts only after safe physical return and acceptance.
- **Creates:** return Tracking Records, new custody/Arrival-like return record, measurements/evidence, Hold if needed, Audit Event.
- **State effect:** Shipment marked returned; returned package enters accepted custody or exception handling.
- **Storage effect:** no new 60-day Free Storage Period.
- **Financial effect:** return charges/customer responsibility depend on cause, provider, law, and future policy.
- **Failure/idempotency:** tracking notice alone does not prove physical return; one physical return receipt recorded once.

Detailed returned-parcel storage treatment is TBD.

## Legally blocked transition family

No automated transition may treat storage expiry, non-response, unpaid charges, dispute, or Chargeback as permission to take ownership, sell, dispose of, donate, transfer, or apply proceeds from Customer-allocated property.

**TBD / BLOCKED BY LEGAL POLICY:** maximum-storage enforcement, notices, lawful retention/lien rights, abandonment determination, return/disposal/donation/sale authority, and handling of proceeds. Architecture may place Holds and preserve evidence while these rules remain unresolved.

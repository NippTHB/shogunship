# ShogunShip V1 Authorization Contracts

## Purpose

This document defines the evidence and consent required when a Customer authorizes a binding action. It does not provide final legal wording, interface layouts, authentication technology, or API payloads.

Canonical business rules are in [OPERATING_MODEL.md](./OPERATING_MODEL.md). Related objects are in [DOMAIN_MODEL.md](./DOMAIN_MODEL.md), transition effects in [TRANSITION_CONTRACTS.md](./TRANSITION_CONTRACTS.md), security requirements in [SECURITY_MODEL.md](./SECURITY_MODEL.md), and unresolved decisions in [RESEARCH_TBD.md](./RESEARCH_TBD.md).

## Foundational rules

### Email is communication, not Authorization

Email may ask questions, explain options, request that Staff prepare a proposal, and deliver a link to an authenticated action. “Buy it,” “raise my bid,” “discard the box,” or “ship it” in email does not authorize that action.

### Guest Link viewing is not Authorization

A Guest Link is scoped and read-only. It may show a response or Quote but cannot approve, pay for, or trigger a binding action.

### Staff action is not Customer Authorization

Staff may prepare proposals and execute already authorized operational work. Staff cannot confirm a Customer action on the Customer's behalf. Any future emergency/manual process remains TBD and must not become an informal bypass.

### Accepted Authorization is immutable

An accepted Authorization and its Snapshot are never edited in place. If material terms change:

```text
historical proposal/Authorization retained
→ new proposal or version
→ Customer reviews changed terms
→ new authenticated Authorization
```

## General Authorization envelope

Every binding Authorization preserves, directly or through immutable references:

- authenticated Customer identity;
- authenticated session/security context and any required reauthentication/MFA result;
- action type and intended consequence;
- exact target entity and target/proposal version;
- canonical JPY amount and line items where applicable;
- exact Quote Version or other proposal version;
- exact Listing Snapshot and material evidence where applicable;
- warnings, limitations, exclusions, and irreversible consequences shown;
- applicable terms, policy, service-description, and pricing versions;
- Customer selections and affirmations;
- destination, address, customs, or importer information where applicable;
- timestamp and confirmation method;
- integrity/version identifier for the presented authorization payload;
- resulting Authorization identifier and audit context.

The snapshot must be sufficient to reconstruct the material action accepted without relying only on a live marketplace page, mutable UI text, or later policy version.

Approximate foreign-currency displays may be preserved for context, but the accepted obligation remains the displayed JPY amount.

## Material-change rule

A new Authorization is required when a change could reasonably alter the Customer's financial obligation, acquired item/quantity, irreversible property instruction, import/shipping responsibility, coverage exposure, or other material consequence.

Clerical corrections that do not change the accepted action may be recorded as attributed corrections, but must never rewrite the accepted payload. Exact material Listing-change detection remains TBD.

## 1. Fixed-price purchase approval

**Customer authorizes:** ShogunShip to attempt purchase of the exact fixed-price Listing and quantity after required Payment confirmation.

**Must present:**

- marketplace, seller where relevant, exact Listing ID/URL, title, quantity, condition/disclosures, and material images;
- current item price, known domestic shipping, service fee, and applicable selected services in JPY;
- current Quote Version and assumptions;
- notice that international shipping is a separate later charge and any early range is non-binding;
- destination/eligibility warnings;
- statement that Payment does not guarantee acquisition;
- no-substitution rule and applicable Quote validity/re-review state;
- buyer-remorse non-cancellation consequence after successful merchant purchase, subject to law.

**Snapshot:** Listing Snapshot, material images presented, Quote Version, financial lines, warnings, terms/policy versions, Customer/identity context.

**New Authorization required for:** different Listing, unauthorized quantity change, material Listing/condition/price change, changed fee/known shipping, expired/re-reviewed Quote, or other material term.

**Staff boundary:** Staff may review, quote, and attempt the exact purchase after Authorization/Payment; Staff may not substitute another Listing or authorize a different quantity.

## 2. Preorder approval

**Customer authorizes:** placement of a qualifying Preorder tied to the exact Listing and merchant terms.

**Must present:** all fixed-price information plus expected release/fulfilment date known at acceptance, confirmation that it is within the V1 30-day acceptance rule, merchant payment/cancellation terms, and consequences of merchant non-cancellability.

**Required warnings:** later merchant delay does not retroactively invalidate eligibility; buyer-remorse cancellation is unavailable after a non-cancellable merchant commitment; seller/product cancellation and refunds follow actual merchant outcome; storage begins only at physical Arrival.

**Snapshot:** acceptance-time expected date, merchant terms/evidence, Quote Version, Listing Snapshot, amounts, warnings, and terms versions.

**New Authorization required for:** material pre-placement Listing/price/quantity/merchant-term change. A later merchant delay alone does not require retroactive reauthorization.

**Staff boundary:** Staff cannot place an ineligible >30-day Preorder or accept changed material terms on the Customer's behalf.

## 3. Auction maximum authorization

**Customer authorizes:** ShogunShip to attempt bidding on one exact Auction up to, never intentionally above, the approved Maximum Bid.

**Must present:** exact Auction Listing and evidence, Maximum Bid in JPY, required Bid Deposit/funding, currently known platform/tax/fees, known domestic shipping, conditional Auction Handling Fee treatment, auction close information, and ShogunShip acceptance/reservation conditions.

**Required warnings:** winning is not guaranteed; no sniping/last-second guarantee; automatic extensions remain within the maximum; submitted bids may not be cancellable/reducible; winning creates a binding purchase; unknown post-win domestic shipping is owed when disclosed; `着払い` is not accepted; unused funds return to original payment method under policy/provider mechanics.

**Snapshot:** exact Listing/Auction ID, maximum, deposit, fees, domestic-shipping knowledge state, warnings, material evidence, terms, and Customer confirmation.

**New Authorization required for:** increased maximum, material fee/auction-term change before submission, different Auction Listing, or materially changed unknown-cost treatment.

**Staff boundary:** Staff may submit within the effective maximum at a reasonable time; Staff cannot increase it, bid for a second Customer on the reserved exact Auction, or promise execution/winning.

## 4. Auction maximum increase

**Customer authorizes:** a replacement higher Maximum Bid and additional required funding for the same active Auction.

**Must present:** exact Auction, prior effective maximum, proposed maximum, incremental funds/fees, current timing, and all newly material information.

**Required warnings:** request is not effective until funding and successful marketplace submission; ShogunShip may not process it before close; prior maximum remains operative meanwhile; submitted commitments may not be reversible.

**Snapshot:** before/after maximum, incremental financial lines, current Auction evidence, time, and warnings.

**New Authorization required for:** every further increase or other material change.

**Staff boundary:** email/request may prepare the proposal only; Staff records actual submission separately and cannot claim the maximum became effective without it.

## 5. Paid Condition Photos

**Customer authorizes:** ShogunShip to open the identified parcel and perform the presented visual-photo scope.

**Must present:** target parcel, requested visible areas where practical, deliverables, scope limits, price in JPY, and timing/eligibility constraints.

**Required warnings:** service is visual only and is not authentication, grading, functional testing, professional appraisal, or hidden-defect guarantee.

**Snapshot:** parcel identity, scope, price, service-description/policy version, warnings, and Customer selections.

**New Authorization required for:** materially expanded paid scope or separately quoted work.

**Staff boundary:** Staff may clarify/prepare scope and perform accepted work; necessary safety/customs/operational opening does not authorize or bill Condition Photos automatically.

## 6. Consolidation

**Customer authorizes:** paid combination of selected received parcels into a resulting package.

**Must present:** exact selected parcels and contents, each Arrival/deadline, accrued storage, service scope/price, optional work, compatibility concerns, resulting earliest storage deadline, and packaging preference.

**Required warnings:** no new 60-day period; earliest selected deadline applies; overdue storage continues based on new physical size; savings are not guaranteed; safe shipment takes priority; early Consolidation is discretionary.

**Snapshot:** source parcel set, deadlines/charges, packaging selection, price, warnings, service/policy versions, and material evidence.

**New Authorization required for:** changed parcel set, materially revised price/scope, different packaging disposal, or unexpected complex work requiring a new quote.

**Staff boundary:** Staff may assess feasibility and prepare work; cannot add parcels or choose disposal preference for the Customer.

## 7. Packaging-removal/disposal preference

This may be part of Consolidation Authorization but must remain an explicit mutually exclusive selection.

**Customer authorizes:** either removing unnecessary seller shipping packaging where practical or keeping seller shipping packaging where practical.

**Must present:** clear distinction between seller shipping material and original retail/manufacturer/collectible/product packaging and accessories.

**Required warnings:** keeping shipping packaging may increase size/weight/cost; removing it may not create savings; safe shipment overrides reduction.

**Snapshot:** exact selected preference, affected parcel set, definition shown, and any specifically proposed exceptional removal.

**New Authorization required for:** disposal of original product/retail packaging/accessories or any materially broader irreversible instruction.

**Staff boundary:** ambiguous email wording never permits irreversible disposal; Staff must not infer product-packaging disposal from authorization to remove seller shipping material.

## 8. Single-parcel Repacking / Package Reduction

**Customer authorizes:** paid opening of one received parcel, removal of unnecessary seller shipping material where practical, and safe repacking.

**Must present:** target parcel, scope, price, packaging distinctions, and expected processing context.

**Required warnings:** service is distinct from Consolidation; savings are not guaranteed; safe shipment takes priority; product packaging is preserved by default.

**Snapshot:** parcel, service scope/version, price, warnings, and packaging instructions.

**New Authorization required for:** complex/separately quoted work, material scope increase, or product-packaging disposal.

**Staff boundary:** Staff may recommend and prepare the service but cannot approve it for the Customer.

## 9. International shipping selection

**Customer authorizes:** dispatch of the exact Outbound Package using one exact Shipping Option after required Payment.

**Must present:** package identity and final measurements, carrier/service, JPY price, destination, estimated transit time, end-to-end tracking, duty model, declared value, available Carrier Coverage, limits/exclusions, uncovered shortfall, and other material conditions.

**Required warnings:** carrier/insurer—not ShogunShip self-insurance—provides ordinary coverage; full value may not be covered; transit/customs outcomes are not guaranteed; recipient-paid import charges are default unless explicitly stated otherwise.

**Snapshot:** Shipping Quote/Option version, package measurements, destination, customs version, coverage, warnings, terms/policy versions, and Customer selection.

**New Authorization required for:** carrier/service/price change, material package change, changed destination, declared value, coverage, duty model, or customs data.

**Staff boundary:** Staff may prepare options and labels only within the accepted choice; no untracked substitution.

## 10. Customs/declaration approval

**Customer authorizes/confirms:** accuracy of Customer-provided importer/destination information and the materially presented truthful declaration for shipment.

**Must present:** item description, quantity, transaction value, origin where known/required, recipient/importer details, IDs/permits where required, and duty model.

**Required warnings:** no intentional undervaluation or false gift declaration; Customer is normally importer of record; taxes/duties/brokerage/permits and destination eligibility are Customer responsibilities unless expressly included; classification/tax outcome and admission are not guaranteed.

**Snapshot:** exact declaration and Customer-supplied data version, warnings, and time.

**New Authorization required for:** material value, description, quantity, importer, destination, or duty-model change.

**Staff boundary:** Staff may prepare reasonable customs descriptions/codes but cannot accept false information or guarantee legal/tax outcomes.

## 11. Material shipping-address change

**Customer authorizes:** replacement of the final destination/address used for an approved or proposed Shipment.

**Must present:** old and new destination, affected Shipment/package, eligibility/price/customs/coverage consequences, and any new required information.

**Required warnings:** change may invalidate the prior Shipping Option, Quote, customs data, carrier eligibility, price, and coverage.

**Snapshot:** before/after address and all recalculated material terms.

**New Authorization required for:** every later material destination change; if shipping terms change, a new Shipping Authorization is also required.

**Staff boundary:** an email may request preparation, but Staff cannot make the binding final change without authenticated confirmation.

## 12. Other paid service approval

**Customer authorizes:** one specifically scoped optional service against identified property or workflow.

**Must present:** target, work scope, exclusions, deliverables, JPY amount/lines, timing, risks, irreversible effects, and applicable service/policy version.

**Snapshot:** full presented proposal and Customer selections.

**New Authorization required for:** material change in target, scope, amount, risk, or irreversible effect.

**Staff boundary:** Staff may recommend, price, and prepare; may not accept or materially expand the service for the Customer.

## Authorization execution and idempotency

Authorization creation and the resulting action are related but distinct. The system must prevent:

- duplicate Authorization from repeated submission;
- execution against a superseded proposal;
- execution more than once where the action is singular;
- applying an Authorization to another Listing, parcel, service, package, or Customer;
- replay after revocation/expiry where policy permits expiration;
- Staff substitution for the Customer actor.

External execution may fail after Authorization. The Authorization remains historical while the attempt/result is recorded separately. An ambiguous external result must be reconciled before retry.

## Matters intentionally unresolved

This document does not decide exact Terms language, Quote expiry, material Listing-change thresholds, authentication/reauthentication technology, emergency manual Authorization, dual-approval thresholds, payment-provider behavior, partial quantity, or exact service prices. See [RESEARCH_TBD.md](./RESEARCH_TBD.md).

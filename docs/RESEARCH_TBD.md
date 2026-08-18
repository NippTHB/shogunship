# ShogunShip V1 Research and TBD Register

## Purpose

This register collects decisions intentionally left unresolved by the [V1 Operating Model](./OPERATING_MODEL.md). It prevents assumptions from becoming implementation or customer promises without evidence.

Classification:

- **Legal/research requirement:** needs qualified legal, regulatory, market, or carrier research.
- **Provider-dependent decision:** depends on verified capabilities and contract terms of a selected provider.
- **Business decision:** ShogunShip must choose a policy or price after receiving the required inputs.
- **Implementation decision:** technical selection that should follow the operating model and architecture.

No entry below should be treated as answered merely because an implementation library appears in the repository.

## A. Japanese legal and regulatory research

| Topic | Classification | Required outcome |
|---|---|---|
| Purchasing-agency characterization | Legal/research requirement | Validate ShogunShip's proxy purchasing relationship and required disclosures. |
| Legal title and transfer timing | Legal/research requirement | Determine how seller-facing purchase, customer allocation, title, and economic interest interact. |
| Custody/bailment and possession | Legal/research requirement | Validate duties while holding customer-allocated property. |
| Rights while charges remain unpaid | Legal/research requirement | Determine whether and how shipment may be withheld and what notices are required. |
| Maximum storage period | Legal/research requirement + business decision | Identify legal constraints, then choose a V1 maximum. |
| Unclaimed or abandoned property | Legal/research requirement | Define valid notice, waiting, documentation, and abandonment procedures. |
| Disposal, donation, return, or sale | Legal/research requirement | Determine permitted resolutions and treatment of proceeds and unpaid fees. |
| Lien or retention rights | Legal/research requirement | Determine whether ShogunShip has any valid right over customer-allocated property. |
| Online-sales disclosures | Legal/research requirement | Verify Specified Commercial Transactions Act disclosures for the service, quotes, fees, returns, operator identity, and timing. |
| Consumer Contract Act limits | Legal/research requirement | Identify liability, cancellation, damage, and waiver terms that cannot be excluded. |
| Cross-border consumer law | Legal/research requirement | Assess mandatory customer rights in material destination markets. |
| Seller returns and remedies | Legal/research requirement | Validate ShogunShip's merchant-facing role and customer reimbursement terms. |
| APPI/privacy obligations | Legal/research requirement | Define lawful bases, notices, customer rights, security, processors, and breach obligations. |
| International data transfers | Legal/research requirement | Determine requirements for overseas infrastructure and providers. |
| Accounting and tax retention | Legal/research requirement | Define mandatory retention for transactions, receipts, refunds, and audit evidence. |
| Proxy-service tax treatment | Legal/research requirement | Determine tax/accounting treatment of item funds, service revenue, deposits, shipping, and refunds. |
| Auction deposits/customer funds | Legal/research requirement | Determine whether receipt/reservation/refund creates safeguarding, money-transmission, prepaid-value, or other obligations. |
| Customer credit/wallet avoidance | Legal/research requirement | Confirm implications of returning funds instead of retaining reusable balances. |
| Customs/export responsibility | Legal/research requirement | Validate declarations, screening duties, prohibited exports, and allocation of responsibility. |
| Restricted-item policy | Legal/research requirement + business decision | Produce a legally and operationally supported accepted/manual-review/prohibited list. |
| Claims and liability | Legal/research requirement | Validate carrier-claim pass-through, negligence, exclusions, and customer evidence duties. |
| Terms and Privacy wording | Legal/research requirement | Draft and professionally review final customer-facing legal documents. |

## B. Payment-provider research

| Topic | Classification | Required outcome |
|---|---|---|
| Stripe Japan suitability | Provider-dependent decision | Verify merchant eligibility for proxy purchasing, auctions, preorders, storage, and staged payments. |
| 3D Secure | Provider-dependent decision + implementation decision | Verify availability, liability shift, exemptions, fallbacks, and evidence retained. |
| Authorization duration | Provider-dependent decision | Determine whether card authorizations can cover auction timing and what happens on expiry. |
| Partial capture | Provider-dependent decision | Verify whether ShogunShip can reserve a maximum and capture only required funds. |
| Multiple/partial refunds | Provider-dependent decision | Verify request-level allocations within grouped payments and partial refund behavior. |
| Processing fees on refunds | Provider-dependent decision + business decision | Determine unrecovered costs and decide lawful, disclosed treatment. |
| International cards charged in JPY | Provider-dependent decision | Verify acceptance, presentment, settlement, declines, and customer disclosure. |
| Processor currency metadata | Provider-dependent decision + implementation decision | Define reconciliation fields while preserving JPY as canonical. |
| Chargebacks | Provider-dependent decision | Document reason codes, evidence, deadlines, fees, reserves, and account-risk implications. |
| High-value card ceiling | Business decision informed by provider research | Choose limits after fraud, reserve, chargeback, and operational analysis. |
| Manual risk review | Implementation decision + business decision | Define review triggers and permitted staff actions. |
| Wise/international transfer | Provider-dependent decision | Assess currencies, payer identification, refund mechanics, fees, settlement, and business eligibility. |
| Japanese bank transfer | Provider-dependent decision + business decision | Assess usability for international customers and high-value transactions. |
| PayPal suitability | Provider-dependent decision | Obtain reliable confirmation for staged proxy purchases, storage, consolidation, delayed shipment, and Seller Protection. |
| Auction deposit mechanics | Provider-dependent decision | Determine authorization, capture, refund, expiry, and fee-loss handling. |
| Preorder payment timing | Provider-dependent decision | Verify support and dispute exposure for delayed merchant fulfilment. |
| Payment-provider selection | Provider-dependent decision + implementation decision | Select only after the above research; do not infer from installed dependencies. |

## C. Shipping and carrier research

| Topic | Classification | Required outcome |
|---|---|---|
| Supported destinations | Provider-dependent decision + business decision | Build a maintainable destination/service matrix. |
| End-to-end tracking | Provider-dependent decision | Verify tracking continuity by carrier, service, and destination. |
| Carrier insurance/compensation | Provider-dependent decision | Document value limits, eligibility, exclusions, and payout basis. |
| Collectibles and used-item exclusions | Provider-dependent decision | Determine whether category, age, condition, or resale status limits coverage. |
| Claim procedures | Provider-dependent decision + implementation decision | Define deadlines, required evidence, customer instructions, and payout flow. |
| Battery/device rules | Legal/research requirement + provider-dependent decision | Define accepted devices and packing/service restrictions. |
| Oversized shipments | Provider-dependent decision + business decision | Define carrier availability, measurements, surcharges, and refusal thresholds. |
| DDP/prepaid duties | Provider-dependent decision | Identify supported services and reliable quote/data requirements. |
| Customs documents | Provider-dependent decision + legal/research requirement | Define descriptions, codes, values, origin, IDs, and document retention. |
| Returned shipments | Provider-dependent decision + business decision | Define carrier handling, re-entry, charges, custody, and storage treatment. |
| Carrier selection | Provider-dependent decision | Choose services after tracking, claims, restrictions, coverage, and destination research. |
| Shipping-quote validity/payment deadline | Business decision informed by provider research | Define expiry and storage interaction after final packing. |

## D. Storage and business-pricing research

| Topic | Classification | Required outcome |
|---|---|---|
| Japanese parcel-size conventions | Legal/market research | Compare common `length + width + height` thresholds. |
| Storage tier boundaries | Business decision informed by market research | Define objective Small, Standard, Oversized, and Special/Extra-Large limits. |
| Daily extended-storage rates | Business decision informed by market research | Choose JPY-per-day rates and customer-facing 30-day equivalents. |
| Maximum normal oversized size | Business decision informed by operations | Separate normal Oversized from special-rate packages. |
| Absolute maximum storage | Legal/research requirement + business decision | Choose only after legal procedure is known. |
| Service-fee model | Business decision | Define fixed, percentage, minimum, or hybrid acquisition pricing. |
| Auction handling fee | Business decision | Set the amount. |
| Auction fee stacking | Business decision | Decide whether auction handling replaces or supplements the normal successful-purchase fee. |
| Condition Photos price | Business decision | Define scope, standard output, limits, and price. |
| Consolidation price | Business decision | Define included parcel count and complex/excessive thresholds. |
| Repacking/package-reduction price | Business decision | Define a lower single-parcel service price and complexity exceptions. |
| Protective or unusual packing | Business decision | Define standard versus separately quoted work. |
| Reminder schedule | Business decision | Confirm or revise the provisional 30-day, 7-day, and final-day schedule. |
| ShogunShip processing-time adjustment | Business decision + implementation decision | Define how customer storage charges exclude ShogunShip-caused delay. |

## E. Product and operational TBDs

| Topic | Classification | Required outcome |
|---|---|---|
| Quote expiration | Business decision | Define validity and re-review requirements. |
| Material listing change detection | Business decision + implementation decision | Define what requires re-review and fresh authorization. |
| Partial-quantity authorization | Business decision | Define all-or-nothing versus explicitly permitted partial acquisition. |
| Auction request lead time | Business decision | Define a customer-facing minimum or best-effort cutoff. |
| Auction maximum-increase cutoff | Business decision | Define operational timing without implying guaranteed processing. |
| Unknown post-win domestic shipping collection | Business decision + provider-dependent decision | Define authorization/payment flow. |
| Preorder merchant delay handling | Business decision | Define notifications and extended-delay resolution where the merchant does not cancel. |
| Guest-link expiration/revocation | Security/implementation decision + business decision | Define lifetime, rotation, revocation, and customer recovery. |
| Authentication technology | Security/implementation decision | Evaluate passwordless email, passwords, passkeys, MFA, and sensitive-action reauthentication. |
| Staff MFA technology | Security/implementation decision | Select a mandatory, recoverable, auditable mechanism. |
| Emergency/manual authorization | Security/business decision | Define whether it exists and its exceptional verification/audit process. |
| Dual-approval actions and thresholds | Business/security decision | Define purchases, bids, refunds, and adjustments requiring second approval. |
| Exact role permissions | Security/business decision | Refine Owner/Admin and Operator capabilities. |
| Customer communication retention | Legal/research requirement + implementation decision | Define which messages become operational evidence and for how long. |
| Evidence retention periods | Legal/research requirement + business decision | Set periods by evidence class. |
| Guest inquiry cleanup | Business decision + implementation decision | Define deletion/anonymization for requests that never proceed. |
| Listing image optimization | Implementation decision | Select sufficient evidence quality, dimensions, compression, and format. |
| Object storage and signed access | Implementation decision | Select private storage, signed-link method, backup, and redundancy. |
| File limits and malware scanning | Security/implementation decision | Define formats, sizes, scanning, and quarantine. |
| Email/notification provider | Implementation decision | Choose after security, deliverability, data-residency, and audit evaluation. |
| Exchange-rate display provider | Implementation decision | Select source, supported display currencies, caching, and update interval. |
| Exact accepted/manual-review/prohibited list | Legal/research requirement + business decision | Finalize before launch while preserving policy evolution. |
| Returned-parcel storage treatment | Business decision + legal/research requirement | Define charging and deadline without a new free period. |
| Support response targets | Business decision | Define realistic response expectations without false guarantees. |
| Customer download availability | Business decision | Define which receipts, photos, labels, and claim records customers can obtain. |
| Customer-directed property movements | Business decision + legal/research requirement | Remain unsupported in V1 unless separately researched and approved. |

## F. Technical architecture choices intentionally not made

These decisions should be made only after the operating model and lifecycle requirements are translated into a technical design:

- database technology and hosting;
- backend/API framework;
- authentication provider;
- payment provider and integration design;
- object-storage provider;
- CDN and image-transformation strategy;
- email/notification provider;
- exchange-rate provider;
- snapshot-capture implementation;
- backup and disaster-recovery implementation;
- automated retention/anonymization implementation.


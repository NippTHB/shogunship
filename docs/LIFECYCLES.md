# ShogunShip V1 Business Lifecycle Requirements

## Purpose

This document describes business-level states and transitions that later technical architecture must support. It deliberately does not prescribe database enums, tables, APIs, or providers.

Detailed rules live in the [V1 Operating Model](./OPERATING_MODEL.md). Terms are defined in [Domain Vocabulary](./DOMAIN_VOCABULARY.md). Unresolved transitions are listed in [Research and TBD](./RESEARCH_TBD.md).

Different lifecycles overlap but must not be collapsed. A Purchase can remain allocated to a Customer while its Payment is disputed, its Physical Parcel is in custody, and its Shipment is blocked.

## 1. Guest Request → Quote → Account → Authorization

```text
Guest Request Submitted
→ Under Review
→ More Information Needed | Declined | Quote Prepared
→ Guest Response Available
→ Awaiting Guest Decision
→ Expired | Closed Without Proceeding | Customer Chooses to Proceed
→ Account Created/Verified (or Existing Customer Authenticates)
→ Existing Request Associated With Account
→ Current Listing/Quote Presented
→ Awaiting Authenticated Authorization
→ Authorized | Declined by Customer | Re-review Required | Expired
```

Requirements:

- Submission and quote viewing remain non-binding.
- The Guest Link is read-only and request-scoped.
- Account conversion preserves the existing request and Quote Versions.
- Material Listing changes may require re-review and a new Quote Version.
- Only the final authenticated action creates Authorization.
- Quote expiry and exact material-change rules are TBD.

## 2. Fixed-Price Purchase

```text
Authorized and Awaiting Payment
→ Payment Confirmed
→ Awaiting ShogunShip Purchase Attempt
→ Purchase Attempt In Progress
→ Purchased Successfully
   | Listing Unavailable
   | Merchant Rejected/Cancelled
   | Purchase Failed
   | Re-review Required
```

After success:

```text
Purchased Successfully
→ Awaiting Merchant Fulfilment
→ Domestically Shipped
→ Parcel Arrival
```

Requirements:

- Before successful purchase, cancellation/refund remains possible.
- After successful purchase, buyer-remorse cancellation is unavailable, subject to law.
- Payment does not guarantee acquisition.
- ShogunShip does not substitute another Listing without new Authorization.
- Unavailable or failed acquisition triggers the applicable refund path without a retained normal service fee.
- Seller-originated cancellation/refund remains attributable to this Purchase.

## 3. Auction

```text
Auction Request Submitted
→ Under Review
→ Declined | Awaiting Authorization and Bid Funds
→ Authorized/Funded
→ Exact Auction Reserved for Customer
→ Awaiting Bid Submission
→ Valid Bid Submitted
   | Bid Not Submitted
   | Auction Ended Before Submission
   | Technical/Platform Failure
→ Winning | Outbid | Auction Ended/Lost | Seller/Platform Cancelled
```

Winning path:

```text
Winning
→ Final Auction Price/Charges Confirmed
→ Unknown Domestic Shipping Pending (when applicable)
→ Merchant Order Obligated
→ Awaiting Merchant Fulfilment
→ Domestically Shipped
→ Parcel Arrival
```

Fund path:

```text
Bid Deposit Received/Reserved
→ Valid Bid Submitted
→ Won Below Maximum | Lost/Outbid
→ Required Amount Determined
→ Unused Amount Returned to Original Payment Method
```

Requirements:

- The Auction Handling Fee becomes earned only after a valid authorized bid is submitted.
- An exact Auction supports one active ShogunShip Customer authorization.
- Automatic extensions remain within the existing Maximum Bid.
- A maximum increase becomes effective only after new Authorization, funding, and successful submission.
- Submitted bids may not be cancellable or reducible.
- Winning is never guaranteed.
- `着払い` auctions are declined.
- Exact authorization/capture/refund mechanics and lead time are TBD.

## 4. Preorder

```text
Preorder Request Submitted
→ Eligibility Review
→ Declined (>30 days or other reason) | Quote Prepared
→ Authenticated Authorization and Payment
→ Preorder Placed
→ Awaiting Expected Release/Fulfilment
→ Merchant Delay | Merchant Cancellation | Product Cancellation | Fulfilled
→ Domestically Shipped
→ Parcel Arrival
```

Requirements:

- Eligibility is assessed using the expected date available when accepted.
- Later merchant delay does not retroactively invalidate the Preorder.
- Non-cancellable merchant commitment means no buyer-remorse cancellation after placement.
- Merchant cancellation/refund uses the seller-originated refund path.
- The Free Storage Period begins at physical Arrival, not preorder placement or release.
- Extended-delay communications and resolution details remain TBD.

## 5. Payment and Refund

Payments and business obligations must remain independently allocated even when one checkout covers several Requests.

Acquisition payment:

```text
JPY Obligation Created
→ Awaiting Customer Authorization
→ Authorized
→ Processing
→ Confirmed | Failed | Under Review
→ Allocated to Independent Request(s)
```

International shipping payment:

```text
Final Shipment Prepared
→ JPY Shipping Obligation Created
→ Awaiting Shipping Approval/Payment
→ Authorized and Paid
→ Shipment Eligible for Dispatch
```

Refund:

```text
Refund Basis Identified
→ Amount Calculated in JPY
→ Approval Required (where applicable)
→ Submitted to Original Payment Method
→ Processing
→ Completed | Failed | Reconciliation Required
```

Requirements:

- JPY is authoritative.
- Processor currency and conversion metadata do not replace the JPY obligation.
- Request-level allocations survive grouped checkout.
- Auction deposits remain distinguishable from earned fees.
- Refunds return to the original payment method in V1 rather than a reusable wallet.
- Processing fees, partial capture, refund behavior, and high-value alternatives are provider-dependent TBDs.

## 6. Merchant Order

```text
Purchase Successfully Submitted to Merchant
→ Merchant Confirmed
→ Awaiting Fulfilment
→ Domestically Shipped
→ Delivered to ShogunShip
```

Exception paths:

```text
Awaiting Fulfilment
→ Seller Delay
→ Seller Cancellation
→ Seller Requests Information/Action
→ Legitimate Return/Claim Process
→ Seller Refund Pending
→ Seller Refund Received
```

Requirements:

- Merchant Order remains distinct from Request, Purchase, Physical Parcel, and Customer Allocation.
- Several Purchases may be combined by the same seller into one incoming Physical Parcel.
- Seller refunds remain allocated to affected Purchases.
- Discretionary customer returns are not a standard V1 service.

## 7. Parcel Arrival and Storage

```text
Expected Physical Parcel
→ Domestically In Transit
→ Arrived at ShogunShip
→ Unopened Outer Parcel Photographed/Verified
→ Stored
→ Within Independent 60-Day Free Storage
→ Extended Storage Accruing Daily
→ Maximum Storage Resolution Required (TBD)
```

Possible operational restrictions:

```text
Arrived/Stored
→ External Damage Concern
→ Safety/Eligibility Hold
→ Prohibited-Item Hold
→ Payment/Chargeback Hold
→ Missing Customer Instruction
```

Requirements:

- Every Physical Parcel has its own Arrival date and Free Storage Period.
- Later arrivals do not reset earlier clocks.
- Default receiving does not open or inspect the item.
- ShogunShip-caused processing time must not increase customer storage charges.
- Daily storage rates, size tiers, maximum duration, and lawful unclaimed-property resolution remain TBD.

## 8. Condition Photos

```text
Parcel Eligible for Optional Service
→ Customer Requests Condition Photos
→ Scope/Price Presented
→ Authenticated Authorization and Payment
→ Awaiting Staff Work
→ Parcel Opened and Visual Photos Taken
→ Evidence Uploaded/Reviewed
→ Available to Customer
→ Completed
```

Exception states may include clarification required, service impractical, unexpected safety/restriction issue, or additional work separately quoted.

Requirements:

- Condition Photos remains distinct from Arrival Photos.
- The service is visual only unless another service is explicitly defined.
- Originals/derivatives and access follow the Evidence model.

## 9. Consolidation and Repacking

Multi-parcel consolidation:

```text
Customer Selects Eligible Parcels
→ Deadlines/Charges/Preferences Presented
→ Customer Chooses Seller-Packaging Preference
→ Authenticated Authorization and Payment
→ Awaiting Consolidation
→ Consolidation In Progress
→ Final Package Measured/Recorded
→ Resulting Package Stored or Awaiting Shipping Quote
```

Single-parcel repacking:

```text
Customer Selects Physical Parcel
→ Repacking Scope/Price Presented
→ Authenticated Authorization and Payment
→ Repacking In Progress
→ Final Package Measured/Recorded
→ Awaiting Shipping Quote
```

Requirements:

- Seller shipping packaging and product/retail packaging are distinct.
- Consolidation inherits the earliest selected storage deadline.
- No new Free Storage Period is created.
- Early consolidation remains discretionary.
- Safe packing takes priority; savings are not guaranteed.
- Complex work may require a revised quote.
- Exact service pricing and processing-time accounting are TBD.

## 10. International Shipping

```text
Final Package Ready
→ Weight/Dimensions Recorded
→ Available Carrier Services Retrieved/Prepared
→ International Shipping Quote Presented
→ Awaiting Customer Selection and Authenticated Approval
→ Awaiting Payment
→ Paid and Shipment Eligible
→ Label/Customs Documents Prepared
→ Dispatched With End-to-End Tracking
→ In Transit
→ Delivered | Delayed | Returned | Lost/Damaged/Claim Candidate
```

Requirements:

- International shipping is a separate second-stage payment.
- Customer approval records carrier, service, price, destination, customs value, tracking, coverage, and limitations.
- No untracked international service is permitted.
- Recipient-paid duties/taxes are default; DDP is possible only when explicitly supported.
- A returned shipment receives no new 60-day Free Storage Period.
- Quote validity, payment deadline, and returned-parcel storage treatment remain TBD.

## 11. Dispute and Chargeback

```text
Payment/Purchase Operating Normally
→ Dispute or Chargeback Opened
→ Affected Payment/Purchase Identified
→ Item/Parcel/Shipment Restricted Where Legally Permitted
→ Evidence Preserved and Submitted
→ Optional Work/Dispatch Paused Where Appropriate
→ Provider/Issuer Review
→ Won | Lost | Partially Resolved | Further Action Required
→ Financial and Property Resolution Applied
```

Requirements:

- A Dispute does not erase Customer Allocation.
- A Dispute does not automatically convert the item into ShogunShip inventory.
- Financial status, physical Custody, Shipment eligibility, and legal rights remain separate.
- Customer and Staff actions remain attributable.
- Exact post-outcome property and financial rights require provider and Japanese legal research.

## 12. Carrier Claim

```text
Loss/Damage Concern Identified
→ Customer Instructed to Preserve Item and Packaging
→ Eligibility/Evidence Reviewed
→ Claim Prepared
→ Submitted to Carrier/Insurer
→ Additional Evidence Requested (if any)
→ Approved | Partially Approved | Denied
→ Carrier Compensation Received (if approved)
→ Applicable Customer Compensation Passed Through
→ Closed
```

Requirements:

- Carrier Coverage, not ShogunShip self-insurance, defines ordinary compensation.
- Coverage limits and shortfalls must have been disclosed at shipping approval.
- ShogunShip supplies available purchase, packing, shipment, and tracking evidence.
- Customer may need to retain all packaging and damaged goods.
- Amounts not covered by the carrier are not automatically reimbursed, subject to applicable law.
- Exact carriers, claim windows, evidence requirements, and reimbursement procedures remain TBD.

## Cross-lifecycle invariants

- Email is never binding Authorization.
- A Guest Link is never binding Authorization.
- One Listing equals one Request.
- Grouping never destroys independent allocations or history.
- Customer Allocation, Custody, legal title, payment, dispute, storage, and Shipment status remain independent.
- Corrections preserve material history.
- Every binding Customer action and material Staff action is auditable.
- Unresolved policy or provider behavior remains TBD rather than encoded as an assumption.


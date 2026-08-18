# ShogunShip V1 Security Model

## Purpose

This document defines the provider-neutral identity, access-control, data-classification, media-security, and abuse-resistance requirements for ShogunShip V1. It does not select authentication, hosting, monitoring, storage, or payment vendors.

Related authority: [OPERATING_MODEL.md](./OPERATING_MODEL.md), [ARCHITECTURE.md](./ARCHITECTURE.md), [DOMAIN_MODEL.md](./DOMAIN_MODEL.md), [AUTHORIZATION_CONTRACTS.md](./AUTHORIZATION_CONTRACTS.md), and [RESEARCH_TBD.md](./RESEARCH_TBD.md).

## Security principles

- Authenticate identity before binding action.
- Authorize every protected operation on the backend.
- Grant the least privilege required for the actor and resource.
- Keep Customer and Staff identities/actions distinguishable.
- Treat external input, frontend state, URLs, and callbacks as untrusted until validated.
- Make material security and permission changes attributable.
- Keep private evidence private by default.
- Minimize Guest and sensitive data while preserving required evidence.
- Support correction, revocation, recovery, and incident investigation without silent history loss.

## A. Identity classes

### Guest

A Guest may view public information, submit a non-binding Request, and access the scoped response through a valid Guest Link. A Guest is not an authenticated Customer and cannot authorize, pay for, or trigger binding operations.

Guest input is subject to validation, rate limiting, abuse screening, and data minimization. Possession of an email address or knowledge of Request details does not prove identity.

### Customer

A Customer is a verified, authenticated person. The Customer may access only records owned by or exclusively allocated to them and perform authenticated binding actions under [AUTHORIZATION_CONTRACTS.md](./AUTHORIZATION_CONTRACTS.md).

Account claiming must prove control of the relevant guest contact/request through a secure process. Merely matching an email string is insufficient.

### Staff

A Staff identity is individually authenticated and separate from Customer access. Shared administrator credentials are prohibited. Staff actions remain attributable even when both founders initially hold Owner/Admin access.

Staff cannot silently act as Customer or convert Staff input/email into Customer Authorization.

## B. Customer access boundary

An authenticated Customer may access, subject to lifecycle visibility and lawful retention:

- their Requests, Reviews, and Quote Versions;
- their Authorizations and Authorization Snapshots;
- their Purchases and Customer Allocations;
- Physical Parcels and Outbound Packages containing only their allocated contents;
- evidence explicitly made visible to them;
- their Financial Obligations, Payments, allocations, and Refunds;
- their Service Requests;
- their Shipping Quotes, Shipments, Tracking, Claims, and Disputes;
- their important communications.

Every read and mutation checks authenticated Customer identity and resource ownership/allocation server-side. Guessing or changing an identifier must not expose another Customer's record or media.

Binding actions may require fresh authentication or another security step appropriate to risk. Exact technology remains TBD.

## C. Staff access boundary

### Owner/Admin

Conceptually may perform ordinary operations plus sensitive administration, including:

- Staff account and access management;
- role/permission management;
- approved pricing/configuration changes;
- Refunds and unrestricted financial adjustments;
- policy/system configuration;
- other explicitly administrative actions.

Owner/Admin authority does not remove audit requirements or permit creation of Customer Authorization.

### Operator

Conceptually may perform ordinary operational work, including:

- review Requests and prepare Quote Versions;
- record exact authorized Purchases and Merchant Orders;
- perform auction operations within effective Customer Authorization;
- receive, photograph, measure, and store Physical Parcels;
- perform authorized Condition Photos, Consolidation, and Repacking;
- prepare Outbound Packages, Shipping Quotes, customs information, and dispatch;
- manage routine operational evidence and communications.

Operator does not automatically receive permission to:

- manage Staff identities, roles, or permissions;
- change system-wide policy/configuration;
- issue unrestricted Refunds;
- create unrestricted Financial Adjustments;
- bypass Holds outside explicit authority;
- impersonate or authorize for a Customer.

Exact permission granularity and future dual-approval thresholds remain TBD. The architecture must permit additional approval before execution of selected high-risk actions.

## D. Staff security

V1 requires:

- individual Staff accounts;
- mandatory Staff MFA;
- secure account recovery that does not trivially bypass MFA;
- session expiration and revocation;
- device/session visibility appropriate to risk;
- sensitive-action reauthentication;
- least-privilege roles;
- immediate removal/suspension capability;
- Audit Events for access, role, and sensitive security changes.

### Impersonation

Silent impersonation is prohibited. If support impersonation is ever introduced, it must be:

- explicitly entered and exited;
- visibly indicated throughout the session;
- narrowly permissioned;
- time/scoped where practical;
- audited with real Staff identity;
- unable to create an event that appears to be Customer Authorization.

It is not required for V1.

## E. Backend authorization

Frontend hiding, disabled buttons, route guards, and client-side ownership checks are usability measures only. They are not security controls.

Every protected backend operation must verify:

- authenticated actor and identity class;
- active session/security requirements;
- role/permission;
- resource ownership or Staff operational scope;
- target version/current state;
- required Authorization and Payment status;
- blocking Holds;
- action-specific preconditions;
- idempotency/replay status.

Provider webhook handlers independently authenticate the provider, validate event integrity, deduplicate events, and map them to internal subjects. A callback-supplied customer or amount identifier is not trusted without internal reconciliation.

## F. Guest Links

A Guest Link must use:

- a cryptographically strong, long random secret;
- only a non-reversible digest stored server-side;
- scope to one intended Request/response;
- read-only permissions;
- expiration and explicit revocation;
- rotation/reissue rather than exposing the same secret indefinitely;
- no payment, authorization, account-change, or binding-action capability;
- appropriate access/security logging without logging the raw secret.

The token must not be a sequential Request identifier. It must not appear in analytics, referrer leakage, logs, or third-party resources where avoidable.

### Request claiming

Claiming requires authenticated account access plus secure proof tied to the original Request/contact. Concurrent claims must be resolved transactionally. Original guest submission remains historical. A successful claim does not authorize purchase.

Exact lifetime, revocation after claim, rotation, and recovery policy remain TBD.

## G. Data classification

### Public

Examples: landing page, public Pricing/FAQ/policy content, public marketplace information intentionally published.

- Accessible without authentication.
- Must not contain Customer or private operational information.

### Ordinary customer/business

Examples: Requests, Quote summaries, Purchase status, parcel status, non-sensitive communications.

- Accessible only to owning Customer and authorized Staff.
- Not publicly indexable or shareable by predictable URL.

### Private evidence

Examples: Listing evidence, merchant receipts, Arrival Photos, Condition Photos, packing evidence, claim evidence.

- Private by default.
- Customer access only when relevant and permitted; Staff access by operational need.
- Signed/scoped delivery rather than permanent public URLs.

### Financial

Examples: obligations, Payments, allocations, Refunds, processor identifiers, Chargebacks, adjustments.

- Strict Customer ownership and Staff permission checks.
- Material changes append-oriented and audited.
- Payment credentials should remain with an approved processor rather than being unnecessarily stored by ShogunShip.

### Sensitive identity/customs

Examples: addresses, identity/importer numbers, permits, tax identifiers, shipping labels, customs documents.

- Tighter Staff access and access logging where appropriate.
- Data minimization, purpose limitation, and retention aligned to future legal policy.

### Authentication/security

Examples: credential material, MFA/recovery data, sessions, token digests, webhook secrets, security events.

- Restricted to security mechanisms and narrowly authorized administration.
- Raw secrets never exposed in ordinary logs/audit payloads.

### Audit/legal preservation

Examples: Authorization Snapshots, material Audit Events, disputes, claim/Chargeback evidence, preservation Holds.

- Integrity and restricted alteration are primary.
- Legal preservation can suspend ordinary deletion only under validated policy; exact periods remain TBD.

Classification is metadata and policy, not necessarily a separate storage system for each class.

## H. Media security

ShogunShip-controlled evidence is private by default.

Required controls include:

- authenticated access or narrowly scoped, short-lived signed access;
- authorization check before issuing access;
- no permanent public evidence URLs;
- unguessable object identifiers that do not replace authorization checks;
- original/derivative linkage;
- checksum/integrity metadata;
- MIME/type/size/dimension validation;
- file-size and format limits;
- malware/scanning/quarantine capability where appropriate;
- separation of upload completion from operational approval/publication;
- metadata stripping or preservation according to evidence/privacy needs;
- access logging for sensitive documents where appropriate;
- retention class and superseded/erroneous status.

Marketplace authorization images may be optimized preserved evidence copies. ShogunShip-created originals are retained where the evidence model requires them; thumbnails do not silently replace originals.

## I. Auditable security events

At minimum, preserve material events such as:

- account verification, recovery, suspension, or closure;
- Staff MFA enrolment/reset and security recovery;
- Staff account creation, role assignment, permission change, and revocation;
- significant session revocation or suspected compromise;
- Guest Link issue, rotation, revocation, and suspicious access;
- Request claim and failed/conflicting claim attempts;
- Authorization creation and sensitive-action reauthentication result;
- support impersonation entry/exit if ever added;
- Hold creation/release for fraud/security reasons;
- sensitive evidence access where required;
- webhook validation/replay failures;
- material manual financial or operational overrides;
- dual-approval decisions if introduced.

Audit Events record the real actor and must not include raw passwords, tokens, card credentials, or unnecessary sensitive document contents.

## J. Abuse and fraud protections

### Public request protection

- rate limits and abuse throttling;
- input/URL validation;
- bot/spam controls proportionate to traffic;
- limits on Guest media or external fetch behavior;
- no automatic merchant purchase from untrusted submission.

### Auction protection

- normalized exact marketplace/listing identity;
- concurrency-safe one-active-Customer reservation;
- no disclosure of another Customer's identity, current bid, maximum, or contact details;
- maximum and funds verified before bid operation;
- anti-replay/idempotency for Bid Submissions.

### Financial protection

- confirmed server-side amounts and obligations;
- no trust in client-calculated totals;
- 3D Secure/manual review direction subject to provider research;
- suspicious-activity Holds;
- idempotent collection, allocation, Refund, and webhook handling;
- reconciliation for ambiguous provider outcomes;
- no reusable V1 wallet.

### Integration protection

- authenticated webhooks/signatures;
- timestamp/replay validation where supported;
- deduplication using stable provider event IDs;
- least-privilege credentials and secret rotation;
- outbound request idempotency;
- safe retries and manual reconciliation.

### Application protection

- CSRF protection appropriate to authentication/session design;
- secure output handling and content security controls;
- server-side validation of every transition;
- concurrency/version checks;
- no reliance on frontend state, hidden inputs, or route access as truth.

## Retention, privacy, and deletion

The system must support class-specific retention, deletion/anonymization, legal preservation, and account closure without assuming one universal period. Authorization, accounting, dispute, claim, fraud, and privacy requirements may differ.

Exact periods, Japanese legal obligations, Guest cleanup, Customer downloads, and deletion exceptions remain in [RESEARCH_TBD.md](./RESEARCH_TBD.md). “Permanent audit” must not be interpreted to override applicable law.

## Security decisions intentionally deferred

This model does not select authentication/MFA technology, hosting, monitoring, object storage, email, payment providers, encryption products, exact session durations, Guest Link lifetime, upload limits, malware tooling, dual-approval thresholds, or retention periods.

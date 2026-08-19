# ShogunShip V1 Infrastructure Decisions

## Purpose and authority

This document records the selected V1 hosting, database, authentication, and server-execution profile that implements the provider-neutral requirements in [ARCHITECTURE.md](./ARCHITECTURE.md). It does not change the domain model, authorization contracts, lifecycle rules, or security requirements.

Provider pricing, quotas, plan features, and regional availability are time-sensitive operational facts. They must be verified before provisioning and monitored after launch; they are not permanent architectural assumptions.

## Selected V1 infrastructure

- **Frontend hosting:** Netlify Free.
- **Database, authentication, and backend platform:** Supabase Free.
- **Primary Supabase region:** Tokyo (`ap-northeast-1`) where supported.
- **Authoritative database:** PostgreSQL remains the authoritative relational store and must enforce the transactions, constraints, concurrency controls, and append-oriented history required by the architecture.
- **Authentication:** Supabase Auth is the planned V1 authentication platform. Application-level Customer and Staff separation, mandatory Staff MFA, session controls, reauthentication, and resource authorization must still satisfy [SECURITY_MODEL.md](./SECURITY_MODEL.md).
- **Server-side execution:** Supabase Edge Functions are the planned primary server-side execution environment. Sensitive business transitions remain backend-enforced; the browser must not become the authority for them.
- **Scheduled and retryable work:** Supabase Cron and database outbox patterns may support scheduled, asynchronous, and retry work where appropriate. Committed work must remain visible, idempotent, and recoverable as required by the architecture.
- **Netlify boundary:** Netlify continues to host the frontend. Primary backend logic must not be moved to Netlify Functions merely to distribute Free-tier usage.

This selection must preserve the modular-monolith boundaries described in [ARCHITECTURE.md](./ARCHITECTURE.md). Platform integration does not authorize direct client writes that bypass domain transitions, transactional invariants, audit creation, or server-side authorization.

## Pre-revenue infrastructure principle

> During pre-revenue development and initial market validation, ShogunShip targets zero fixed monthly infrastructure cost where reasonably possible. Free tiers may be used when they preserve required security, correctness, recoverability, and architectural boundaries. Paid upgrades are driven by demonstrated operational, usage, reliability, security, recovery, or revenue requirements rather than public launch alone.

Free-tier usage is an operating-stage choice, not permission to weaken security or correctness. Current quotas and prices are deliberately not encoded here.

## Upgrade compatibility

The V1 implementation must remain compatible with an in-place Supabase Free-to-Pro upgrade. Application design must not depend on behavior that would require replacing the project, rebuilding identity records, or migrating the authoritative PostgreSQL data merely to change the Supabase plan.

An upgrade is driven by monitored operational need, including capacity, pausing, backup/recovery, observability, security, support, reliability, or sustainable revenue. Public launch alone is not an upgrade trigger.

## Recovery gate before binding operations

> Before ShogunShip relies on the system for binding customer payments, merchant purchases, auction bids, or customer property custody, an independent database backup and tested restore process must be operational unless equivalent managed recovery protection has already been enabled.

The exact backup tooling, schedule, retention, encryption, storage location, recovery objectives, and restore procedure remain implementation decisions. This requirement does not select or implement them.

## Decisions still separate

This infrastructure selection does not choose payment, transactional-email, private-media/object-storage, monitoring, carrier, or exchange-rate providers. It also does not implement provider accounts, application code, deployment changes, schemas, migrations, or backup automation.

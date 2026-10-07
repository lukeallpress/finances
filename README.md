# Household finances

A private, passphrase-gated finance dashboard for Luke and Olivia Allpress.
Published at **https://lukeallpress.github.io/finances/** — unlisted, `noindex`,
and inert until someone types the passphrase.

Split out of `lukeallpress.github.io` in October 2026. A GitHub *project* repo
named `finances` publishes to exactly that path, so the URL never changed.

## How it is private

The repo is public, like any GitHub Pages source. The data is not. Everything
the dashboard shows arrives as one AES-256-GCM blob (`public/data.enc.json`),
decrypted in the browser and never uploaded anywhere. Key derivation is
PBKDF2-SHA256 at 10,000,000 iterations.

No addresses, account names or figures appear anywhere in source — they all
travel inside the encrypted payload. Keep it that way when editing the views.

`finance-private/` holds everything sensitive — raw exports, balances, mortgage
terms, paystubs, the canonical ledger, the cleartext payload — and is gitignored
in full.

## Everyday use

```bash
npm run finance:import -- ~/Downloads/"Simplifi - Transactions.csv"
npm run finance:publish      # rebuild, re-encrypt, commit, push
```

Importing is safe to repeat: the same export merged twice changes nothing, a
longer one adds only what is new, and a correction recorded against a
transaction id in `finance-private/overrides.json` survives every future import.

```bash
npm run dev              # local preview on :4322
npm run finance          # rebuild only, no commit
npm run finance:check    # test a passphrase against the published blob
```

Full documentation: **`tools/finance/README.md`**.

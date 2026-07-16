# Creating your three Stripe Payment Links

A step-by-step guide for setting up the checkout buttons on the CampaignAI website. **No coding required.** You'll do everything inside the Stripe dashboard, then send me three links to paste into the site.

Plan on ~20 minutes.

---

## What we're building

The website's "Buy your first video" button now leads to a **purchase page** (`/purchase`) with three plans. Each plan needs its own Stripe **Payment Link** — a Stripe-hosted checkout page you create with a few clicks (no website code, no developer).

You'll create three links:

| Plan | Price | What it's for |
| --- | --- | --- |
| **Professional Video** | $1,999 | Consultancies, party committees, PACs, organizations |
| **Candidate Campaigns** | $599 | The 2026 cycle mission rate for candidates |
| **America 250 Special** | $250 | The launch offer (first video for $250 when buying two) |

> **About the $250 offer:** the Payment Link simply charges $250. The "buy two videos, get your first for $250" logic is handled by us during the onboarding call — the link itself is just the $250 charge. Nothing extra to configure for that.

After a customer pays, Stripe will automatically send them to your **onboarding call scheduler** to book their 30-minute call.

---

## Before you start: two decisions

**1. Test mode vs. live mode.**
Stripe has a **Test mode** toggle (top-right of the dashboard, or under the search bar depending on your view). In test mode you can practice with a fake card and no real money moves. Payment Links you create in test mode **only work in test mode** — you'll re-create them in live mode when you're ready to accept real payments.

- Recommended: build and try them in **test mode** first, then repeat the same steps in **live mode** and send me the *live* links.
- Test card number: `4242 4242 4242 4242`, any future expiry, any CVC, any ZIP.

**2. Charge the full amount, or a deposit?**
The examples below charge the **full price** upfront. If you'd rather collect a smaller **deposit** (say, $250 to reserve, with the balance settled on the call), just set the price to your deposit amount instead. Either works with the website — it's purely your business call. If unsure, start with full price; it's the simplest.

---

## Step-by-step: create the first Payment Link

We'll create **Professional Video ($1,999)** first, then repeat for the other two.

### 1. Open Payment Links
- Log in to [dashboard.stripe.com](https://dashboard.stripe.com).
- In the left sidebar, click **Product catalog** (older accounts may show **Products**), or go straight to the **Payment Links** section. You can also just visit **dashboard.stripe.com/payment-links**.
- Click **+ New** (or **Create payment link**).

### 2. Choose "Products" and add your product
- Select **Products** as the type (not "Subscription" — this is a one-time payment).
- Click **+ Add a product** → **Create new product**.
- Fill in:
  - **Name:** `Professional Video`
  - **Description (optional but nice):** `One finished, human-reviewed campaign video. Add-ons priced on your onboarding call.`
  - **Amount:** `1999.00`
  - **Currency:** `USD`
  - Make sure it's a **One-time** price (not recurring/subscription).
- Click **Add product**.

### 3. Turn on the settings that matter
On the Payment Link setup screen, look for these options (usually under "Options," "Advanced," or a settings panel) and set them:

- **Collect customer name:** turn **ON.** (Stripe always collects email; you also want their name.)
- **Phone number:** optional — turn on if you'd like it.
- **Allow promotion codes:** optional. Turn on only if you plan to hand out discount codes.
- **Quantity adjustable:** turn **OFF** (one video per checkout keeps it simple).

### 4. Set where customers go after they pay  ← important
Find the **"After payment"** setting (sometimes labeled **"Confirmation page"**).

- Choose **"Don't show confirmation page — redirect to your website"** (wording varies; the option is to redirect to a custom URL).
- Paste this URL:

  ```
  https://calendly.com/campaignai/campaignai-purchase-call
  ```

  This is what sends every paying customer straight to book their onboarding call. (If you use a different scheduler link, paste that instead — just tell me which.)

### 5. Create it and copy the link
- Click **Create link**.
- Stripe shows you a URL that looks like:

  ```
  https://buy.stripe.com/xxxxxxxxxxxxxxxx
  ```

- Click **Copy**. Paste it somewhere safe (a note, an email draft) labeled **"Professional — $1,999."**

---

## Now repeat for the other two

Do Steps 1–5 again, twice, changing only the name and amount:

**Candidate Campaigns**
- Name: `Candidate Campaigns`
- Description: `The 2026 cycle mission rate — one finished, human-reviewed video. Add-ons priced on your onboarding call.`
- Amount: `599.00`
- Same after-payment redirect (the Calendly link above).
- Copy the link, labeled **"Candidate — $599."**

**America 250 Special**
- Name: `America 250 Special`
- Description: `Launch offer — buy two videos, get your first for $250.`
- Amount: `250.00`
- Same after-payment redirect.
- Copy the link, labeled **"America 250 — $250."**

---

## Send me the three links

Reply with the three URLs, clearly labeled, like:

```
Professional ($1,999): https://buy.stripe.com/aaaa
Candidate ($599):      https://buy.stripe.com/bbbb
America 250 ($250):    https://buy.stripe.com/cccc
```

I'll paste them into the site (into the `STRIPE_LINK_PROFESSIONAL`, `STRIPE_LINK_CANDIDATE`, and `STRIPE_LINK_A250` slots) and the checkout buttons will go live.

> **Until then:** the buttons still work — they currently fall back to booking the onboarding call, so nothing on the site is broken while you set this up.

---

## Good to know

- **Receipts:** Stripe emails a receipt automatically. To confirm it's on, go to **Settings → Business → Customer emails** and make sure "Successful payments" receipts are enabled.
- **Editing later:** you can change a product's price or the redirect URL any time from the Payment Links / Products screen. If you change a link's price, the URL stays the same, so you won't need to resend it.
- **Refunds:** handled from the **Payments** screen — click a payment, then **Refund**.
- **Seeing your money:** real payments land in **Balance → Payouts** (you'll need your bank connected under **Settings → Business → Bank accounts and currencies** before live payments work).
- **Security:** you never handle card numbers — Stripe's hosted page does. Nothing sensitive touches the CampaignAI website.

Questions on any step? Send me a screenshot of where you're stuck and I'll point you to the exact button.

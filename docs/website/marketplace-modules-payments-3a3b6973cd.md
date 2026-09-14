> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/marketplace-modules/Payments). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Building a Custom Payments Integration on the HighLevel Platform

Integrating your preferred payment gateway into HighLevel allows for streamlined transactions, automated processes, and an enhanced customer payment experience. Whether you're working with a niche payment processor or developing a tailored solution, this guide will walk you through the setup, testing, and implementation phases.

[Video Walkthrough](https://youtu.be/kg3bXTVlFFw)

---

## Prerequisites

Before you begin, ensure you have:

- A HighLevel account to create and launch marketplace apps.
- A service running on a cloud provider to handle requests from HighLevel during payment processes.
- Publicly hosted pages for payment, authentication, and other customer-facing features.

---

## Step-by-Step Integration Guide

### 1. Create a Marketplace App

- Log in to the [HighLevel Marketplace Dashboard.](https://marketplace.gohighlevel.com/)
- Create a new marketplace app with the following configurations:

**Required Scopes:**

- `payments/orders.readonly`
- `payments/orders.write`
- `payments/subscriptions.readonly`
- `payments/transactions.readonly`
- `payments/custom-provider.readonly`
- `payments/custom-provider.write`
- `products.readonly`
- `products/prices.readonly`

**Redirect URL:**<br> This URL completes the OAuth flow when your app is installed at any location. After installation, users are redirected to this URL with a `code` query parameter, which can be exchanged for an OAuth access token for API calls to HighLevel.

Example:<br> `https://yourdomain.com/oauth/callback?code=your_code_here`

**Client Keys:**<br> Securely store these keys on your backend server; they're required for the OAuth flow.

**Webhook URL:**<br> This endpoint receives webhook events when your app is installed or uninstalled from a location.

**SSO Key:**<br> Securely store this key; it's used to decrypt the auth token received for custom pages.

---

### 2. Configure the Payment Provider

Set up the payment provider so HighLevel recognizes your app as a payments app.

- Name: Provide the name of your payment provider.
- App Description: Describe your payment provider's functionality.
- Payment Provider Type: Specify the types of payments your provider supports:
  - OneTime: Supports single, fixed payments without future charges.
  - Recurring: Supports fixed recurring charges, allowing for subscription management and updates via webhooks.
  - Off Session: Supports charging customers without their immediate input, typically using stored payment methods.
- Logo: Upload a logo to represent your payment provider in the marketplace.

---

### 3. Set the App Profile

In the profile section, set the category to **Third Party Provider**. This ensures your app appears correctly in the App Marketplace and is visible on the Payments > Integrations page for improved discoverability.

---

### 4. Develop Custom Pages

Create publicly hosted pages for payment-related credentials collection and other features. These pages are loaded in an iFrame within the App Details page after installation.

After installation, the custom page is opened directly, making it easily accessible for users.

From Payments > Integrations, if your app is already installed, users can click on "Manage Integration" to access this custom page.

---

### 5. Testing and Launch

Test the integration in test mode across different payment channels in HighLevel.

Once testing is successful, launch your app in the marketplace.

---

## App Installation and Configuration

### 1. App Installation Flow

- Whenever your app is installed in a location, a new tab will open immediately with the oauth code on the redirect URL provided earlier in config.
- Once the app is installed, the configured custom page is loaded.
- In parallel, HighLevel payments expects an [API](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration) call with some basic config for payment integration. This creates a basic config in HighLevel payments for your payments app, as well as starts showing the payment app as a payment option in Integrations page.

```json
{
  "name": "String", //Name of the integration shown in GHL everywhere
  "description": "String", //A short description/tagline for payments app. Shown in Payments > Integrations page
  "imageUrl": "String", // Public image url for payment provider logo to be shown in GHL
  "locationId": "String", // Sub-account ID where the app is installed
  "queryUrl": "String", // A url which received different requests for all queries related to payments. Ex. Verify, Refund etc.
  "paymentsUrl": "String" // Public page url loaded in Iframe for making payments on frontend
}
```

- Once the app is installed, the obvious next step for users should be to add relevant payment config (public keys, merchant Id etc.) required for the configuration of this payment gateway. Two kind of configs are needed for any payment provider, a **test mode** and a **live mode config**. ***test mode config** is used for testing payments where no real money is charged* ***live mode** config is used by Customer for real payment where actual money is charged from valid cards/Banks.*
- Once any user is updating the live or test config in the App Custom Page, HighLevel payments expects a test and live mode config update as well in following format. Please run this API [Connect config API](https://marketplace.gohighlevel.com/docs/ghl/payments/create-config). The two main parameters required for test and live mode config on Highlevel payments side are:
- `apiKey:` This key will be used for verification in backend calls made from Highelevel server to your server.
- `publishableKey:` Public api key used for frontend verification while initiating payment.
- Once the liveMode or testMode keys are added, that particular mode of payments can be used on HighLevel payments. The last step is to set your app as a default payment provider for that Sub-account. That can be done in `Payments > Integrations > Your app > Set as Default`

---

## Payment Flow Overview

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155027292624/original/ABr_dqmtRIFFqkbsa9G9sb53_lziRbfpSA.png?1717764603)

<br>

### 1. Initiating Payment

When the `paymentsUrl` is loaded in an iframe, dispatch a `custom_provider_ready` event:

```json
{
  "type": "custom_provider_ready",
  "loaded": true
}
```

HighLevel then sends a `payment_initiate_props` event containing payment details:

```json
{
  "type": "payment_initiate_props",
  "publishableKey": "your_publishable_key",
  "amount": 100.00,
  "currency": "USD",
  "mode": "payment",
  "productDetails": {
    "productId": "prod_123",
    "priceId": "price_123"
  },
  "contact": {
    "id": "contact_123",
    "name": "John Doe",
    "email": "john@example.com",
    "contact": "+1234567890"
  },
  "orderId": "order_123",
  "transactionId": "txn_123",
  "subscriptionId": "sub_123",
  "locationId": "location_123"
}
```

---

### 2. Handling Payment Outcomes

- **Success:** Dispatch `custom_element_success_response` with `chargeId`.

```json
{
  "type": "custom_element_success_response",
  "chargeId": "charge_123"
}
```

- **Failure:** Dispatch `custom_element_error_response` with error description.

```json
{
  "type": "custom_element_error_response",
  "error": {
    "description": "Payment failed due to insufficient funds."
  }
}
```

- **Cancellation:** Dispatch `custom_element_close_response`.

```json
{
  "type": "custom_element_close_response"
}
```

---

### 3. Payment Verification

HighLevel sends a POST request to your `queryUrl` to verify the payment:

```json
{
  "type": "verify",
  "transactionId": "txn_123",
  "apiKey": "your_api_key",
  "chargeId": "charge_123",
  "subscriptionId": "sub_123"
}
```

**Respond with:**

- Success: `{"success": true}`
- Failure: `{"failed": true}`
- Pending: `{"success": false}`

---

## Managing Payment Methods

### 1. Adding a Payment Method

Dispatch `custom_provider_ready` with `addCardOnFileSupported` set to true:

```json
{
  "type": "custom_provider_ready",
  "loaded": true,
  "addCardOnFileSupported": true
}
```

HighLevel sends a `setup_initiate_props` event:

```json
{
  "type": "setup_initiate_props",
  "publishableKey": "your_publishable_key",
  "currency": "USD",
  "mode": "setup",
  "contact": {
    "id": "contact_123"
  },
  "locationId": "location_123"
}
```

Upon successful addition, dispatch `custom_element_success_response`.<br> On failure, dispatch `custom_element_error_response` with an error description.

---

### 2. Listing Payment Methods

HighLevel sends a POST request to your `queryUrl`:

```json
{
  "locationId": "location_123",
  "contactId": "contact_123",
  "apiKey": "your_api_key",
  "type": "list_payment_methods"
}
```

Respond with an array of payment methods:

```json
[
  {
    "id": "pm_123",
    "type": "card",
    "title": "Visa",
    "subTitle": "**** **** **** 4242",
    "expiry": "12/25",
    "customerId": "cust_123",
    "imageUrl": "https://yourdomain.com/visa.png"
  }
]
```

---

### 3. Charging a Payment Method

HighLevel sends a POST request to your `queryUrl`:

```json
{
  "paymentMethodId": "pm_123",
  "contactId": "contact_123",
  "transactionId": "txn_123",
  "chargeDescription": "Invoice #123",
  "amount": 100.00,
  "currency": "USD",
  "apiKey": "your_api_key",
  "type": "charge_payment"
}
```

Respond with:

```json
{
  "success": true,
  "failed": false,
  "chargeId": "charge_123",
  "message": "Payment successful",
  "chargeSnapshot": {
    "id": "charge_123",
    "status": "succeeded",
    "amount": 100.00,
    "chargeId": "charge_123",
    "chargedAt": 1617187200
  }
}
```

---

## Handling Refunds

To process refunds, handle the following event dispatched by HighLevel:

```json
{
  "type": "refund",
  "amount": 50.00,
  "transactionId": "txn_123"
}
```

Process the refund accordingly and update the transaction status in your system. Refund transactions can be partial, and a single transaction can have multiple refund requests as long as the sum of their amount is less than or equal to the transaction amount.

---

## Webhook Events

HighLevel sends webhook events to notify about various payment-related activities. Ensure your server can handle POST requests at:

`https://backend.leadconnectorhq.com/payments/custom-provider/webhook`

**Supported Events:**

- subscription.trialing
- subscription.active
- subscription.updated
- subscription.charged
- payment.captured

**Sample Payload:**

```json
{
  "event": "payment.captured",
  "chargeId": "charge_123",
  "ghlTransactionId": "txn_123",
  "chargeSnapshot": {
    "status": "succeeded",
    "amount": 100.00,
    "chargeId": "charge_123",
    "chargedAt": 1617187200
  },
  "locationId": "location_123",
  "apiKey": "your_api_key"
}
```

---

## Understanding the Payment Flow

The payment flow involves the following steps:

1. **App Installation:** Users install your payment app from the HighLevel Marketplace.
1. **OAuth Flow:** Upon installation, users are redirected to your specified Redirect URL with a code parameter. Exchange this code for an OAuth access token to authenticate API calls.
1. **Payment Processing:** Your service handles payment requests from HighLevel, interacting with your payment gateway as needed.
1. **Webhooks:** Your webhook endpoint receives events such as app installation or uninstallation, allowing you to manage app states accordingly.
1. **Custom Pages:** Users access custom pages within HighLevel to manage payment settings and view transaction details.

---

## Frequently Asked Questions

**Q: Can I integrate any payment gateway with HighLevel?**<br> Yes, by following this framework, you can integrate any payment provider with HighLevel.

**Q: What types of payments can my custom provider support?**<br> Your provider can support one-time payments, recurring payments, and off-session payments, depending on your configuration.

**Q: How do I ensure secure communication between HighLevel and my service?**<br> Use OAuth for authentication, securely store client keys and the SSO key, and implement HTTPS for all endpoints.

**Q: Where can I find more technical details about the OAuth flow and API endpoints?**<br> Refer to the HighLevel API Documentation for comprehensive information on OAuth flows and API usage.

---

For a detailed walkthrough and additional information, refer to the official HighLevel guide on [How to Build a Custom Payments Integration on the Platform.](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform)

---

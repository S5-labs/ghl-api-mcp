> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/ProviderOutboundMessage). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Conversation Provider - Outbound Message

Called whenever a user sends a message to a contact and has a custom provider as the default channel in the settings.

> Conversation Provider - Outbound Message differs from the structure of our other webhooks which may appear similar upon first glance however, the documentation below is accurate and only what is listed will be necessary for a successful execution.

| Channel | Supported Modules |
| --- | --- |
| SMS | Web App, Mobile App, Workflows, Bulk Actions |
| Email | Web App, Mobile App, Workflows, Bulk Actions |

## Security: Verifying Webhook Authenticity

Deliveries to your Conversation Provider **Delivery URL** can be spoofed by malicious actors. Always verify that requests are coming from our platform.

### Why Verification is Important

Treat your Delivery URL like any other webhook endpoint: verify the signature before you process the JSON body or send messages on behalf of a contact.

### Signature Headers

We sign the **raw JSON request body** (the same bytes in the POST). Conversation Provider outbound deliveries use the **same signing approach** as [platform webhook events](https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide#security-verifying-webhook-authenticity), with one difference: only the current Ed25519 header is sent.

| Header | Algorithm | Status on Delivery URL |
| --- | --- | --- |
| `X-GHL-Signature` | Ed25519 | **Sent** — verify this header. |
| `X-WH-Signature` | RSA-SHA256 | **Not sent** — legacy header used on some OAuth app webhooks only. See the [Webhook Integration Guide](https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide#signature-headers). |

Platform webhooks vs Delivery URL

OAuth app webhooks may include both `X-WH-Signature` and `X-GHL-Signature` during the transition period. **Delivery URL** posts include **`X-GHL-Signature` only.** Use the Ed25519 public key below (same key as platform webhooks).

### How to Verify

We sign the webhook body with our private key. You verify it using the public key below. Read the **raw request body** as UTF-8 text before parsing JSON so the signed bytes match what we sent (including `timestamp` and `webhookId` when present).

### GHL Signature (Ed25519) public key — for `X-GHL-Signature`

Use this key to verify the `X-GHL-Signature` header. It is the **same key** documented in the [Webhook Integration Guide](https://marketplace.gohighlevel.com/docs/webhook/WebhookIntegrationGuide#ghl-signature-ed25519-public-key--for-x-ghl-signature).

```text
-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEAi2HR1srL4o18O8BRa7gVJY7G7bupbN3H9AwJrHCDiOg=
-----END PUBLIC KEY-----
```

**Verifying the GHL signature:**

```javascript
const crypto = require('crypto');
const ghlPublicKey = `<paste_ghl_public_key_above>`;

function verifyGhl(payload, signature, publicKeyPem) {
  if (!signature || signature === 'N/A') return { ok: false, reason: 'no signature' };
  try {
    const payloadBuffer = Buffer.from(payload, 'utf8');
    const signatureBuffer = Buffer.from(signature, 'base64');
    const ok = crypto.verify(null, payloadBuffer, publicKeyPem, signatureBuffer);
    return { ok, reason: ok ? null : 'verify failed' };
  } catch (e) {
    return { ok: false, reason: e.message };
  }
}
```

**Recommended verification flow:** Read the raw body, verify `X-GHL-Signature` using the Ed25519 public key, then parse JSON. Reject the request if the header is missing or verification fails.

#### Schema

```json
{
  "type": "object",
  "properties": {
    "contactId": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },
    "messageId": {
      "type": "string"
    },
    "emailMessageId": {
      "type": "string"
    },
    "type": {
      "type": "Email/SMS"
    },
    "attachments": {
      "type": "array"
    },
    "message": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "emailTo": {
      "type": "string"
    },
    "emailFrom": {
      "type": "string"
    },
    "html": {
      "type": "string"
    },
    "subject": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  }
}
```

#### Example for SMS

```json
{
  "contactId": "GKBhT6BfwY9mjzXAU3sq",
  "locationId": "GKAWb4yu7A4LSc0skQ6g",
  "messageId": "GKJxs4P5L8dWc5CFUITM",
  "type": "SMS",
  "phone": "+15864603685",
  "message": "The text message to be sent to the contact",
  "attachments": ["https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"],
  "userId": "GK56r6wdJDrkUPd0xsmx"
}
```

#### Example for Email

```json
{
  "contactId": "GKKFF0QB9gV8fGA6zEbr",
  "locationId": "GKifVDyQeo7nwe27vMP0",
  "messageId": "GK56r6wdJDrkUPd0xsmx",
  "emailMessageId": "GK56r6wdJDrkUPd0xsmx",
  "type": "Email",
  "emailTo": ["abc@gmail.com"],
  "emailFrom": "From Name <email@gmail.com>",
  "attachments": ["https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"],
  "html": "<div style=\"font-family: verdana, geneva; font-size: 11pt;\"><p>Testing an outobund email from custom provider.</p></div>",
  "subject": "Subject from Conversation Page",
  "userId": "GK56r6wdJDrkUPd0xsmx"
}
```

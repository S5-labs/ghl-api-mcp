> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/email-isv/verify-email). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Email Verification

**Endpoint:** `POST /email/verify`

Verify Email

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location Id, The email verification charges will be deducted from this location (if rebilling is enabled) / company wallet

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**type**stringrequiredEmail Verification typeAvailable options`email``contact`**verify**stringrequiredEmail Verification recepient (email address / contactId)

```json
{
  "type": "email",
  "verify": "abc@xyz.com"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

oneOfEmailVerifiedV3ResponseDtoEmailNotVerifiedResponseDtoLeadConnectorRecommendationDto**reason**string[]Reason for email verification failure**result**stringrequiredEmail verification resultAvailable options`deliverable``undeliverable``do_not_send``unknown``catch_all`**risk**stringrequiredRisk level of email sending to bounceAvailable options`high``low``medium``unknown`**address**stringrequiredEmail address**leadConnectorRecommendation**objectLead Connector email verification recommendation

```json
{
  "reason": [
    "mailbox_does_not_exist"
  ],
  "result": "undeliverable",
  "risk": "low",
  "address": "abc@xyz.com",
  "leadConnectorRecommendation": {
    "isEmailValid": false
  }
}
```

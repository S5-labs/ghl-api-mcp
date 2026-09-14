> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/allow-attach-rebilling). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Allow Attach Rebilling

**Endpoint:** `POST /saas/allow-attach-rebilling/:locationId`

Marks a SaaS sub-account as awaiting rebilling attach and optionally stores the rebilling configuration that should be applied when the rebilling config is created. Sets payment_pending on the sub-account. Only allowed when the sub-account is in setup_pending state.

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

Location ID (Sub-account) to allow attach rebilling for

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**companyId**stringrequiredCompany ID owning the location**attachedRebillingConfig**objectMap of rebilling product code to its config. When provided, this gets stored on the sub-account so it can be applied when the rebilling config is created. Omit to only mark the sub-account as awaiting rebilling attach without any pre-configured products. Possible product keys: `contentAI`, `workflow_premium_actions`, `workflow_ai`, `conversationAI`, `whatsApp`, `reviewsAI`, `EmailVerification`, `funnelAI`, `domainPurchase`, `Phone`, `Email`, `agentStudio`, `askai`, `aiStudio`.

```json
{
  "companyId": "5DP4iH6HLkQsiKESj6rh",
  "attachedRebillingConfig": {
    "EmailVerification": {
      "enabled": true,
      "markup": 4,
      "price": 0.0025
    },
    "Phone": {
      "enabled": true,
      "markup": 3
    },
    "agentStudio": {
      "enabled": true,
      "markup": 8,
      "price": 0.25
    },
    "contentAI": {
      "enabled": true,
      "markup": 5,
      "price": 0.09
    },
    "domainPurchase": {
      "enabled": true,
      "markup": 3
    }
  }
}
```

application/json

Allow attach rebilling completed successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates if the allow attach rebilling operation succeeded**locationId**stringrequiredLocation ID the rebilling config was attached to**attachedRebillingConfig**objectrequiredStored rebilling configuration on the location. Markup is the internal percentage value converted from the request multiplier (e.g. 4 -> 300%, 3 -> 200%).

```json
{
  "success": true,
  "locationId": "AUKAtFVo0lWezBsBQ3FE",
  "attachedRebillingConfig": {
    "EmailVerification": {
      "enabled": true,
      "markup": 300,
      "price": 0.0025
    },
    "Phone": {
      "enabled": true,
      "markup": 200
    }
  }
}
```

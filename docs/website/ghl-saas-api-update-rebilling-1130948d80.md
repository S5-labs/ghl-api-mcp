> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-rebilling). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Rebilling

**Endpoint:** `POST /saas/update-rebilling/:companyId`

Bulk update rebilling for given locationIds

## Request

**Version**

string

required

API Version

Available options

`v3`

**companyId**

string

required

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**product**stringrequiredThe product to update rebilling forAvailable options`workflow_premium_actions``EmailVerification``contentAI``workflow_ai``whatsApp``reviewsAI``domainPurchase``funnelAI``agentStudio``askai``aiStudio``conversation_AI`**locationIds**string[]requiredArray of location IDs to update rebilling for**config**objectrequiredConfiguration for rebilling settings

```json
{
  "product": "contentAI",
  "locationIds": [
    "zzyG7A4x6bRJl5SlhQhH",
    "Vygq7VgXCDfg3xnl8TBR"
  ],
  "config": {
    "optIn": true,
    "enabled": true,
    "markup": 5
  }
}
```

application/json

Result of the bulk rebilling update.

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates if the rebilling update was successful**location_updated**string[]requiredIDs of the sub-accounts whose rebilling was updated**message**stringHuman-readable summary of the outcome (present on success/partial updates)**error**stringnullablerequiredReason some or all locations failed to update; null on full success

```json
{
  "success": true,
  "location_updated": [
    "AUKAtFVo0lWezBsBQ3FE"
  ],
  "message": "Rebilling updated for 3 locations.",
  "error": "Saas Mode not activated"
}
```

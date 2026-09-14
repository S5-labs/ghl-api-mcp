> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/SaaSPlanCreate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# SaaS Plan Created

## Overview

This webhook response is triggered when a new SaaS subscription plan is created in the system. The webhook provides comprehensive information about the plan including its features, pricing tiers, and configuration details. This is particularly useful for systems that need to track plan creation events for billing, analytics, or integration purposes.

For example, when a company creates a new subscription plan for their SaaS product:

- The **plan** represents a subscription tier with specific features and pricing
- The **saasProducts** array contains all the features included in this plan
- The **prices** array defines different billing intervals (monthly, yearly) with their respective amounts
- The **addOns** array can include additional services or features that can be purchased separately

## Schema

The webhook response follows the JSON schema below:

```json
{
  "type": "object",
  "properties": {
    "planId": {
      "type": "string",
      "description": "Unique identifier for the plan"
    },
    "title": {
      "type": "string",
      "description": "Human-readable name of the plan"
    },
    "description": {
      "type": "string",
      "description": "Detailed description of the plan"
    },
    "saasProducts": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of product features included in this plan"
    },
    "addOns": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of additional services or features available as add-ons"
    },
    "planLevel": {
      "type": "number",
      "description": "Numeric level indicating the tier of the plan"
    },
    "trialPeriod": {
      "type": "number",
      "description": "Duration of the trial period in days"
    },
    "prices": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Unique identifier for the price"
          },
          "billingInterval": {
            "type": "string",
            "description": "Billing frequency (e.g., 'month', 'year')"
          },
          "active": {
            "type": "boolean",
            "description": "Whether this price is currently active"
          },
          "amount": {
            "type": "number",
            "description": "Price amount in cents"
          },
          "currency": {
            "type": "string",
            "description": "Currency code (e.g., 'usd')"
          },
          "symbol": {
            "type": "string",
            "description": "Currency symbol (e.g., '$')"
          }
        },
        "required": ["id", "billingInterval", "active", "amount", "currency", "symbol"]
      },
      "description": "Array of pricing options for different billing intervals"
    },
    "categoryId": {
      "type": "string",
      "description": "Identifier for the plan category"
    },
    "snapshotId": {
      "type": "string",
      "description": "Identifier for the plan snapshot"
    },
    "productId": {
      "type": "string",
      "description": "Identifier for the associated product"
    },
    "isSaaSV2": {
      "type": "boolean",
      "description": "Flag indicating if this is a SaaS V2 plan"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time",
      "description": "Timestamp when the plan was created"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time",
      "description": "Timestamp when the plan was last updated"
    }
  },
  "required": [
    "planId",
    "title",
    "description",
    "saasProducts",
    "addOns",
    "planLevel",
    "trialPeriod",
    "prices",
    "categoryId",
    "snapshotId",
    "productId",
    "isSaaSV2",
    "createdAt",
    "updatedAt"
  ]
}
```

## Field Descriptions

### `planId`

- Type: `string`
- Unique identifier for the created plan.

### `title`

- Type: `string`
- Human-readable name of the subscription plan (e.g., "Professional", "Enterprise").

### `description`

- Type: `string`
- Detailed description explaining what the plan includes and its benefits.

### `saasProducts`

- Type: `array[string]`
- List of product features and services included in this plan (e.g., "2-way-text-messaging", "crm", "email-marketing").

### `addOns`

- Type: `array[string]`
- List of additional services or features that can be purchased separately from the base plan.

### `planLevel`

- Type: `number`
- Numeric value indicating the tier or level of the plan (e.g., 1 for basic, 2 for professional, 3 for enterprise).

### `trialPeriod`

- Type: `number`
- Duration of the free trial period in days. Set to 0 if no trial is offered.

### `prices`

- Type: `array[object]`
- Array of pricing options for different billing intervals.

#### Price Object Fields:

- **`id`**: Unique identifier for the price (usually Stripe price ID)
- **`billingInterval`**: Billing frequency ("month", "year", etc.)
- **`active`**: Boolean indicating if this price is currently available
- **`amount`**: Price amount in cents (e.g., 29700 = $297.00)
- **`currency`**: Currency code (e.g., "usd")
- **`symbol`**: Currency symbol (e.g., "$")

### `categoryId`

- Type: `string`
- Identifier linking the plan to a specific category or grouping.

### `snapshotId`

- Type: `string`
- Identifier for the plan snapshot, used for versioning or backup purposes.

### `productId`

- Type: `string`
- Identifier for the associated product in the billing system (usually Stripe product ID).

### `isSaaSV2`

- Type: `boolean`
- Flag indicating whether this plan uses the newer SaaS V2 architecture.

### `createdAt`

- Type: `string` (ISO 8601 date-time)
- Timestamp when the plan was initially created.

### `updatedAt`

- Type: `string` (ISO 8601 date-time)
- Timestamp when the plan was last modified.

## Example Response

```json
{
  "type": "SaasPlanCreate",
  "companyId": "zzyG7A4x6bRJl5SlhQhH",
  "appId": "688c7eb11123320e907fe6e1",
  "versionId": "688c7eb11123320e907fe6e1",
  "description": "saas",
  "planId": "688c8e28e4080ecf4e9ad59a",
  "title": "test saas",
  "saasProducts": [
    "2-way-text-messaging",
    "gmb-messaging",
    "web-chat",
    "reputation-management",
    "facebook-messenger",
    "gmb-call-tracking",
    "missed-call-text-back",
    "text-to-pay",
    "calendar",
    "crm",
    "opportunities",
    "email-marketing",
    "funnels",
    "membership",
    "websites",
    "workflow",
    "form-builder",
    "survey-builder",
    "trigger-links",
    "sms-email-templates",
    "all-reports",
    "triggers",
    "campaigns",
    "social-planner",
    "invoice",
    "blogs",
    "affiliate-manager",
    "launchpad"
  ],
  "addOns": [],
  "planLevel": 3,
  "trialPeriod": 7,
  "userLimit": 0,
  "contactLimit": 0,
  "prices": [
    {
      "id": "price_1RrFciCScnf89tZoANu4chyo",
      "billingInterval": "month",
      "active": true,
      "amount": 19700,
      "currency": "usd",
      "symbol": "$"
    },
    {
      "id": "price_1RrFciCScnf89tZo8V8JTFdZ",
      "billingInterval": "year",
      "active": true,
      "amount": 197000,
      "currency": "usd",
      "symbol": "$"
    }
  ],
  "categoryId": "66f243418b7a302ee2a83856",
  "snapshotId": "",
  "productId": "prod_SmpH3W8OsYv51x",
  "isSaaSV2": false,
  "createdAt": "2025-08-01T09:51:36.329Z",
  "updatedAt": "2025-08-01T09:51:36.329Z"
}
```

## Additional Notes

- The webhook response is an array, allowing for bulk plan creation events.
- Price amounts are provided in cents to avoid floating-point precision issues.
- The `saasProducts` array contains feature identifiers that correspond to specific functionality in the system.
- The `isSaaSV2` flag helps distinguish between legacy and newer plan architectures.
- Ensure your webhook listener can handle the array structure of the response.
- The `traceId` can be used for debugging and correlating events across your system.

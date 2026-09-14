> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/ExternalAuthConnected). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# EXTERNAL_AUTH_CONNECTED

Called whenever external authentication (OAuth2 or Basic) is connected successfully for an app/location/company.

#### Schema

```json
{
  "type": "object",
  "properties": {
    "type": { "type": "string", "enum": ["EXTERNAL_AUTH_CONNECTED"] },
    "appId": { "type": "string" },
    "locationId": { "type": "string" },
    "companyId": { "type": "string" },
    "authType": { "type": "string", "enum": ["oauth2", "basic"] },
    "scopes": { "type": "string" },
    "isAutoRefreshTokenEnabled": { "type": "boolean" },
    "timestamp": { "type": "string", "format": "date-time" },
    "webhookId": { "type": "string" }
  },
  "required": ["type", "appId", "locationId", "companyId", "authType", "timestamp", "webhookId"]
}
```

- Note: `scopes` and `isAutoRefreshTokenEnabled` are present only for OAuth2 connections.

#### Example

- For OAuth2 External Auth Connection

```json
{
  "type": "EXTERNAL_AUTH_CONNECTED",
  "appId": "6800a826637cd0457e0d11e1",
  "locationId": "76sPakGvkoG3WyTyZkhk",
  "companyId": "zzyG7A4x6bRJl5SlhQhH",
  "authType": "oauth2",
  "scopes": "crm.objects.contacts.write crm.schemas.contacts.write oauth crm.schemas.contacts.read crm.objects.contacts.read",
  "isAutoRefreshTokenEnabled": true,
  "timestamp": "2025-05-19T12:48:50.972Z",
  "webhookId": "42f1d489-dc91-4749-a2a2-8c441989a3b5"
}
```

- For Basic Auth External Auth Connection

```json
{
  "type": "EXTERNAL_AUTH_CONNECTED",
  "appId": "66e96b579245705d69e5ba6a",
  "locationId": "76sPakGvkoG3WyTyZkhk",
  "companyId": "zzyG7A4x6bRJl5SlhQhH",
  "authType": "basic",
  "timestamp": "2025-05-19T15:40:36.811Z",
  "webhookId": "3b12bbc1-0be0-4678-aa76-771e88d27423"
}
```

- Note: The payload always includes `type`, `appId`, `locationId`, `companyId`, `authType`, `timestamp`, and `webhookId`. For OAuth2, `scopes` and `isAutoRefreshTokenEnabled` are also included.

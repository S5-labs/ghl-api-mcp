> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration-provider). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create White-label Integration Provider

**Endpoint:** `POST /payments/integrations/provider/whitelabel`

The "Create White-label Integration Provider" API allows adding a new payment provider integration to the system which is built on top of Authorize.net or NMI. Use this endpoint to create a integration provider with the specified details. Ensure that the required information is provided in the request payload. This endpoint can be only invoked using marketplace-app token

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredlocation Id / company Id based on altType**altType**stringrequiredAlt TypeAvailable options`location`**uniqueName**stringrequiredA unique name given to the integration provider, uniqueName must start and end with a character. Only lowercase characters and hyphens (-) are supported**title**stringrequiredThe title or name of the integration provider.**provider**stringrequiredThe type of payment provider associated with the integration provider.Available options`authorize-net``nmi`**description**stringrequiredA brief description providing additional information about the integration provider.**imageUrl**stringrequiredThe URL to an image representing the integration provider. The imageUrl should start with "https://" and ensure that this URL is publicly accessible.

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "uniqueName": "easy-direct",
  "title": "Title",
  "provider": {
    "AUTHORIZE_NET": "authorize-net",
    "NMI": "nmi"
  },
  "description": "Description",
  "imageUrl": "https://example.com/image.jpg"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredThe unique identifier of the integration provider.**altId**stringrequiredThe altId / locationId of the integration provider.**altType**stringrequiredThe altType of the integration provider.**title**stringrequiredThe title or name of the integration provider.**route**stringrequiredThe route name associated with the integration provider.**provider**stringrequiredThe payment provider associated with the integration provider.**description**stringrequiredA brief description providing additional information about the integration provider.**imageUrl**stringrequiredThe URL to an image representing the integration provider.**createdAt**string<date-time>requiredThe timestamp when the integration provider was created.**updatedAt**string<date-time>requiredThe timestamp when the integration provider was last updated.

```json
{
  "_id": "65cb47dda50f4f13ced4b870",
  "altId": "Z4Bxl8J4SaPEPLq9IQ8g",
  "altType": "location",
  "title": "Example",
  "route": "epd",
  "provider": "nmi",
  "description": "Lorem",
  "imageUrl": "https://example.com/assets/pmd/img/payments/nmi-logo.webp",
  "createdAt": "2024-02-13T10:43:41.026Z",
  "updatedAt": "2024-02-13T10:43:41.026Z"
}
```

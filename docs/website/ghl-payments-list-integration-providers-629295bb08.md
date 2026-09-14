> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/list-integration-providers). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List White-label Integration Providers

**Endpoint:** `GET /payments/integrations/provider/whitelabel`

The "List White-label Integration Providers" API allows to retrieve a paginated list of integration providers. Customize your results by filtering whitelabel integration providers(which are built directly on top of Authorize.net or NMI) based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve integration provider information.

## Request

**Version**

string

required

API Version

Available options

`v3`

**altId**

string

required

location Id / company Id based on altType

**altType**

string

required

Alt Type

Available options

`location`

**limit**

number

The maximum number of items to be included in a single page of results

`0`

**offset**

number

The starting index of the page, indicating the position from which the results should be retrieved.

`0`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**providers**objectrequiredlist of integration provider.

```json
{
  "providers": {
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
}
```

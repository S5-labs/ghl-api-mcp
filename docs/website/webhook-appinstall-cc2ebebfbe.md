> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/AppInstall). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# App

Called whenever an app is installed

#### Schema

```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "appId": {
      "type": "string"
    },
    "companyId": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    },
    "planId": {
      "type": "string"
    },
    "trial": {
      "type": "object",
      "properties": {
        "onTrial": {
          "type": "boolean"
        },
        "trialDuration": {
          "type": "number"
        },
        "trialStartDate": {
          "type": "Date"
        }
      }
    },
    "isWhitelabelCompany": {
      "type": "boolean"
    },
    "whitelabelDetails": {
      "type": "object",
      "properties": {
        "domain": {
          "type": "string"
        },
        "logoUrl": {
          "type": "string"
        }
      }
    },
    "companyName": {
      "type": "string"
    }
  }
}
```

- Note: The User ID and Company ID may be available when a new token is generated. In case of app installation via future locations, you may not get these fields.

#### Example

- For Location Level App Install if company is whitelabeled

```json
{
  "type": "INSTALL",
  "appId": "ve9EPM428h8vShlRW1KT",
  "locationId": "otg8dTQqGLh3Q6iQI55w",
  "companyId": "otg8dTQqGLh3Q6iQI55w",
  "userId": "otg8dTQqGLh3Q6iQI55w",
  "planId": "66a0419a0dffa47fb5f8b22f",
  "trial": {
    "onTrial": true,
    "trialDuration": 10,
    "trialStartDate": "2024-07-23T23:54:51.264Z"
  },
  "isWhitelabelCompany": true,
  "whitelabelDetails": {
    "domain": "example.com",
    "logoUrl": "https://example.com/logo.png"
  },
  "companyName": "Example Company"
}
```

- For Location Level App Install if company is non whitelabeled

```json
{
  "type": "INSTALL",
  "appId": "ve9EPM428h8vShlRW1KT",
  "locationId": "otg8dTQqGLh3Q6iQI55w",
  "companyId": "otg8dTQqGLh3Q6iQI55w",
  "userId": "otg8dTQqGLh3Q6iQI55w",
  "planId": "66a0419a0dffa47fb5f8b22f",
  "trial": {
    "onTrial": true,
    "trialDuration": 10,
    "trialStartDate": "2024-07-23T23:54:51.264Z"
  },
  "isWhitelabelCompany": false,
  "whitelabelDetails": {},
  "companyName": "Example Company"
}
```

- For Agency Level App Install

```json
{
  "type": "INSTALL",
  "appId": "ve9EPM428h8vShlRW1KT",
  "companyId": "otg8dTQqGLh3Q6iQI55w",
  "planId": "66a0419a0dffa47fb5f8b22f",
  "trial": {
    "onTrial": true,
    "trialDuration": 10,
    "trialStartDate": "2024-07-23T23:54:51.264Z"
  }
}
```

> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/CampaignStatusUpdate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Campaign

Called whenever a campaign status is updated

#### Schema

```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "contactId": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "templateId": {
      "type": "string"
    },
    "replied": {
      "type": "string"
    },
    "dateAdded": {
      "type": "string"
    }
  }
}
```

#### Example

```json
{
  "type": "CampaignStatusUpdate",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "id": "2hxvXh8Fjc69SvujEWMD",
  "contactId": "CWBf1PR9LvvBkcYqiXlc",
  "status": "paused",
  "templateId": "Y2I9XM7aO1hncuSOlc9L",
  "replied": "Loram ipsum",
  "dateAdded": "2021-11-26T12:41:02.193Z"
}
```

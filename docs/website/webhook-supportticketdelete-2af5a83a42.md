> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketDelete). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Support Ticket Delete

Called whenever a support ticket is deleted.

#### Schema

```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "example": "SupportTicketDelete"
    },
    "ticketId": {
      "type": "string",
      "example": "66a0419a0dffa47fb5f8b22f"
    },
    "appId": {
      "type": "string",
      "example": "ve9EPM428h8vShlRW1KT"
    },
    "companyId": {
      "type": "string",
      "example": "otg8dTQqGLh3Q6iQI55w"
    },
    "locationId": {
      "type": "string",
      "example": "otg8dTQqGLh3Q6iQI55w"
    },
    "versionId": {
      "type": "string",
      "example": "66a0419a0dffa47fb5f8b22f"
    }
  }
}
```

- Note: `locationId` and `versionId` may be absent depending on the app and how the ticket was raised.

#### Example

```json
{
  "type": "SupportTicketDelete",
  "ticketId": "66a0419a0dffa47fb5f8b22f",
  "appId": "ve9EPM428h8vShlRW1KT",
  "companyId": "otg8dTQqGLh3Q6iQI55w",
  "locationId": "otg8dTQqGLh3Q6iQI55w",
  "versionId": "66a0419a0dffa47fb5f8b22f"
}
```

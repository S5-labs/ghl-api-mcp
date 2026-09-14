> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/export-messages-by-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Export messages by location ID

**Endpoint:** `GET /conversations/messages/export`

Export messages for a specific location with cursor-based pagination support.

**Channel Filtering Behavior:**

- **When channel is omitted:** Returns all non-email message types, including messages that don't belong to any specific channel.
- **When channel=Email:** Returns email messages only.
- **When channel is specified (SMS, Call, WhatsApp, etc.):** Returns messages for that specific channel.

**Limitations:**

- Group Chat and SMS Review Request message types are not supported.
- Cursor validity is 2 minutes from the last request made.

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

Location ID to filter messages by

**channel**

string

Filter by message channel. Optional - when not provided, all non-email message types will be returned including activity messages (opportunity updates, appointments, etc.). To fetch email messages, you must explicitly set channel=Email.

Available options

`Call`

`SMS`

`Email`

`WhatsApp`

`Instagram`

`Facebook`

**limit**

number

Number of messages to return per page

**Possible values:** `>= 10` and `<= 1000`

`100`

**cursor**

string

Cursor for pagination. Pass the nextCursor from previous response to get next page.

**sortBy**

string

Field to sort by

Available options

`createdAt`

`updatedAt`

**sortOrder**

string

Sort order

Available options

`asc`

`desc`

**conversationId**

string

Filter messages by conversation ID

**contactId**

string

Filter messages by contact ID

**startDate**

string

Start date to filter messages by

**endDate**

string

End date to filter messages by

application/json

List of messages for the location with pagination details.

- application/json

- Schema
- Example (auto)

**Schema**

**messages**object[]requiredArray of messages**nextCursor**stringCursor for fetching next page. Null if no more results.**total**numberrequiredTotal number of messages matching the query

```json
{
  "messages": [
    {
      "id": "ve9EPM428h8vShlRW1KT",
      "altId": "msg_123456789",
      "type": 1,
      "messageType": "SMS",
      "locationId": "ve9EPM428h8vShlRW1KT",
      "contactId": "ve9EPM428h8vShlRW1KT",
      "conversationId": "ve9EPM428h8vShlRW1KT",
      "dateAdded": "2024-03-27T18:13:49.000Z",
      "body": "Hi there",
      "direction": "inbound",
      "status": "connected",
      "contentType": "text/plain",
      "attachments": [
        "string"
      ],
      "meta": {
        "callDuration": 120,
        "callStatus": "completed",
        "email": {
          "email": {
            "messageIds": [
              "ve9EPM428kjkvShlRW1KT",
              "ve9EPs1028kjkvShlRW1KT"
            ]
          }
        },
        "ig": {
          "ig": {
            "page_id": "1234567890",
            "page_name": "Instagram Page"
          }
        },
        "fb": {
          "fb": {
            "page_id": "1234567890",
            "page_name": "Facebook Page"
          }
        }
      },
      "source": "workflow",
      "userId": "ve9EPM428kjkvShlRW1KT",
      "conversationProviderId": "ve9EPM428kjkvShlRW1KT",
      "chatWidgetId": "67b0cc8cf14b19d85ace7s35",
      "from": "+14155551234",
      "to": "+14155555678",
      "error": "string"
    }
  ],
  "nextCursor": "a748514c-f49e-4fa8-9954-b53afc78d81d",
  "total": 1234
}
```

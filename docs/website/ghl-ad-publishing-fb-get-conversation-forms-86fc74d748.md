> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-conversation-forms). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get conversation forms

**Endpoint:** `GET /ad-publishing/facebook/conversation-forms`

Retrieve Facebook conversation lead forms for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100) the response is a paginated `{ conversationForms, paging }` envelope; pass `after` (from `paging.next`) to fetch the next batch.

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

Location identifier

**limit**

string

Page size for a paginated fetch (max 100). When set, the response is a { conversationForms, paging } envelope instead of a plain array.

**after**

string

Opaque cursor for the next batch, taken from the previous response paging.next

application/json

A plain array of conversation forms (default), or a { conversationForms, paging } envelope when `limit` is provided. Sorted newest first in both cases.

- application/json

- Schema
- Example (auto)

**Schema**

oneOfobject[]PaginatedFacebookConversationFormsDTOArray [**id**stringrequiredConversation form id**name**stringrequiredForm name**text**stringrequiredOpening message shown when the conversation starts**locationId**stringrequiredOwning location**questions**object[]requiredPrompt and canned-reply pairs**createdAt**stringrequiredCreation time, ISO-8601**updatedAt**stringrequiredLast modification time, ISO-8601]

```json
[
  {
    "id": "6a831fb01aa9a84ff992aefc",
    "name": "Untitled form 17 Aug 26, 08:20 PM",
    "text": "Hi there! Please let us know how we can help you.",
    "locationId": "fRMewNQIxSyZ5R4nQyit",
    "questions": [
      {
        "question": "Your question",
        "response": "Click the link below to view the product page.",
        "_id": "6a831fb01aa9a84ff992aefd"
      }
    ],
    "createdAt": "2026-08-17T14:50:24.444Z",
    "updatedAt": "2026-08-17T14:50:24.444Z"
  }
]
```

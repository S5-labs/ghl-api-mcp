> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-conversation-form). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create conversation form

**Endpoint:** `POST /ad-publishing/facebook/conversation-forms`

Create a Messenger conversation form. Note the created record is returned in its raw stored form rather than the shape the listing endpoint uses: the identifier comes back as `_id` instead of `id`, and the internal `__v` version key is included.

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

**locationId**stringrequiredLocation identifier**name**stringrequiredConversation form name**text**stringrequiredWelcome message text**questions**object[]requiredQuick-reply questions shown in the welcome message of the conversation form

```json
{
  "locationId": "loc_abc123",
  "name": "Welcome Form",
  "text": "Hi! How can we help?",
  "questions": [
    {
      "question": "How can we help?",
      "response": "Thanks for reaching out! A team member will assist you shortly."
    },
    {
      "question": "I want to learn more",
      "response": "Great! Here is a link to our services."
    }
  ]
}
```

application/json

The stored conversation form

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredConversation form id. Note `_id`, not the `id` the listing endpoint returns for the same record.**name**stringrequiredForm name**text**stringrequiredOpening message**locationId**stringrequiredOwning location**questions**object[]requiredPrompt and canned-reply pairs as stored**createdAt**stringrequiredCreation time, ISO-8601**updatedAt**stringrequiredLast modification time, ISO-8601**__v**numberMongo document version key, leaked by this branch only. Not part of the contract.

```json
{
  "_id": "6a8666ec867e604d24f5a49b",
  "name": "Untitled form 20 Aug 26, 08:00 AM",
  "text": "Hi there! Please let us know how we can help you.",
  "locationId": "fRMewNQIxSyZ5R4nQyit",
  "questions": [
    {
      "question": "Your question",
      "response": "Click the link below to view the product page.",
      "_id": "6a831fb01aa9a84ff992aefd"
    }
  ],
  "createdAt": "2026-08-20T02:31:08.055Z",
  "updatedAt": "2026-08-20T02:31:08.055Z",
  "__v": 0
}
```

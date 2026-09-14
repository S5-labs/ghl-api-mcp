> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/list-chat-widgets). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Chat Widgets

**Endpoint:** `GET /chat-widget/list`

Retrieves a list of chat widgets for a specific location

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

The location ID

**offset**

string

required

Row offset. Defaults to 0, capped at 10000.

**limit**

string

required

Page size. Must be greater than 0, capped at 100.

**chatType**

string

The type of chat widget. Supports normal ChatType values, plus the virtual umbrella "webChat" (maps to facebookChat/emailChat/instagramChat/waChat).

Available options

`liveChat`

`waChat`

`emailChat`

`allInOneChat`

`voiceAiChat`

`facebookChat`

`instagramChat`

`webChat`

**excludeChatType**

string

The type of chat widget

Available options

`liveChat`

`waChat`

`emailChat`

`allInOneChat`

`voiceAiChat`

`facebookChat`

`instagramChat`

**voiceAiAgentId**

string

The voice AI agent ID

**creationSource**

string

The source that created the widget

Available options

`chat-widget`

`a2pCompliance`

`public-api`

`snapshot`

**excludeCreationSource**

string

Exclude widgets with this creation source

Available options

`chat-widget`

`a2pCompliance`

`public-api`

`snapshot`

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**chatWidgets**object[]requiredMatching chat widgets for this page**totalCount**numberrequiredTotal widgets matching the filters, ignoring limit and offset

```json
{
  "chatWidgets": [
    {
      "_id": "ve9EPM428h8vShlRWsss",
      "name": "Chat Widget 1",
      "chatType": "emailChat",
      "default": false,
      "creationSource": "chat-widget",
      "settings": {
        "legalMsg": "By submitting you agree to our terms.",
        "advanceSettings": {}
      },
      "createdAt": "2026-08-14T02:37:09.128Z",
      "updatedAt": "2026-08-18T07:21:26.939Z"
    }
  ],
  "totalCount": 42
}
```

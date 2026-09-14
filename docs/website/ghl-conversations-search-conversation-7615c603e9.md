> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/search-conversation). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Search Conversations

**Endpoint:** `GET /conversations/search`

Returns a list of all conversations matching the search criteria along with the sort and filter options selected.

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

Location Id

**contactId**

string

Contact Id

**assignedTo**

string

User IDs that conversations are assigned to. Multiple IDs can be provided as comma-separated values. Use "unassigned" to fetch conversations not assigned to any user.

**followers**

string

User IDs of followers to filter conversations by. Multiple IDs can be provided as comma-separated values.

**mentions**

string

User Id of the mention. Multiple values are comma separated.

**query**

string

Search paramater as a string

**sort**

string

Sort paramater - asc or desc

Available options

`asc`

`desc`

**startAfterDate**

any

Search to begin after the specified date - should contain the sort value of the last document

**id**

string

Id of the conversation

**limit**

number

Limit of conversations - Default is 20

**lastMessageType**

string

Type of the last message in the conversation as a string

Available options

`TYPE_CALL`

`TYPE_SMS`

`TYPE_EMAIL`

`TYPE_SMS_REVIEW_REQUEST`

`TYPE_WEBCHAT`

`TYPE_SMS_NO_SHOW_REQUEST`

`TYPE_CAMPAIGN_SMS`

`TYPE_CAMPAIGN_CALL`

`TYPE_CAMPAIGN_EMAIL`

`TYPE_CAMPAIGN_VOICEMAIL`

`TYPE_FACEBOOK`

`TYPE_CAMPAIGN_FACEBOOK`

**lastMessageAction**

string

Action of the last outbound message in the conversation as string.

Available options

`automated`

`manual`

**lastMessageDirection**

string

Direction of the last message in the conversation as string.

Available options

`inbound`

`outbound`

**status**

string

The status of the conversation to be filtered - all, read, unread, starred

Available options

`all`

`read`

`unread`

`starred`

`recents`

**sortBy**

string

The sorting of the conversation to be filtered as - manual messages or all messages

Available options

`last_manual_message_date`

`last_message_date`

`score_profile`

**sortScoreProfile**

string

Id of score profile on which sortBy.ScoreProfile should sort on

**scoreProfile**

string

Id of score profile on which conversations should get filtered out, works with scoreProfileMin & scoreProfileMax

**scoreProfileMin**

number

Minimum value for score

**scoreProfileMax**

number

Maximum value for score

application/json

Successfully fetched the conversations

- application/json

- Schema
- Example (auto)

**Schema**

**conversations**object[]requiredThe list of all conversations found for the given query**total**numberrequiredTotal Number of results found for the given query

```json
{
  "conversations": [
    {
      "id": "ABCHkzuJQ8ZMd4Te84GK",
      "contactId": "ABCHkzuJQ8ZMd4Te84GK",
      "locationId": "ABCHkzuJQ8ZMd4Te84GK",
      "lastMessageBody": "This is a sample message body",
      "lastMessageType": "TYPE_SMS",
      "type": "TYPE_PHONE",
      "unreadCount": 1,
      "fullName": "John Doe",
      "contactName": "John Doe Company",
      "email": "johndoe@mailingdomain.com",
      "phone": "+15550001234"
    }
  ],
  "total": 100
}
```

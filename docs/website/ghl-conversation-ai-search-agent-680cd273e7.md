> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/search-agent). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Search Agents

**Endpoint:** `GET /conversation-ai/agents/search`

Searches for AI agents based on various criteria including name, status, and configuration. Supports advanced filtering and full-text search capabilities.

## Request

**Version**

string

required

API Version

Available options

`v3`

**startAfter**

string

Start after is the agent id to start after, Serving as skip, send empty when first page

**limit**

number

Records per page

**query**

string

query to search on agent name, must be provided in lowercase

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**agents**object[]requiredList of agents matching the search criteria.**totalCount**numberrequiredTotal number of agents in the location (unfiltered count).**count**numberrequiredNumber of agents in the current response (filtered/paginated count).

```json
{
  "agents": [
    {
      "id": "emp_123",
      "name": "John Doe",
      "mode": "auto-pilot",
      "channels": [
        "SMS"
      ],
      "waitTime": 30,
      "waitTimeUnit": "seconds",
      "sleepEnabled": false,
      "actions": [],
      "isPrimary": false,
      "autoPilotMaxMessages": 25
    }
  ],
  "totalCount": 100,
  "count": 25
}
```

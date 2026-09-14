> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-opportunity-status). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Opportunity Status

**Endpoint:** `PUT /opportunities/:id/status`

Update Opportunity Status

## Request

**Version**

string

required

API Version

Available options

`v3`

**id**

string

required

Opportunity Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**status**stringrequiredNew status for the opportunityAvailable options`open``won``lost``abandoned``all`**lostReasonId**stringlost reason Id

```json
{
  "status": "open",
  "lostReasonId": "CLu7BaljjqrEjBGKTNNe"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredIndicates whether the operation was successful

```json
{
  "success": true
}
```

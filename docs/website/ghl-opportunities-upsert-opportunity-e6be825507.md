> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/upsert-opportunity). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upsert Opportunity

**Endpoint:** `POST /opportunities/upsert`

Upsert Opportunity

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

**id**stringopportunityId**pipelineId**stringrequiredpipeline Id**locationId**stringrequiredlocationId**followers**string[]requiredcontactId**isRemoveAllFollowers**booleanrequiredisRemoveAllFollowers**followersActionType**stringrequiredfollowers action typeAvailable options`add``remove`**name**stringname**status**stringCurrent status of the opportunityAvailable options`open``won``lost``abandoned``all`**pipelineStageId**stringIdentifier of the pipeline stage**monetaryValue**objectMonetary value of the opportunity**forecastExpectedCloseDate**stringExpected close date. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, or ISO 8601**forecastProbability**numberForecast probability**assignedTo**stringIdentifier of the user the opportunity is assigned to**lostReasonId**stringlost reason Id

```json
{
  "id": "yWQobCRIhRguQtD2llvk",
  "pipelineId": "bCkKGpDsyPP4peuKowkG",
  "locationId": "CLu7BaljjqrEjBGKTNNe",
  "followers": "LiKJ2vnRg5ETM8Z19K7",
  "isRemoveAllFollowers": true,
  "followersActionType": "add",
  "name": "opportunity name",
  "status": "open",
  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",
  "monetaryValue": 220,
  "forecastExpectedCloseDate": "2026-04-23",
  "forecastProbability": 20,
  "assignedTo": "082goXVW3lIExEQPOnd3",
  "lostReasonId": "CLu7BaljjqrEjBGKTNNe"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**opportunity**objectrequiredUpdated / New Opportunity**new**booleanrequiredIndicates whether the opportunity was newly created (true) or updated (false)

```json
{
  "opportunity": {},
  "new": true
}
```

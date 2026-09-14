> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/create-opportunity). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Opportunity

**Endpoint:** `POST /opportunities/`

Create Opportunity

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

**pipelineId**stringrequiredpipeline Id**locationId**stringrequiredIdentifier of the location (sub-account)**name**stringrequiredName of the opportunity**pipelineStageId**stringIdentifier of the pipeline stage**status**stringrequiredCurrent status of the opportunityAvailable options`open``won``lost``abandoned``all`**contactId**stringrequiredIdentifier of the contact linked to the opportunity**monetaryValue**numberMonetary value of the opportunity**forecastExpectedCloseDate**stringExpected close date. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, or ISO 8601**forecastProbability**numberForecast probability**assignedTo**stringIdentifier of the user the opportunity is assigned to**customFields**object[]Add custom fields to opportunities.

```json
{
  "pipelineId": "VDm7RPYC2GLUvdpKmBfC",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "name": "First Opps",
  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",
  "status": "open",
  "contactId": "mTkSCb1UBjb5tk4OvB69",
  "monetaryValue": 220,
  "forecastExpectedCloseDate": "2026-04-23",
  "forecastProbability": 20,
  "assignedTo": "082goXVW3lIExEQPOnd3",
  "customFields": [
    {
      "id": "6dvNaf7VhkQ9snc5vnjJ",
      "fieldValue": "9039160788"
    }
  ]
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**opportunity**objectThe created or retrieved opportunity object

```json
{
  "opportunity": {}
}
```

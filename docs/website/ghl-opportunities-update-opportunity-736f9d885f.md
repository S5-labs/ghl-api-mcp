> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-opportunity). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Opportunity

**Endpoint:** `PUT /opportunities/:id`

Update Opportunity

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

**pipelineId**stringpipeline Id**name**stringName of the opportunity**pipelineStageId**stringIdentifier of the pipeline stage**status**stringCurrent status of the opportunityAvailable options`open``won``lost``abandoned``all`**monetaryValue**numberMonetary value of the opportunity**forecastExpectedCloseDate**stringExpected close date. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, or ISO 8601**forecastProbability**numberForecast probability**assignedTo**stringIdentifier of the user the opportunity is assigned to**customFields**object[]Update custom fields to opportunities.

```json
{
  "pipelineId": "bCkKGpDsyPP4peuKowkG",
  "name": "First Opps",
  "pipelineStageId": "7915dedc-8f18-44d5-8bc3-77c04e994a10",
  "status": "open",
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

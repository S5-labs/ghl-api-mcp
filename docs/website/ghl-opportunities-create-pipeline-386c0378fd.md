> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/create-pipeline). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Pipeline

**Endpoint:** `POST /opportunities/pipelines`

Creates a new pipeline with at least one stage for a given location. Pipeline names must be unique per location (case-insensitive), and stage names must be unique within the pipeline. To enable manual win probability, set `useOpportunityProbability` to `true` and provide a `stageWinProbability` (0–100) on every stage — if any stage is missing a value, the system falls back to auto-computed probabilities based on stage position.

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

**name**stringrequiredName of the pipeline**stages**string[]requiredList of stages belonging to this pipeline**showInFunnel**booleanWhether the pipeline is shown in the funnel view**showInPieChart**booleanWhether the pipeline is shown in the pie chart view**useOpportunityProbability**booleanWhether stage-level win probability is enabled for this pipeline**locationId**stringrequiredIdentifier of the location (sub-account) this pipeline belongs to**colorRenderMode**stringHow pipeline/stage colors are renderedAvailable options`dot``bg-tint``none`

```json
{
  "name": "pipeline",
  "stages": [
    {
      "name": "stage 1",
      "position": 1,
      "showInFunnel": true
    }
  ],
  "showInFunnel": false,
  "showInPieChart": true,
  "useOpportunityProbability": true,
  "locationId": "ve9EPM428h8vShlRW1KT",
  "colorRenderMode": "dot"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringUnique identifier of the pipeline**name**stringName of the pipeline**stages**array[]Stages belonging to this pipeline**showInFunnel**booleanWhether the pipeline is shown in the funnel view**showInPieChart**booleanWhether the pipeline is shown in the pie chart view**locationId**stringIdentifier of the location (sub-account) this pipeline belongs to**useOpportunityProbability**booleanWhether stage-level win probability is enabled for this pipeline**colorRenderMode**stringHow pipeline/stage colors are renderedAvailable options`dot``bg-tint``none`**position**stringFractional-index key used to sort pipelines. Updated when the user reorders pipelines (via drag-and-drop or the reorder modal).

```json
{
  "id": "aWdODOBVOlH1RUFKWQke",
  "name": "new pipeline",
  "stages": [],
  "showInFunnel": false,
  "showInPieChart": true,
  "locationId": "VeMHYX28Satp2p7XVKbb",
  "useOpportunityProbability": true,
  "colorRenderMode": "dot",
  "position": "a0V"
}
```

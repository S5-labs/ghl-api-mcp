> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-pipeline). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Pipeline

**Endpoint:** `PUT /opportunities/pipelines/:pipelineId`

Updates an existing pipeline. The `stages` array is a full replacement — include the `id` field on existing stages to retain them, or omit it to create a new stage. You cannot remove all stages at once. Any opportunities in removed stages are automatically migrated to the lowest-position remaining stage. Pipeline and stage names must remain unique (case-insensitive) within the location. Documentation Link - [https://doc.clickup.com/8631005/d/h/87cpx-709536/75a21483123abd7](https://doc.clickup.com/8631005/d/h/87cpx-709536/75a21483123abd7)

## Request

**Version**

string

required

API Version

Available options

`v3`

**pipelineId**

string

required

The unique identifier of the pipeline

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringName of the pipeline**stages**string[]List of stages belonging to this pipeline**showInFunnel**booleanWhether the pipeline is shown in the funnel view**showInPieChart**booleanWhether the pipeline is shown in the pie chart view**useOpportunityProbability**booleanWhether stage-level win probability is enabled for this pipeline**colorRenderMode**stringHow pipeline/stage colors are renderedAvailable options`dot``bg-tint``none`

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

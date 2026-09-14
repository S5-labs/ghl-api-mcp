> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-pipeline). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Pipeline

**Endpoint:** `DELETE /opportunities/pipelines/:pipelineId`

Permanently deletes a pipeline and all opportunities within it. This action is irreversible — all opportunities across every stage of this pipeline will be removed. Ensure you have migrated or exported any opportunities before calling this endpoint.

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

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanWhether the pipeline was successfully deleted**message**stringError message if the deletion failed

```json
{
  "success": true,
  "message": "something went wrong"
}
```

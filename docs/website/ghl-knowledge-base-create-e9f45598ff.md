> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/create). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create a new FAQ inside knowledge base

**Endpoint:** `POST /knowledge-bases/faqs`

Creates a new question-and-answer entry in a knowledge base. WHEN TO USE: use this when you need to add a brand-new FAQ; use update to change an existing one; use list to see current FAQs. RETURNS: success and the created FAQ, including its server-assigned id.

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

**locationId**stringrequiredlocation ID as string**question**stringrequiredfaq question as a string**answer**stringrequiredfaq answer as a string**knowledgeBaseId**stringrequiredknowledge base ID as string

```json
{
  "locationId": "HqDZpF8GH3qvgJTmKCoL",
  "question": "What is the capital of France?",
  "answer": "The capital of France is Paris.",
  "knowledgeBaseId": "710KoEzy793Fxubft0bc"
}
```

application/json

FAQ created successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status of the operation**faq**objectrequiredCreated FAQ details

```json
{
  "success": true,
  "faq": {}
}
```

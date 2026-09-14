> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/update). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update an existing knowledge base FAQ

**Endpoint:** `PUT /knowledge-bases/faqs/:id`

Updates the question and/or answer of an existing FAQ. WHEN TO USE: use this when you need to change wording on a FAQ you already have; use create to add a new FAQ; use delete to remove one. RETURNS: whether the update succeeded.

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

faq ID as string

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**question**stringrequiredfaq question as a string**answer**stringrequiredfaq answer as a string

```json
{
  "question": "What is the capital of France?",
  "answer": "The capital of France is Paris."
}
```

application/json

FAQ updated successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess status of the update operation

```json
{
  "success": true
}
```

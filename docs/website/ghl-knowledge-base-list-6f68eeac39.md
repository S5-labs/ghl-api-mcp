> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/knowledge-base/list). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all FAQs by knowledge base with pagination support

**Endpoint:** `GET /knowledge-bases/faqs`

Retrieves Q&A entries for a knowledge base, with cursor or offset pagination and optional question search. WHEN TO USE: use this when you need to list existing FAQs; use create to add one; use update or delete to change or remove a single FAQ. RETURNS: the FAQ list, total count, lastFaqId for the next page, and whether more results exist.

## Request

**Version**

string

required

API Version

Available options

`v3`

**knowledgeBaseId**

string

required

knowledge base ID as string

**locationId**

string

required

location ID as string

**limit**

number

Limit the number of FAQs returned

`10`

**lastFaqId**

string

Last FAQ ID for pagination (cursor-based)

**offset**

number

Number of FAQs to skip (offset-based pagination)

`0`

**search**

string

Search query to filter FAQs by question (case-insensitive contains match)

application/json

FAQs retrieved successfully

- application/json

- Schema
- Example (auto)

**Schema**

**count**numberrequiredTotal count of all FAQs in the knowledge base**faqs**object[]requiredArray of FAQ objects**lastFaqId**stringLast FAQ ID for pagination (use as lastFaqId in next request)**hasMore**booleanWhether there are more FAQs available

```json
{
  "count": 150,
  "faqs": [
    {
      "id": "3rzeElC1FOVY91veVBkp",
      "question": "What is the capital of France?",
      "answer": "The capital of France is Paris.",
      "knowledgeBaseId": "I1rITlYLJofFosIqC4Np",
      "locationId": "qIyivCmsuEOSnyoFYEej",
      "trainedUrlId": "688e6b6d8a1887e6d94d1475",
      "deleted": false,
      "createdAt": "2025-08-02T19:47:57.243Z",
      "updatedAt": "2025-08-02T19:47:57.243Z"
    }
  ],
  "lastFaqId": "3rzeElC1FOVY91veVBkp",
  "hasMore": true
}
```

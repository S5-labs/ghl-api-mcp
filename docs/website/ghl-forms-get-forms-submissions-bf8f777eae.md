> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/forms/get-forms-submissions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Forms Submissions

**Endpoint:** `GET /forms/submissions`

Get Forms Submissions

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

**page**

number

Page No. By default it will be 1

`1`

**limit**

number

Limit Per Page records count. will allow maximum up to 100 and default will be 20

`20`

**formId**

string

Filter submission by form id

**q**

string

Filter by contactId, name, email or phone no.

**startAt**

string

Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD).

**endAt**

string

Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**submissions**object[]**meta**object

```json
{
  "submissions": [
    {
      "id": "38303ec7-629a-49e2-888a-cf8bf0b1f97e",
      "contactId": "DWQ45t2IPVxi9LDu1wBl",
      "createdAt": "2021-06-23T06:07:04.000Z",
      "formId": "YSWdvS4Is98wtIDGnpmI",
      "name": "test",
      "email": "test@test.com",
      "others": {
        "__submissions_other_field__": "john@deo.com",
        "__custom_field_id__": "20",
        "eventData": {
          "fbc": "fb.1.123456789.987654321",
          "fbp": "fbp.1.987654321.123456789",
          "page": {
            "url": "https://example.com",
            "title": "Example Page"
          },
          "type": "page-visit",
          "domain": "example.com",
          "medium": "form",
          "source": "Direct traffic",
          "version": "v3",
          "adSource": "example-ad-source",
          "mediumId": "medium-id-123",
          "parentId": "parent-id-456",
          "referrer": "https://staging.gohighlevel.com",
          "fbEventId": "event-id-789",
          "timestamp": 1234567890,
          "parentName": "Parent Form",
          "fingerprint": "example-fingerprint",
          "pageVisitType": "form",
          "contactSessionIds": {
            "ids": [
              "session1",
              "session2"
            ]
          }
        },
        "fieldsOriSequance": [
          "full_name",
          "first_name",
          "last_name",
          "phone",
          "email"
        ]
      }
    }
  ],
  "meta": {
    "total": 1,
    "currentPage": 1,
    "nextPage": null,
    "prevPage": null
  }
}
```

> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/surveys/get-surveys-submissions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Surveys Submissions

**Endpoint:** `GET /surveys/submissions`

Get Surveys Submissions

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

**surveyId**

string

Filter submission by survey id

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
      "id": "be759b9a-c3ec-4b29-ba07-fc3c89c77673",
      "contactId": "9NkT25Vor1v4aQatFsv2",
      "createdAt": "2020-11-01T18:02:21.000Z",
      "surveyId": "jjusM6EOngDExnbo2DbU",
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
          "medium": "survey",
          "source": "Direct traffic",
          "version": "v3",
          "adSource": "example-ad-source",
          "mediumId": "medium-id-123",
          "parentId": "parent-id-456",
          "referrer": "https://staging.gohighlevel.com",
          "fbEventId": "event-id-789",
          "timestamp": 1234567890,
          "parentName": "Parent Survey",
          "fingerprint": "example-fingerprint",
          "pageVisitType": "survey",
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

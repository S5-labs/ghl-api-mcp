> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-lead-forms). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get lead forms

**Endpoint:** `GET /ad-publishing/linkedin/:accountId/forms`

Retrieve LinkedIn lead gen forms for an ad account. By default each form is returned in full as a plain array; pass `projection` (comma-separated, dot-notation for nested fields) to return only the requested fields — any value outside the known field set is rejected. When `limit` is provided (max 100) the response is a paginated `{ leadForms, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

## Request

**Version**

string

required

API Version

Available options

`v3`

**accountId**

string

required

Account identifier

**locationId**

string

required

Location identifier

**projection**

string[]

Fields to return on each lead form, comma-separated (e.g. ?projection=id,name,state,created,reviewInfo.reviewStatus). When set, only the requested fields are returned; any value outside the known field set is rejected. Nested fields use dot-notation (naming a parent like `reviewInfo` returns the whole object). Omit to receive the full form (including content.questions) as-is.

Available options

`id`

`name`

`state`

`created`

`lastModified`

`versionId`

`creationLocale`

`owner`

`reviewInfo`

`reviewInfo.reviewStatus`

`reviewInfo.rejectionReasons`

`content`

**limit**

string

Page size for a paginated fetch (max 100). When set, the response is a { leadForms, paging } envelope instead of a plain array.

**pageToken**

string

Opaque cursor for the next batch, taken from the previous response paging.next

application/json

A plain array of lead forms (default), or a { leadForms, paging } envelope when `limit` is provided

- application/json

- Schema
- Example (auto)

**Schema**

oneOfobject[]PaginatedLinkedInLeadFormsDTOArray [**id**numberForm id. Returned as a number.**name**stringForm name**state**stringForm lifecycle state**versionId**numberVersion of the form definition**created**numberWhen the form was created, epoch milliseconds**lastModified**numberWhen the form was last modified, epoch milliseconds**creationLocale**objectLocale the form was authored in**owner**objectAccount that owns the form**reviewInfo**objectLinkedIn review outcome. Absent on a form that has just been created and not yet reviewed; present on reads.**hiddenFields**object[]Hidden fields submitted alongside the lead. Empty array when none.**content**objectForm definition]

```json
[
  {
    "id": 1025914010,
    "name": "Q3 demand generation form",
    "state": "PUBLISHED",
    "versionId": 1,
    "created": 1787056838757,
    "lastModified": 1787057842322,
    "creationLocale": {
      "country": "US",
      "language": "en"
    },
    "owner": {
      "sponsoredAccount": "urn:li:sponsoredAccount:556129919"
    },
    "reviewInfo": {
      "reviewStatus": "REJECTED",
      "rejectionReasons": [
        "MISSING_PRIVACY_POLICY",
        "NONFUNCTIONAL_SITE"
      ],
      "lastUpdated": 1787057842315
    },
    "hiddenFields": [
      {
        "name": "utm_source",
        "value": "linkedin"
      }
    ],
    "content": {
      "headline": {
        "localized": {
          "en_US": "Hi there, good to see you here!"
        }
      },
      "description": {
        "localized": {
          "en_US": "Hi there, good to see you here!"
        }
      },
      "questions": [
        {
          "questionId": 20711780444,
          "question": {
            "localized": {
              "en_US": "Hi there, good to see you here!"
            }
          },
          "name": "lastName",
          "label": "Last name",
          "responseRequired": true,
          "responseEditable": true,
          "predefinedField": "LAST_NAME",
          "questionDetails": {
            "textQuestionDetails": {
              "maxResponseLength": 300
            },
            "multipleChoiceQuestionDetails": {
              "options": [
                {
                  "id": 0,
                  "label": "Option 1",
                  "text": {
                    "localized": {
                      "en_US": "Hi there, good to see you here!"
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "postSubmissionInfo": {
        "message": {
          "localized": {
            "en_US": "Hi there, good to see you here!"
          }
        },
        "callToAction": {
          "callToActionLabel": "VISIT_COMPANY_WEBSITE",
          "callToActionTarget": {
            "landingPageUrl": "https://example.com"
          }
        }
      },
      "legalInfo": {
        "legalInfoId": 2873998916,
        "privacyPolicyUrl": "https://example.com/privacy",
        "consents": [
          {
            "id": 1,
            "label": "I agree to be contacted",
            "checkRequired": true,
            "consent": {
              "localized": {
                "en_US": "Hi there, good to see you here!"
              }
            }
          }
        ],
        "legalDisclaimer": {
          "localized": {
            "en_US": "Hi there, good to see you here!"
          }
        }
      }
    }
  }
]
```

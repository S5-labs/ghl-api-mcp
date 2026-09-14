> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-create-lead-form). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create lead form

**Endpoint:** `POST /ad-publishing/linkedin/:accountId/form`

Create a new LinkedIn lead gen form for an ad account

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

Location identifier

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**owner**objectrequiredForm owner**creationLocale**objectrequiredCreation locale**name**stringrequiredForm name**state**stringrequiredForm stateAvailable options`PUBLISHED`**content**objectrequiredForm content**hiddenFields**object[]Hidden fields

```json
{
  "owner": {
    "sponsoredAccount": "urn:li:sponsoredAccount:123456"
  },
  "creationLocale": {
    "country": "US",
    "language": "en"
  },
  "name": "Contact Us",
  "state": "PUBLISHED",
  "content": {
    "questions": [],
    "headline": {
      "localized": {
        "en_US": "Get in touch"
      }
    },
    "postSubmissionInfo": {},
    "legalInfo": {}
  },
  "hiddenFields": [
    {
      "name": "utm_source",
      "value": "linkedin"
    }
  ]
}
```

application/json

The created lead form. Same shape as a list entry, minus `reviewInfo` until LinkedIn reviews it.

- application/json

- Schema
- Example (auto)

**Schema**

**id**numberForm id. Returned as a number.**name**stringForm name**state**stringForm lifecycle state**versionId**numberVersion of the form definition**created**numberWhen the form was created, epoch milliseconds**lastModified**numberWhen the form was last modified, epoch milliseconds**creationLocale**objectLocale the form was authored in**owner**objectAccount that owns the form**reviewInfo**objectLinkedIn review outcome. Absent on a form that has just been created and not yet reviewed; present on reads.**hiddenFields**object[]Hidden fields submitted alongside the lead. Empty array when none.**content**objectForm definition

```json
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
```

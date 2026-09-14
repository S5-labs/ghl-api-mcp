> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-page-lead-forms). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get page lead forms

**Endpoint:** `GET /ad-publishing/facebook/page/:pageId/forms`

Retrieve lead gen forms for a specific Facebook page (published + drafts), sorted newest-first by `createdTime`. By default each form is returned in full (including its `questions`) as a plain array; pass `projection` (comma-separated) to return only the requested fields — any value outside the known field set is rejected. Pass `limit` (max 100) for a `{ forms, paging }` envelope; use `after` (from `paging.next`) to fetch the next batch.

## Request

**Version**

string

required

API Version

Available options

`v3`

**pageId**

string

required

Facebook page identifier

**locationId**

string

required

Location identifier

**projection**

string[]

Fields to return on each lead form, comma-separated (e.g. ?projection=name,id,pageId,status,isDraft,createdTime). When set, only the requested fields are returned; any other value is rejected. Omit to receive the full form (including questions) as-is.

Available options

`id`

`name`

`pageId`

`status`

`isDraft`

`createdTime`

`locale`

`page`

`questions`

**limit**

string

Page size for a paginated fetch (max 100). When set, the response is a { forms, paging } envelope instead of a plain array.

**after**

string

Opaque cursor for the next batch, taken from the previous response paging.next

application/json

A plain array of lead forms (default), or a { forms, paging } envelope when `limit` is provided. Each entry is either a form published to Facebook or an unpublished local draft — the two shapes differ, and `isDraft` tells them apart. Supplying `projection` narrows every entry to the requested fields only.

- application/json

- Schema
- Example (auto)

**Schema**

oneOfobject[]PaginatedFacebookLeadFormsDTOArray [oneOfFacebookPublishedLeadFormDTOFacebookDraftLeadFormDTO**id**stringFacebook lead form id**name**stringForm name**locale**stringForm locale, lower-cased by Facebook. Note drafts report the same locale upper-cased.**status**stringForm status. Always `ACTIVE` in this list — the upstream query filters the others out.**createdTime**stringCreation time in the Facebook timestamp format (`+0000` offset, no sub-second precision). Drafts use ISO-8601 with milliseconds instead, so a client parsing this field must accept both.**page**objectPage the form belongs to**pageId**stringPage id, repeated from `page.id`**questions**object[]Questions on the form]

```json
[
  {
    "id": "925225066711682",
    "name": "Automation Lead Form 2026-08-19 00:32:49",
    "locale": "en_US",
    "status": "ACTIVE",
    "createdTime": "2026-08-19T00:32:57+0000",
    "page": {
      "name": "Ad Manager primary",
      "id": "196684453527082"
    },
    "pageId": "196684453527082",
    "questions": [
      {
        "id": "1751700749315902",
        "key": "full_name",
        "label": "What is your name?",
        "type": "CUSTOM",
        "options": [
          {
            "key": "Option 1",
            "value": "Option 1"
          }
        ]
      }
    ]
  },
  {
    "id": "draft_6a7d9fa9d4e1daea36a9585e",
    "isDraft": true,
    "name": "Public API test draft",
    "locationId": "fRMewNQIxSyZ5R4nQyit",
    "pageId": "196684453527082",
    "type": "MORE_VOLUME",
    "locale": "EN_US",
    "createdTime": "2026-08-13T10:42:49.397Z",
    "greetingCard": {
      "title": "Hi there, good to see you here!",
      "style": "LIST_STYLE",
      "content": [
        "Ready to learn more? Just a few quick details in the form below."
      ],
      "_id": "6a7d9fa9d4e1daea36a9585f"
    },
    "questions": [
      {
        "key": "full_name",
        "type": "FULL_NAME",
        "label": "What is your name?",
        "options": [
          {
            "key": "Option 1",
            "value": "Option 1"
          }
        ],
        "_id": "6a7d9fa9d4e1daea36a95860"
      }
    ],
    "questionPageHeadline": "We'll use your information to send you our weekly newsletters.",
    "privacyPolicyLink": "",
    "privacyPolicyText": "",
    "customDisclaimer": {
      "title": "Terms and conditions",
      "body": "By submitting you agree to our terms.",
      "checkboxes": [
        {
          "key": "consent_marketing",
          "text": "I agree to receive marketing emails",
          "isRequired": true
        }
      ]
    },
    "thankYouPage": {
      "title": "Thank you, you are all set!",
      "body": "You can visit our website or call us.",
      "buttonText": "View website",
      "buttonType": "VIEW_WEBSITE",
      "buttonLink": "",
      "businessPhone": "5551234567",
      "countryCode": "+1"
    }
  }
]
```

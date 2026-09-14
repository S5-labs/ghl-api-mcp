> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-page-lead-form). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create page lead form

**Endpoint:** `POST /ad-publishing/facebook/page/:pageId/forms`

Create a lead gen form. With `isDraft: true` the form is stored locally and returned as a draft; without it the form is published to Facebook and the Meta record is returned. The two responses share almost no fields. Publishing enforces at least one question and a complete `thankYouPage` (title, body, buttonText) where a draft save enforces neither. Pass `draftFormId` when publishing an existing draft to have it deleted afterwards — either the bare id or the `draft_`-prefixed form is accepted, and cleanup failures are logged rather than surfaced.

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**type**stringrequiredLead form typeAvailable options`MORE_VOLUME``HIGHER_INTENT`**name**stringrequiredLead form name**locationId**stringrequiredLocation identifier**greetingCard**objectGreeting card config**questions**object[]requiredList of questions displayed on the lead form. Required (non-empty) when `isDraft` is false or omitted; optional for drafts.**questionPageHeadline**stringQuestion page headline**privacyPolicyLink**stringrequiredPrivacy policy URL. Required when `isDraft` is false or omitted; optional for drafts.**privacyPolicyText**stringPrivacy policy text**customDisclaimer**objectCustom disclaimer config**thankYouPage**objectrequiredThank you page config. Required when `isDraft` is false or omitted; optional for drafts.**isDraft**booleanIf the form is a draft, set to true**draftFormId**stringDraft form ID**locale**stringLocale

```json
{
  "type": "MORE_VOLUME",
  "name": "Contact Form",
  "locationId": "loc_abc123",
  "greetingCard": {
    "title": "Welcome!",
    "style": "LIST_STYLE",
    "content": [
      "Learn more about our services"
    ]
  },
  "questions": [
    {
      "key": "full_name",
      "type": "FULL_NAME",
      "options": []
    },
    {
      "key": "email_address",
      "type": "EMAIL",
      "options": []
    },
    {
      "key": "are_you_interested",
      "label": "Are you interested?",
      "type": "CUSTOM",
      "options": [
        {
          "value": "Yes"
        },
        {
          "value": "No"
        }
      ]
    }
  ],
  "questionPageHeadline": "Tell us about yourself",
  "privacyPolicyLink": "https://example.com/privacy",
  "privacyPolicyText": "We respect your privacy",
  "customDisclaimer": {
    "title": "Terms & Conditions",
    "body": "By submitting...",
    "checkboxes": [
      {
        "isRequired": true,
        "text": "I agree",
        "key": "terms"
      }
    ]
  },
  "thankYouPage": {
    "title": "Thank You!",
    "body": "We will contact you soon",
    "buttonText": "Visit Website",
    "buttonType": "VIEW_WEBSITE",
    "buttonLink": "https://example.com"
  },
  "isDraft": true,
  "draftFormId": "1234567890",
  "locale": "EN_US"
}
```

application/json

The stored draft when `isDraft` is set, otherwise the form as published to Facebook

- application/json

- Schema
- Example (auto)

**Schema**

oneOfFacebookCreatedDraftLeadFormDTOFacebookCreatedLeadFormDTO**id**stringrequiredDraft id, unprefixed. The listing endpoint reports this same draft as `draft_<id>`.**isDraft**booleanrequiredAlways true on this branch**name**stringrequiredForm name**locationId**stringrequiredOwning location**pageId**stringrequiredPage the draft will publish to**type**stringLead form objectiveAvailable options`MORE_VOLUME``HIGHER_INTENT`**locale**stringrequiredForm locale, upper-cased as stored**createdAt**stringrequiredCreation time, ISO-8601**updatedAt**stringrequiredLast modification time, ISO-8601. Equal to `createdAt` on a fresh draft.**greetingCard**objectIntro card**questions**object[]Questions as stored. Each carries a Mongo `_id`, and so does every entry in its `options`.**questionPageHeadline**stringHeadline above the questions**privacyPolicyLink**stringPrivacy policy URL**privacyPolicyText**stringPrivacy policy link text**customDisclaimer**objectCustom disclaimer block**thankYouPage**objectConfirmation screen

```json
{
  "id": "6a866661867e604d24f5a21c",
  "isDraft": true,
  "name": "Untitled form 20 Aug 26, 07:57 AM",
  "locationId": "fRMewNQIxSyZ5R4nQyit",
  "pageId": "196684453527082",
  "type": "MORE_VOLUME",
  "locale": "EN_US",
  "createdAt": "2026-08-20T02:28:49.477Z",
  "updatedAt": "2026-08-20T02:28:49.477Z",
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
  "privacyPolicyLink": "https://www.privacypolicy.com",
  "privacyPolicyText": "Link text",
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
```

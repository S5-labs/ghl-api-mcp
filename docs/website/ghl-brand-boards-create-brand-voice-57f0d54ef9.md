> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/create-brand-voice). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Brand Voice

**Endpoint:** `POST /brand-boards/locations/:locationId/brand-voices`

Create a brand voice for a location

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

Location ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringName**type**stringrequiredCreation type. "manual" creates with provided custom answers, "url" generates answers from a website, "description" generates answers from a text descriptionAvailable options`manual``url``description`**url**stringWebsite URL to generate brand voice from. Required when type is "url"**description**stringCompany description to generate brand voice from. Required when type is "description", optional when type is "url"**answers**objectBrand voice answers. Required when type is "manual"

```json
{
  "name": "My Brand Voice",
  "type": "manual",
  "url": "https://example.com",
  "description": "We are a tech company focused on innovative solutions for small businesses",
  "answers": {
    "brandName": "Acme Inc",
    "toneOfVoice": "Professional and friendly",
    "targetAudience": "Small business owners",
    "customerPainPoints": "Difficulty with time management"
  }
}
```

application/json

Created

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredBrand voice ID**name**stringrequiredBrand voice name**isDefault**booleanrequiredWhether this is the default brand voice**createdAt**stringrequiredCreation timestamp**updatedAt**stringrequiredLast update timestamp**locationId**stringrequiredLocation ID**deleted**booleanrequiredWhether the brand voice has been soft deleted**answers**objectBrand voice answers**traceId**stringTrace ID of request

```json
{
  "id": "507f1f77bcf86cd799439011",
  "name": "My Brand Voice",
  "isDefault": false,
  "createdAt": "2024-01-05T12:00:00.000Z",
  "updatedAt": "2024-01-05T12:00:00.000Z",
  "locationId": "oHJiAh0wDG3BzmzACVD6",
  "deleted": false,
  "answers": {
    "brandName": "Acme Inc",
    "toneOfVoice": "Professional and friendly",
    "targetAudience": "Small business owners",
    "customerPainPoints": "Difficulty with time management",
    "businessType": "Software Development",
    "companyWebsite": "https://example.com",
    "companyEmail": "contact@example.com",
    "companyAddress": "123 Main St, Anytown, CA",
    "phone": {
      "phoneNumber": "5551234567",
      "countryCode": "US"
    },
    "businessHours": "Mon-Fri 9am-5pm",
    "brandPromise": "We deliver on time, every time",
    "brandValues": "Integrity, Excellence, Innovation",
    "brandPurpose": "To empower small businesses with technology",
    "competitiveAdvantage": "Proprietary AI technology",
    "risksOfInaction": "Falling behind competitors",
    "uniqueSellingProposition": "The only solution that integrates with all major platforms",
    "callToAction": "Schedule a demo today"
  },
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```

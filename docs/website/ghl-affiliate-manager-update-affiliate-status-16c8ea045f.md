> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/update-affiliate-status). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Affiliate Status

**Endpoint:** `PUT /affiliate-manager/:locationId/affiliates/:affiliateId/status`

Activate or deactivate an affiliate. Sending the same value again leaves the affiliate unchanged.

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

Location Id

**affiliateId**

string

required

Affiliate Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**active**booleanrequiredWhether the affiliate is active. Sending the same value twice leaves the affiliate unchanged.

```json
{
  "active": false
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredAffiliate id**firstName**stringAffiliate first name**lastName**stringAffiliate last name**phone**stringAffiliate phone number**deleted**booleanWhether the affiliate is deleted**locationId**stringrequiredLocation id**active**booleanWhether the affiliate is active**address**stringAffiliate address**avatar**stringAffiliate avatar URL**createdAt**stringCreated at timestamp**createdBy**objectWho created the affiliate**facebookUrl**stringFacebook URL**instagramUrl**stringInstagram URL**linkedInUrl**stringLinkedIn URL**twitterUrl**stringTwitter URL**youtubeUrl**stringYouTube URL**websiteUrl**stringWebsite URL**contactId**stringContact id associated with the affiliate**campaignIds**string[]Campaign ids**vatId**stringVAT ID**updatedAt**stringUpdated at timestamp**w8Form**stringW-8 form URL**w9Form**stringW-9 form URL**lastUpdatedBy**objectWho last updated the affiliate**email**stringrequiredAffiliate email**revenue**numberAffiliate revenue**companyName**stringCompany name**companyPhoneNumber**stringCompany phone number**country**stringCountry the affiliate was created with**commissionTier**numberCommission tier the affiliate sits in

```json
{
  "_id": "63d147176c5bbc30e9e091a4",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1 888 888-8888",
  "deleted": false,
  "locationId": "ve9EPM428h8vShlRW1KT",
  "active": true,
  "address": "123 Main St",
  "avatar": "https://example.com/avatar.png",
  "createdAt": "2024-06-16T00:00:00.000Z",
  "createdBy": {
    "source": "oauth",
    "channel": "oauth",
    "sourceId": "source_123",
    "sourceName": "Marketplace App",
    "timestamp": "2024-06-16T00:00:00.000Z"
  },
  "facebookUrl": "https://facebook.com/johndoe",
  "instagramUrl": "https://instagram.com/johndoe",
  "linkedInUrl": "https://linkedin.com/in/johndoe",
  "twitterUrl": "https://twitter.com/johndoe",
  "youtubeUrl": "https://youtube.com/channel",
  "websiteUrl": "https://example.com",
  "contactId": "ve9EPM428h8vShlRW1KT",
  "campaignIds": [
    "650173614761b33c46d33b19"
  ],
  "vatId": "VAT123",
  "updatedAt": "2024-06-16T00:00:00.000Z",
  "w8Form": "https://example.com/tax-forms/w8.pdf",
  "w9Form": "https://example.com/tax-forms/w9.pdf",
  "lastUpdatedBy": {
    "source": "oauth",
    "channel": "oauth",
    "sourceId": "source_123",
    "sourceName": "Marketplace App",
    "timestamp": "2024-06-16T00:00:00.000Z"
  },
  "email": "john.doe@example.com",
  "revenue": 1250.5,
  "companyName": "Doe Media LLC",
  "companyPhoneNumber": "+1 888 888-8888",
  "country": "US",
  "commissionTier": 1
}
```

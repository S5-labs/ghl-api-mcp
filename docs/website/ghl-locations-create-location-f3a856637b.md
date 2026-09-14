> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/create-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Sub-Account (Formerly Location)

**Endpoint:** `POST /locations/`

Create a new Sub-Account (Formerly Location) based on the data provided

info

This feature is only available on Agency Pro ($497) plan.

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringrequiredThe name for the sub-account/location**phone**stringThe phone number of the business for which sub-account is created with the appropriate country-code**companyId**stringrequiredCompany/Agency Id**address**stringThe address of the business for which sub-account is created**city**stringThe city where the business is located for which sub-account is created**state**stringThe state in which the business operates for which sub-account is created**country**stringThe 2 letter country-code in which the business is present for which sub-account is createdAvailable options`AF``AX``AL``DZ``AS``AD``AO``AI``AQ``AG``AR``AM`**postalCode**stringThe postal code of the business for which sub-account is created**website**stringThe website of the business for which sub-account is created**timezone**stringThe timezone of the business for which sub-account is created**prospectInfo**object**settings**objectThe default settings for location**social**objectThe social media links for location**twilio**objectdeprecated(DEPRECATED) The twilio credentials for location**mailgun**objectThe mailgun credentials for location**snapshotId**stringThe snapshot ID to be loaded into the location.

```json
{
  "name": "Mark Shoes",
  "phone": "+1410039940",
  "companyId": "UAXssdawIWAWD",
  "address": "4th fleet street",
  "city": "New York",
  "state": "Illinois",
  "country": "US",
  "postalCode": "567654",
  "website": "https://yourwebsite.com",
  "timezone": "US/Central",
  "prospectInfo": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@mail.com"
  },
  "settings": {
    "allowDuplicateContact": false,
    "allowDuplicateOpportunity": false,
    "allowFacebookNameMerge": false,
    "disableContactTimezone": false
  },
  "social": {
    "facebookUrl": "https://www.facebook.com/",
    "googlePlus": "https://www.googleplus.com/",
    "linkedIn": "https://www.linkedIn.com/",
    "foursquare": "https://www.foursquare.com/",
    "twitter": "https://www.foutwitterrsquare.com/",
    "yelp": "https://www.yelp.com/",
    "instagram": "https://www.instagram.com/",
    "youtube": "https://www.youtube.com/",
    "pinterest": "https://www.pinterest.com/",
    "blogRss": "https://www.blogRss.com/",
    "googlePlacesId": "ChIJJGPdVbQTrjsRGUkefteUeFk"
  },
  "mailgun": {
    "apiKey": "key-XXXXXXXXXXX",
    "domain": "replies.yourdomain.com"
  },
  "snapshotId": "XXXXXXXXXXX"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringLocation Id**companyId**stringCompany/Agency Id**name**stringThe name for the sub-account/location**phone**stringThe phone number of the business for which sub-account is created**email**stringThe email for the sub-account/location**address**stringThe address of the business for which sub-account is created**city**stringThe city where the business is located for which sub-account is created**state**stringThe state in which the business operates for which sub-account is created**domain**string**country**stringThe country in which the business is present for which sub-account is createdAvailable options`AF``AX``AL``DZ``AS``AD``AO``AI``AQ``AG``AR``AM`**postalCode**stringThe postal code of the business for which sub-account is created**website**stringThe website of the business for which sub-account is created**timezone**stringThe timezone of the business for which sub-account is created**settings**objectThe default settings for location**social**objectThe social media links for location

```json
{
  "id": "ve9EPM428h8vShlRW1KT",
  "companyId": "UAXssdawIWAWD",
  "name": "Mark Shoes",
  "phone": "+1410039940",
  "email": "john.doe@mail.com",
  "address": "4th fleet street",
  "city": "New York",
  "state": "Illinois",
  "domain": "test.msgsndr.com",
  "country": "US",
  "postalCode": "567654",
  "website": "https://yourwebsite.com",
  "timezone": "US/Central",
  "settings": {
    "allowDuplicateContact": false,
    "allowDuplicateOpportunity": false,
    "allowFacebookNameMerge": false,
    "disableContactTimezone": false
  },
  "social": {
    "facebookUrl": "https://www.facebook.com/",
    "googlePlus": "https://www.googleplus.com/",
    "linkedIn": "https://www.linkedIn.com/",
    "foursquare": "https://www.foursquare.com/",
    "twitter": "https://www.foutwitterrsquare.com/",
    "yelp": "https://www.yelp.com/",
    "instagram": "https://www.instagram.com/",
    "youtube": "https://www.youtube.com/",
    "pinterest": "https://www.pinterest.com/",
    "blogRss": "https://www.blogRss.com/",
    "googlePlacesId": "ChIJJGPdVbQTrjsRGUkefteUeFk"
  }
}
```

> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/get-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Sub-Account (Formerly Location)

**Endpoint:** `GET /locations/:locationId`

Get details of a Sub-Account (Formerly Location) by passing the sub-account id

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

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**location**object

```json
{
  "location": {
    "id": "ve9EPM428h8vShlRW1KT",
    "companyId": "5DP4iH6HLkQsiKESj6rh",
    "name": "dentist",
    "domain": "test.msgsndr.com",
    "address": "ganthi nagar, gyanbabu chauk motihati",
    "city": "motihari",
    "state": "Loca",
    "logoUrl": "https://dummyimage.com/o/locationPhotos%2Fve9EPM428h8vShlRW1KT.jpeg",
    "country": "IN",
    "postalCode": "567654",
    "website": "https://gohighlevel.com/",
    "timezone": "America/Chicago",
    "firstName": "Dr. Rane",
    "lastName": "deo",
    "email": "rane@due.com",
    "phone": "+919039160788",
    "business": {
      "name": "dentist",
      "address": "MIG 14, Delhi",
      "city": "delhi",
      "state": "delhi",
      "country": "IN",
      "postalCode": "567654",
      "website": "https://gohighlevel.com/",
      "timezone": "America/Chicago",
      "logoUrl": "https://dummyimage.com/o/locationPhotos%2Fve9EPM428h8vShlRW1KT.jpeg"
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
    "settings": {
      "allowDuplicateContact": false,
      "allowDuplicateOpportunity": false,
      "allowFacebookNameMerge": false,
      "disableContactTimezone": false
    },
    "reseller": {}
  }
}
```

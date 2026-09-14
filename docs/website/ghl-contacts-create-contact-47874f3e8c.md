> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-contact). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Contact

**Endpoint:** `POST /contacts/`

Create a new contact

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

**firstName**stringnullableFirst name of the contact**lastName**stringnullableLast name of the contact**name**stringnullableFull name of the contact**email**stringnullableEmail address of the contact**locationId**stringrequiredLocation Id the contact should be created under**gender**stringGender of the contact**phone**stringnullablePhone number of the contact**address1**stringnullableStreet address of the contact**city**stringnullableCity of the contact**state**stringnullableState of the contact**postalCode**stringPostal code of the contact**website**stringnullableWebsite URL of the contact**timezone**stringnullableTimezone of the contact**dnd**booleanWhether Do Not Disturb is enabled for the contact**inboundDndSettings**objectInbound DND settings per channel for the contact**tags**string[]List of tags to assign to the contact**customFields**object[]List of custom field values to assign to the contact**source**stringSource from which the contact was created**dateOfBirth**objectnullableThe birth date of the contact. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, YYYY_MM_DD, MM_DD_YYYY**country**stringCountry code of the contact (ISO 3166-1 alpha-2)**companyName**stringnullableCompany name of the contact**assignedTo**stringUser's Id**dndSettings**objectPer-channel DND settings for the contact

```json
{
  "firstName": "Rosan",
  "lastName": "Deo",
  "name": "Rosan Deo",
  "email": "rosan@deos.com",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "gender": "male",
  "phone": "+1 888-888-8888",
  "address1": "3535 1st St N",
  "city": "Dolomite",
  "state": "AL",
  "postalCode": "35061",
  "website": "https://www.tesla.com",
  "timezone": "America/Chihuahua",
  "dnd": true,
  "inboundDndSettings": {
    "all": {
      "status": "active",
      "message": "Do not contact me"
    }
  },
  "tags": [
    "nisi sint commodo amet",
    "consequat"
  ],
  "customFields": [
    {
      "id": "6dvNaf7VhkQ9snc5vnjJ",
      "key": "my_custom_field",
      "fieldValue": "My Text"
    }
  ],
  "source": "public api",
  "dateOfBirth": "1990-09-25",
  "country": "US",
  "companyName": "DGS VolMAX",
  "assignedTo": "y0BeYjuRIlDwsDcOHOJo",
  "dndSettings": {
    "call": {
      "status": "active",
      "message": "Do not call"
    },
    "email": {
      "status": "inactive"
    }
  }
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**contact**objectContact details

```json
{
  "contact": {
    "id": "seD4PfOuKoVMLkEZqohJ",
    "name": "rubika deo",
    "firstName": "rubika",
    "lastName": "Deo",
    "email": "rubika@deos.com",
    "phone": "+18832327657",
    "locationId": "ve9EPM428h8vShlRW1KT"
  }
}
```

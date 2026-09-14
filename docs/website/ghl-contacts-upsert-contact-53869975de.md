> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/upsert-contact). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upsert Contact

**Endpoint:** `POST /contacts/upsert`

The Upsert API will adhere to the configuration defined under the "Allow Duplicate Contact" setting at the Location level. If the setting is configured to check both Email and Phone, the API will attempt to identify an existing contact based on the priority sequence specified in the setting, and will create or update the contact accordingly.<br><br>If two separate contacts already exist—one with the same email and another with the same phone—and an upsert request includes both the email and phone, the API will update the contact that matches the first field in the configured sequence, and ignore the second field to prevent duplication.

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

**firstName**stringnullableFirst name of the contact**lastName**stringnullableLast name of the contact**name**stringnullableFull name of the contact**email**stringnullableEmail address of the contact**locationId**stringrequiredLocation Id the contact should be created under**gender**stringGender of the contact**phone**stringnullablePhone number of the contact**address1**stringnullableStreet address of the contact**city**stringnullableCity of the contact**state**stringnullableState of the contact**postalCode**stringPostal code of the contact**website**stringnullableWebsite URL of the contact**timezone**stringnullableTimezone of the contact**dnd**booleanWhether Do Not Disturb is enabled for the contact**inboundDndSettings**objectInbound DND settings per channel for the contact**tags**string[]This field will overwrite all current tags associated with the contact. To update a tags, it is recommended to use the Add Tag or Remove Tag API instead.**customFields**object[]List of custom field values to assign to the contact**source**stringSource from which the contact was created**dateOfBirth**objectnullableThe birth date of the contact. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, YYYY_MM_DD, MM_DD_YYYY**country**stringCountry code of the contact (ISO 3166-1 alpha-2)**companyName**stringnullableCompany name of the contact**assignedTo**stringUser's Id**createNewIfDuplicateAllowed**booleanControls whether to create a new contact or update an existing duplicate. **Scenario 1:** If this value is `true` and the location allows duplicate contacts, a new contact will be created immediately without checking for duplicates. **Scenario 2:** If this value is `true` but the location does not allow duplicate contacts, this field is ignored and the normal upsert behavior applies: the API will search for an existing duplicate contact, update it if found, or create a new contact if not found. **Scenario 3:** If this value is `false` or not provided, the normal upsert behavior applies regardless of the location's duplicate contact setting.**Default value:**`false`**dndSettings**objectPer-channel DND settings for the contact

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
  "createNewIfDuplicateAllowed": false,
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

**new**booleanWhether a new contact was created (true) or an existing one was updated (false)**contact**objectContact details**traceId**stringUnique trace identifier for this operation

```json
{
  "new": true,
  "contact": {
    "id": "seD4PfOuKoVMLkEZqohJ",
    "name": "rubika deo",
    "email": "rubika@deos.com",
    "locationId": "ve9EPM428h8vShlRW1KT"
  },
  "traceId": "abc123trace"
}
```

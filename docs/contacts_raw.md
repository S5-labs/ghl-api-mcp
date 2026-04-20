# GHL Contacts API - Raw Documentation Notes

## Create Contact
POST https://services.leadconnectorhq.com/contacts/
Scope: contacts.write
Token: Sub-Account Token

### Body Fields (all NULLABLE unless noted):
- firstName (string, NULLABLE) - Example: Rosan
- lastName (string, NULLABLE) - Example: Deo
- name (string, NULLABLE) - Example: Rosan Deo
- email (string, NULLABLE) - Example: rosan@deos.com
- locationId (string, REQUIRED) - Example: ve9EPM428h8vShlRW1KT
- gender (string) - Example: male
- phone (string, NULLABLE) - Example: +1 888-888-8888
- address1 (string, NULLABLE) - Example: 3535 1st St N
- city (string, NULLABLE) - Example: Dolomite
- state (string, NULLABLE) - Example: AL
- postalCode (string) - Example: 35061
- website (string, NULLABLE) - Example: https://www.tesla.com
- timezone (string, NULLABLE) - Example: America/Chihuahua
- dnd (boolean) - Example: true
- dndSettings (object) - per-channel DND: Call, Email, SMS, WhatsApp, GMB, FB each with {status, message, code}
- inboundDndSettings (object) - {all: {status, message}}
- tags (string[]) - Example: ["nisi sint commodo amet","consequat"]
- customFields (object[]) - [{id, key, field_value}] - field_value can be string, number, array, or object (for file uploads)
- source (string) - Example: public api
- dateOfBirth (object, NULLABLE) - Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, YYYY_MM_DD, MM_DD_YYYY - Example: 1990-09-25
- country (string) - Example: US (see country list link)
- companyName (string, NULLABLE) - Example: DGS VolMAX
- assignedTo (string) - User's Id - Example: y0BeYjuRIlDwsDcOHOJo

### Response: 201 - contact object

### Custom Fields field_value examples:
- Text: "My Text"
- Number: 100 or 100.5
- Multi-select: ["test", "test2"]
- File upload: { "uuid": { meta: {...}, url: "...", documentId: "..." } }


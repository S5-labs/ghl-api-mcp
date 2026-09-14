> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomActions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Creating a Marketplace Workflow Action

Marketplace Workflow Actions are the customizable workflow actions managed in [Marketplace](https://marketplace.gohighlevel.com/). You will be able to create custom actions to push or pull data from your application/API in a workflow using customized fields and API endpoint.

## Create a New Action

- Navigate to the "Workflow" section, located under the Modules in the left-hand navigation menu of your app..
- Click on "Create Action" to initiate the process.

## Define Action Information

- **Name:** Provide a descriptive name for your action.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617666/original/6dcMrp542QyK9ITxiYd6SP3nDrmXS0H4ng.png?1692595312)

<br>

- **Key:** Assign a unique identifier (e.g., `mycustomaction`). This key is immutable and used to reference the action within workflows.
- **Icon:** Select an icon to represent the action visually in the workflow builder.
- **Short Description:** Write a brief explanation of what the action does.
- **Summary:** Provide detailed information about the action's functionality and use cases.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617692/original/ayYzwBxRpcqkChyLHwVUxiYa6SNiuEUpmg.png?1692595399)

<br>

## Action Configuration

### Manage Fields

*Construct form to collect the data required for sending to API*

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617794/original/ruqdiXv6Qpyb5koXldxA6IezKmW4Kn4k6A.png?1692595629)

<br>

### Create New Field

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014097669/original/K7S7qgH1SPJT2Epd6gu8E37h5aImQ0tPDA.png?1701409848)

<br>

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654687/original/wlQ-4aQO5LpNdpJbhzMNHN2oNPiD95H3sw.png?1747285021)

<br>

- **Name**<br> *Enter Field Name*
- **Type**<br> *Select one of the following field types:*<br> String, Numerical, Textarea, Select, Multiple Select, Radio, Toggle, Checkbox, Attachment, Rich Text Editor, Hidden, Dynamic
- **Required**<br> *Enable if this is a required field in workflow.*
- **Reference**<br> *Enter unique reference key. The value of this field will be bind to the provided key. Example: action_a_name*
- **Default Value**<br> *Enter or map a value. The value provided will be used as default value for this field when loaded in workflow.*
- **Alters Dynamic Field**<br> *If enabled, any changes made to this field value will trigger/ re-trigger loading the dynamic fields to the workflow action configuration UI.*
- **Validation Rules** *Validation Rules let you protect data quality by checking the value a user types into a form field, table cell, or configuration input before it is saved or passed downstream.*<br> *If the value fails the check, HighLevel blocks the save/submit action and shows a custom error message that you configure.*

### Typical use-cases

| Scenario | Example |
| --- | --- |
| Lead-capture form | Require a properly-formatted US phone number |
| Web-hook payload | Ensure a “status” field matches one of allowed strings |
| Custom action param | Block users from entering Handlebar syntax in plain text |

---

### Field Types: Select / Multi Select / Radio

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618327/original/75wTdD-ywGGAzHHCMQ6rSJ74XtVQEivUeQ.png?1692596839)

<br>

*Option Type is applicable only for Select, Multi Select and Radio field types.*

Select one of the following option types:

- **Constants**<br> Load options by adding custom Label-Value constants

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617938/original/xkySDB0XDrua62JzPisbo1TNQH59sEZSaw.png?1692595922)

<br>

- **Internal Reference**<br> Load options from HighLevel Internal Modules

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617998/original/du8lZRMai5wENrSducJPjhqgFASlOZ_P6Q.png?1692596002)

<br>

### Supported HighLevel Modules

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005670538/original/8uQtBkMLWLhm6jcDxdX-gzjR07BQ_GPtXw.png?1692623479)

<br>

- **External API**<br> Load option from external API endpoint

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618042/original/2om_uuB9g_V8MhG1MOLUrPPMIiq2kLggTA.png?1692596134)

<br>

**URL (GET)**<br> Provide a URL to support GET method and send a valid response as per the sample response structure shared below.

**Headers**<br> Add headers as per your requirement

**Sample Response Data**

```json
{
  "options": [
    { "label": "Afghanistan", "value": "AF" },
    { "label": "Åland Islands", "value": "AX" },
    { "label": "Albania", "value": "AL" },
    { "label": "Algeria", "value": "DZ" },
    { "label": "American Samoa", "value": "AS" }
  ]
}
```

---

### Field Type: Hidden

It will be hidden in the action configuration and the mapped data will be sent in the payload. Used to collect essential information such as company_id, customerid, etc., from system data or from your custom triggers.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014523897/original/XyGotHxLGe2wMKBEiZA-SPiJUKlT7jy-Kw.png?1701863223)

<br>

---

### Field Type: Dynamic

Dynamic fields are used to build custom fields from an API call. The API call should return the below response structure to construct the fields in the Workflow action configuration form UI. Only one Dynamic type can be created per action.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005619479/original/4iG7FjTRJheIDHXNKGKDV3TZKaEtM-xMCg.png?1692598872)

<br>

**URL (POST)**<br> Enter your API endpoint URL. When executed data is sent to this API endpoint via POST method.

**Headers**<br> Add headers as per your requirement

**Sample Payload:**

```json
{
  "data": {
    "name": "John Doe",
    "age": "29",
    "gender": "male",
    "hobbies": ["sports", "music"],
    "address": "My Address",
    "country": "US",
    "profileType": "public",
    "dataShare": true,
    "tems": true
  },
  "extras": {
    "locationId": "xyz",
    "contactId": "abc",
    "workflowId": "def"
  },
  "meta": {
    "key": "custom_action_key",
    "version": "1.0"
  }
}
```

**Sample Response Structure:**<br> Sections are used to group the fields in UI

```json
{
  "inputs": [
    {
      "section": "Personal Info",
      "fields": [
        { "field": "name", "title": "Name", "fieldType": "string", "required": true },
        { "field": "age", "title": "Age", "fieldType": "numerical", "required": true },
        { "field": "gender", "title": "Gender", "fieldType": "select", "required": true,
          "options": [
            { "label": "Male", "value": "male" },
            { "label": "Female", "value": "female" }
          ]
        }
      ]
    },
    {
      "section": "Location Info",
      "fields": [
        { "field": "village", "title": "Village", "fieldType": "string", "required": true },
        { "field": "city", "title": "City", "fieldType": "string", "required": true },
        { "field": "fullAddress", "title": "Your Full Address", "fieldType": "textarea", "required": true }
      ]
    }
  ]
}
```

---

### Sample structure for each Field Types

**String**

```json
{ "field": "name", "title": "Name", "fieldType": "string", "required": true }
```

**Numeric**

```json
{ "field": "name", "title": "Name", "fieldType": "numeric", "required": true }
```

**Textarea**

```json
{ "field": "description", "title": "Description", "fieldType": "textarea", "required": true }
```

**Select**

```json
{
  "field": "gender",
  "title": "Gender",
  "fieldType": "select",
  "required": true,
  "options": [
    { "label": "Male", "value": "male" },
    { "label": "Female", "value": "female" }
  ]
}
```

**Multiple Select**

```json
{
  "field": "hobbies",
  "title": "Hobbies",
  "fieldType": "multiselect",
  "required": true,
  "options": [
    { "label": "Sport", "value": "sport" },
    { "label": "Music", "value": "music" }
  ]
}
```

**Radio**

```json
{
  "field": "profileType",
  "title": "Profile Type",
  "fieldType": "radio",
  "required": true,
  "options": [
    { "label": "Public", "value": "public" },
    { "label": "Private", "value": "private" }
  ]
}
```

**Toggle**

```json
{ "field": "dataShare", "title": "Allow my data to be stored", "fieldType": "toggle", "required": true }
```

**Checkbox**

```json
{ "field": "terms", "title": "Terms & conditions", "fieldType": "checkbox", "required": true }
```

---

## Validation Rules (Types)

The Validation Rules feature helps app developers ensure data integrity by enforcing input checks on form fields. Developers can choose from three flexible validation methods:

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654729/original/-BqA09IMW6XXljUIMVpOefqpJJ_JkQ2TWg.png?1747285143)

<br>

- **Pre-defined Rules**<br> Easily apply common validations such as email, phone number, URL, numerical values, and handlebar syntax checks.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654763/original/XDtbol7Qdfx4-ahKv5gkVKT415lhZivHPw.png?1747285248)

<br>

- **Regex Support**<br> Use custom regular expressions to validate inputs against specific patterns.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654765/original/mLG5Rv1JMo5y6MlQZVQfNmcY0Wucw3jr5w.png?1747285258)

<br>

- **Arrow Function**<br> Write custom arrow functions that receive the input value and return true or false based on whether the validation passes or fails.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046654766/original/wEHzLmsCVVTfrMXMrTKEHB9Wii3yvBXn_Q.png?1747285266)

<br>

*For every validation rule, a custom error message must be provided to display meaningful feedback when validation fails.*

---

## Multi-branch

The Multi-Branch Feature enables the creation of branches that can dynamically adjust based on various predefined conditions. By allowing multiple branches within a workflow, each contact can be directed down the appropriate path based on their interactions or status.

**Branch Section:** Defines the name or identifier for the specific branch section.<br> **Branch Section Description:** Provides a brief description or details about the branch section.<br> **Branch Name Label:** Specifies the label that will be displayed for the branch name.<br> **Branch Name Helptext:** Offers additional information related to the branch name.<br> **Delete Branch Title:** Sets the title or label used when deleting a branch.<br> **Delete Branch Description:** Describes when a branch is deleted.

**Options:**

- Allow New Branches: Enables users to add new branches within the action.
- Is Predefined Branches Editable: Allows users to edit predefined branches within the action.
- Show Branches Section: Displays the branch section details to the user.
- Disabled Allow new branch

---

#### Sample payload for branches

```json
{
  "data": {
    "name": "John Doe",
    "age": "29",
    "gender": "male",
    "hobbies": [ "sports", "music" ],
    "address": "My Address",
    "country": "US",
    "profileType": "public",
    "dataShare": true,
    "tems": true,
    "branches": [
      {
        "id": "a8d14b13-d7cc-4241-bd2c-53180f0ec278",
        "name": "Branch name",
        "fields": {
          "branchFieldKey": "branchFieldValue"
        }
      }
    ]
  },
  "extras": {
    "locationId": "xyz",
    "contactId": "abc",
    "workflowId": "def"
  },
  "meta": {
    "key": "custom_action_key",
    "version": "1.0"
  }
}
```

---

## Action Execution

Allows you to choose between an API or a custom code.

### API

**URL (POST)**<br> Enter your API endpoint URL. When this action is executed data is sent to this API endpoint via POST method.

**Headers**<br> Add required header data that has to be included while sending data to the API endpoint

**Sample Payload:**

```json
{
  "data": {
    "name": "John Doe",
    "age": "29",
    "gender": "male",
    "hobbies": ["sports", "music"],
    "address": "My Address",
    "country": "US",
    "profileType": "public",
    "dataShare": true,
    "tems": true
  },
  "extras": {
    "locationId": "xyz",
    "contactId": "abc",
    "workflowId": "def"
  },
  "meta": {
    "key": "custom_action_key",
    "version": "1.0"
  }
}
```

---

### Custom code

Custom Code allows users to create custom logic they want to achieve. This provides flexibility and control beyond the pre-built APIs, enabling users to automate complex tasks and integrate with various services not supported by API.

**Code Editor**

- You can write the code in the Code Editor
- You can input HTTP requests like Get, Put, Post, Delete etc via the button.
- You can also use custom values using the picker.
- Output should be a JavaScript Object or Array of Objects.

**Test and format your Code**

- Testing the code is a mandatory step, if the test is not done then user will not be able to use the output of the code in the subsequent steps.
- To test the code click on the "Test Code" button.
- Post clicking on Run test button, if there are no errors in the code them it will show "Test Result Success" and if there is an error in code then the result will be "Test Result Failed" and you would have to recheck the code to remove the error.
- You can also format the code using "Format code" button.

---

## Pause Execution

This toggle is used the contact will be held at this action unless resume webhook is requested.<br> If this toggle is true then provided extras object needs to be passed as body payload for resume workflow endpoint.

Show API details button shows a sample response to be passed onto to the webhook for Success Execution and Failed Execution.

- **Sync:** When the pause execution is turned off along with branching support, the contact will be moved to provided branch using `branchId` property from API response or from Custom Code using return statement. The branchId here will be the branch through with the contact will move forward.
- **Async:** When the pause execution is turned off, the branch ID needs to be sent to the webhook for resuming which is present in "show API details" button. More info present in Pause functionality.

---

## Response Data

Add sample response data to configure custom variables.

Enter a valid sample response JSON structure that will be sent as a response to the Send Data API endpoint.

Arrays are supported in response data. This data can be utilized in custom variables based on references and is available for use in Array Functions, Custom Code, and Custom Webhooks.

---

## Manage Custom Variables

Add Custom variables using sample response data, for users to use in workflows.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005620750/original/Q49PfGpsX05fiHc_6o29AMbOe8rtSuA4Sw.png?1692600268)

<br>

---

## Add Custom Variable

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005620775/original/l4xln2C5D1jyZxTEv-jahSqBadZkpCvuzA.png?1692600290)

<br>

- **Name**<br> *Enter label name*
- **Reference**<br> *Select a reference key from the sample response saved to Response Data.*

---

## Submit for Review

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621439/original/5UVWUz25eAcVTFtVlVtxEh3Fkg15t4zXDg.png?1692600744)

<br>

The action version will be in draft state by default. After updating the action information and configuration the action version should be submitted for review.

- Click on Submit for review and add required changelog information for the submitted version.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005622232/original/Xrf9qOywJo8Vovd-7Cjgm5mtglHrtYUP_Q.png?1692601503)

<br>

- Once approved the version submitted for review will be published live to all Sub-accounts.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621452/original/YeMGRy21eS8S8bI8rexthcKA8R4INYc2zw.png?1692600766)

<br>

---

## Create New Version

Click on + New Version to create a new version for the action.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621457/original/bHLDsksmL1K7qgmv7KoFYS6af3iMg8f0vQ.png?1692600778)

<br>

On clicking + New Version It will create a new draft version with all the previously published data prefilled.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005622063/original/yLpMG6PiUYcVdUTi1zkBE6udOqOscWghbA.png?1692601301)

<br>

---

## Delete Action

Once an Action is deleted, it will be deleted permanently and cannot be restored. The deleted action will be removed from Marketplace App and Workflow Action list. If a deleted action is part of any workflow the action execution will be skipped.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014097127/original/mHtzZ8zfmpagivsX-3J84PV73HpFmvvnpw.png?1701408996)

<br>

*Enter action name to confirm delete*

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014097165/original/niXVvIBTbQIo0_tYJGqglh99njIMQUOGog.png?1701409041)

<br>

---

For more detailed information, refer to the official HighLevel guide on [Marketplace Workflow Actions.](https://help.gohighlevel.com/support/solutions/articles/155000000571-marketplace-workflow-actions)

---

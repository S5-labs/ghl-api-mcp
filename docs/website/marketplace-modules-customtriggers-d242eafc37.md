> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/marketplace-modules/CustomTriggers). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Creating a Marketplace Workflow Trigger

Marketplace Workflow Triggers are the customizable workflow triggers managed in [Marketplace](https://marketplace.gohighlevel.com/). You will be able to create custom triggers to push data from your application/API to a workflow.

[Video Walkthrough on How to create Marketplace Workflow Trigger](https://youtu.be/5Ii6NM4iCI8)

## Create a New Trigger

- Navigate to the Workflow section, located under the Modules in the left-hand navigation menu of your app.
- Click on "Create Trigger" to initiate the process.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008571402/original/-akI1I0dRCxxnUB-vS_AXBRwM2lDmLY9zQ.png?1695707381)

<br>

## Define Trigger Information

- **Name:** Provide a descriptive name for your trigger.
- **Key:** Assign a unique identifier (e.g., `mycustomtrigger`). This key is immutable and used to reference the trigger within workflows.
- **Icon:** Select an icon to represent the trigger visually in the workflow builder.
- **Short Description:** Write a brief explanation of what the trigger does.
- **Summary:** Provide detailed information about the trigger's functionality and use cases.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008571484/original/upXNQ8ldHATTzVMFsJA6SDjKyyyXW8Md0A.png?1695707448)

<br>

## Configure Trigger Data

- Input a sample JSON payload that represents the data structure the trigger will handle. This sample is used to configure filters and custom variables.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572394/original/dDTnUzyorTuAP9fwktAjyt8XWSZoNy0ysQ.png?1695708653)

<br>

## Manage Filters

- Filters allow users to define conditions under which the trigger activates.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008573989/original/dUCSEOtTj74A2fotCwqyRB5157kJjHfxXA.png?1695710480)

<br>

**Create New Filter:**

- **Name:** Enter a name for the filter.
- **Type:** Choose from the following field types:
  - String (Simple text matching)
  - Select / Multi-Select
  - Dynamic
- **Required:** Specify if the filter is mandatory.
- **Reference:** Map the filter to a key in the sample trigger data.
- **Alters Dynamic Filter:** If enabled, any changes made to this filter value will trigger/re-trigger loading the dynamic filters in the workflow trigger configuration UI.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575005/original/Eno_UsYIGBv7NPyT-TDujscxHAjDgMwM8w.png?1695711462)

<br>

**Type: Select / Multi Select**

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575097/original/esi5jPJrs8bzkVEwcMvNP2P6JGgF_ZMHvg.png?1695711617)

<br>

**Option Type** is applicable only for Select and Multi Select field types.

Select one of the following option types:

- **Constants** Load options by adding custom Label-Value constants

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617938/original/xkySDB0XDrua62JzPisbo1TNQH59sEZSaw.png?1692595922)

<br>

- **Internal Reference** Load options from HighLevel Internal Modules. Select one of the HighLevel Modules to load options list.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005617998/original/du8lZRMai5wENrSducJPjhqgFASlOZ_P6Q.png?1692596002)

<br>

**Supported HighLevel Modules**

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005670538/original/8uQtBkMLWLhm6jcDxdX-gzjR07BQ_GPtXw.png?1692623479)

<br>

- **External API** Load option from external API endpoint

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005618042/original/2om_uuB9g_V8MhG1MOLUrPPMIiq2kLggTA.png?1692596134)

<br>

**URL (GET)** Provide a URL to support GET method and send a valid response as per the sample response structure shared below.

**Headers** Add headers as per your requirement

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

**Type: Dynamic**

Dynamic filters are used to build custom filters from an API call. The API call should return the below response structure to construct the filters in the Workflow trigger configuration form UI. Only one Dynamic type can be created per trigger.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008575252/original/ifNAt13wYheupSXn2LhgyT0zOp4wql5YtQ.png?1695711754)

<br>

**URL (POST)** Enter your API endpoint URL. When executed data is sent to this API endpoint via POST method in the below mentioned payload format and a valid response is expected as per the sample response structure shared below.

**Headers** Add headers as per your requirement

**Sample Payload:** The form data is sent as payload to the dynamic field API

```json
{
  "data": {
    "name": "John Doe",
    "age": "29",
    "gender": "male",
    "hobbies": ["sports", "music"],
    "address": "My Address",
    "country": "US",
    "profileType": "public"
  },
  "extras": {
    "locationId": "xyz",
    "contactId": "abc",
    "workflowId": "def"
  },
  "meta": {
    "key": "custom_trigger_key",
    "version": "1.0"
  }
}
```

---

**Sample Response Structure:**

```json
{
  "filters": [
    { "field": "name", "title": "Name", "fieldType": "string", "required": true },
    { "field": "gender", "title": "Gender", "fieldType": "select", "required": true,
      "options": [
        { "label": "Male", "value": "male" },
        { "label": "Female", "value": "female" }
      ]
    }
  ]
}
```

---

**Sample structure for each Filter Type**

**String**

```json
{ "field": "name", "title": "Name", "fieldType": "string", "required": true }
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

## Manage Custom Variables

- Custom variables allow users to map data from the trigger payload to variables used within the workflow.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572039/original/JQry9o7DFN62Ce_h2X0zvVE1zShpmMNqKg.png?1695708327)

<br>

**Add Custom Variable:**

- **Name:** Enter a label for the variable.
- **Reference:** Select a key from the sample trigger data to bind to this variable.

## Set Up Subscription URL

- The Subscription URL is an API endpoint that receives trigger configuration details whenever the trigger is created, updated, or deleted in a workflow.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572516/original/NxuZK11tEgoiGhlnW0FUCrPpaQu5iM88FA.png?1695708842)

<br>

- **URL (POST):** Enter your API endpoint URL.
- **Headers:** Add any required headers for the API call.
- **Payload Format:** The payload sent to this endpoint will include trigger data, metadata, and additional information such as location ID, workflow ID, and company ID.

#### Trigger "CREATED" in workflow

```json
{
  "triggerData": {
    "id": "def",
    "key": "trigger_a",
    "filters": [],
    "eventType": "CREATED",
    "targetUrl": "https://services.leadconnectorhq.com/workflows-marketplace/triggers/execute/abc/def"
  },
  "meta": { "key": "trigger_a", "version": "2.4" },
  "extras": { "locationId": "ghj", "workflowId": "qwe", "companyId": "asd" }
}
```

#### Trigger "UPDATED" in workflow

```json
{
  "triggerData": {
    "id": "def",
    "key": "trigger_a",
    "filters": [
      {
        "field": "country",
        "id": "country",
        "operator": "==",
        "title": "Country",
        "type": "select",
        "value": "USA"
      }
    ],
    "eventType": "UPDATED",
    "targetUrl": "https://services.leadconnectorhq.com/workflows-marketplace/triggers/execute/abc/def"
  },
  "meta": { "key": "trigger_a", "version": "2.4" },
  "extras": { "locationId": "ghj", "workflowId": "qwe", "companyId": "asd" }
}
```

#### Trigger "DELETED" in workflow

```json
{
  "triggerData": {
    "id": "def",
    "key": "trigger_a",
    "filters": [
      {
        "field": "country",
        "id": "country",
        "operator": "==",
        "title": "Country",
        "type": "select",
        "value": "USA"
      }
    ],
    "eventType": "DELETED",
    "targetUrl": "https://services.leadconnectorhq.com/workflows-marketplace/triggers/execute/abc/def"
  },
  "meta": { "key": "trigger_a", "version": "2.4" },
  "extras": { "locationId": "ghj", "workflowId": "qwe", "companyId": "asd" }
}
```

---

## Submit for Review

Once the trigger is configured:

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621439/original/5UVWUz25eAcVTFtVlVtxEh3Fkg15t4zXDg.png?1692600744)

<br>

- Click on "Submit for Review."

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155008572191/original/IGXs2a9XcQ-ybuxHr4VjcY8_JSnDq-VNOg.png?1695708444)

<br>

- Provide changelog information for the submitted version.
- Upon approval, the trigger becomes available to all sub-accounts.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621452/original/YeMGRy21eS8S8bI8rexthcKA8R4INYc2zw.png?1692600766)

<br>

---

## Version Management

- **Create New Version:** Click on "+ New Version" to create a new draft version of the trigger. This version will prefill all previously published data.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005621457/original/bHLDsksmL1K7qgmv7KoFYS6af3iMg8f0vQ.png?1692600778)

<br>

- **Submit for Review:** Each new version must be submitted for review and approved before it becomes live.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005622063/original/yLpMG6PiUYcVdUTi1zkBE6udOqOscWghbA.png?1692601301)

<br>

---

## Delete Trigger

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014522319/original/iILsc-HqjeJcvaYLyzPS1DLyWTp-E8ls2w.png?1701862634)

<br>

- To delete a trigger, enter the trigger name to confirm deletion.

![drawing](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155014522368/original/6eQ0DnkP561wluUc9BZkj3VbytT196rMSQ.png?1701862664)

<br>

- Once deleted, the trigger is permanently removed and cannot be restored.
- Any workflows using the deleted trigger will skip its execution.

---

## Can Workflows Execute Without Contact?

- Workflow can run contactless without any Contact data dependency so you can send any payload data via Marketplace Triggers and use it in workflow.
- You can proceed without contact and use actions that are not dependent on contact information. Custom Webhook, Google Sheet, Slack, ChatGPT and all Internal Tools can be executed without contact.
- If necessary, you can use the Create/Update or Find Contact actions to retrieve the contact data to the workflow.

**Examples:**

- Send order data to trigger and add the order information to google sheet, use if/else to categorize based on order value and send a slack notification.
- Retrieve the contact with Contact ID using Find contact action

---

For more detailed information, refer to the official HighLevel guide on [Marketplace Workflow Triggers.](https://help.gohighlevel.com/support/solutions/articles/155000001024-marketplace-workflow-triggers)

---

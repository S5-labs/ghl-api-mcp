> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/update-chat-widget). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Chat Widget

**Endpoint:** `PUT /chat-widget/data/:locationId/:id`

Replaces an existing chat widget with the provided configuration

## Request

**Version**

string

required

API Version

Available options

`v3`

**id**

string

required

The chat widget ID

**locationId**

string

required

The location ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**version**numberVersion**chatType**stringChat Type. The public API supports only liveChat and emailChat; any other value is rejected with a 422.Available options`liveChat``emailChat`**name**stringName**default**booleanDefault**settings**objectSettings

```json
{
  "version": 2,
  "chatType": "emailChat",
  "name": "Chat Widget 1",
  "default": false,
  "settings": {
    "promptType": "avatar",
    "locale": "en-us",
    "heading": "Welcome to Acme",
    "widgetPrimaryColor": "#4285F4",
    "theme": {
      "name": "blue"
    }
  }
}
```

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredChat widget ID**version**numberrequiredSchema version of the widget**chatType**stringrequiredChat Type. Reads are not restricted to the public-API write allow-list, so any stored chat type can be returned here.Available options`liveChat``waChat``emailChat``allInOneChat``voiceAiChat``facebookChat``instagramChat`**name**stringrequiredWidget name**locationId**stringrequiredThe location ID that owns this widget**deleted**booleanrequiredWhether the widget is soft-deleted**default**booleanrequiredWhether this is the default widget for the location**settings**objectWidget settings**creationSource**stringHow the widget was createdAvailable options`chat-widget``a2pCompliance``public-api``snapshot`**updatedBy**stringID of the user who last updated the widget**originId**stringID of the widget this one was cloned or imported from**createdAt**stringrequiredCreation timestamp (ISO 8601)**updatedAt**stringrequiredLast update timestamp (ISO 8601)

```json
{
  "_id": "ve9EPM428h8vShlRWsss",
  "version": 2,
  "chatType": "emailChat",
  "name": "Chat Widget 1",
  "locationId": "ve9EPM428h8vShlRWsss",
  "deleted": false,
  "default": false,
  "settings": {
    "acknowledgementDetails": {},
    "agencyName": "Example Agency",
    "agencyWebsite": "https://example.com",
    "allowAvatarImage": true,
    "autoCountryCode": true,
    "countryCode": "US",
    "chatType": "emailChat",
    "promptType": "avatar",
    "chatIcon": "messageChatCircle",
    "enableRevisitMessage": true,
    "heading": "Welcome to Our Website",
    "legalMsg": "By using this website, you agree to our terms and conditions.",
    "liveChatAckMsg": "Thank you for reaching out. How may I assist you today?",
    "liveChatEndedMsg": "Thank you for chatting with us. Have a great day!",
    "liveChatFeedbackMsg": "We would appreciate your feedback. Please rate your experience.",
    "liveChatFeedbackNote": "Your feedback helps us improve our services.",
    "liveChatIntroMsg": "Hello! Welcome to our live chat support. How can I assist you today?",
    "liveChatUserInactiveMsg": "Are you still there? Please let us know if you need assistance.",
    "liveChatUserInactiveTime": "5 minutes",
    "liveChatVisitorInactiveMsg": "Looks like you stepped away. Feel free to return whenever you need help.",
    "liveChatVisitorInactiveTime": "10 minutes",
    "locale": "en-us",
    "promptAvatar": "avatar.jpg",
    "promptAvatarAltText": "company logo",
    "isPromptAvatarImageOptimize": false,
    "promptMsg": "Need assistance? Feel free to ask us anything!",
    "revisitPromptMsg": "Welcome back! How can we help you today?",
    "sendActionText": "Send",
    "showAgencyBranding": true,
    "showConsentCheckbox": true,
    "showLiveChatWelcomeMsg": true,
    "showPrompt": true,
    "subHeading": "We are here to help you!",
    "successMsg": "Your message has been sent successfully.",
    "supportContact": "support@example.com",
    "thankYouMsg": "Thank you for visiting our website!",
    "theme": {},
    "waNumber": "+1234567890",
    "widgetPrimaryColor": "#4285F4",
    "representativeAssignedMessage": "#4285F4",
    "dimensions": {},
    "advanceSettings": {},
    "locationCountryCode": "US",
    "widgetPlacement": "embedded",
    "loadStrategy": "interaction"
  },
  "creationSource": "chat-widget",
  "updatedBy": "oHJiAh0wDG3BzmzACVD6",
  "originId": "ve9EPM428h8vShlRWsss",
  "createdAt": "2026-08-17T09:24:11.123Z",
  "updatedAt": "2026-08-17T09:24:11.123Z"
}
```

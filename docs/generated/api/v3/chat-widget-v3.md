# Chat Widget API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/chat-widget-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Chat Widget API

## Chat Widget

### List Chat Widgets

**Endpoint:** `GET /chat-widget/list`
**Scope:** `chat-widget.readonly`
**Token Type:** Location-Access

Returns chat widgets for the sub-account with pagination and optional filters.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | The location ID |
| `offset` | query | `string` | Yes | Offset |
| `limit` | query | `string` | Yes | Limit |
| `chatType` | query | `string` | No | The type of chat widget. Supports normal ChatType values, plus the virtual umbrella "webChat" (maps to facebookChat/emailChat/instagramChat/waChat). |
| `excludeChatType` | query | `string` | No | The type of chat widget |
| `voiceAiAgentId` | query | `string` | No | The voice AI agent ID |
| `allInOneChatTypes` | query | `string` | No | All-in-one chat type to filter by. Only applies when chatType is "allInOneChat". Supports normal ChatType values plus the virtual umbrella "webChat" (maps to facebookChat/emailChat/instagramChat/waChat). |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `ForbiddenDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Chat Widget

**Endpoint:** `GET /chat-widget/data/{locationId}/{id}`
**Scope:** `chat-widget.readonly`
**Token Type:** Location-Access

Returns a single chat widget by ID.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | The chat widget ID |
| `locationId` | path | `string` | Yes | The location ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `ForbiddenDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Chat Widget

**Endpoint:** `PUT /chat-widget/data/{locationId}/{id}`
**Scope:** `chat-widget.write`
**Token Type:** Location-Access

Full update of a chat widget resource.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | The chat widget ID |
| `locationId` | path | `string` | Yes | The location ID |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateWidgetDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `ForbiddenDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Patch Chat Widget

**Endpoint:** `PATCH /chat-widget/data/{locationId}/{id}`
**Scope:** `chat-widget.write`
**Token Type:** Location-Access

Partial update of a chat widget resource.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | The chat widget ID |
| `locationId` | path | `string` | Yes | The location ID |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateWidgetDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `ForbiddenDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Widget Config

**Endpoint:** `GET /chat-widget/public/config/{id}`

Returns widget configuration by ID.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | The chat widget ID |
| `version` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `ForbiddenDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Chat Widget

**Endpoint:** `DELETE /chat-widget/{locationId}/{id}`
**Scope:** `chat-widget.write`
**Token Type:** Location-Access

Soft-deletes a chat widget. If it was the default, another widget may be promoted.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | The chat widget ID |
| `locationId` | path | `string` | Yes | The location ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `ForbiddenDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Clone Chat Widget

**Endpoint:** `POST /chat-widget/clone`
**Scope:** `chat-widget.write`
**Token Type:** Location-Access

Creates a copy of an existing chat widget in the same sub-account.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CloneChatWidgetDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Created | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `ForbiddenDTO` |
| `404` | Not Found | `NotFoundDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Chat Widget

**Endpoint:** `POST /chat-widget/`
**Scope:** `chat-widget.write`
**Token Type:** Location-Access

Creates a new chat widget for the given sub-account.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateWidgetDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Created | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | The token does not have access to this location | `ForbiddenDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### AcknowledgementDetailsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `icon` | `string` | No | Icon |
| `placeholderColor` | `string` | No | Placeholder color |
| `liveChatIcon` | `string` | No | Icon for live chat |
| `liveChatPlaceholderColor` | `string` | No | Placeholder color for live chat |

### WidgetSettingsThemeCustomColorDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `chatBubbleColor` | `string` | No | Chat Bubble Color |
| `backgroundColor` | `string` | No | Background Color |
| `headerColor` | `string` | No | Header Color |
| `buttonColor` | `string` | No | Button Color |
| `avatarBackgroundColor` | `string` | No | Avatar Background Color |
| `avatarBorderColor` | `string` | No | Avatar Border Color |
| `senderMessageColor` | `string` | No | Sender Message Color |
| `receivedMessageColor` | `string` | No | Received Message Color |

### WidgetSettingsThemeDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Theme Name |
| `colors` | `WidgetSettingsThemeCustomColorDTO` | No | Custom Color Options |

### WidgetSettingsCustomizationSizeDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `width` | `number` | No | Width |
| `height` | `number` | No | Height |

### WidgetSettingsCustomizationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `position` | `string` | No | Position |
| `sizes` | `WidgetSettingsCustomizationSizeDTO` | No | Typography Color Options |

### RedirectDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `redirectAction` | `boolean` | No | Redirect Action |
| `redirectWebsite` | `string` | No | Redirect Website |
| `redirectText` | `string` | No | Redirect Text |

### BusinessOfficeHoursDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enableBusinessHours` | `boolean` | No | Enable Business Hours |
| `openHours` | `array<string>` | No | Open hours schedule |
| `timezone` | `string` | No | Time Zone |
| `outsideOfficeHoursWelcomeMsg` | `string` | No | Time Zone |

### FBPageDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `facebookPageId` | `string` | No | Facebook Page ID |
| `facebookPageName` | `string` | No | Facebook Page Name |

### InstagramPageDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `facebookPageId` | `string` | No | Facebook Page ID |
| `facebookPageName` | `string` | No | Facebook Page Name |
| `instagramPageId` | `string` | No | Instagram Page ID |
| `instagramUsername` | `string` | No | Instagram UserName |

### A2PComplianceDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enableA2PCompliance` | `boolean` | No | Enable A2P Compliance |
| `a2pOptInForm1` | `string` | No | A2P Opt In Form 1 |
| `a2pOptInForm1ShowCheckbox` | `boolean` | No | Show checkbox for A2P Opt In Form 1 |
| `a2pOptInForm1PreChecked` | `boolean` | No | Pre-checked state for A2P Opt In Form 1 checkbox |
| `isA2POptInForm2` | `boolean` | No | Is A2P Opt In Form 2 |
| `a2pOptInForm2` | `string` | No | A2P Opt In Form 2 |
| `a2pOptInForm2ShowCheckbox` | `boolean` | No | Show checkbox for A2P Opt In Form 2 |
| `a2pOptInForm2PreChecked` | `boolean` | No | Pre-checked state for A2P Opt In Form 2 checkbox |
| `privacyPolicyLink` | `string` | No | Privacy Policy Link |
| `termsOfServiceLink` | `string` | No | Terms of Service |
| `isA2POptInForm1` | `boolean` | No | Is A2P Opt In Form 1 enabled |
| `messageType` | `string` | No | Message Type |

### AdvanceSettingsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `brandingTitle` | `string` | No | Branding Title |
| `redirect` | `RedirectDTO` | No | Redirect Object |
| `enableContactForm` | `boolean` | No | Boolean for showing contact form at start |
| `defaultConsentCheck` | `boolean` | No | By default consent check for contact form |
| `businessOfficeHours` | `BusinessOfficeHoursDTO` | No | Business Office Hours |
| `contactFormOptions` | `array<string>` | No | Contact form field configuration |
| `allInOneChatTypes` | `array<string>` | No | Chat types included in the all-in-one widget |
| `allInOneInitialMsg` | `string` | No | All In One Initial Msg |
| `contactFormIntroMessage` | `string` | No | Contact Form Intro Message |
| `contactFormSystemMessage` | `string` | No | Contact Form System Message |
| `prefilledMessageText` | `string` | No | Prefilled Message Text |
| `voiceAiAgent` | `object` | No | Voice AI Agent |
| `fbPage` | `FBPageDTO` | No | Facebook Page |
| `instagramPage` | `InstagramPageDTO` | No | Instagram Page |
| `playNotificationSound` | `boolean` | No | Play Notification Sound |
| `voiceAiSendActionText` | `string` | No | Voice Ai Send Action Text |
| `aTwoPCompliance` | `A2PComplianceDTO` | No | A2P Compliance |

### WidgetSettingsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acknowledgementDetails` | `AcknowledgementDetailsDTO` | No | Acknowledgement Details |
| `agencyName` | `string` | No | Name of the agency |
| `agencyWebsite` | `string` | No | Website URL of the agency |
| `allowAvatarImage` | `boolean` | No | Allow avatar image |
| `autoCountryCode` | `boolean` | No | Boolean indicating whether to automatically detect country code |
| `countryCode` | `string` | No | Country code |
| `chatType` | `string` | Yes | Chat Type |
| `promptType` | `string` | No | Prompt Type |
| `chatIcon` | `string` | Yes | Message Chat Circle |
| `enableRevisitMessage` | `boolean` | No | Boolean indicating whether to enable a revisit message |
| `heading` | `string` | No | Heading text |
| `legalMsg` | `string` | No | Legal message |
| `liveChatAckMsg` | `string` | No | Message acknowledging a live chat |
| `liveChatEndedMsg` | `string` | No | Message indicating the end of a live chat |
| `liveChatFeedbackMsg` | `string` | No | Message asking for feedback after a live chat |
| `liveChatFeedbackNote` | `string` | No | Note regarding live chat feedback |
| `liveChatIntroMsg` | `string` | No | Introduction message for a live chat |
| `liveChatUserInactiveMsg` | `string` | No | Message for inactive users during a live chat |
| `liveChatUserInactiveTime` | `string` | No | Time for considering a user inactive during a live chat |
| `liveChatVisitorInactiveMsg` | `string` | No | Message for inactive visitors during a live chat |
| `liveChatVisitorInactiveTime` | `string` | No | Time for considering a visitor inactive during a live chat |
| `locale` | `string` | No | Locale setting |
| `promptAvatar` | `string` | No | Avatar for prompts |
| `promptAvatarAltText` | `string` | No | Prompt Avatar Alt Text |
| `isPromptAvatarImageOptimize` | `boolean` | No | Avatar Image Optimization |
| `promptMsg` | `string` | No | Prompt message |
| `revisitPromptMsg` | `string` | No | Message for revisiting prompts |
| `sendActionText` | `string` | No | Text for send action |
| `showAgencyBranding` | `boolean` | No | Boolean indicating whether to show agency branding |
| `showConsentCheckbox` | `boolean` | No | Boolean indicating whether to show a consent checkbox |
| `showLiveChatWelcomeMsg` | `boolean` | No | Boolean indicating whether to show a welcome message for live chat |
| `showPrompt` | `boolean` | No | Boolean indicating whether to show prompts |
| `subHeading` | `string` | No | Subheading text |
| `successMsg` | `string` | No | Success message |
| `supportContact` | `string` | No | Contact information for support |
| `thankYouMsg` | `string` | No | Thank you message |
| `theme` | `WidgetSettingsThemeDTO` | No | Theme |
| `useEmailField` | `boolean` | No | Boolean indicating whether to use an email field |
| `waNumber` | `string` | No | WhatsApp number |
| `widgetPrimaryColor` | `string` | No | Primary color for the widget |
| `representativeAssignedMessage` | `string` | No | Representative Assigned Message |
| `dimensions` | `WidgetSettingsCustomizationDTO` | No | Customizations |
| `advanceSettings` | `AdvanceSettingsDTO` | No | Advance Settings |
| `locationCountryCode` | `string` | No | Location Country Code |
| `widgetId` | `string` | No | Widget Id |
| `widgetPlacement` | `string` | No | Widget Placement |

### CreateWidgetDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `version` | `number` | Yes | Version |
| `chatType` | `string` | Yes | Chat type |
| `name` | `string` | Yes | Name |
| `locationId` | `string` | Yes | Location ID |
| `deleted` | `boolean` | No | Deleted |
| `default` | `boolean` | No | Default |
| `settings` | `WidgetSettingsDTO` | No | Settings |

### UpdateWidgetDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `version` | `number` | No | Version |
| `chatType` | `string` | No | Chat type |
| `name` | `string` | No | Name |
| `default` | `boolean` | No | Default |
| `settings` | `WidgetSettingsDTO` | No | Settings |

### CloneChatWidgetDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | locationId |
| `chatWidgetId` | `string` | Yes | chat widget ID |
| `name` | `string` | No | Name for the cloned widget |

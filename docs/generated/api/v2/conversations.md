# Conversations API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/conversations.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Conversations API

## Search

### Search Conversations

**Endpoint:** `GET /conversations/search`
**Scope:** `conversations.readonly`
**Token Type:** bearer

Returns a list of all conversations matching the search criteria along with the sort and filter options selected.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |
| `contactId` | query | `string` | No | Contact Id |
| `assignedTo` | query | `string` | No | User IDs that conversations are assigned to. Multiple IDs can be provided as comma-separated values. Use "unassigned" to fetch conversations not assigned to any user. |
| `followers` | query | `string` | No | User IDs of followers to filter conversations by. Multiple IDs can be provided as comma-separated values. |
| `mentions` | query | `string` | No | User Id of the mention. Multiple values are comma separated. |
| `query` | query | `string` | No | Search paramater as a string |
| `sort` | query | `string` | No | Sort paramater - asc or desc |
| `startAfterDate` | query | `any` | No | Search to begin after the specified date - should contain the sort value of the last document |
| `id` | query | `string` | No | Id of the conversation |
| `limit` | query | `number` | No | Limit of conversations - Default is 20 |
| `lastMessageType` | query | `string` | No | Type of the last message in the conversation as a string |
| `lastMessageAction` | query | `string` | No | Action of the last outbound message in the conversation as string. |
| `lastMessageDirection` | query | `string` | No | Direction of the last message in the conversation as string. |
| `status` | query | `string` | No | The status of the conversation to be filtered - all, read, unread, starred |
| `sortBy` | query | `string` | No | The sorting of the conversation to be filtered as - manual messages or all messages |
| `sortScoreProfile` | query | `string` | No | Id of score profile on which sortBy.ScoreProfile should sort on |
| `scoreProfile` | query | `string` | No | Id of score profile on which conversations should get filtered out, works with scoreProfileMin & scoreProfileMax |
| `scoreProfileMin` | query | `number` | No | Minimum value for score |
| `scoreProfileMax` | query | `number` | No | Maximum value for score |
| `startDate` | query | `number` | No | Start date filter for dateAdded field (Unix timestamp in milliseconds) |
| `endDate` | query | `number` | No | End date filter for dateAdded field (Unix timestamp in milliseconds) |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully fetched the conversations | `SendConversationResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Conversations

### Get Conversation

**Endpoint:** `GET /conversations/{conversationId}`
**Scope:** `conversations.readonly`
**Token Type:** bearer

Get the conversation details based on the conversation ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `conversationId` | path | `string` | Yes | Conversation ID as string |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetConversationByIdResponse` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Conversation

**Endpoint:** `PUT /conversations/{conversationId}`
**Scope:** `conversations.write`
**Token Type:** bearer

Update the conversation details based on the conversation ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `conversationId` | path | `string` | Yes | Conversation ID as string |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateConversationDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetConversationSuccessfulResponse` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Conversation

**Endpoint:** `DELETE /conversations/{conversationId}`
**Scope:** `conversations.write`
**Token Type:** bearer

Delete the conversation details based on the conversation ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `conversationId` | path | `string` | Yes | Conversation ID as string |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteConversationSuccessfulResponse` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Conversation

**Endpoint:** `POST /conversations/`
**Scope:** `conversations.write`
**Token Type:** bearer

Creates a new conversation with the data provided

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateConversationDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateConversationSuccessResponse` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Preference Management

### Get All Custom Subtypes

**Endpoint:** `GET /conversations/preferences/custom-subtypes`

Get all custom subtypes for a location

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Custom Subtype

**Endpoint:** `POST /conversations/preferences/custom-subtypes`

Create a new custom subtype for a location. Requires agency or account admin role.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateCustomSubtypeDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `—` |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Custom Subtype

**Endpoint:** `PUT /conversations/preferences/custom-subtypes/{id}`

Update or archive a custom subtype. Requires agency or account admin role.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Custom Subtype Id |
| `locationId` | query | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCustomSubtypeDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Contact Unsubscription Status

**Endpoint:** `GET /conversations/preferences/unsubscriptions/status`

Get all subscription statuses for a contact (all emails or specific email)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |
| `contactId` | query | `string` | Yes | Contact Id |
| `email` | query | `string` | No | Email address (optional - if not provided, gets all emails for contact) |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### User Subscription Change

**Endpoint:** `POST /conversations/preferences/unsubscriptions/user-change`

Process subscription change initiated by a user (admin/agent). Supports individual custom subscription changes and resub all functionality. Legal forms are automatically created for user-initiated resubscribe actions on custom subscriptions.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UserSubscriptionChangeDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `—` |
| `201` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Email

### Get email by Id

**Endpoint:** `GET /conversations/messages/email/{id}`

Get email by Id

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Email object for the id given. | `GetEmailMessageResponseDto` |

### Cancel a scheduled email message.

**Endpoint:** `DELETE /conversations/messages/email/{emailMessageId}/schedule`

Post the messageId for the API to delete a scheduled email message. <br />

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `emailMessageId` | path | `string` | Yes | Email Message Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | The scheduled email message was cancelled successfully | `CancelScheduledResponseDto` |

## Messages

### Export messages by location ID

**Endpoint:** `GET /conversations/messages/export`
**Scope:** `conversations/message.readonly`
**Token Type:** bearer

Export messages for a specific location with cursor-based pagination support. Response includes messageType (string), source, and subType fields. The channel parameter is optional - if not provided, all non-email message types will be returned including activity messages (opportunity updates, appointments, etc.).

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location ID to filter messages by |
| `limit` | query | `number` | No | Number of messages to return per page |
| `cursor` | query | `string` | No | Cursor for pagination. Pass the nextCursor from previous response to get next page. |
| `sortBy` | query | `string` | No | Field to sort by |
| `sortOrder` | query | `string` | No | Sort order |
| `conversationId` | query | `string` | No | Filter messages by conversation ID |
| `contactId` | query | `string` | No | Filter messages by contact ID |
| `channel` | query | `string` | No | Filter by message channel. If not provided, all non-email message types will be returned including activity messages (opportunity updates, appointments, etc.) |
| `startDate` | query | `string` | No | Start date to filter messages by |
| `endDate` | query | `string` | No | End date to filter messages by |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | List of messages for the location with pagination details. | `ExportMessagesResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get message by message id

**Endpoint:** `GET /conversations/messages/{id}`
**Scope:** `conversations/message.readonly`
**Token Type:** bearer

Get message by message id.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Message object for the id given. | `GetMessageResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get messages by conversation id

**Endpoint:** `GET /conversations/{conversationId}/messages`
**Scope:** `conversations/message.readonly`
**Token Type:** bearer

Get messages by conversation id.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `conversationId` | path | `string` | Yes | Conversation ID as string |
| `lastMessageId` | query | `string` | No | Message ID of the last message in the list as a string |
| `limit` | query | `number` | No | Number of messages to be fetched from the conversation. Default limit is 20 |
| `type` | query | `string` | No | Types of message to fetched separated with comma |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | List of messages for the conversation id of the given type. | `GetMessagesByConversationResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Send a new message

**Endpoint:** `POST /conversations/messages`
**Scope:** `conversations/message.write`
**Token Type:** bearer

Post the necessary fields for the API to send a new message.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SendMessageBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Created the message | `SendMessageResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Add an inbound message

**Endpoint:** `POST /conversations/messages/inbound`
**Scope:** `conversations/message.write`
**Token Type:** bearer

Post the necessary fields for the API to add a new inbound message. <br />

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ProcessMessageBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Created the message | `ProcessMessageResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Add an external outbound call

**Endpoint:** `POST /conversations/messages/outbound`
**Scope:** `conversations/message.write`
**Token Type:** bearer

Post the necessary fields for the API to add a new outbound call.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ProcessOutboundMessageBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Created the message | `ProcessMessageResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Send a review reply to Google My Business

**Endpoint:** `POST /conversations/messages/review-reply`
**Scope:** `conversations/message.write`
**Token Type:** bearer

Post a reply to a customer review on Google My Business

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SendReviewReplyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Review reply sent successfully | `SendMessageResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Cancel a scheduled message.

**Endpoint:** `DELETE /conversations/messages/{messageId}/schedule`
**Scope:** `conversations/message.write`
**Token Type:** bearer

Post the messageId for the API to delete a scheduled message. <br />

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `messageId` | path | `string` | Yes | Message Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | The scheduled message was cancelled successfully | `CancelScheduledResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Upload file attachments

**Endpoint:** `POST /conversations/messages/upload`
**Scope:** `conversations/message.write`
**Token Type:** bearer

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "fileAttachment". <br /><br /> The allowed file types are: <br/> <ul><li>JPG</li><li>JPEG</li><li>PNG</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>PDF</li><li>DOC</li><li>DOCX</li><li>TXT</li><li>MP3</li><li>WAV</li></ul> <br /><br /> The API will return an object with the URLs

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| multipart/form-data | `UploadFilesDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Uploaded the file successfully | `UploadFilesResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `413` | Payload Too Large | `UploadFilesErrorResponseDto` |
| `415` | Unsupported Media Type | `UploadFilesErrorResponseDto` |

### Initiate file upload to GCS

**Endpoint:** `POST /conversations/messages/upload/initiate`
**Scope:** `conversations/message.write`
**Token Type:** bearer

Generates a signed URL for direct file upload to Google Cloud Storage. Returns a signed URL valid for 15 minutes. Upload file via PUT request, then call /complete to finalize.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `InitiateFileUploadDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Signed URL generated successfully | `InitiateFileUploadResponseDto` |
| `400` | Bad Request - Invalid parameters | `—` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `413` | File size exceeds maximum allowed limit | `—` |

### Complete file upload

**Endpoint:** `POST /conversations/messages/upload/complete`
**Scope:** `conversations/message.write`
**Token Type:** bearer

Validates the uploaded file in GCS and returns the public URL. Call this endpoint after successfully uploading the file to the signed URL.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CompleteFileUploadDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Upload completed successfully | `CompleteFileUploadResponseDto` |
| `400` | Bad Request - Invalid parameters | `—` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `404` | File not found in storage - upload may have failed or URL expired | `—` |

### Update message status

**Endpoint:** `PUT /conversations/messages/{messageId}/status`
**Scope:** `conversations/message.write`
**Token Type:** bearer

Post the necessary fields for the API to update message status.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `messageId` | path | `string` | Yes | Message Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateMessageStatusDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Created the message | `SendMessageResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Add message attachments

**Endpoint:** `PUT /conversations/messages/{messageId}/attachments`
**Scope:** `conversations/message.write`
**Token Type:** bearer

Set attachments on an existing message (replaces existing). Maximum 5 URLs. Supported for TYPE_CUSTOM_CALL (34) and TYPE_CALL (1) with subType EXTERNAL_CALL.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `messageId` | path | `string` | Yes | Message Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AddMessageAttachmentsDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successfully set message attachments | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `403` | Message type does not support attachment updates | `—` |
| `404` | Message not found | `—` |

### Get Recording by Message ID

**Endpoint:** `GET /conversations/messages/{messageId}/locations/{locationId}/recording`
**Scope:** `conversations/message.readonly`
**Token Type:** bearer, Location-Access

Get the recording for a message by passing the message id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location ID as string |
| `messageId` | path | `string` | Yes | Message ID as string |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Gives the attached recording to the message | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get transcription by Message ID

**Endpoint:** `GET /conversations/locations/{locationId}/messages/{messageId}/transcription`
**Scope:** `conversations/message.readonly`
**Token Type:** bearer, Location-Access

Get the recording transcription for a message by passing the message id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location ID as string |
| `messageId` | path | `string` | Yes | Message ID as string |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Gives the attached recording transcription to the message | `GetMessageTranscriptionResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Download transcription by Message ID

**Endpoint:** `GET /conversations/locations/{locationId}/messages/{messageId}/transcription/download`
**Scope:** `conversations/message.readonly`
**Token Type:** bearer, Location-Access

Download the recording transcription for a message by passing the message id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location ID as string |
| `messageId` | path | `string` | Yes | Message ID as string |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Downloads the attached transcription of the message | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Providers

### Agent/Ai-Bot is typing a message indicator for live chat

**Endpoint:** `POST /conversations/providers/live-chat/typing`
**Scope:** `conversations/livechat.write`
**Token Type:** Location-Access

Agent/AI-Bot will call this when they are typing a message in live chat message

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UserTypingBody` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Show typing indicator for live chat | `CreateLiveChatMessageFeedbackResponse` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### StartAfterNumberSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `startAfterDate` | `number` | No | Search to begin after the specified date - should contain the sort value of the last document |

### StartAfterArrayNumberSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `startAfterDate` | `array<string>` | No | Search to begin after the specified date - should contain the sort value of the last document |

### ConversationSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Conversation Id |
| `contactId` | `string` | Yes | Contact Id |
| `locationId` | `string` | Yes | Location Id |
| `lastMessageBody` | `string` | Yes | Content of the most recent message in the conversation |
| `lastMessageType` | `string` | Yes | Channel/type of the most recent message (SMS, Email, Call, etc) |
| `type` | `string` | Yes | Primary channel/type of the conversation (Phone, Email, etc) |
| `unreadCount` | `number` | Yes | Number of unread messages in this conversation |
| `fullName` | `string` | Yes | Complete name of the contact (first and last name) |
| `contactName` | `string` | Yes | Alternative display name for the contact - used when full name is not available |
| `email` | `string` | Yes | Primary email address of the contact |
| `phone` | `string` | Yes | Primary phone number of the contact |

### SendConversationResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversations` | `array<ConversationSchema>` | Yes | The list of all conversations found for the given query |
| `total` | `number` | Yes | Total Number of results found for the given query |

### CreateConversationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID as string |
| `contactId` | `string` | Yes | Contact ID as string |

### ConversationCreateResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the conversation |
| `dateUpdated` | `string` | Yes | Date when the conversation was last updated |
| `dateAdded` | `string` | Yes | Date when the conversation was created |
| `deleted` | `boolean` | Yes | Flag indicating if this conversation has been deleted |
| `contactId` | `string` | Yes | Unique identifier of the contact associated with this conversation |
| `locationId` | `string` | Yes | Unique identifier of the business location where this conversation takes place |
| `lastMessageDate` | `string` | Yes | Date of the last message in the conversation |
| `assignedTo` | `string` | No | Unique identifier of the team member assigned to this conversation |

### CreateConversationSuccessResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Indicates whether the API request was successful. |
| `conversation` | `ConversationCreateResponseDto` | Yes | Conversation data of the provided conversation ID. |

### GetConversationByIdResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contactId` | `string` | Yes | Unique identifier of the contact associated with this conversation |
| `locationId` | `string` | Yes | Unique identifier of the business location where this conversation takes place |
| `deleted` | `boolean` | Yes | Flag indicating if this conversation has been moved to trash/deleted |
| `inbox` | `boolean` | Yes | Flag indicating if this conversation is currently in the main inbox view |
| `type` | `number` | Yes | Communication channel type for this conversation: 1 (Phone), 2 (Email), 3 (Facebook Messenger), 4 (Review), 5 (Group SMS), 6 (Internal Chat - coming soon) |
| `unreadCount` | `number` | Yes | Number of messages in this conversation that have not been read by the user |
| `assignedTo` | `string` | No | Unique identifier of the team member currently responsible for handling this conversation |
| `id` | `string` | Yes | Unique identifier for this specific conversation thread |
| `starred` | `boolean` | No | Flag indicating if this conversation has been marked as important/starred by the user |

### UpdateConversationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID as string |
| `unreadCount` | `number` | No | Count of unread messages in the conversation |
| `starred` | `boolean` | No | Starred status of the conversation. |
| `feedback` | `object` | No | — |

### ConversationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Contact ID as string |
| `locationId` | `string` | Yes | Location ID as string |
| `contactId` | `string` | Yes | Contact ID as string |
| `assignedTo` | `string` | No | Assigned User ID as string |
| `userId` | `string` | No | User ID as string |
| `lastMessageBody` | `string` | No | Last message body as string |
| `lastMessageDate` | `string` | No | Last message date as UTC |
| `lastMessageType` | `string` | No | Type of the last message sent/received in the conversation. |
| `unreadCount` | `number` | No | Count of unread messages in the conversation |
| `inbox` | `boolean` | No | Inbox status of the conversation. |
| `starred` | `boolean` | No | Starred status of the conversation. |
| `deleted` | `boolean` | Yes | Deleted status of the conversation. |

### GetConversationSuccessfulResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Boolean value as the API response. |
| `conversation` | `ConversationDto` | Yes | Conversation data of the provided conversation ID. |

### DeleteConversationSuccessfulResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Boolean value as the API response. |

### CreateCustomSubtypeDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Name of the custom subtype (max 100 characters) |
| `description` | `string` | No | Description of the custom subtype (max 100 characters) |
| `channel` | `string` | Yes | Communication channel |
| `language` | `string` | Yes | Language code |

### UpdateCustomSubtypeDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Name of the custom subtype (max 100 characters) |
| `description` | `string` | No | Description of the custom subtype (max 100 characters) |
| `archived` | `boolean` | No | Whether the custom subtype is archived |
| `resubscription_legal_form_id` | `string` | No | Resubscription legal form ID (optional when archiving) |

### SubscriptionActionDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Type of subscription action |
| `subtype_name` | `string` | No | Subscription type name (required for default types: "One on One") |
| `subtype_id` | `string` | No | Custom subscription type ID (required for custom types) |
| `subtype_status` | `string` | Yes | Subscription status |

### UserSubscriptionChangeDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `contactId` | `string` | Yes | Contact Id |
| `email` | `string` | Yes | Email address |
| `subscription_action` | `SubscriptionActionDto` | Yes | Subscription action details |
| `legal_reason` | `string` | No | Legal reason for the change (required only for resubscribe and resub_all actions) |
| `legal_description` | `string` | No | Legal description/details |

### GetEmailMessageResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `altId` | `string` | No | External Id |
| `threadId` | `string` | Yes | Message Id or thread Id |
| `locationId` | `string` | Yes | — |
| `contactId` | `string` | Yes | — |
| `conversationId` | `string` | Yes | — |
| `dateAdded` | `string` | Yes | — |
| `subject` | `string` | No | — |
| `body` | `string` | Yes | — |
| `direction` | `string` | Yes | — |
| `status` | `string` | No | — |
| `contentType` | `string` | Yes | — |
| `attachments` | `array<string>` | No | An array of attachment URLs. |
| `provider` | `string` | No | — |
| `from` | `string` | Yes | Name and Email Id of the sender |
| `to` | `array<string>` | Yes | List of email Ids of the receivers |
| `cc` | `array<string>` | No | List of email Ids of the people in the cc field |
| `bcc` | `array<string>` | No | List of email Ids of the people in the bcc field |
| `replyToMessageId` | `string` | No | In case of reply, email message Id of the reply to email |
| `source` | `string` | No | Email source |
| `conversationProviderId` | `string` | No | Conversation provider ID |

### CancelScheduledResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `number` | Yes | HTTP Status code of the request |
| `message` | `string` | Yes | Error message of the request |

### MessageMeta

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `callDuration` | `string` | No | Call duration in seconds |
| `callStatus` | `string` | No | Call status - can be pending, completed, answered, busy, no-answer, failed, canceled, or voicemail |
| `email` | `object` | No | meta will contain email, for message type 3 (email). messageIds is list of all email message ids under the message thread |

### GetMessageResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `type` | `number` | Yes | — |
| `messageType` | `string` | Yes | Type of the message as a string |
| `locationId` | `string` | Yes | — |
| `contactId` | `string` | Yes | — |
| `conversationId` | `string` | Yes | — |
| `dateAdded` | `string` | Yes | — |
| `body` | `string` | No | — |
| `direction` | `string` | Yes | — |
| `status` | `string` | No | — |
| `contentType` | `string` | Yes | — |
| `attachments` | `array<string>` | No | An array of attachment URLs. Attachments will be empty for Call and Voicemails, type 1 and 10. Please use get call recording API to fetch call recording and voicemails. |
| `meta` | `MessageMeta` | No | — |
| `source` | `string` | No | Message source |
| `userId` | `string` | No | User Id |
| `conversationProviderId` | `string` | No | Conversation Provider Id |
| `chatWidgetId` | `string` | No | Chat Widget Id |

### ExportMessagesResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `messages` | `array<GetMessageResponseDto>` | Yes | Array of messages |
| `nextCursor` | `string` | No | Cursor for fetching next page. Null if no more results. |
| `total` | `number` | Yes | Total number of messages matching the query |

### GetMessagesByConversationResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lastMessageId` | `string` | Yes | Id of the last message in the messages array |
| `nextPage` | `boolean` | Yes | Next page value true indicates only 20 message is in the response. Rest of the messages are in the next page. Please use the lastMessageId value in the query to get the next page messages |
| `messages` | `array<GetMessageResponseDto>` | Yes | Array of messages |

### ForwardConfigDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isForwarded` | `boolean` | Yes | Specify if this is a forwarded email |
| `forwardWholeThread` | `boolean` | No | Specify if forwarding the whole thread or just a single email |
| `messageId` | `string` | No | Message ID of the email thread being forwarded (source) - REQUIRED for forwarding |
| `emailMessageId` | `string` | No | Email Message ID of the specific email being forwarded (source) - Required for single email forward, ignored for thread forward |
| `sourceContactId` | `string` | No | Contact ID where the forwarded email originated from (source) - Auto-populated if not provided |
| `sourceConversationId` | `string` | No | Conversation ID where the forwarded email originated from (source) - Auto-populated if not provided |
| `toEmail` | `string` | No | Email address to forward to (destination) |
| `recipientContactId` | `string` | No | Contact ID of recipient when forwarding (destination) |
| `recipientConversationId` | `string` | No | Conversation ID of recipient when forwarding (destination) |

### SendMessageBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Type of message being sent |
| `subType` | `object` | Yes | Type of message being sent |
| `contactId` | `string` | Yes | ID of the contact receiving the message |
| `appointmentId` | `string` | No | ID of the associated appointment |
| `attachments` | `array<string>` | No | Array of attachment URLs |
| `emailFrom` | `string` | No | Email address to send from |
| `emailCc` | `array<string>` | No | Array of CC email addresses |
| `emailBcc` | `array<string>` | No | Array of BCC email addresses |
| `html` | `string` | No | HTML content of the message |
| `message` | `string` | No | Text content of the message |
| `subject` | `string` | No | Subject line for email messages |
| `replyMessageId` | `string` | No | ID of message being replied to |
| `templateId` | `string` | No | ID of message template |
| `threadId` | `string` | No | ID of message thread. For email messages, this is the message ID that contains multiple email messages in the thread |
| `scheduledTimestamp` | `number` | No | UTC Timestamp (in seconds) at which the message should be scheduled |
| `conversationProviderId` | `string` | No | ID of conversation provider |
| `emailTo` | `string` | No | Email address to send to, if different from contact's primary email. This should be a valid email address associated with the contact. |
| `customSubtypeId` | `string` | No | Custom subtype ID for email unsubscription preferences. Only applies to email messages. |
| `emailReplyMode` | `string` | No | Mode for email replies |
| `fromNumber` | `string` | No | Phone number used as the sender number for outbound messages |
| `toNumber` | `string` | No | Recipient phone number for outbound messages |
| `forward` | `ForwardConfigDto` | No | Forwarding configuration for emails |
| `status` | `string` | Yes | Message status |
| `usesNativeSchedulingAi` | `boolean` | No | Whether the scheduled email uses native AI for the email scheduling |
| `optimizationPeriod` | `string` | No | Optimization period in hours (24h, 48h, or 72h) |

### ForwardResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `forwardWholeThread` | `boolean` | No | Whether the entire thread was forwarded |
| `messageId` | `string` | No | Message ID of the forwarded message (source) |
| `emailMessageId` | `string` | No | Email Message ID of the forwarded email (source) |
| `sourceContactId` | `string` | No | Contact ID where the forwarded email originated from (source) |
| `sourceConversationId` | `string` | No | Conversation ID where the forwarded email originated from (source) |
| `forwardToEmail` | `string` | No | Email address the message was forwarded to (destination) |
| `recipientContactId` | `string` | No | Contact ID of the recipient of the forwarded email (destination) |
| `recipientConversationId` | `string` | No | Conversation ID of the recipient of the forwarded email (destination) |

### SendMessageResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversationId` | `string` | Yes | Conversation ID. |
| `emailMessageId` | `string` | No | This contains the email message id (only for Email type). Use this ID to send inbound replies to GHL to create a threaded email. |
| `messageId` | `string` | Yes | This is the main Message ID |
| `messageIds` | `array<string>` | No | When sending via the GMB channel, we will be returning list of `messageIds` instead of single `messageId`. |
| `msg` | `string` | No | Additional response message when sending a workflow message |
| `forwardData` | `ForwardResponseDto` | No | Optional metadata for forwarded email |
| `status` | `string` | Yes | Message status |

### CallDataDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `to` | `string` | No | Phone number of the receiver |
| `from` | `string` | No | Phone number of the dialer |
| `status` | `string` | No | Call status |

### ProcessMessageBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Message Type |
| `attachments` | `array<string>` | No | Array of attachments |
| `message` | `string` | No | Message Body |
| `conversationId` | `string` | Yes | Conversation Id |
| `contactId` | `string` | Yes | Contact Id |
| `conversationProviderId` | `string` | Yes | Conversation Provider Id |
| `html` | `string` | No | HTML Body of Email |
| `subject` | `string` | No | Subject of the Email |
| `emailFrom` | `string` | No | Email address to send from. This field is associated with the contact record and cannot be dynamically changed. |
| `emailTo` | `string` | No | Recipient email address. This field is associated with the contact record and cannot be dynamically changed. |
| `emailCc` | `array<string>` | No | List of email address to CC |
| `emailBcc` | `array<string>` | No | List of email address to BCC |
| `emailMessageId` | `string` | No | Send the email message id for which this email should be threaded. This is for replying to a specific email |
| `altId` | `string` | No | external mail provider's message id |
| `direction` | `object` | No | Message direction, if required can be set manually, default is outbound |
| `date` | `string (date-time)` | No | Date of the inbound message |
| `call` | `CallDataDTO` | No | Phone call dialer and receiver information |

### ProcessMessageResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `conversationId` | `string` | Yes | Conversation ID. |
| `messageId` | `string` | Yes | This is the main Message ID |
| `message` | `string` | Yes | — |
| `contactId` | `string` | No | — |
| `dateAdded` | `string (date-time)` | No | — |
| `emailMessageId` | `string` | No | — |

### ProcessOutboundMessageBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Message Type |
| `attachments` | `array<string>` | No | Array of attachments |
| `conversationId` | `string` | Yes | Conversation Id |
| `conversationProviderId` | `string` | Yes | Conversation Provider Id |
| `altId` | `string` | No | external mail provider's message id |
| `date` | `string (date-time)` | No | Date of the outbound message |
| `call` | `CallDataDTO` | No | Phone call dialer and receiver information |

### SendReviewReplyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversationId` | `string` | Yes | Conversation ID (must have reviewId) |
| `locationId` | `string` | Yes | Location ID |
| `message` | `string` | Yes | Review reply message text |

### UploadFilesDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `conversationId` | `string` | Yes | Conversation Id |
| `contactId` | `string` | Yes | Contact Id |
| `locationId` | `string` | Yes | — |
| `attachmentUrls` | `array<string>` | Yes | — |
| `chatServiceSid` | `string` | No | Twilio chat service SID for group SMS uploads |
| `isGroupSms` | `string` | No | Flag to indicate group SMS upload flow. When true, only 1 file upload is allowed per request. |

### UploadFilesResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uploadedFiles` | `object` | Yes | — |
| `twilioMediaSids` | `array<string>` | No | Twilio media SIDs for group SMS (when isGroupSms=true) |

### UploadFilesErrorResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `number` | Yes | HTTP Status code of the request |
| `message` | `string` | Yes | Error message of the request |

### InitiateFileUploadDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID |
| `conversationId` | `string` | Yes | Conversation ID |
| `filename` | `string` | Yes | Original filename with extension |
| `contentType` | `string` | Yes | MIME type of the file |
| `fileSize` | `number` | No | File size in bytes (optional, for pre-validation) |
| `channel` | `string` | Yes | Channel type for size limits (WHATSAPP for 100MB limit, others for 5MB) |

### InitiateFileUploadResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uploadUrl` | `string` | Yes | Signed URL for direct upload to GCS. Use PUT request with file content. |
| `uploadId` | `string` | Yes | Unique upload ID for tracking and completing the upload |
| `filePath` | `string` | Yes | File path in GCS bucket (needed for confirmation endpoint) |
| `expiresAt` | `number` | Yes | URL expiration timestamp (Unix milliseconds) |
| `maxFileSize` | `number` | Yes | Maximum allowed file size in bytes |

### CompleteFileUploadDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uploadId` | `string` | Yes | Upload ID from request response |
| `filePath` | `string` | Yes | File path from request response |
| `locationId` | `string` | Yes | Location ID |
| `conversationId` | `string` | Yes | Conversation ID |
| `filename` | `string` | Yes | Original filename (for response mapping) |

### CompleteFileUploadResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uploadedFiles` | `object` | Yes | Map of filename to public URL |
| `metadata` | `object` | Yes | File metadata |

### ErrorDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | Yes | Error Code |
| `type` | `string` | Yes | Error Type |
| `message` | `string` | Yes | Error Message |

### UpdateMessageStatusDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | Yes | Message status |
| `error` | `ErrorDto` | No | Error object from the conversation provider |
| `emailMessageId` | `string` | No | Email message Id |
| `recipients` | `array<string>` | No | Email delivery status for additional email recipients. |

### AddMessageAttachmentsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `array<string>` | Yes | Array of attachment URLs to set on the message (replaces existing). Maximum 5 URLs. |

### GetMessageTranscriptionResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `mediaChannel` | `number` | Yes | Media channel describes the user interaction channel |
| `sentenceIndex` | `number` | Yes | Index of the sentence in the transcription |
| `startTime` | `number` | Yes | Start time of the sentence in milliseconds |
| `endTime` | `number` | Yes | End time of the sentence in milliseconds |
| `transcript` | `string` | Yes | Transcript of the sentence |
| `confidence` | `number` | Yes | Confidence of the transcription |

### UserTypingBody

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `isTyping` | `string` | Yes | Typing status |
| `visitorId` | `string` | Yes | visitorId is the Unique ID assigned to each Live chat visitor. visitorId will be added soon in <a href="https://highlevel.stoplight.io/docs/integrations/00c5ff21f0030-get-contact" target="_blank">GET Contact API</a> |
| `conversationId` | `string` | Yes | Conversation Id |

### CreateLiveChatMessageFeedbackResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |

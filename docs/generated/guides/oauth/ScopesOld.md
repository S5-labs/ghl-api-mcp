> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/oauth/ScopesOld.md). Do not edit this generated file directly.

---
tags: [OAuth 2.0]
---

# **Scopes**

Here is a list of the scopes you require to access the API Endpoints and Webhook Events.

| Scope                           | API Endpoints                                                 | Webhook Events                      | Access Type          |
| ------------------------------- | ------------------------------------------------------------- | ----------------------------------- | -------------------- |
| businesses.readonly             | GET /businesses                                               |                                     | Sub-Account          |
| &nbsp;                          | GET /businesses/:businessId                                   |                                     | Sub-Account          |
| businesses.write                | POST /businesses                                              |                                     | Sub-Account          |
| &nbsp;                          | PUT /businesses/:businessId                                   |                                     | Sub-Account          |
| &nbsp;                          | DELETE /businesses/:businessId                                |                                     | Sub-Account          |
| calendars.write                 | POST /calendars/                                              |                                     | Sub-Account          |
| &nbsp;                          | PUT /calendars/:calendarId                                    |                                     | Sub-Account          |
| &nbsp;                          | DELETE /calendars/:calendarId                                 |                                     | Sub-Account          |
| calendars.readonly              | GET /calendars/                                               |                                     | Sub-Account          |
| &nbsp;                          | GET /calendars/groups                                         |                                     | Sub-Account          |
| &nbsp;                          | GET /calendars/:calendarId                                    |                                     | Sub-Account          |
| &nbsp;                          | GET /calendars/:calendarId/free-slots                         |                                     | Sub-Account          |
| calendars/events.readonly       | GET /calendars/events/appointments/:eventId                   |                                     | Sub-Account          |
| calendars/events.write          | DELETE /calendars/events/:eventId                             |                                     | Sub-Account          |
| &nbsp;                          | POST /calendars/events/block-slots                            |                                     | Sub-Account          |
| &nbsp;                          | PUT /calendars/events/block-slots/:eventId                    |                                     | Sub-Account          |
| &nbsp;                          | POST /calendars/events/appointments                           |                                     | Sub-Account          |
| &nbsp;                          | PUT /calendars/events/appointments /:eventId                  |                                     | Sub-Account          |
| campaigns.readonly              | GET /campaigns/                                               | CampaignStatusUpdate                | Sub-Account          |
| contacts.readonly               | GET /contacts/:contactId                                      | ContactCreate                       | Sub-Account          |
| &nbsp;                          | GET /contacts/:contactId/tasks                                | ContactDelete                       | Sub-Account          |
| &nbsp;                          | GET /contacts/:contactId/tasks/:taskId                        | ContactDndUpdate                    | Sub-Account          |
| &nbsp;                          | GET /contacts/:contactId/notes                                | ContactTagUpdate                    | Sub-Account          |
| &nbsp;                          | GET /contacts/:contactId/notes/:id                            | NoteCreate                          | Sub-Account          |
| &nbsp;                          | GET /contacts/:contactId/appointments                         | NoteDelete                          | Sub-Account          |
| &nbsp;                          | GET /contacts/                                                | TaskCreate                          | Sub-Account          |
| &nbsp;                          | GET /contacts/business/:businessId                            | TaskDelete                          | Sub-Account          |
| contacts.write                  | POST /contacts/                                               | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /contacts/:contactId                                      | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /contacts/:contactId                                   | &nbsp;                              | Sub-Account          |
| &nbsp;                          | POST /contacts/:contactId/tasks                               | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /contacts/:contactId/tasks/:taskId                        | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /contacts/:contactId/tasks/:taskId/completed              | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /contacts/:contactId/tasks/:taskId                     | &nbsp;                              | Sub-Account          |
| &nbsp;                          | POST /contacts/:contactId/tags                                | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /contacts/:contactId/tags                              | &nbsp;                              | Sub-Account          |
| &nbsp;                          | POST /contacts/:contactId/notes                               | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /contacts/:contactId/notes/:id                            | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /contacts/:contactId/notes/:id                         | &nbsp;                              | Sub-Account          |
| &nbsp;                          | POST /contacts/:contactId/campaigns/:campaignId               | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /contacts/:contactId/campaigns/removeAll               | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /contacts/:contactId/campaigns/:campaignId             | &nbsp;                              | Sub-Account          |
| &nbsp;                          | POST /contacts/:contactId/workflow/:workflowId                | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /contacts/:contactId/workflow/:workflowId              | &nbsp;                              | Sub-Account          |
| conversations.readonly          | GET /conversations/:conversationsId                           | ConversationUnreadWebhook           | Sub-Account          |
| &nbsp;                          | GET /conversations/search                                     | &nbsp;                              | Sub-Account          |
| conversations.write             | POST /conversations/                                          | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /conversations/:conversationsId                           | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /conversations/:conversationsId                        | &nbsp;                              | Sub-Account          |
| conversations/message.readonly  |                                                               | InboundMessage                      | Sub-Account          |
| &nbsp;                          |                                                               | OutboundMessage                     | Sub-Account          |
| conversations/message.write     | POST /conversations/messages                                  | ConversationProviderOutboundMessage | Sub-Account          |
| &nbsp;                          | POST /conversations/messages/inbound                          | &nbsp;                              | Sub-Account          |
| &nbsp;                          | POST /conversations/messages/upload                           | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /conversations/messages/:messageId/status                 | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /conversations/messages/:messageId/schedule            | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /conversations/messages/email/:emailMessageId/schedule | &nbsp;                              | Sub-Account          |
| forms.readonly                  | GET /forms/                                                   | &nbsp;                              | Sub-Account          |
| &nbsp;                          | GET /forms/submissions                                        | &nbsp;                              | Sub-Account          |
| links.readonly                  | GET /links/                                                   | &nbsp;                              | Sub-Account          |
| links.write                     | POST /links/                                                  | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /links/:linkId                                            | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /links/:linkId                                         | &nbsp;                              | Sub-Account          |
| locations.readonly              | GET /locations/:locationId                                    | &nbsp;                              | Sub-Account, Company |
|                                 | GET /locations/search                                         | &nbsp;                              | Sub-Account, Company |
| locations.write                 | POST /locations/                                              | &nbsp;                              | Company              |
|                                 | PUT /locations/:locationId                                    | &nbsp;                              | Company              |
|                                 | DELETE /locations/:locationId                                 | &nbsp;                              | Company              |
| locations/customValues.readonly | GET /locations/:locationId/customValues                       | &nbsp;                              | Sub-Account          |
| &nbsp;                          | GET /locations/:locationId/customValues/:id                   | &nbsp;                              | Sub-Account          |
| locations/customValues.write    | POST /locations/:locationId/customValues                      | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /locations/:locationId/customValues/:id                   | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /locations/:locationId/customValues/:id                | &nbsp;                              | Sub-Account          |
| locations/customFields.readonly | GET /locations/:locationId/customFields                       | &nbsp;                              | Sub-Account          |
| &nbsp;                          | GET /locations/:locationId/customFields/:id                   | &nbsp;                              | Sub-Account          |
| locations/customFields.write    | POST /locations/:locationId/customFields                      | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /locations/:locationId/customFields/:id                   | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /locations/:locationId/customFields/:id                | &nbsp;                              | Sub-Account          |
| locations/tags.readonly         | GET /locations/:locationId/tags                               | &nbsp;                              | Sub-Account          |
|                                 | GET /locations/:locationId/tags/:tagId                        | &nbsp;                              | Sub-Account          |
| locations/tags.write            | POST /locations/:locationId/tags/                             | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /locations/:locationId/tags/:tagId                        | &nbsp;                              | Sub-Account          |
| &nbsp;                          | DELETE /locations/:locationId/tags/:tagId                     | &nbsp;                              | Sub-Account          |
| locations/templates.readonly    | GET /locations/:locationId/templates                          | &nbsp;                              | Sub-Account          |
| locations/tasks.readonly        | POST /locations/:locationId/tasks/search                      | &nbsp;                              | Sub-Account          |
| opportunities.readonly          | GET /opportunities/search                                     | OpportunityCreate                   | Sub-Account          |
| &nbsp;                          | GET /opportunities/:id                                        | OpportunityDelete                   | Sub-Account          |
| &nbsp;                          | GET /opportunities/pipelines                                  | OpportunityStageUpdate              | Sub-Account          |
| &nbsp;                          | &nbsp;                                                        | OpportunityStatusUpdate             | Sub-Account          |
| &nbsp;                          | &nbsp;                                                        | OpportunityMonetaryValueUpdate      | Sub-Account          |
| opportunities.write             | DELETE /opportunities/:id                                     | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /opportunities/:id/status                                 | &nbsp;                              | Sub-Account          |
| &nbsp;                          | POST /opportunities                                           | &nbsp;                              | Sub-Account          |
| &nbsp;                          | PUT /opportunities/:id                                        | &nbsp;                              | Sub-Account          |
| snapshots.readonly              | GET /snapshots                                                | &nbsp;                              | Company              |
| surveys.readonly                | GET /surveys/                                                 | &nbsp;                              | Sub-Account          |
| &nbsp;                          | GET /surveys/submissions                                      | &nbsp;                              | Sub-Account          |
| users.readonly                  | GET /users/                                                   | &nbsp;                              | Sub-Account, Company |
| &nbsp;                          | GET /users/:userId                                            | &nbsp;                              | Sub-Account, Company |
| users.write                     | POST /users/                                                  | &nbsp;                              | Sub-Account, Company |
| &nbsp;                          | DELETE /users/:userId                                         | &nbsp;                              | Sub-Account, Company |
| &nbsp;                          | PUT /users/:userId                                            | &nbsp;                              | Sub-Account, Company |
| workflows.readonly              | GET /workflows/                                               | &nbsp;                              | Sub-Account          |

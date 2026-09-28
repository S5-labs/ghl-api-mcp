> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/Changelog). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Changelog

## 2026-09-24

**Courses**

### POST /courses/courses-exporter/public/import

- api tag `Course Import` added

### DELETE /courses/enrollments

- endpoint added

### POST /courses/enrollments

- endpoint added

### GET /courses/offers

- endpoint added

### POST /courses/offers

- endpoint added

### DELETE /courses/offers/{offerId}

- endpoint added

### GET /courses/offers/{offerId}

- endpoint added

### PUT /courses/offers/{offerId}

- endpoint added

### GET /courses/products

- endpoint added

### POST /courses/products

- endpoint added

### DELETE /courses/products/{productId}

- endpoint added

### GET /courses/products/{productId}

- endpoint added

### PUT /courses/products/{productId}

- endpoint added

### GET /courses/products/{productId}/assessments

- endpoint added

### GET /courses/products/{productId}/assessments/{assessmentId}

- endpoint added

### PUT /courses/products/{productId}/assessments/{assessmentId}/review

- endpoint added

### DELETE /courses/products/{productId}/assignments/{assignmentId}

- endpoint added

### PUT /courses/products/{productId}/assignments/{assignmentId}

- endpoint added

### GET /courses/products/{productId}/categories

- endpoint added

### POST /courses/products/{productId}/categories

- endpoint added

### GET /courses/products/{productId}/categories/progress

- endpoint added

### PUT /courses/products/{productId}/categories/sequence

- endpoint added

### DELETE /courses/products/{productId}/categories/{categoryId}

- endpoint added

### GET /courses/products/{productId}/categories/{categoryId}

- endpoint added

### PUT /courses/products/{productId}/categories/{categoryId}

- endpoint added

### PUT /courses/products/{productId}/categories/{categoryId}/lessons/sequence

- endpoint added

### GET /courses/products/{productId}/completions

- endpoint added

### GET /courses/products/{productId}/enrollments

- endpoint added

### GET /courses/products/{productId}/lessons

- endpoint added

### POST /courses/products/{productId}/lessons

- endpoint added

### DELETE /courses/products/{productId}/lessons/{lessonId}

- endpoint added

### GET /courses/products/{productId}/lessons/{lessonId}

- endpoint added

### PUT /courses/products/{productId}/lessons/{lessonId}

- endpoint added

### GET /courses/products/{productId}/lessons/{lessonId}/assignment

- endpoint added

### POST /courses/products/{productId}/lessons/{lessonId}/assignment

- endpoint added

### GET /courses/products/{productId}/lessons/{lessonId}/quiz

- endpoint added

### POST /courses/products/{productId}/lessons/{lessonId}/quiz

- endpoint added

### DELETE /courses/products/{productId}/quizzes/{quizId}

- endpoint added

### PUT /courses/products/{productId}/quizzes/{quizId}

- endpoint added

### GET /courses/products/{productId}/quizzes/{quizId}/questions

- endpoint added

### PUT /courses/products/{productId}/quizzes/{quizId}/questions

- endpoint added

### GET /courses/progress

- endpoint added

---

## 2026-09-23

**Conversation Ai**

### POST /conversation-ai/agents

- ⚠️ added the new `customApi` enum value to the `actions/items/type` response property for the response status `201`

### GET /conversation-ai/agents/{agentId}

- ⚠️ added the new `customApi` enum value to the `actions/items/type` response property for the response status `200`

### PUT /conversation-ai/agents/{agentId}

- ⚠️ added the new `customApi` enum value to the `actions/items/type` response property for the response status `200`

### GET /conversation-ai/agents/{agentId}/actions

- ⚠️ added `#/components/schemas/ActionDataDTO, #/components/schemas/CustomApiActionDataDTO` to the `data/items/` response property `oneOf` list for the response status `200`

### POST /conversation-ai/agents/{agentId}/actions

- ⚠️ removed `#/components/schemas/ActionDataDTO` from the `data` response property `allOf` list for the response status `201`
- ⚠️ added `#/components/schemas/ActionDataDTO, #/components/schemas/CustomApiActionDataDTO` to the `data` response property `oneOf` list for the response status `201`
- added the new `customApi` enum value to the request property `type`
- added `#/components/schemas/CustomApiDetailsDTO` to the `details` request property `oneOf` list

### GET /conversation-ai/agents/{agentId}/actions/list

- ⚠️ added `#/components/schemas/ActionDataDTO, #/components/schemas/CustomApiActionDataDTO` to the `data/items/` response property `oneOf` list for the response status `200`

### GET /conversation-ai/agents/{agentId}/actions/{actionId}

- ⚠️ removed `#/components/schemas/ActionDataDTO` from the `data` response property `allOf` list for the response status `200`
- ⚠️ added `#/components/schemas/ActionDataDTO, #/components/schemas/CustomApiActionDataDTO` to the `data` response property `oneOf` list for the response status `200`

### PUT /conversation-ai/agents/{agentId}/actions/{actionId}

- ⚠️ removed `#/components/schemas/ActionDataDTO` from the `data` response property `allOf` list for the response status `200`
- ⚠️ added `#/components/schemas/ActionDataDTO, #/components/schemas/CustomApiActionDataDTO` to the `data` response property `oneOf` list for the response status `200`
- added the new `customApi` enum value to the request property `type`
- added `#/components/schemas/CustomApiDetailsDTO` to the `details` request property `oneOf` list

### PATCH /conversation-ai/agents/{agentId}/followup-settings

- ⚠️ removed `#/components/schemas/ActionDataDTO` from the `data` response property `allOf` list for the response status `200`
- ⚠️ added `#/components/schemas/ActionDataDTO, #/components/schemas/CustomApiActionDataDTO` to the `data` response property `oneOf` list for the response status `200`

---

## 2026-09-10

**Marketplace**

### GET /marketplace/app/{appId}/rebilling-config/location/{locationId}

- endpoint deprecated

---

## 2026-09-07

**Affiliate Manager**

### POST /affiliate-manager/affiliate-campaign/{locationId}/affiliate/{affiliateId}/move-campaign

- endpoint added

### PUT /affiliate-manager/affiliate-campaign/{locationId}/affiliate/{affiliateId}/referral-id

- endpoint added

### PUT /affiliate-manager/affiliate-campaign/{locationId}/campaign/{campaignId}/affiliate/{affiliateId}/suspension

- endpoint added

### GET /affiliate-manager/affiliate-campaign/{locationId}/referral-id/validate

- endpoint added

### GET /affiliate-manager/{locationId}/affiliate/{affiliateId}/payout-method

- endpoint added

### POST /affiliate-manager/{locationId}/affiliate/{affiliateId}/payout-method

- endpoint added

### DELETE /affiliate-manager/{locationId}/affiliate/{affiliateId}/payout-method/{payoutMethodId}

- endpoint added

### PUT /affiliate-manager/{locationId}/affiliate/{affiliateId}/payout-method/{payoutMethodId}

- endpoint added

### PATCH /affiliate-manager/{locationId}/affiliate/{affiliateId}/payout-method/{payoutMethodId}/primary

- endpoint added

### GET /affiliate-manager/{locationId}/affiliates

- ⚠️ for the `query` request parameter `limit`, the max was set to `100.00`
- ⚠️ for the `query` request parameter `limit`, the min was set to `0.00`
- ⚠️ for the `query` request parameter `skip`, the min was set to `0.00`
- ⚠️ the `affiliates/items/createdBy` response's property `type` changed from `object` to `any` for status `200`
- ⚠️ the `affiliates/items/lastUpdatedBy` response's property `type` changed from `object` to `any` for status `200`
- added the optional property `affiliates/items/commissionTier` to the response with the `200` status
- added the optional property `affiliates/items/companyName` to the response with the `200` status
- added the optional property `affiliates/items/companyPhoneNumber` to the response with the `200` status
- added the optional property `affiliates/items/country` to the response with the `200` status
- added `#/components/schemas/AffiliateAuditResponseDto` to the `affiliates/items/createdBy` response property `allOf` list for the response status `200`
- added `#/components/schemas/AffiliateAuditResponseDto` to the `affiliates/items/lastUpdatedBy` response property `allOf` list for the response status `200`

### POST /affiliate-manager/{locationId}/affiliates

- endpoint added

### GET /affiliate-manager/{locationId}/affiliates/{affiliateId}

- ⚠️ the `createdBy` response's property `type` changed from `object` to `any` for status `200`
- ⚠️ the `lastUpdatedBy` response's property `type` changed from `object` to `any` for status `200`
- added the optional property `commissionTier` to the response with the `200` status
- added the optional property `companyName` to the response with the `200` status
- added the optional property `companyPhoneNumber` to the response with the `200` status
- added the optional property `country` to the response with the `200` status
- removed the optional property `clickCount` from the response with the `200` status
- removed the optional property `currency` from the response with the `200` status
- removed the optional property `customer` from the response with the `200` status
- removed the optional property `droppedCustomer` from the response with the `200` status
- removed the optional property `lead` from the response with the `200` status
- removed the optional property `owned` from the response with the `200` status
- removed the optional property `paid` from the response with the `200` status
- added `#/components/schemas/AffiliateAuditResponseDto` to the `createdBy` response property `allOf` list for the response status `200`
- added `#/components/schemas/AffiliateAuditResponseDto` to the `lastUpdatedBy` response property `allOf` list for the response status `200`

### PUT /affiliate-manager/{locationId}/affiliates/{affiliateId}

- endpoint added

### DELETE /affiliate-manager/{locationId}/affiliates/{affiliateId}/customer/{customerId}

- endpoint added

### GET /affiliate-manager/{locationId}/affiliates/{affiliateId}/customers

- endpoint added

### PATCH /affiliate-manager/{locationId}/affiliates/{affiliateId}/customers/{customerId}/state

- endpoint added

### POST /affiliate-manager/{locationId}/affiliates/{affiliateId}/lead/create

- endpoint added

### GET /affiliate-manager/{locationId}/affiliates/{affiliateId}/lead/validate

- endpoint added

### PUT /affiliate-manager/{locationId}/affiliates/{affiliateId}/status

- endpoint added

### POST /affiliate-manager/{locationId}/affiliates/{affiliateId}/tax-form

- endpoint added

### GET /affiliate-manager/{locationId}/campaigns

- endpoint added

### GET /affiliate-manager/{locationId}/campaigns/{campaignId}

- endpoint added

### POST /affiliate-manager/{locationId}/commission

- endpoint added

### DELETE /affiliate-manager/{locationId}/commission/{commissionId}

- endpoint added

### PUT /affiliate-manager/{locationId}/commission/{commissionId}/deny

- endpoint added

### PUT /affiliate-manager/{locationId}/commission/{commissionId}/status

- endpoint added

### GET /affiliate-manager/{locationId}/commissions

- ⚠️ the `query` request parameter `status` was restricted to a list of enum values
- ⚠️ added the new `approved` enum value to the `commissions/items/status` response property for the response status `200`
- ⚠️ added the new `denied` enum value to the `commissions/items/status` response property for the response status `200`
- ⚠️ added the new `paid` enum value to the `commissions/items/status` response property for the response status `200`
- ⚠️ added the new `pending` enum value to the `commissions/items/status` response property for the response status `200`
- added the new enum value `approved` to the `query` request parameter `status`
- added the new enum value `denied` to the `query` request parameter `status`
- added the new enum value `paid` to the `query` request parameter `status`
- added the new enum value `pending` to the `query` request parameter `status`

### GET /affiliate-manager/{locationId}/country-bank-mapping

- endpoint added

### GET /affiliate-manager/{locationId}/media

- endpoint added

### DELETE /affiliate-manager/{locationId}/media/{mediaId}

- endpoint added

### PUT /affiliate-manager/{locationId}/media/{mediaId}

- endpoint added

### GET /affiliate-manager/{locationId}/payouts

- ⚠️ the `query` request parameter `status` was restricted to a list of enum values
- ⚠️ the `payouts/items/affiliate/allOf[#/components/schemas/OAuthAffiliateListItemResponseDto]/createdBy` response's property `type` changed from `object` to `any` for status `200`
- ⚠️ the `payouts/items/affiliate/allOf[#/components/schemas/OAuthAffiliateListItemResponseDto]/lastUpdatedBy` response's property `type` changed from `object` to `any` for status `200`
- added the new enum value `approved` to the `query` request parameter `status`
- added the new enum value `denied` to the `query` request parameter `status`
- added the new enum value `paid` to the `query` request parameter `status`
- added the new enum value `pending` to the `query` request parameter `status`
- added the optional property `payouts/items/affiliate/allOf[#/components/schemas/OAuthAffiliateListItemResponseDto]/commissionTier` to the response with the `200` status
- added the optional property `payouts/items/affiliate/allOf[#/components/schemas/OAuthAffiliateListItemResponseDto]/companyName` to the response with the `200` status
- added the optional property `payouts/items/affiliate/allOf[#/components/schemas/OAuthAffiliateListItemResponseDto]/companyPhoneNumber` to the response with the `200` status
- added the optional property `payouts/items/affiliate/allOf[#/components/schemas/OAuthAffiliateListItemResponseDto]/country` to the response with the `200` status
- added `#/components/schemas/AffiliateAuditResponseDto` to the `payouts/items/affiliate/allOf[#/components/schemas/OAuthAffiliateListItemResponseDto]/createdBy` response property `allOf` list for the response status `200`
- added `#/components/schemas/AffiliateAuditResponseDto` to the `payouts/items/affiliate/allOf[#/components/schemas/OAuthAffiliateListItemResponseDto]/lastUpdatedBy` response property `allOf` list for the response status `200`

---

## 2026-09-03

**Blogs**

Adds Get Blog Post by ID, and splits the single `Blogs` tag into `Blogs`, `Blog Posts`, `Blog Categories` and `Blog Authors`. No previously published operation was removed.

### GET /blogs/posts/post/{postId}

- added the operation — returns a single published blog post including its content

### PUT /blogs/posts/{postId}

- ⚠️ the required `postId` path parameter is now declared — it was always required, but the specification omitted it, which made the operation uncallable from generated clients
- added the `400`, `401` and `404` responses
- corrected the description, which previously described creating a blog post

### GET /blogs/authors

- ⚠️ the required `locationId` query parameter is now declared — it was always enforced, but the specification omitted it
- added the `count` property to the response
- added the `400` and `401` responses
- the response now documents `_id` and `updatedAt`; both were always returned but undeclared
- ⚠️ the response no longer documents `originId`, an internal identifier set only on imported records

### GET /blogs/categories

- added the `count` property to the response
- added the `400` and `401` responses
- the response now documents `_id` and `updatedAt`; both were always returned but undeclared
- ⚠️ the response no longer documents `originId`, an internal identifier set only on imported records

### GET /blogs/posts/all

- the response property `blogs` is now correctly typed as an array
- added the `count` property to the response
- the `status` filter now documents its accepted values: `ALL`, `DRAFT`, `PUBLISHED`, `SCHEDULED`, `SCHEDULE_FAILED`, `ARCHIVED`, `DELETED`
- added the `400`, `401` and `404` responses
- `searchTerm` now searches post title, description, url slug and category name; it previously matched only the title, despite the documentation saying otherwise

### GET /blogs/site/all

- the response property `data` is now correctly typed as an array
- added the `400` and `401` responses

### POST /blogs/posts

- ⚠️ the success response is documented as `201`, which is the status the operation has always returned; it was previously documented as `200`
- added the `400`, `401` and `404` responses

### GET /blogs/posts/url-slug-exists

- added the `400`, `401` and `404` responses

## 2026-08-25

**Chat Widget**

### POST /chat-widget/

- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/promptType` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetPlacement` was restricted to a list of enum values
- ⚠️ removed the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/aTwoPCompliance`
- ⚠️ removed the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/useEmailField`
- ⚠️ removed the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetId`
- ⚠️ the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/businessOfficeHours/allOf[#/components/schemas/BusinessOfficeHoursDTO]/openHours/items/` request property `type` changed from `string` to `object`
- ⚠️ the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/` request property `type` changed from `string` to `object`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/businessOfficeHours/allOf[#/components/schemas/BusinessOfficeHoursDTO]/openHours/items/daysOfTheWeek`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/businessOfficeHours/allOf[#/components/schemas/BusinessOfficeHoursDTO]/openHours/items/hours`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/dataType`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/disabled`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/fieldKey`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/id`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/label`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/picklistOptions`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/placeholder`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/required`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/value`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/typography`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/value`
- the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatIcon` became optional
- the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType` became optional
- added the new `auto` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `avatar` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/promptType`
- added the new `blue` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `bottom-left` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `bottom-right` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `custom` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `da-dk` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `de` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `emailChat` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType`
- added the new `embedded` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetPlacement`
- added the new `en-gb` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `en-us` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `es` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `facebook` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `fi` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `fr-ca` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `fr-fr` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `golden` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `hr` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `hu` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `instagram` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `it` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `lavender` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `liveChat` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType`
- added the new `location` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `middle-left` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `middle-right` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `nl` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `no` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `normal` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/promptType`
- added the new `pt-br` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `pt-pt` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `sticky` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetPlacement`
- added the new `sv-se` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `tan` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `teal` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `top-left` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `top-right` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added `subschema #1, subschema #2` to the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/icon` request property `oneOf` list
- added `subschema #1, subschema #2` to the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/liveChatIcon` request property `oneOf` list
- added `subschema #1, subschema #2` to the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatIcon` request property `oneOf` list
- the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/icon` request property `type` was widened from `string` to `any`
- the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/liveChatIcon` request property `type` was widened from `string` to `any`
- the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatIcon` request property `type` was widened from `string` to `any`
- added the media type `application/json` for the response with the status `201`

### POST /chat-widget/clone

- added the media type `application/json` for the response with the status `201`

### GET /chat-widget/data/{locationId}/{id}

- added the media type `application/json` for the response with the status `200`

### PATCH /chat-widget/data/{locationId}/{id}

- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/promptType` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetPlacement` was restricted to a list of enum values
- ⚠️ removed the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/aTwoPCompliance`
- ⚠️ removed the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/useEmailField`
- ⚠️ removed the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetId`
- ⚠️ the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/businessOfficeHours/allOf[#/components/schemas/BusinessOfficeHoursDTO]/openHours/items/` request property `type` changed from `string` to `object`
- ⚠️ the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/` request property `type` changed from `string` to `object`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/businessOfficeHours/allOf[#/components/schemas/BusinessOfficeHoursDTO]/openHours/items/daysOfTheWeek`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/businessOfficeHours/allOf[#/components/schemas/BusinessOfficeHoursDTO]/openHours/items/hours`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/dataType`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/disabled`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/fieldKey`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/id`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/label`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/picklistOptions`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/placeholder`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/required`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/value`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/typography`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/value`
- the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatIcon` became optional
- the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType` became optional
- added the new `auto` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `avatar` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/promptType`
- added the new `blue` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `bottom-left` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `bottom-right` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `custom` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `da-dk` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `de` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `emailChat` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType`
- added the new `embedded` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetPlacement`
- added the new `en-gb` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `en-us` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `es` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `facebook` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `fi` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `fr-ca` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `fr-fr` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `golden` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `hr` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `hu` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `instagram` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `it` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `lavender` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `liveChat` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType`
- added the new `location` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `middle-left` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `middle-right` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `nl` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `no` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `normal` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/promptType`
- added the new `pt-br` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `pt-pt` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `sticky` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetPlacement`
- added the new `sv-se` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `tan` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `teal` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `top-left` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `top-right` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added `subschema #1, subschema #2` to the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/icon` request property `oneOf` list
- added `subschema #1, subschema #2` to the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/liveChatIcon` request property `oneOf` list
- added `subschema #1, subschema #2` to the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatIcon` request property `oneOf` list
- the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/icon` request property `type` was widened from `string` to `any`
- the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/liveChatIcon` request property `type` was widened from `string` to `any`
- the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatIcon` request property `type` was widened from `string` to `any`
- added the media type `application/json` for the response with the status `200`

### PUT /chat-widget/data/{locationId}/{id}

- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/promptType` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name` was restricted to a list of enum values
- ⚠️ request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetPlacement` was restricted to a list of enum values
- ⚠️ removed the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/aTwoPCompliance`
- ⚠️ removed the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/useEmailField`
- ⚠️ removed the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetId`
- ⚠️ the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/businessOfficeHours/allOf[#/components/schemas/BusinessOfficeHoursDTO]/openHours/items/` request property `type` changed from `string` to `object`
- ⚠️ the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/` request property `type` changed from `string` to `object`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/businessOfficeHours/allOf[#/components/schemas/BusinessOfficeHoursDTO]/openHours/items/daysOfTheWeek`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/businessOfficeHours/allOf[#/components/schemas/BusinessOfficeHoursDTO]/openHours/items/hours`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/dataType`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/disabled`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/fieldKey`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/id`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/label`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/picklistOptions`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/placeholder`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/required`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/advanceSettings/allOf[#/components/schemas/AdvanceSettingsDTO]/contactFormOptions/items/value`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/typography`
- added the new optional request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/value`
- the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatIcon` became optional
- the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType` became optional
- added the new `auto` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `avatar` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/promptType`
- added the new `blue` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `bottom-left` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `bottom-right` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `custom` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `da-dk` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `de` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `emailChat` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType`
- added the new `embedded` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetPlacement`
- added the new `en-gb` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `en-us` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `es` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `facebook` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `fi` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `fr-ca` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `fr-fr` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `golden` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `hr` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `hu` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `instagram` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `it` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `lavender` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `liveChat` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatType`
- added the new `location` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `middle-left` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `middle-right` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `nl` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `no` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `normal` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/promptType`
- added the new `pt-br` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `pt-pt` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `sticky` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/widgetPlacement`
- added the new `sv-se` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/locale`
- added the new `tan` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `teal` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/theme/allOf[#/components/schemas/WidgetSettingsThemeDTO]/name`
- added the new `top-left` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added the new `top-right` enum value to the request property `settings/allOf[#/components/schemas/WidgetSettingsDTO]/dimensions/allOf[#/components/schemas/WidgetSettingsCustomizationDTO]/position`
- added `subschema #1, subschema #2` to the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/icon` request property `oneOf` list
- added `subschema #1, subschema #2` to the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/liveChatIcon` request property `oneOf` list
- added `subschema #1, subschema #2` to the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatIcon` request property `oneOf` list
- the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/icon` request property `type` was widened from `string` to `any`
- the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/acknowledgementDetails/allOf[#/components/schemas/AcknowledgementDetailsDTO]/liveChatIcon` request property `type` was widened from `string` to `any`
- the `settings/allOf[#/components/schemas/WidgetSettingsDTO]/chatIcon` request property `type` was widened from `string` to `any`
- added the media type `application/json` for the response with the status `200`

### GET /chat-widget/list

- added the media type `application/json` for the response with the status `200`

### DELETE /chat-widget/{locationId}/{id}

- added the media type `application/json` for the response with the status `200`

## Components

- added the schema `BadRequestDTO`
- added the schema `ChatWidgetDTO`
- added the schema `ChatWidgetListItemDTO`
- added the schema `ChatWidgetListResponseDTO`
- added the schema `ContactFormOptionsDTO`
- added the schema `InvalidLocationDTO`
- added the schema `NotFoundDTO`
- added the schema `OpenHoursDTO`
- added the schema `UnauthorizedDTO`
- added the schema `UnprocessableDTO`
- added the schema `WidgetSettingsTypographyColorDTO`
- added the schema `WidgetSettingsTypographyDTO`
- removed the schema `A2PComplianceDTO`

---

## 2026-08-21

**Ad Publishing**

### GET /ad-publishing/facebook/ad-accounts

- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/facebook/ad-accounts/{adAccountId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/ad-accounts/{adAccountId}

- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/facebook/ads

- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/facebook/ads/{adId}

- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/facebook/ads/{adId}/duplicate

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### POST /ad-publishing/facebook/ads/{adId}/pause

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### POST /ad-publishing/facebook/ads/{adId}/resume

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### PUT /ad-publishing/facebook/adsets

- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/facebook/adsets/{adSetId}

- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/facebook/adsets/{adSetId}/duplicate

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### POST /ad-publishing/facebook/adsets/{adSetId}/pause

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### POST /ad-publishing/facebook/adsets/{adSetId}/resume

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### GET /ad-publishing/facebook/campaign/{campaignId}

- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/facebook/campaigns

- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/facebook/campaigns/{campaignId}

- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/facebook/campaigns/{campaignId}/duplicate

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### POST /ad-publishing/facebook/campaigns/{campaignId}/pause

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### POST /ad-publishing/facebook/campaigns/{campaignId}/publish

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### POST /ad-publishing/facebook/campaigns/{campaignId}/resume

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### GET /ad-publishing/facebook/conversation-forms

- added the required property `oneOf[#/components/schemas/PaginatedFacebookConversationFormsDTO]/conversationForms/items/createdAt` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedFacebookConversationFormsDTO]/conversationForms/items/id` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedFacebookConversationFormsDTO]/conversationForms/items/locationId` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedFacebookConversationFormsDTO]/conversationForms/items/name` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedFacebookConversationFormsDTO]/conversationForms/items/questions` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedFacebookConversationFormsDTO]/conversationForms/items/text` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedFacebookConversationFormsDTO]/conversationForms/items/updatedAt` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/createdAt` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/id` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/locationId` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/name` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/questions` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/text` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/updatedAt` to the response with the `200` status

### POST /ad-publishing/facebook/conversation-forms

- added the media type `application/json` for the response with the status `201`

### GET /ad-publishing/facebook/custom-audience

- added the optional property `oneOf[subschema #1]/items/approximateCountLowerBound` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/approximateCountUpperBound` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/dataSource` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/deliveryStatus` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/description` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/id` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/name` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/operationStatus` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/subtype` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/timeCreated` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/timeUpdated` to the response with the `200` status

### DELETE /ad-publishing/facebook/custom-audience/{audienceId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/custom-audience/{audienceId}

- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/facebook/custom-audience/{audienceId}

- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/facebook/custom-audience/{audienceId}/member

- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/facebook/custom-audience/{audienceId}/member

- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/facebook/custom-audience/{audienceId}/member/batch

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/entity

- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/facebook/integration

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/integration

- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/facebook/integration

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### GET /ad-publishing/facebook/lead-form/{leadFormId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/me

- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/facebook/page

- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/facebook/page/default

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/page/{pageId}/forms

- ⚠️ added `#/components/schemas/FacebookPublishedLeadFormDTO, #/components/schemas/FacebookDraftLeadFormDTO` to the `oneOf[subschema #1]/items/` response property `oneOf` list for the response status `200`
- ⚠️ the `oneOf[subschema #1]/items/` response's property `type` changed from `object` to `any` for status `200`

### POST /ad-publishing/facebook/page/{pageId}/forms

- added the media type `application/json` for the response with the status `201`

### GET /ad-publishing/facebook/page/{pageId}/instagram

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/pixels

- ⚠️ added `#/components/schemas/FacebookConversionPixelListDTO` to the response body `oneOf` list for the response status `200`
- ⚠️ the `oneOf[subschema #1 -> subschema #3]/` response's property `type` changed from `object` to `array<object>` for status `200`
- added the optional property `oneOf[#/components/schemas/PaginatedFacebookPixelsDTO]/items/items/createdAt` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedFacebookPixelsDTO]/items/items/fbIsCrmPixel` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedFacebookPixelsDTO]/items/items/fbPixelCode` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedFacebookPixelsDTO]/items/items/fbPixelId` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedFacebookPixelsDTO]/items/items/name` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedFacebookPixelsDTO]/items/items/type` to the response with the `200` status

### PUT /ad-publishing/facebook/pixels

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/reporting

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/reporting/campaign/{campaignId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/reporting/list

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/targeting/search

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/ad-accounts

- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/google/ad-accounts/{adAccountId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/ad-accounts/{adAccountId}

- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/google/ads

- ⚠️ the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/geoLocations` became required
- ⚠️ the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/locales` became required
- ⚠️ the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/targetInterests/allOf[#/components/schemas/GoogleTargetInterestsDTO]/affinity` became required
- ⚠️ the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/targetInterests/allOf[#/components/schemas/GoogleTargetInterestsDTO]/inMarket` became required
- ⚠️ removed the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/segments/items/id`
- ⚠️ removed the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/segments/items/type`
- ⚠️ the `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/segments/items/` request property `type` changed from `object` to `string`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/ads/{adId}

- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/google/ads/{adId}/publish

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### GET /ad-publishing/google/ads/{adId}/publishing-progress

- endpoint added

### POST /ad-publishing/google/assets

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### GET /ad-publishing/google/audiences

- added the required property `oneOf[#/components/schemas/PaginatedGoogleAudiencesDTO]/audiences/items/dimensions` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedGoogleAudiencesDTO]/audiences/items/exclusionDimension` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedGoogleAudiencesDTO]/audiences/items/id` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedGoogleAudiencesDTO]/audiences/items/name` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedGoogleAudiencesDTO]/audiences/items/resourceName` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedGoogleAudiencesDTO]/audiences/items/scope` to the response with the `200` status
- added the required property `oneOf[#/components/schemas/PaginatedGoogleAudiencesDTO]/audiences/items/status` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/dimensions` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/exclusionDimension` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/id` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/name` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/resourceName` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/scope` to the response with the `200` status
- added the required property `oneOf[subschema #1]/items/status` to the response with the `200` status

### PUT /ad-publishing/google/audiences

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/audiences/{audienceId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/conversions

- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/google/conversions

- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/google/conversions/{conversionId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/conversions/{conversionId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/entity

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/integration

- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/google/integration

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### POST /ad-publishing/google/keyword-ideas

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### GET /ad-publishing/google/me

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/reporting

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/reporting/campaign/{campaignId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/reporting/list

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/segments

- ⚠️ added `#/components/schemas/GoogleCustomSegmentSummaryDTO, #/components/schemas/GoogleDataSegmentDTO` to the `oneOf[#/components/schemas/PaginatedGoogleSegmentsDTO]/segments/items/` response property `oneOf` list for the response status `200`
- ⚠️ added `#/components/schemas/GoogleCustomSegmentSummaryDTO, #/components/schemas/GoogleDataSegmentDTO` to the `oneOf[subschema #1]/items/` response property `oneOf` list for the response status `200`
- ⚠️ the `oneOf[#/components/schemas/PaginatedGoogleSegmentsDTO]/segments/items/` response's property `type` changed from `object` to `any` for status `200`
- ⚠️ the `oneOf[subschema #1]/items/` response's property `type` changed from `object` to `any` for status `200`

### PUT /ad-publishing/google/segments

- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/google/segments/offline-user-list-job

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### DELETE /ad-publishing/google/segments/{segmentId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/segments/{segmentId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/targeting/search

- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/linkedin/ad-account

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/linkedin/ad-account

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/linkedin/ad-accounts

- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/linkedin/ads

- ⚠️ added the new required request property `adCampaigns/items/ads/items/createdAt`
- ⚠️ added the new required request property `adCampaigns/items/ads/items/updatedAt`
- ⚠️ the request property `adCampaigns/items/ads/items/adCampaignGroupId` became required
- ⚠️ the request property `adCampaigns/items/ads/items/adCampaignId` became required
- ⚠️ the request property `adCampaigns/items/ads/items/callToActionLabel` became required
- ⚠️ the request property `adCampaigns/items/ads/items/description` became required
- ⚠️ the request property `adCampaigns/items/ads/items/destinationFormId` became required
- ⚠️ the request property `adCampaigns/items/ads/items/destinationUrl` became required
- ⚠️ the request property `adCampaigns/items/ads/items/id` became required
- ⚠️ the request property `adCampaigns/items/ads/items/introductoryText` became required
- ⚠️ the request property `adCampaigns/items/ads/items/linkedInError` became required
- ⚠️ the request property `adCampaigns/items/ads/items/media` became required
- ⚠️ the request property `adCampaigns/items/ads/items/media/items/name` became required
- ⚠️ the request property `adCampaigns/items/ads/items/media/items/src` became required
- ⚠️ the request property `adCampaigns/items/ads/items/media/items/type` became required
- ⚠️ the request property `adCampaigns/items/ads/items/name` became required
- ⚠️ the request property `adCampaigns/items/ads/items/publishingStatus` became required
- ⚠️ the request property `budget/allOf[#/components/schemas/LinkedInBudgetDTO]/amount` became required
- ⚠️ the request property `budget/allOf[#/components/schemas/LinkedInBudgetDTO]/budgetType` became required
- ⚠️ removed the enum value `ARCHIVED` of the request property `adCampaigns/items/ads/items/publishingStatus`
- ⚠️ removed the enum value `DRAFT` of the request property `adCampaigns/items/ads/items/publishingStatus`
- ⚠️ removed the enum value `FAILED` of the request property `adCampaigns/items/ads/items/publishingStatus`
- ⚠️ removed the enum value `IN_REVIEW` of the request property `adCampaigns/items/ads/items/publishingStatus`
- ⚠️ removed the enum value `PAUSED` of the request property `adCampaigns/items/ads/items/publishingStatus`
- ⚠️ removed the enum value `PUBLISHED` of the request property `adCampaigns/items/ads/items/publishingStatus`
- ⚠️ removed the enum value `PUBLISHING` of the request property `adCampaigns/items/ads/items/publishingStatus`
- ⚠️ removed the enum value `REJECTED` of the request property `adCampaigns/items/ads/items/publishingStatus`
- ⚠️ removed the enum value `SCHEDULED` of the request property `adCampaigns/items/ads/items/publishingStatus`
- ⚠️ removed the enum value `WITH_ISSUES` of the request property `adCampaigns/items/ads/items/publishingStatus`
- ⚠️ removed the enum value `image` of the request property `adCampaigns/items/ads/items/media/items/type`
- ⚠️ removed the enum value `video` of the request property `adCampaigns/items/ads/items/media/items/type`
- ⚠️ removed the request property `adCampaigns/items/ads/items/headline`
- ⚠️ removed the request property `adCampaigns/items/ads/items/media/items/frames`
- ⚠️ removed the request property `adCampaigns/items/ads/items/media/items/selectedPoster`
- ⚠️ removed the request property `adCampaigns/items/ads/items/media/items/thumbnailUrl`
- ⚠️ removed the request property `adCampaigns/items/ads/items/meta`
- added the new optional request property `adCampaigns/items/ads/items/media/items/_id`
- added the new optional request property `adCampaigns/items/ads/items/media/items/urn`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/linkedin/ads/{adId}

- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/linkedin/ads/{adId}/publish

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### GET /ad-publishing/linkedin/integration

- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/linkedin/integration

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### GET /ad-publishing/linkedin/me

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/linkedin/reporting

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/linkedin/reporting/campaign-group/{campaignGroupId}

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/linkedin/reporting/list

- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/linkedin/targeting/search

- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/linkedin/{accountId}/form

- ⚠️ removed the success response with the status `201`
- added the success response with the status `200`

### GET /ad-publishing/linkedin/{accountId}/forms

- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/content` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/created` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/creationLocale` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/hiddenFields` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/id` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/lastModified` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/name` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/owner` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/reviewInfo` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/state` to the response with the `200` status
- added the optional property `oneOf[#/components/schemas/PaginatedLinkedInLeadFormsDTO]/leadForms/items/versionId` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/content` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/created` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/creationLocale` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/hiddenFields` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/id` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/lastModified` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/name` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/owner` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/reviewInfo` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/state` to the response with the `200` status
- added the optional property `oneOf[subschema #1]/items/versionId` to the response with the `200` status

### PATCH /ad-publishing/linkedin/{adId}/status

- added the media type `application/json` for the response with the status `200`

## Components

- removed the schema `GoogleSegmentTargetDTO`
- removed the schema `LinkedInMediaDTO`

---

## 2026-08-19

**Saas Api**

### GET /saas/agency-plans/{companyId}

- added the media type `application/json` for the response with the status `200`

### POST /saas/bulk-disable-saas/{companyId}

- added the media type `application/json` for the response with the status `201`

### POST /saas/bulk-enable-saas/{companyId}

- added the media type `application/json` for the response with the status `201`

### POST /saas/enable-saas/{locationId}

- added the media type `application/json` for the response with the status `201`

### GET /saas/get-saas-subscription/{locationId}

- added the media type `application/json` for the response with the status `200`

### GET /saas/locations

- added the media type `application/json` for the response with the status `200`

### POST /saas/pause/{locationId}

- added the media type `application/json` for the response with the status `201`

### GET /saas/saas-locations/{companyId}

- added the media type `application/json` for the response with the status `200`

### GET /saas/saas-plan/{planId}

- added the media type `application/json` for the response with the status `200`

### POST /saas/update-rebilling/{companyId}

- added the media type `application/json` for the response with the status `201`

### PUT /saas/update-saas-subscription/{locationId}

- added the media type `application/json` for the response with the status `200`

---

## 2026-08-18

**Knowledge Base**

Backward compatible

We have made changes to rename the Knowledge Base endpoint path prefix from `/knowledge-base` to `/knowledge-bases`. This change is **backward compatible** — both the existing `/knowledge-base` endpoints and the new `/knowledge-bases` endpoints continue to work, so no action is required. New integrations should use `/knowledge-bases`.

---

## 2026-08-18

**Knowledge Base**

### GET /knowledge-base/

- ⚠️ api path removed without deprecation

### POST /knowledge-base/

- ⚠️ api path removed without deprecation

### DELETE /knowledge-base/crawler

- ⚠️ api path removed without deprecation

### GET /knowledge-base/crawler

- ⚠️ api path removed without deprecation

### POST /knowledge-base/crawler

- ⚠️ api path removed without deprecation

### POST /knowledge-base/crawler/sitemap-preview

- ⚠️ api path removed without deprecation

### GET /knowledge-base/crawler/status

- ⚠️ api path removed without deprecation

### POST /knowledge-base/crawler/train

- ⚠️ api path removed without deprecation

### GET /knowledge-base/faqs

- ⚠️ api path removed without deprecation

### POST /knowledge-base/faqs

- ⚠️ api path removed without deprecation

### DELETE /knowledge-base/faqs/{id}

- ⚠️ api path removed without deprecation

### PUT /knowledge-base/faqs/{id}

- ⚠️ api path removed without deprecation

### GET /knowledge-base/files

- ⚠️ api path removed without deprecation

### POST /knowledge-base/files

- ⚠️ api path removed without deprecation

### PUT /knowledge-base/{id}

- ⚠️ api path removed without deprecation

### DELETE /knowledge-base/{knowledgeBaseId}

- ⚠️ api path removed without deprecation

### GET /knowledge-base/{knowledgeBaseId}

- ⚠️ api path removed without deprecation

### GET /knowledge-bases/

- endpoint added

### POST /knowledge-bases/

- endpoint added

### DELETE /knowledge-bases/crawler

- endpoint added

### GET /knowledge-bases/crawler

- endpoint added

### POST /knowledge-bases/crawler

- endpoint added

### POST /knowledge-bases/crawler/sitemap-preview

- endpoint added

### GET /knowledge-bases/crawler/status

- endpoint added

### POST /knowledge-bases/crawler/train

- endpoint added

### GET /knowledge-bases/faqs

- endpoint added

### POST /knowledge-bases/faqs

- endpoint added

### DELETE /knowledge-bases/faqs/{id}

- endpoint added

### PUT /knowledge-bases/faqs/{id}

- endpoint added

### GET /knowledge-bases/files

- endpoint added

### POST /knowledge-bases/files

- endpoint added

### DELETE /knowledge-bases/files/{fileId}

- endpoint added

### GET /knowledge-bases/files/{fileId}

- endpoint added

### PUT /knowledge-bases/{id}

- endpoint added

### DELETE /knowledge-bases/{knowledgeBaseId}

- endpoint added

### GET /knowledge-bases/{knowledgeBaseId}

- endpoint added

---

## 2026-08-13

**Ad Publishing**

### GET /ad-publishing/facebook/ad-accounts

- ⚠️ the `query` request parameter `type` was restricted to a list of enum values
- added the new enum value `AD_MANAGER` to the `query` request parameter `type`
- added the new enum value `INTEGRATION` to the `query` request parameter `type`

### GET /ad-publishing/facebook/ad-accounts/{adAccountId}

- ⚠️ deleted the `query` request parameter `isDraft`

### PUT /ad-publishing/facebook/ads

- added the new optional request property `descriptions`
- added the new optional request property `headlines`
- added the new optional request property `primaryTexts`

### PUT /ad-publishing/facebook/campaigns

- added the new optional request property `customValueMappings`

### GET /ad-publishing/facebook/conversation-forms

- ⚠️ deleted the `query` request parameter `isDraft`
- added the new optional `query` request parameter `after`
- added the new optional `query` request parameter `limit`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/custom-audience

- added the new optional `query` request parameter `after`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `projection`
- added the media type `application/json` for the response with the status `200`

### DELETE /ad-publishing/facebook/custom-audience/{audienceId}

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/facebook/custom-audience/{audienceId}

- ⚠️ deleted the `query` request parameter `isDraft`

### PUT /ad-publishing/facebook/custom-audience/{audienceId}/member/batch

- ⚠️ request property `operationType` was restricted to a list of enum values
- added the new `ADD` enum value to the request property `operationType`
- added the new `REMOVE` enum value to the request property `operationType`
- added the new `REPLACE` enum value to the request property `operationType`

### GET /ad-publishing/facebook/integration

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/facebook/me

- ⚠️ deleted the `query` request parameter `isDraft`

### PUT /ad-publishing/facebook/page/default

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/facebook/page/{pageId}/forms

- ⚠️ deleted the `query` request parameter `isDraft`
- added the new optional `query` request parameter `after`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `projection`
- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/facebook/page/{pageId}/forms

- ⚠️ request property `greetingCard/allOf[#/components/schemas/GreetingCard]/style` was restricted to a list of enum values
- ⚠️ request property `thankYouPage/allOf[#/components/schemas/ThankYouPage]/buttonType` was restricted to a list of enum values
- added the new `CALL_BUSINESS` enum value to the request property `thankYouPage/allOf[#/components/schemas/ThankYouPage]/buttonType`
- added the new `DOWNLOAD` enum value to the request property `thankYouPage/allOf[#/components/schemas/ThankYouPage]/buttonType`
- added the new `LIST_STYLE` enum value to the request property `greetingCard/allOf[#/components/schemas/GreetingCard]/style`
- added the new `PARAGRAPH_STYLE` enum value to the request property `greetingCard/allOf[#/components/schemas/GreetingCard]/style`
- added the new `VIEW_WEBSITE` enum value to the request property `thankYouPage/allOf[#/components/schemas/ThankYouPage]/buttonType`

### GET /ad-publishing/facebook/pages

- added the new optional `query` request parameter `after`
- added the new optional `query` request parameter `limit`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/pixels

- ⚠️ the `query` request parameter `channel` was restricted to a list of enum values
- added the new optional `query` request parameter `after`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `projection`
- added the new enum value `FACEBOOK` to the `query` request parameter `channel`
- added the new enum value `IG` to the `query` request parameter `channel`
- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/facebook/pixels

- ⚠️ request property `type` was restricted to a list of enum values
- added the new `FUNNEL_EVENT` enum value to the request property `type`
- added the new `INSTAGRAM_DM` enum value to the request property `type`
- added the new `LEAD_EVENT` enum value to the request property `type`

### GET /ad-publishing/facebook/reporting

- the `query` request parameter `groupBy` became optional
- added the enum value `cost_per_result` to the property `items/` of the `query` request parameter `fields`
- added the enum value `results` to the property `items/` of the `query` request parameter `fields`

### GET /ad-publishing/facebook/reporting/list

- ⚠️ the `query` request parameter `listType` was restricted to a list of enum values
- the `query` request parameter `campaignId` became optional
- added the new enum value `ads` to the `query` request parameter `listType`
- added the new enum value `adsets` to the `query` request parameter `listType`
- added the new enum value `campaigns` to the `query` request parameter `listType`
- added the new enum value `none` to the `query` request parameter `listType`

### GET /ad-publishing/facebook/targeting/search

- ⚠️ the `query` request parameter `type` was restricted to a list of enum values
- added the new enum value `geolocation` to the `query` request parameter `type`
- added the new enum value `interest` to the `query` request parameter `type`
- added the new enum value `language` to the `query` request parameter `type`

### GET /ad-publishing/google/ad-accounts/{adAccountId}

- ⚠️ deleted the `query` request parameter `isDraft`

### PUT /ad-publishing/google/ads

- ⚠️ request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/ageRange/items/enum` was restricted to a list of enum values
- ⚠️ request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/gender/items/enum` was restricted to a list of enum values
- ⚠️ removed the enum value `DISCOVERY` of the request property `advertisingChannelType`
- ⚠️ removed the enum value `DISPLAY` of the request property `advertisingChannelType`
- ⚠️ removed the enum value `HOTEL` of the request property `advertisingChannelType`
- ⚠️ removed the enum value `LOCAL` of the request property `advertisingChannelType`
- ⚠️ removed the enum value `MULTI_CHANNEL` of the request property `advertisingChannelType`
- ⚠️ removed the enum value `PERFORMANCE_MAX` of the request property `advertisingChannelType`
- added the new optional request property `customValueMappings`
- added the new `AGE_RANGE_18_24` enum value to the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/ageRange/items/enum`
- added the new `AGE_RANGE_25_34` enum value to the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/ageRange/items/enum`
- added the new `AGE_RANGE_35_44` enum value to the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/ageRange/items/enum`
- added the new `AGE_RANGE_45_54` enum value to the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/ageRange/items/enum`
- added the new `AGE_RANGE_55_64` enum value to the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/ageRange/items/enum`
- added the new `AGE_RANGE_65_UP` enum value to the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/ageRange/items/enum`
- added the new `AGE_RANGE_UNDETERMINED` enum value to the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/ageRange/items/enum`
- added the new `FEMALE` enum value to the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/gender/items/enum`
- added the new `MALE` enum value to the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/gender/items/enum`
- added the new `UNDETERMINED` enum value to the request property `audience/allOf[#/components/schemas/GoogleCampaignAudienceDTO]/gender/items/enum`

### GET /ad-publishing/google/ads/{adId}

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/google/assets

- ⚠️ removed the enum value `IMAGE` from the `query` request parameter `type`
- ⚠️ removed the enum value `LEAD_FORM` from the `query` request parameter `type`
- ⚠️ removed the enum value `TEXT` from the `query` request parameter `type`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the media type `application/json` for the response with the status `200`

### POST /ad-publishing/google/assets

- ⚠️ removed the enum value `LEAD_FORM` of the request property `type`
- ⚠️ removed `#/components/schemas/LeadFormAssetPayloadDTO` from the `payload` request property `oneOf` list

### GET /ad-publishing/google/audiences

- ⚠️ deleted the `query` request parameter `isDraft`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the media type `application/json` for the response with the status `200`

### PUT /ad-publishing/google/audiences

- ⚠️ added the new required request property `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/ageRanges/items/minAge`
- ⚠️ added the new required request property `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/ageRanges/items/minAge`
- ⚠️ request property `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/genders/items/` was restricted to a list of enum values
- ⚠️ request property `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/parentalStatuses/items/` was restricted to a list of enum values
- ⚠️ request property `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/genders/items/` was restricted to a list of enum values
- ⚠️ request property `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/parentalStatuses/items/` was restricted to a list of enum values
- ⚠️ the `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/ageRanges/items/` request property `type` changed from `string` to `object`
- ⚠️ the `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/ageRanges/items/` request property `type` changed from `string` to `object`
- added the new optional request property `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/ageRanges/items/maxAge`
- added the new optional request property `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/ageRanges/items/maxAge`
- added the new `FEMALE` enum value to the request property `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/genders/items/`
- added the new `FEMALE` enum value to the request property `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/genders/items/`
- added the new `MALE` enum value to the request property `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/genders/items/`
- added the new `MALE` enum value to the request property `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/genders/items/`
- added the new `NOT_A_PARENT` enum value to the request property `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/parentalStatuses/items/`
- added the new `NOT_A_PARENT` enum value to the request property `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/parentalStatuses/items/`
- added the new `PARENT` enum value to the request property `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/parentalStatuses/items/`
- added the new `PARENT` enum value to the request property `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/parentalStatuses/items/`
- added the new `UNDETERMINED` enum value to the request property `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/genders/items/`
- added the new `UNDETERMINED` enum value to the request property `dimensions/allOf[#/components/schemas/AudienceDimensionDTO]/parentalStatuses/items/`
- added the new `UNDETERMINED` enum value to the request property `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/genders/items/`
- added the new `UNDETERMINED` enum value to the request property `exclusionDimension/allOf[#/components/schemas/AudienceDimensionDTO]/parentalStatuses/items/`

### GET /ad-publishing/google/audiences/{audienceId}

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/google/conversion-goals

- ⚠️ deleted the `query` request parameter `isDraft`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/conversions

- ⚠️ the `query` request parameter `category` was restricted to a list of enum values
- ⚠️ the `query` request parameter `conversionType` was restricted to a list of enum values
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the new enum value `ADD_TO_CART` to the `query` request parameter `category`
- added the new enum value `BEGIN_CHECKOUT` to the `query` request parameter `category`
- added the new enum value `BOOK_APPOINTMENT` to the `query` request parameter `category`
- added the new enum value `CONTACT` to the `query` request parameter `category`
- added the new enum value `CONVERTED_LEAD` to the `query` request parameter `category`
- added the new enum value `DEFAULT` to the `query` request parameter `category`
- added the new enum value `DOWNLOAD` to the `query` request parameter `category`
- added the new enum value `ENGAGEMENT` to the `query` request parameter `category`
- added the new enum value `GET_DIRECTIONS` to the `query` request parameter `category`
- added the new enum value `IMPORTED_LEAD` to the `query` request parameter `category`
- added the new enum value `LEAD` to the `query` request parameter `category`
- added the new enum value `LEAD_FORM_SUBMIT` to the `query` request parameter `conversionType`
- added the new enum value `OUTBOUND_CLICK` to the `query` request parameter `category`
- added the new enum value `PAGE_VIEW` to the `query` request parameter `category`
- added the new enum value `PHONE_CALL_LEAD` to the `query` request parameter `category`
- added the new enum value `PURCHASE` to the `query` request parameter `category`
- added the new enum value `QUALIFIED_LEAD` to the `query` request parameter `category`
- added the new enum value `REQUEST_QUOTE` to the `query` request parameter `category`
- added the new enum value `SIGNUP` to the `query` request parameter `category`
- added the new enum value `STORE_SALE` to the `query` request parameter `category`
- added the new enum value `STORE_VISIT` to the `query` request parameter `category`
- added the new enum value `SUBMIT_LEAD_FORM` to the `query` request parameter `category`
- added the new enum value `SUBSCRIBE_PAID` to the `query` request parameter `category`
- added the new enum value `UPLOAD_CALLS` to the `query` request parameter `conversionType`
- added the new enum value `UPLOAD_CLICKS` to the `query` request parameter `conversionType`
- added the new enum value `WEBPAGE` to the `query` request parameter `conversionType`

### PUT /ad-publishing/google/conversions

- ⚠️ request property `category` was restricted to a list of enum values
- ⚠️ removed the enum value `LEAD_FORM_SUBMIT` of the request property `type`
- ⚠️ removed the enum value `UPLOAD_CALLS` of the request property `type`
- ⚠️ removed the enum value `WEBPAGE` of the request property `type`
- added the new `ADD_TO_CART` enum value to the request property `category`
- added the new `BEGIN_CHECKOUT` enum value to the request property `category`
- added the new `BOOK_APPOINTMENT` enum value to the request property `category`
- added the new `CONTACT` enum value to the request property `category`
- added the new `CONVERTED_LEAD` enum value to the request property `category`
- added the new `DEFAULT` enum value to the request property `category`
- added the new `DOWNLOAD` enum value to the request property `category`
- added the new `ENGAGEMENT` enum value to the request property `category`
- added the new `GET_DIRECTIONS` enum value to the request property `category`
- added the new `IMPORTED_LEAD` enum value to the request property `category`
- added the new `LEAD` enum value to the request property `category`
- added the new `OUTBOUND_CLICK` enum value to the request property `category`
- added the new `PAGE_VIEW` enum value to the request property `category`
- added the new `PHONE_CALL_LEAD` enum value to the request property `category`
- added the new `PURCHASE` enum value to the request property `category`
- added the new `QUALIFIED_LEAD` enum value to the request property `category`
- added the new `REQUEST_QUOTE` enum value to the request property `category`
- added the new `SIGNUP` enum value to the request property `category`
- added the new `STORE_SALE` enum value to the request property `category`
- added the new `STORE_VISIT` enum value to the request property `category`
- added the new `SUBMIT_LEAD_FORM` enum value to the request property `category`
- added the new `SUBSCRIBE_PAID` enum value to the request property `category`

### DELETE /ad-publishing/google/conversions/{conversionId}

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/google/conversions/{conversionId}

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/google/integration

- ⚠️ deleted the `query` request parameter `isDraft`

### POST /ad-publishing/google/keyword-ideas

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/google/me

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/google/reporting/list

- ⚠️ the `query` request parameter `listType` was restricted to a list of enum values
- added the new enum value `adGroups` to the `query` request parameter `listType`
- added the new enum value `ads` to the `query` request parameter `listType`
- added the new enum value `campaigns` to the `query` request parameter `listType`
- added the new enum value `keywords` to the `query` request parameter `listType`

### GET /ad-publishing/google/segments

- ⚠️ the `query` request parameter `type` was restricted to a list of enum values
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the new enum value `ALL` to the `query` request parameter `type`
- added the new enum value `CUSTOM_SEGMENTS` to the `query` request parameter `type`
- added the new enum value `DATA_SEGMENTS` to the `query` request parameter `type`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/target-interests

- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the new optional `query` request parameter `projection`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/targeting/search

- ⚠️ the `query` request parameter `type` was restricted to a list of enum values
- added the new enum value `geolocation` to the `query` request parameter `type`
- added the new enum value `language` to the `query` request parameter `type`

### GET /ad-publishing/linkedin/ad-accounts

- ⚠️ deleted the `query` request parameter `isDraft`

### PUT /ad-publishing/linkedin/ads

- added the new optional request property `customValueMappings`

### GET /ad-publishing/linkedin/ads/{adId}

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/linkedin/integration

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/linkedin/me

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/linkedin/reporting/list

- ⚠️ the `query` request parameter `listType` was restricted to a list of enum values
- added the new enum value `ads` to the `query` request parameter `listType`
- added the new enum value `campaignGroups` to the `query` request parameter `listType`
- added the new enum value `campaigns` to the `query` request parameter `listType`

### POST /ad-publishing/linkedin/{accountId}/form

- ⚠️ deleted the `query` request parameter `isDraft`

### GET /ad-publishing/linkedin/{accountId}/forms

- ⚠️ deleted the `query` request parameter `isDraft`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the new optional `query` request parameter `projection`
- added the media type `application/json` for the response with the status `200`

### PATCH /ad-publishing/linkedin/{adId}/status

- ⚠️ deleted the `query` request parameter `isDraft`

## Components

- removed the schema `CustomQuestionFieldDTO`
- removed the schema `GoogleDemographicTargetDTO`
- removed the schema `LeadFormAssetPayloadDTO`
- removed the schema `LeadFormFieldDTO`

---

**Social Planner**

### POST /social-media-posting/{locationId}/watermarks

- endpoint added

### GET /social-media-posting/{locationId}/watermarks

- endpoint added

### GET /social-media-posting/{locationId}/watermarks/{templateId}

- endpoint added

### PUT /social-media-posting/{locationId}/watermarks/{templateId}

- endpoint added

### DELETE /social-media-posting/{locationId}/watermarks/{templateId}

- endpoint added

### POST /social-media-posting/{locationId}/watermarks/add-image-watermark

- endpoint added

---

## 2026-08-12

**Contacts**

### GET /contacts/lookup

- endpoint added

---

## 2026-08-12

**Knowledge Base**

### GET /knowledge-bases/files

- endpoint added

### POST /knowledge-bases/files

- endpoint added

### DELETE /knowledge-bases/files/{fileId}

- endpoint added

### GET /knowledge-bases/files/{fileId}

- endpoint added

---

## 2026-08-10

**Oauth**

### POST /oauth/location-token

Backward compatible

These changes rename the response fields to snake_case (`access_token`, `expires_in`, `refresh_token`, `token_type`) to align with the **OAuth 2.0 RFC** standard. This change is **backward compatible** — the previous camelCase fields (`accessToken`, `expiresIn`, `refreshToken`, `tokenType`) continue to work, so no action is required. New integrations should use the snake_case fields.

- ⚠️ removed the optional property `accessToken` from the response with the `200` status
- ⚠️ removed the optional property `expiresIn` from the response with the `200` status
- ⚠️ removed the optional property `refreshToken` from the response with the `200` status
- ⚠️ removed the optional property `tokenType` from the response with the `200` status
- added the optional property `access_token` to the response with the `200` status
- added the optional property `expires_in` to the response with the `200` status
- added the optional property `refresh_token` to the response with the `200` status
- added the optional property `token_type` to the response with the `200` status

### POST /oauth/token

Backward compatible

These changes move the request and response fields to snake_case (`client_id`, `client_secret`, `grant_type`, `redirect_uri`, `refresh_token`, `user_type`, `access_token`, `expires_in`, `token_type`) and accept the request body as `application/x-www-form-urlencoded` to align with the **OAuth 2.0 RFC** standard. This change is **backward compatible** — the previous camelCase properties (`clientId`, `clientSecret`, `grantType`, `redirectUri`, `refreshToken`, `userType`) continue to work, so no action is required. New integrations should use the snake_case fields.

- ⚠️ added the new required request property `client_id`
- ⚠️ added the new required request property `client_secret`
- ⚠️ added the new required request property `grant_type`
- ⚠️ removed the request property `clientId`
- ⚠️ removed the request property `clientSecret`
- ⚠️ removed the request property `grantType`
- ⚠️ removed the request property `redirectUri`
- ⚠️ removed the request property `refreshToken`
- ⚠️ removed the request property `userType`
- ⚠️ removed the optional property `accessToken` from the response with the `200` status
- ⚠️ removed the optional property `expiresIn` from the response with the `200` status
- ⚠️ removed the optional property `refreshToken` from the response with the `200` status
- ⚠️ removed the optional property `tokenType` from the response with the `200` status
- added the new optional request property `redirect_uri`
- added the new optional request property `refresh_token`
- added the new optional request property `user_type`
- added the optional property `access_token` to the response with the `200` status
- added the optional property `expires_in` to the response with the `200` status
- added the optional property `refresh_token` to the response with the `200` status
- added the optional property `token_type` to the response with the `200` status

---

## 2026-08-06

**Saas Api**

### GET /saas/locations

- ⚠️ added the new required `query` request parameter `companyId`
- the `query` request parameter `customerId` became optional
- the `query` request parameter `subscriptionId` became optional
- added the media type `application/json` for the response with the status `200`
- added the non-success response with the status `400`
- added the non-success response with the status `401`
- added the non-success response with the status `404`
- added the non-success response with the status `500`

---

## 2026-08-05

**Ad Publishing**

### GET /ad-publishing/facebook/reporting/list

- ⚠️ the `query` request parameter `listType` was restricted to a list of enum values
- added the new enum value `ads` to the `query` request parameter `listType`
- added the new enum value `adsets` to the `query` request parameter `listType`
- added the new enum value `campaigns` to the `query` request parameter `listType`
- added the new enum value `none` to the `query` request parameter `listType`

### GET /ad-publishing/google/reporting/list

- ⚠️ the `query` request parameter `listType` was restricted to a list of enum values
- added the new enum value `adGroups` to the `query` request parameter `listType`
- added the new enum value `ads` to the `query` request parameter `listType`
- added the new enum value `campaigns` to the `query` request parameter `listType`
- added the new enum value `keywords` to the `query` request parameter `listType`

### GET /ad-publishing/linkedin/reporting/list

- ⚠️ the `query` request parameter `listType` was restricted to a list of enum values
- added the new enum value `ads` to the `query` request parameter `listType`
- added the new enum value `campaignGroups` to the `query` request parameter `listType`
- added the new enum value `campaigns` to the `query` request parameter `listType`

---

## 2026-08-03

**Ad Publishing**

### GET /ad-publishing/facebook/conversation-forms

- ⚠️ deleted the `query` request parameter `isDraft`
- added the new optional `query` request parameter `after`
- added the new optional `query` request parameter `limit`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/custom-audience

- added the new optional `query` request parameter `after`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `projection`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/page/{pageId}/forms

- ⚠️ deleted the `query` request parameter `isDraft`
- added the new optional `query` request parameter `after`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `projection`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/pixels

- added the new optional `query` request parameter `after`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `projection`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/assets

- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/audiences

- ⚠️ deleted the `query` request parameter `isDraft`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/conversion-goals

- ⚠️ deleted the `query` request parameter `isDraft`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/conversions

- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`

### GET /ad-publishing/google/segments

- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/target-interests

- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the new optional `query` request parameter `projection`
- added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/linkedin/{accountId}/forms

- ⚠️ deleted the `query` request parameter `isDraft`
- added the new optional `query` request parameter `limit`
- added the new optional `query` request parameter `pageToken`
- added the new optional `query` request parameter `projection`
- added the media type `application/json` for the response with the status `200`

---

## 2026-07-30

**Brand Boards**

No changes to report, but the specs are different

---

## 2026-07-28

**Opportunities**

### GET /opportunities/{id}

- added `#/components/schemas/GetOpportunityResponseSchema` to the `opportunity` response property `allOf` list for the response status `200`
- removed `#/components/schemas/SearchOpportunitiesResponseSchema` from the `opportunity` response property `allOf` list for the response status `200`

---

## 2026-07-07

**Ad Publishing**

### GET /ad-publishing/facebook/pages

- added the new optional `query` request parameter `after`
- added the new optional `query` request parameter `limit`
- added the media type `application/json` for the response with the status `200`

---

## 2026-06-26

**Opportunities**

### POST /opportunities/pipelines

- endpoint added

### DELETE /opportunities/pipelines/{pipelineId}

- endpoint added

### GET /opportunities/pipelines/{pipelineId}

- endpoint added

### PUT /opportunities/pipelines/{pipelineId}

- endpoint added

---

## 2026-06-18

**Ad Publishing**

**Saas**

### GET /saas/allow-attach-rebilling/{locationId}

- endpoint added

---

## 2026-06-15

**Users**

### POST /users/

- ⚠️ added the new `pipelines.create` enum value to the `scopes` response property for the response status `201`
- added the new `pipelines.create` enum value to the request property `scopes/items/`
- added the new `pipelines.create` enum value to the request property `scopesAssignedToOnly/items/`

### GET /users/search

- ⚠️ added the new `pipelines.create` enum value to the `users/items/scopes` response property for the response status `200`

### POST /users/search/filter-by-email

- ⚠️ added the new `pipelines.create` enum value to the `users/items/scopes` response property for the response status `200`

### GET /users/{userId}

- ⚠️ added the new `pipelines.create` enum value to the `scopes` response property for the response status `200`

### PUT /users/{userId}

- ⚠️ added the new `pipelines.create` enum value to the `scopes` response property for the response status `200`
- added the new `pipelines.create` enum value to the request property `scopes/items/`
- added the new `pipelines.create` enum value to the request property `scopesAssignedToOnly/items/`

---

## 2026-06-12

**Ad Publishing**

### GET /ad-publishing/facebook/reporting/list

- the `query` request parameter `campaignId` became optional

---

## 2026-06-11

**Brand Boards**

### GET /brand-boards/locations/{locationId}/brand-voices

- endpoint added

### POST /brand-boards/locations/{locationId}/brand-voices

- endpoint added

### DELETE /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}

- endpoint added

### GET /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}

- endpoint added

### PATCH /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}

- endpoint added

### POST /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}/default

- endpoint added

### GET /brand-boards/public/v1/locations/{locationId}/voices

- api path removed with deprecation

### POST /brand-boards/public/v1/locations/{locationId}/voices

- api path removed with deprecation

### DELETE /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}

- api path removed with deprecation

### GET /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}

- api path removed with deprecation

### PATCH /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}

- api path removed with deprecation

### POST /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}/default

- api path removed with deprecation

---

**Email Isv**

### POST /email/verify

- ⚠️ added `#/components/schemas/EmailVerifiedV3ResponseDto, #/components/schemas/LeadConnectorRecommendationDto` to the response body `oneOf` list for the response status `201`
- removed `#/components/schemas/EmailVerifiedResponseDto` from the response body `oneOf` list for the response status `201`

## Components

- removed the schema `EmailVerifiedResponseDto`
- removed the schema `LeadConnectorRecomandationDto`
- the component security scheme `Agency-Access-Only` was added
- the component security scheme `Location-Access-Only` was added

---

**Emails**

### GET /emails/builder

- api path removed with deprecation

### POST /emails/builder

- api path removed with deprecation

### POST /emails/builder/data

- api path removed with deprecation

### DELETE /emails/builder/{locationId}/{templateId}

- api path removed with deprecation

### PATCH /emails/builder/{templateId}

- api path removed with deprecation

### GET /emails/campaigns/bulk-actions

- api path removed with deprecation

### GET /emails/campaigns/workflows

- api path removed with deprecation

### GET /emails/locations/{locationId}/campaigns/bulk-actions

- endpoint added

### GET /emails/locations/{locationId}/campaigns/bulk-actions/{campaignId}

- endpoint added

### GET /emails/locations/{locationId}/campaigns/emails

- endpoint added

### POST /emails/locations/{locationId}/campaigns/emails

- endpoint added

### DELETE /emails/locations/{locationId}/campaigns/emails/{campaignId}

- endpoint added

### GET /emails/locations/{locationId}/campaigns/emails/{campaignId}

- endpoint added

### PATCH /emails/locations/{locationId}/campaigns/emails/{campaignId}

- endpoint added

### POST /emails/locations/{locationId}/campaigns/emails/{campaignId}/schedule

- endpoint added

### GET /emails/locations/{locationId}/campaigns/stats/{source}/{sourceId}

- endpoint added

### GET /emails/locations/{locationId}/campaigns/workflows

- endpoint added

### GET /emails/locations/{locationId}/campaigns/workflows/{campaignId}

- endpoint added

### GET /emails/locations/{locationId}/templates

- endpoint added

### POST /emails/locations/{locationId}/templates

- endpoint added

### POST /emails/locations/{locationId}/templates/folders

- endpoint added

### POST /emails/locations/{locationId}/templates/import

- endpoint added

### DELETE /emails/locations/{locationId}/templates/{templateId}

- endpoint added

### GET /emails/locations/{locationId}/templates/{templateId}

- endpoint added

### PATCH /emails/locations/{locationId}/templates/{templateId}

- endpoint added

### GET /emails/public/v2/locations/{locationId}/campaigns/bulk-actions

- api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/bulk-actions/{campaignId}

- api path removed with deprecation

### POST /emails/public/v2/locations/{locationId}/campaigns/email-campaign

- api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/emails

- api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/emails/{campaignId}

- api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/stats/{source}/{sourceId}

- api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/workflows

- api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/workflows/{campaignId}

- api path removed with deprecation

### DELETE /emails/public/v2/locations/{locationId}/campaigns/{campaignId}

- api path removed with deprecation

### PATCH /emails/public/v2/locations/{locationId}/campaigns/{campaignId}

- api path removed with deprecation

### POST /emails/public/v2/locations/{locationId}/campaigns/{campaignId}/schedule

- api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/templates

- api path removed with deprecation

### POST /emails/public/v2/locations/{locationId}/templates

- api path removed with deprecation

### POST /emails/public/v2/locations/{locationId}/templates/folders

- api path removed with deprecation

### POST /emails/public/v2/locations/{locationId}/templates/import

- api path removed with deprecation

### DELETE /emails/public/v2/locations/{locationId}/templates/{templateId}

- api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/templates/{templateId}

- api path removed with deprecation

### PATCH /emails/public/v2/locations/{locationId}/templates/{templateId}

- api path removed with deprecation

### GET /emails/schedule

- api path removed with deprecation

### GET /emails/stats/location/{locationId}/{source}/{sourceId}

- api path removed with deprecation

---

**Opportunities**

### POST /opportunities/

- ⚠️ removed `#/components/schemas/customFieldsInputStringSchema, #/components/schemas/customFieldsInputArraySchema, #/components/schemas/customFieldsInputObjectSchema` from the `customFields/items/` request property `anyOf` list
- added `#/components/schemas/customFieldsInputStringSchemaV3, #/components/schemas/customFieldsInputArraySchemaV3, #/components/schemas/customFieldsInputObjectSchemaV3` to the `customFields/items/` request property `anyOf` list

### GET /opportunities/search

- ⚠️ added the new required `query` request parameter `locationId`
- ⚠️ deleted the `query` request parameter `assigned_to`
- ⚠️ deleted the `query` request parameter `contact_id`
- ⚠️ deleted the `query` request parameter `location_id`
- ⚠️ deleted the `query` request parameter `pipeline_id`
- ⚠️ deleted the `query` request parameter `pipeline_stage_id`
- added the new optional `query` request parameter `assignedTo`
- added the new optional `query` request parameter `contactId`
- added the new optional `query` request parameter `pipelineId`
- added the new optional `query` request parameter `pipelineStageId`

### PUT /opportunities/{id}

- ⚠️ removed `#/components/schemas/customFieldsInputStringSchema, #/components/schemas/customFieldsInputArraySchema, #/components/schemas/customFieldsInputObjectSchema` from the `customFields/items/` request property `anyOf` list
- added `#/components/schemas/customFieldsInputStringSchemaV3, #/components/schemas/customFieldsInputArraySchemaV3, #/components/schemas/customFieldsInputObjectSchemaV3` to the `customFields/items/` request property `anyOf` list

## Components

- removed the schema `CreateDto`
- removed the schema `UpdateOpportunityDto`
- removed the schema `customFieldsInputArraySchema`
- removed the schema `customFieldsInputObjectSchema`
- removed the schema `customFieldsInputStringSchema`

---

**Users**

### GET /users/

- api removed with deprecation

### DELETE /users/{userId}

- ⚠️ added the new required `header` request parameter `Version`
- ⚠️ removed the optional property `succeded` from the response with the `200` status
- added the optional property `succeeded` to the response with the `200` status

## Components

- removed the schema `DeleteUserSuccessfulResponseDto`

---

**Contacts**

### GET /contacts/

- api removed with deprecation

### POST /contacts/

- ⚠️ added `#/components/schemas/DndSettingsSchemaV3` to the `dndSettings` request property `allOf` list
- ⚠️ removed `#/components/schemas/DndSettingsSchema` from the `dndSettings` request property `allOf` list
- added `#/components/schemas/GetContactByIdSchemaV3` to the `contact` response property `allOf` list for the response status `201`
- removed `#/components/schemas/CreateContactSchema` from the `contact` response property `allOf` list for the response status `201`

### POST /contacts/upsert

- ⚠️ added `#/components/schemas/DndSettingsSchemaV3` to the `dndSettings` request property `allOf` list
- ⚠️ removed `#/components/schemas/DndSettingsSchema` from the `dndSettings` request property `allOf` list
- added `#/components/schemas/GetContactByIdSchemaV3` to the `contact` response property `allOf` list for the response status `200`
- removed `#/components/schemas/GetContectByIdSchema` from the `contact` response property `allOf` list for the response status `200`

### GET /contacts/{contactId}

- added `#/components/schemas/GetContactByIdSchemaV3` to the `contact` response property `allOf` list for the response status `200`
- removed `#/components/schemas/GetContectByIdSchema` from the `contact` response property `allOf` list for the response status `200`

### PUT /contacts/{contactId}

- ⚠️ added `#/components/schemas/DndSettingsSchemaV3` to the `dndSettings` request property `allOf` list
- ⚠️ removed `#/components/schemas/DndSettingsSchema` from the `dndSettings` request property `allOf` list
- ⚠️ removed the optional property `succeded` from the response with the `200` status
- added `#/components/schemas/GetContactByIdSchemaV3` to the `contact` response property `allOf` list for the response status `200`
- removed `#/components/schemas/GetContectByIdSchema` from the `contact` response property `allOf` list for the response status `200`

### DELETE /contacts/{contactId}/campaigns/remove-all

- endpoint added

### DELETE /contacts/{contactId}/campaigns/removeAll

- api path removed with deprecation

## Components

- removed the schema `ContactsByIdSuccessfulResponseDto`
- removed the schema `CreateContactDto`
- removed the schema `CreateContactSchema`
- removed the schema `CreateContactsSuccessfulResponseDto`
- removed the schema `DndSettingsSchema`
- removed the schema `GetContectByIdSchema`
- removed the schema `UpdateContactDto`
- removed the schema `UpdateContactsSuccessfulResponseDto`
- removed the schema `UpsertContactDto`
- removed the schema `UpsertContactsSuccessfulResponseDto`

---

**Oauth**

### GET /oauth/installed-locations

- endpoint added

### GET /oauth/installedLocations

- ⚠️ api path removed without deprecation

### POST /oauth/location-token

- endpoint added

### POST /oauth/locationToken

- ⚠️ api path removed without deprecation

### POST /oauth/token

- ⚠️ added the new required `header` request parameter `Version`
- ⚠️ added the new required request property `clientId`
- ⚠️ added the new required request property `clientSecret`
- ⚠️ added the new required request property `grantType`
- ⚠️ removed the request property `client_id`
- ⚠️ removed the request property `client_secret`
- ⚠️ removed the request property `grant_type`
- ⚠️ removed the request property `redirect_uri`
- ⚠️ removed the request property `refresh_token`
- ⚠️ removed the request property `user_type`
- ⚠️ removed the optional property `access_token` from the response with the `200` status
- ⚠️ removed the optional property `expires_in` from the response with the `200` status
- ⚠️ removed the optional property `refresh_token` from the response with the `200` status
- ⚠️ removed the optional property `token_type` from the response with the `200` status
- added the new optional request property `redirectUri`
- added the new optional request property `refreshToken`
- added the new optional request property `userType`
- added the media type `application/json` to the request body
- added the optional property `accessToken` to the response with the `200` status
- added the optional property `expiresIn` to the response with the `200` status
- added the optional property `refreshToken` to the response with the `200` status
- added the optional property `tokenType` to the response with the `200` status

## Components

- removed the schema `GetAccessCodeSuccessfulResponseDto`
- removed the schema `GetAccessCodebodyDto`

---

**Phone System**

### GET /phone-system/numbers/location/{locationId}

- ⚠️ added the new required `header` request parameter `version`
- added the new optional `query` request parameter `page`
- added the new optional `query` request parameter `pageSize`
- added the media type `application/json` for the response with the status `200`

### POST /phone-system/numbers/location/{locationId}/purchase

- ⚠️ added the new required `header` request parameter `version`
- added the media type `application/json` for the response with the status `201`

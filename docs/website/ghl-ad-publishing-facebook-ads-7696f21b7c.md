> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/facebook-ads). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Facebook Ads

Documentation for Ad-publishing API

## 📄️Search targeting options

Search Facebook targeting options for ad set audience building. `type` selects which taxonomy is searched and determines the response shape: `geolocation` returns places, `interest` returns interests, behaviours, and demographics, and `language` returns locales. Geolocation and interest results are passed through from Facebook, so their fields are snake_case.

## 📄️Publish campaign

Queue a Facebook campaign for publishing and push it live to Facebook. Publishing runs asynchronously, so the campaign comes back in the state it was queued in — `publishingStatus` is still `DRAFT` on the campaign and on every ad set and ad, and no Facebook ids are attached yet. Poll GET /facebook/campaigns/{campaignId}/publishing-progress for the outcome.

## 📄️Get conversion pixels

Retrieve Facebook conversion pixels for a location. `channel` selects between two unrelated behaviours. For `FACEBOOK` (the default) the response is `{ items, total }`, or a paginated `{ items, paging }` envelope when `limit` (max 100) is given — pass `after` from `paging.next` for the next batch — and `projection` (comma-separated, from `createdAt`, `fbIsCrmPixel`, `fbPixelCode`, `fbPixelId`, `name`, `type`) narrows each item. For `IG` the response is instead a bare array of Instagram datasets carrying only an id, and `limit`, `after`, and `projection` are ignored.

## 📄️Upsert conversion pixel

Create a Facebook conversion pixel, or rename an existing one by passing `conversionPixelId`. The two paths acknowledge differently: a create returns the new id, a rename returns only `{ success: true }`. Renaming is the only update supported, and it rejects `type: INSTAGRAM_DM`. Creating an `INSTAGRAM_DM` dataset requires `igUserId` and fails if one already exists for that account.

## 📄️Get custom audiences

Retrieve Facebook custom audiences for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100) the response is a paginated `{ customAudiences, paging }` envelope; pass `after` (from `paging.next`) to fetch the next batch. By default each item is returned in full; pass `projection` (comma-separated, dot-notation for nested fields, e.g. ?projection=id,name,dataSource.type) to return only the requested fields — any value outside the known field set is rejected.

## 📄️Delete custom audience

Delete a Facebook custom audience by ID

## 📄️Update custom audience

Rename a Facebook custom audience or change its description. Only those two fields can be updated; membership is changed through the member endpoints. The audience is also queued for reprocessing, so the acknowledgement does not mean downstream state has caught up.

## 📄️Get custom audience by ID

Retrieve one custom audience with its full detail. Returns more than the listing endpoint: Meta adds the fields relevant to the audience subtype (`retentionDays` and `customerFileSource` for customer lists, `rule` and `pixelId` for website audiences, `lookalikeSpec` for lookalikes), and this service appends `extras` describing the local smart-list or CSV source when the audience is a user-provided customer list.

## 📄️Add custom audience member

Add a single contact to a Facebook custom audience. The contact is resolved from `contactId` and its identifiers are hashed before being sent to Meta. Use the batch endpoint for more than one member.

## 📄️Remove custom audience member

Remove a single contact from a Facebook custom audience. Note this DELETE takes a request body carrying `locationId` and `contactId`, rather than identifying the member through the path or query.

## 📄️Batch update audience members

Add or remove members in bulk from a Facebook custom audience, sourced from a CSV or one or more smart lists — at least one of `csvPath` or `smartlistIds` is required. The work is queued rather than performed inline, so the acknowledgement confirms only that the job was accepted; nothing about the outcome is reported here. Unlike the single-member endpoints this one answers with `{ success: true }` rather than a status-and-message body.

## 📄️Get campaign with linked entities

Retrieve a Facebook campaign with its linked adsets and ads

## 📄️Get entities

Retrieve campaigns, ad sets, or ads for a location. `entityType` selects which, and each returns a `{ data }` envelope whose item shape differs — the id key is `campaignId`, `adSetId`, or `adId` respectively, and the status fields differ too: campaigns carry both `status` and `effectiveStatus`, ad sets only `effectiveStatus`, and ads only `status`. `next` is returned only when the branch pages through Meta, so treat its absence as the end of the results rather than assuming a cursor. For `CAMPAIGN`, `type=INTEGRATION` queries Meta while `type=AD_MANAGER` reads campaigns this service published, filtered to `PAUSED` and `PUBLISHED`. `ADSET` requires `campaignId`; `AD` accepts `adSetId` for a single ad set or `campaignId` to page across the campaign.

## 📄️Upsert campaign

Create or update a Facebook campaign

## 📄️Upsert adset

Create or update a Facebook ad set

## 📄️Upsert ad

Create or update a Facebook ad

## 📄️Pause campaign

Pause a running Facebook campaign

## 📄️Resume campaign

Resume a paused Facebook campaign

## 📄️Duplicate campaign

Duplicate an existing Facebook campaign

## 📄️Delete campaign

Delete a Facebook campaign by ID

## 📄️Pause ad set

Pause a running Facebook ad set

## 📄️Resume ad set

Resume a paused Facebook ad set

## 📄️Duplicate ad set

Duplicate an existing Facebook ad set

## 📄️Delete ad set

Delete a Facebook ad set by ID

## 📄️Pause ad

Pause a running Facebook ad

## 📄️Resume ad

Resume a paused Facebook ad

## 📄️Duplicate ad

Duplicate an existing Facebook ad

## 📄️Delete ad

Delete a Facebook ad by ID

## 📄️Get campaign publishing progress

Returns Redis-backed publish progress for a campaign while it is publishing to Meta. Used by the validation funnel UI to poll step counts and completion state.

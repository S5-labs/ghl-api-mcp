> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-ads). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Google Ads

Documentation for Ad-publishing API

## 📄️Get conversions

Retrieve Google Ads conversion actions for a location. The response shape is selected by `type`. When `type` is `AD_MANAGER`: without `limit` a plain array of full conversion actions, and with `limit` (max 100, default 100) a paginated `{ conversions, paging }` envelope — pass `pageToken` (from `paging.next`) for the next batch. When `type` is omitted or `AD_WORDS`, a different, minimal snake_case projection is returned and `limit`, `pageToken`, `startDate`, `endDate`, `conversionType` and `category` are all ignored.

## 📄️Upsert conversion

Create or update a Google Ads conversion action

## 📄️Get conversion by ID

Retrieve a specific Google Ads conversion action by ID

## 📄️Delete conversion

Delete a Google Ads conversion action by ID

## 📄️Publish ad

Publish a Google ad and push it live

## 📄️Get ad publishing progress

Returns Redis-backed publish progress for a Google campaign while it is publishing. Used by the publish progress UI to poll step counts and completion state.

## 📄️Search targeting options

Search Google geo-locations for ad targeting

## 📄️Get keyword ideas

Retrieve keyword suggestions for Google Ads campaigns

## 📄️Get assets

Retrieve Google Ads creative assets for a location. Without `limit` the response is a plain array of assets. When `limit` is provided (max 100, default 100) the response is a paginated `{ assets, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

## 📄️Upsert assets

Create or update Google Ads creative assets

## 📄️Get entities

Retrieve Google campaigns, ad groups, or ads based on entity type

## 📄️Get target interests

Retrieve affinity and in-market audience options for Google Ads targeting. Without `limit` the response is a plain array of root interests (each with a nested children tree). When `limit` is provided (max 100) the response is a paginated `{ targetInterests, paging }` envelope — a page counts root interests; pass `pageToken` (from `paging.next`) to fetch the next batch. By default each node is returned in full; pass `projection` (comma-separated, e.g. ?projection=name,userInterestId,children) to return only the requested fields — selecting `children` prunes the whole tree recursively with the same selection, and any value outside the known field set is rejected.

## 📄️Get segments

Retrieve Google Ads audience segments for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100, default 100) the response is a paginated `{ segments, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

## 📄️Upsert segment

Create or update a Google Ads audience segment

## 📄️Delete segment

Delete a Google Ads audience segment by ID

## 📄️Get segment by ID

Retrieve a specific Google Ads audience segment by ID

## 📄️Create offline user list job

Create a job to upload users to a Google customer match list

## 📄️Upsert audience

Create or update a Google Ads combined audience

## 📄️Get audiences

Retrieve Google Ads combined audiences for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100, default 100) the response is a paginated `{ audiences, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

## 📄️Get audience by ID

Retrieve a specific Google Ads combined audience by ID

## 📄️Upsert Google campaign

Create or update a full Google Ads campaign structure

## 📄️Get Google campaign by ID

Retrieve a specific Google Ads campaign by ID

## 📄️Get conversion goals

Retrieve Google Ads conversion goals for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100, default 100) the response is a paginated `{ conversionGoals, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

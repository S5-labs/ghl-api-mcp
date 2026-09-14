> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/linked-in-ads). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# LinkedIn Ads

Documentation for Ad-publishing API

## 📄️Get ad campaign group

Retrieve a LinkedIn ad campaign group by ID

## 📄️Publish ad campaign group

Publish a LinkedIn ad campaign group and push it live

## 📄️Upsert ad campaign group

Create or update a LinkedIn ad campaign group with campaigns and ads

## 📄️Search targeting options

Search LinkedIn targeting facets such as locations, industries, and job titles

## 📄️Get lead forms

Retrieve LinkedIn lead gen forms for an ad account. By default each form is returned in full as a plain array; pass `projection` (comma-separated, dot-notation for nested fields) to return only the requested fields — any value outside the known field set is rejected. When `limit` is provided (max 100) the response is a paginated `{ leadForms, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

## 📄️Create lead form

Create a new LinkedIn lead gen form for an ad account

## 📄️Update ad status

Pause or resume a LinkedIn ad, campaign, or ad group

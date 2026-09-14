> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/saas-api/saa-s). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# SaaS

API Service for SaaS

## 📄️Get Agency Plans

Fetch all agency subscription plans for a given company ID

## 📄️Allow Attach Rebilling

Marks a SaaS sub-account as awaiting rebilling attach and optionally stores the rebilling configuration that should be applied when the rebilling config is created. Sets payment_pending on the sub-account. Only allowed when the sub-account is in setup_pending state.

## 📄️Disable SaaS for locations

Disable SaaS for locations for given locationIds

## 📄️Bulk Enable SaaS

Enable SaaS mode for multiple locations with support for both SaaS v1 and v2

## 📄️Get Location Wallet Balance

Fetch the wallet balance for a specific location. Returns a resource object with balance details.

## 📄️Update Location Wallet Balance

Update the wallet balance or complimentary credit settings for a specific location. Supports partial updates via updateMask field (AIP-134 compliant).

## 📄️List agency wallet transactions

Fetch paginated wallet transactions for an agency (company). Supports skip/limit pagination, date-range and charge-type filters, timezone normalization, and additional non-indexed filters in the request body.

## 📄️Enable SaaS for Sub-Account (Formerly Location)

Enable SaaS for Sub-Account (Formerly Location) based on the data provided

## 📄️Get Location Subscription Details

Fetch subscription details for a specific location from location metadata

## 📄️Get locations by stripeId with companyId

Get locations by stripeCustomerId or stripeSubscriptionId with companyId

## 📄️List location wallet transactions

Fetch paginated wallet transactions for a sub-account (location). Supports skip/limit pagination, date-range and charge-type filters, timezone normalization, and additional non-indexed filters in the request body.

## 📄️Pause location

Pause Sub account for given locationId

## 📄️Remove attached config

Clears attached SaaS plan (attachPlanId/attachPriceId) and/or attached rebilling config from a sub-account in setup_pending, and sets suspendedInfo.payment_pending to false.

## 📄️Get SaaS Locations

Fetch all SaaS-activated locations for a company with pagination

## 📄️Get SaaS Plan

Fetch a specific SaaS plan by plan ID

## 📄️Update Rebilling

Bulk update rebilling for given locationIds

## 📄️Update SaaS subscription

Update SaaS subscription for given locationId and customerId

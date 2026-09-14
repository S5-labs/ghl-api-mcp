> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/affiliates). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Affiliates

Documentation for Affiliate Manager API

## 📄️List Affiliates

Retrieve the list of affiliates for a location.

## 📄️Create Affiliate

Create an affiliate for a location. An affiliate already registered with the same email in this location is updated instead of duplicated.

## 📄️Get Affiliate

Retrieve a single affiliate by id for a location.

## 📄️Update Affiliate

Replace an affiliate for a location. Fields omitted from the body are cleared, so send the complete affiliate.

## 📄️Update Affiliate Status

Activate or deactivate an affiliate. Sending the same value again leaves the affiliate unchanged.

## 📄️Upload affiliate tax form

Upload a W-8 or W-9 document for an affiliate. Send the document as multipart/form-data; the storage location is assigned by the server.

## 📄️Validate Referral Id

Check whether a referral id is free to use. Referral ids are unique across a location, so a taken id reports as unavailable even when it belongs to a different campaign.

## 📄️Update Affiliate Referral Id

Set the referral id an affiliate is tracked by on a campaign. The referral link is rebuilt around the new id, and the id must be unused across the location.

## 📄️Update Affiliate Suspension

Suspend or reinstate an affiliate on a campaign. Suspending cancels their pending and denied payouts, commissions and transactions; reinstating returns cancelled ones to pending.

## 📄️Move Affiliate To Campaign

Move an affiliate from one campaign to another. The target campaign must be live and belong to the same location, and the affiliate must not already be enrolled in it.

> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/payout-methods). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Payout Methods

Documentation for Affiliate Manager API

## 📄️List Payout Methods

List the payout methods stored for an affiliate. Bank account values are returned as their last four characters only.

## 📄️Create Payout Method

Store a payout method for an affiliate. An affiliate can hold one PayPal and one bank method; the first method stored becomes the primary one. Bank fields are validated against the requirements of the account country.

## 📄️Update Payout Method

Replace the stored details of a payout method. The payout method type cannot be changed, and the method must belong to the affiliate named in the path.

## 📄️Delete Payout Method

Delete a payout method. The primary method cannot be deleted while the affiliate holds more than one.

## 📄️Mark Payout Method As Primary

Make this payout method the one payouts default to. Any other method stops being primary.

## 📄️List Country Bank Mappings

List the bank fields each supported country requires, for building a bank payout method. This is shared reference data, identical for every location.

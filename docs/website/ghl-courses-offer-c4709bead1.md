> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/offer). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Offer

API Service for Courses and Memberships

## 📄️List Offers

List membership offers in the location. Requires a Location token with courses.readonly. Send Version: v3. Uses membership listView pagination (cursor encodes skip). Location-wide — membership does not filter by productId. Default-offer rows are not included.

## 📄️Create Offer

Create a membership offer. Requires a Location token with courses.write. Send Version: v3. Returns the full offer. source is always membership. locationId, userId, originId, and addProductToMembers are not accepted. Non-free type still requires payment integrations upstream.

## 📄️Get Offer

Get a membership offer by id. Requires a Location token with courses.readonly. Send Version: v3. Default-offer rows (source other than membership) return 404.

## 📄️Update Offer

Update a membership offer. Requires a Location token with courses.write. Send Version: v3. Returns the full offer. locationId, id, userId, originId, and addProductToMembers are not accepted.

## 📄️Delete Offer

Delete a membership offer. Requires a Location token with courses.write. Send Version: v3.

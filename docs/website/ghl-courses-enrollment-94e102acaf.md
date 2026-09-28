> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/enrollment). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Enrollment

API Service for Courses and Memberships

## 📄️List Product Enrollments

List contacts enrolled in a product. Requires a Location token with courses.readonly. Send Version: v3. Reads user_purchases in the bound location. Does not return email or lesson progress. Cursor encodes createdAt and id.

## 📄️Enroll Contact

Grant a contact access to a membership offer. Requires a Location token with courses.write. Send Version: v3. Uses POST smart-list/user with source public_api (not the queued attach-offer-user path). Returns 200 when already enrolled and 201 when newly attached. Login tokens are never returned. checkoutFrom public_api is not in membership paidSources, so these grants are omitted from Net Revenue paid filters. Default-offer rows return 404.

## 📄️Revoke Enrollment

Revoke a contact from a membership offer. Requires a Location token with courses.write. Send Version: v3. Uses DELETE smart-list/user (offer revoke, not product blacklist). Sibling products on the same offer are also revoked. Default-offer rows return 404.

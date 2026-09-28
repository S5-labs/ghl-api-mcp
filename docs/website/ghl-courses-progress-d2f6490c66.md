> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/progress). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Progress

API Service for Courses and Memberships

## 📄️List Product Progress

Return progress for the given contact across productIds. Requires a Location token with courses.readonly. Send Version: v3. productIds is a comma-separated list of at most 50 UUID v4 product ids.

## 📄️List Completions

With contactId, return that learner's completed lessons. Without contactId, return a paginated creator rollup by contact. Requires a Location token with courses.readonly. Send Version: v3.

## 📄️List Category Progress

Return per-category progress for a contact in a product. Requires a Location token with courses.readonly. Send Version: v3.

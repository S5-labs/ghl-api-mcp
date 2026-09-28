> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/products). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Products

API Service for Courses and Memberships

## 📄️List Courses

List courses in the location. Requires a Location token with courses.readonly. Send Version: v3. Each item is the full course object including customizations.

## 📄️Create Course

Create a course in the location. Requires a Location token with courses.write. Accepts product columns and nested customizations. locationId, userId, id, originId, source, and processing are not accepted.

## 📄️Get Course

Get a course by id. Requires a Location token with courses.readonly. Returns product columns and nested customizations.

## 📄️Update Course

Update a course. Requires a Location token with courses.write. Accepts the same product columns and nested customizations as create. All fields optional.

## 📄️Delete Course

Delete a course. Requires a Location token with courses.write.

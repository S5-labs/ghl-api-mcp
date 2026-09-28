> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/category). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Category

API Service for Courses and Memberships

## 📄️List Categories

List categories for a course. Requires a Location token with courses.readonly. Each item is the full category object.

## 📄️Create Category

Create a category in a course. Requires a Location token with courses.write. Accepts category columns (title required). locationId, userId, productId, originId are not accepted.

## 📄️Sequence Categories

Reorder categories in a course. Requires a Location token with courses.write.

## 📄️Get Category

Get a category by id. Requires a Location token with courses.readonly. Returns the full category object.

## 📄️Update Category

Update a category. Requires a Location token with courses.write. Accepts the same category columns as create. All fields optional.

## 📄️Delete Category

Delete a category. Requires a Location token with courses.write.

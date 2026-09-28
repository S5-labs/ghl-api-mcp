> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/lesson). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Lesson

API Service for Courses and Memberships

## 📄️List Lessons

List lessons for a course. Pass categoryId to list one category; omit it to list every category (N+1 membership reads). Requires a Location token with courses.readonly. Each item is the full lesson object.

## 📄️Create Lesson

Create a lesson. Requires title and categoryId. Accepts lesson columns. locationId, userId, productId, originId are not accepted. Requires a Location token with courses.write.

## 📄️Get Lesson

Get a lesson by id. Requires a Location token with courses.readonly. Returns the full lesson object.

## 📄️Update Lesson

Update a lesson. Requires a Location token with courses.write. Accepts the same lesson columns as create. All fields optional. Omit categoryId to keep the current category.

## 📄️Delete Lesson

Delete a lesson. Requires a Location token with courses.write.

## 📄️Sequence Lessons

Reorder lessons in a category. Requires a Location token with courses.write.

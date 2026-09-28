> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/quiz). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Quiz

API Service for Courses and Memberships

## 📄️Get Lesson Quiz

Get the quiz for a lesson. Requires a Location token with courses.readonly. Send Version: v3.

## 📄️Create Lesson Quiz

Create a quiz on a lesson. Requires a Location token with courses.write. Send Version: v3. Path lessonId is sent to membership as postId. locationId, userId, and productId are not accepted in the body.

## 📄️Update Quiz

Update a quiz. Requires a Location token with courses.write. Send Version: v3.

## 📄️Delete Quiz

Delete a quiz. Requires a Location token with courses.write. Send Version: v3.

## 📄️List Quiz Questions

List questions for a quiz. Requires a Location token with courses.readonly. Send Version: v3.

## 📄️Replace Quiz Questions

Batch upsert quiz questions. Requires a Location token with courses.write. Send Version: v3. quizId is taken from the path, not the body.

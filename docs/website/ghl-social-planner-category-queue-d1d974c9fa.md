> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/category-queue). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Category Queue

Documentation for Social Media Posting API

## 📄️Get all categories with their queue status

Returns categories with status: 'available' (no queue), 'in_queue' (active/paused queue), or 'draft' (queue in draft).

## 📄️Create a new category queue

Creates a queue in draft status for a category. Published posts are auto-added. Use update endpoint to activate.

## 📄️Fetch category queues for a location

Retrieves a paginated list of all category queues for a given location, excluding any that have been marked as deleted.

## 📄️Fetch a category queue by ID

Retrieves the details of a single category queue by its unique ID. The response includes a count of posts within the queue that have errors.

## 📄️Update queue settings or status

Updates queue status (active/paused/deleted), time slots, or skip dates.

## 📄️Fetch items from a queue

Returns paginated queue items. Pass sessionId to get draft items from an edit session instead of live items.

## 📄️Start or resume an edit session

Creates a draft copy of queue items for editing. Changes are staged until saved or discarded.

## 📄️Save edit session changes

Applies all staged changes to the live queue and closes the edit session.

## 📄️Discard edit session changes

Cancels the edit session and deletes all staged changes without affecting the live queue.

## 📄️Fetch calendar view for an edit session

Retrieves a calendar preview of scheduled posts based on draft items within an edit session. This shows how posts would be scheduled if changes were saved.

## 📄️Fetch slot information for queue items

Returns paginated slot information (scheduledDateTime, isSkipped) for queue items. Pass sessionId to get slots for draft items, or omit for live items. Call this after mutations to refresh slot data.

## 📄️Delete an item from a queue

Deletes an item from a specific category queue.

## 📄️Update an item in a queue

Updates the content or variations of a specific item within a category queue.

## 📄️Get scheduled posts calendar view

Returns scheduled posts from active queues within a date range. Supports filtering by categories and accounts.

## 📄️Delete an active post and schedule the next one

Deletes a post that is currently scheduled and automatically triggers the scheduling of the next available post in the queue.

## 📄️Reset an item in a queue

Resets a specific queue item to its original state, discarding any modifications made.

## 📄️Clone a queue item

Duplicates an existing queue item at a specified order position. Requires an active edit session.

## 📄️Create a new item in the queue

Adds a new post item to a queue. Use sessionId for edit session or directToQueue for immediate addition.

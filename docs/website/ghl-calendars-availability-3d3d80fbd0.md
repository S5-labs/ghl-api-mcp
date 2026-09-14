> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/availability). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Availability

Documentation for Calendars API

## 📄️List user availability schedule

Retrieve user availability schedules based on various filters including location, calendar, and user. Supports pagination.

## 📄️Get user availability schedule

Retrieve a specific schedule by its unique identifier. Returns detailed information including rules, timezone, and associated calendars/users.

## 📄️Update user availability schedule

Modify an existing schedule by updating its rules, timezone, and name All fields are optional - only provided fields will be updated.

## 📄️Delete user availability schedule

Permanently remove a schedule and all its associated rules. This action cannot be undone.

## 📄️Create user availability schedule

Create new schedule with specified rules, timezone, location, user and calendar associations.

## 📄️Apply user availability schedule to a calendar

Associates a calendar with the given schedule by adding the calendarId to a schedule

## 📄️Remove user availability schedule from a calendar

Removes the association between a team calendar and the given schedule by removing the calendarId from the schedule

## 📄️Create event calendar availability schedule

Create a new availability schedule specifically for an event calendar. The calendar ID is provided in the path, and schedule rules and timezone are provided in the request body.

## 📄️Get event calendar availability schedule

Retrieve the availability schedule for a specific event calendar. Returns the schedule associated with the calendar ID provided in the path.

## 📄️Update event calendar availability schedule

Update the availability schedule for a specific event calendar. Only provided fields will be updated. The calendar ID is provided in the path.

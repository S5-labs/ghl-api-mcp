> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/actions). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Actions

Documentation for AI Employees API

## 📄️Attach Action to Agent

Creates and attach a new action for an AI agent. Actions define specific tasks or behaviors that the agent can perform, such as booking appointments, sending follow-ups, collecting information, or making an external API call via the `customApi` ('API Call') type. For `customApi`, put the config in `details` (`details.apiConfig` is required) and a per-agent limit (up to 5) applies.

## 📄️List Actions for an Agent

List for actions for an agent, including any `customApi` ('API Call') actions.

## 📄️List Actions for an Agent

Deprecated — use GET /conversation-ai/agents/{agentId}/actions instead. List for actions for an agent, including any `customApi` ('API Call') actions.

## 📄️Get Action by ID

Retrieves detailed information about a specific action using its unique identifier. Returns the action configuration, associated agents, and performance metrics. Supports both classic actions and the `customApi` ('API Call') type.

## 📄️Update Action

Updates an existing action's configuration — name, description, trigger condition and behaviour settings. For `customApi` ('API Call') actions `details.apiConfig` is optional: omit it to leave the HTTP definition untouched. When sent, it is merged ONE LEVEL DEEP over the stored config — a top-level key you send replaces the stored value outright, keys you omit are kept. Nested values (`headers`, `queryParams`, `bodyTemplate`, `parameters`, `outputFields`) are replaced whole, so send the complete object rather than just the entry you changed. `authentication` is the exception: secret fields omitted, or returned as the redacted placeholder, keep the stored secret.

## 📄️Remove Action from Agent

Permanently deletes an action. This will remove the action from all associated agents and cannot be undone. Applies to both classic and `customApi` ('API Call') actions.

## 📄️Update Followup Settings

Update the followup settings for an action

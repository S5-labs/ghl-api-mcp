> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/agents). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Agents

Documentation for Agent Studio APIs

## 📄️Create Agent

Creates a new agent with staging version. The agent will be created with an initial staging version that can later be promoted to production.

## 📄️List Agents

Lists all active agents for the specified location. locationId is required parameter to ensure optimal performance. Supports pagination using limit and offset. Optionally filter by isPublished=true to return only agents with a published production version.

## 📄️Update Agent

Updates a specific agent version by versionId. Supports updating nodes, edges, variables, and configuration.

## 📄️Update Agent Metadata

Updates agent metadata such as name, description, and status.

## 📄️Delete Agent

Deletes an agent and all its versions.

## 📄️Get Agent

Gets a specific agent by its ID for the specified location with all its versions. Returns complete agent metadata and all non-deleted versions (draft, staging, production). locationId is required parameter. The agent must have active status.

## 📄️Promote to Production

Promotes a draft version to production.

## 📄️Execute Agent

Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body.

## 📄️List Agents (Deprecated)

**Deprecated endpoint - use GET /agent instead.**

## 📄️Get Agent (Deprecated)

**Deprecated endpoint - use GET /agent/:agentId instead.**

## 📄️Execute Agent (Deprecated)

**Deprecated endpoint - use POST /agent/:agentId/execute instead.**

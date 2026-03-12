FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY src ./src
COPY docs ./docs

ENV NODE_ENV=production
ENV GHL_DOCS_DIR=/app/docs

CMD ["node", "src/server.js"]

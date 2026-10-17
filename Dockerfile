FROM node:24.21.0-trixie-slim AS deps
ENV NODE_ENV=development
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM node:24.21.0-trixie-slim AS builder
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM gcr.io/distroless/nodejs24-debian13:nonroot AS production
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
WORKDIR /app
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
CMD ["/app/server.js"]

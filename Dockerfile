# syntax=docker/dockerfile:1

FROM node:24-bookworm-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

RUN corepack enable \
  && apt-get update \
  && apt-get install -y --no-install-recommends openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM deps AS build

ARG DB_URL
ENV DB_URL=$DB_URL

COPY nest-cli.json tsconfig.json tsconfig.build.json prisma.config.ts ./
COPY src ./src

RUN pnpm exec prisma generate \
  && pnpm run build

FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 --ingroup nodejs --home /home/nestjs nestjs \
  && mkdir -p /home/nestjs \
  && chown nestjs:nodejs /home/nestjs

ENV HOME=/home/nestjs

COPY --chown=nestjs:nodejs package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY --chown=nestjs:nodejs --from=deps /app/node_modules ./node_modules
COPY --chown=nestjs:nodejs --from=build /app/dist ./dist
COPY --chown=nestjs:nodejs --from=build /app/src/common/prisma ./src/common/prisma
COPY --chown=nestjs:nodejs prisma.config.ts ./
COPY --chown=nestjs:nodejs docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

USER nestjs

EXPOSE 3000

ENTRYPOINT ["/entrypoint.sh"]
CMD ["node", "dist/main.js"]

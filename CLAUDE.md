# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev      # Start dev server with nodemon (port 4000)
pnpm run build    # Transpile src/ to dist/ via Babel
pnpm start        # Run production build from dist/index.js
pnpm run lint     # ESLint with auto-fix (Airbnb + Prettier)
pnpm run precommit # Lint check (runs automatically on commit)
```

There are no tests configured in this project.

Requires a `.env` file with `API_KEY` (TVDB v4 API key) for the server to start.

## Architecture

This is a **GraphQL API wrapper** over The TVDB v4 REST API, built with Apollo Server 5 and deployed serverlessly on Vercel. It's plain JavaScript (no TypeScript) transpiled with Babel targeting Node.js 20.

**Request flow:**
1. Client sends GraphQL query with a Bearer token in the `Authorization` header
2. Apollo Server (`src/index.js`) routes to the appropriate resolver
3. Resolvers (`src/resolvers/`) call methods on the `TvdbAPI` data source
4. `TvdbAPI` (`src/datasources/TvdbAPI.js`) extends Apollo's `RESTDataSource` and makes authenticated calls to `https://api4.thetvdb.com/v4`

**Key design points:**
- The `seriesInfo` query is a **composed resolver** — it merges series data with the next aired episode, which isn't a single REST endpoint; it requires two API calls.
- Authentication is two-step: the `login` mutation exchanges the API key for a short-lived Bearer token. A cron job in `tokenRefresher.js` refreshes this token daily at midnight.
- All resolvers receive the TVDB Bearer token via GraphQL context (`context.token`), which clients pass in request headers.
- The schema is defined in a single `.graphql` file (`src/schemas/tvdb.graphql`) and loaded by `src/schemas/index.js`.
- Resolvers are merged in `src/resolvers/index.js` before being passed to Apollo Server.

**Deployment:** `vercel.json` configures the built `dist/index.js` as a serverless function. GitHub Actions handles preview and production deployments.

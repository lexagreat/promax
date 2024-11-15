# ARG NODE_VERSION=18.14.2

# FROM node:${NODE_VERSION}-slim as base
FROM node:18.19.1-slim as base
ENV NODE_ENV=production

WORKDIR /frontend

# build
FROM base as build

COPY --link package*.json .
RUN yarn install

COPY --link . .

RUN yarn build

# run
FROM base

COPY --from=build /frontend/.output /frontend/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]
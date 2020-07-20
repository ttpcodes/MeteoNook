FROM rust:1.45.0-alpine3.12 as wasm

RUN apk add --no-cache musl-dev
# Installing using cargo causes the installed binary to report a "not found" error.
RUN wget -qO - https://rustwasm.github.io/wasm-pack/installer/init.sh | sh
COPY . /srv
WORKDIR /srv
RUN wasm-pack build -t nodejs

FROM node:12.18.2-alpine3.12 as build

COPY . /srv
COPY --from=wasm /srv/pkg /srv/pkg
WORKDIR /srv
RUN yarn
RUN yarn run setup

FROM node:12.18.2-alpine3.12
COPY . /srv
COPY --from=build /srv/dist /srv/dist
COPY --from=build /srv/pkg /srv/pkg
WORKDIR /srv
RUN yarn --production=true

CMD ["yarn", "run", "start"]

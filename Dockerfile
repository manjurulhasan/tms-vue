#!/bin/sh

FROM node:lts-alpine

WORKDIR /dapp

COPY package.json .

COPY yarn.lock .

VOLUME [ "/node_module" ]

RUN echo "Installing Dependency..."

RUN yarn install

RUN mkdir -p /logs/

COPY . .

RUN echo "Application Buil running..."

RUN yarn build

EXPOSE 4000

CMD ["yarn", "run","preview", "--host=0.0.0.0"]
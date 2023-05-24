#!/bin/sh

FROM node:lts-alpine

WORKDIR /dapp

COPY package.json .

COPY yarn.lock .

VOLUME [ "/node_module" ]

RUN yarn install

RUN mkdir -p /logs/

COPY . .

EXPOSE 4000

CMD ["yarn", "run","preview", "--host=0.0.0.0"]
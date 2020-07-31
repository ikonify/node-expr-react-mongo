FROM node:13-alpine3.11

RUN apk add --no-cache bash
RUN apk update && apk upgrade

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm i
RUN npm i react-scripts@3.4.1 -g

EXPOSE 3000
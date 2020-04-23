FROM node:13-stretch-slim

RUN apt-get update && \
    apt-get -y install sudo

# Netcat is for wait-for.sh script
RUN sudo apt-get -y install netcat

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 2001
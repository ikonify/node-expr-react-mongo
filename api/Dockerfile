FROM node:13-stretch-slim

RUN apt-get update && \
    apt-get -y install sudo

# Netcat is for wait-for.sh script
RUN sudo apt-get -y install netcat

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY wait-for.sh ./wait-for.sh

EXPOSE 2001
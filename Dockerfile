FROM node:16-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY . /app/

ENV NODE_ENV=docker

CMD [ "npm", "start" ]
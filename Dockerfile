FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

ADD . .

ENV SERVER_PORT=8080
RUN npm install

EXPOSE 8080

CMD [ "node", "./dist/index.js" ]
FROM node:22-alpine

WORKDIR /productms/src/app

COPY     package*.json ./

RUM  npm i --only=production

COPY . .
EXPOSE 3500

CMD ["node", "app.js"]
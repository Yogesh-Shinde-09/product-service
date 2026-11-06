FROM node:22-alpine

WORKDIR /productms/src/app

COPY     package*.json ./

RUN npm install --omit=dev

COPY . .
EXPOSE 3500

CMD ["node", "app.js"]
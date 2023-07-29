FROM node:alpine

WORKDIR /app
COPY package.json .
RUN apk add --no-cache git
RUN npm install --omit=dev
COPY . .

CMD ["npm", "start"]
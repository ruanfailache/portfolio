FROM node:22-alpine
WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package.json ./
RUN npm install

COPY . .
RUN mkdir -p public/uploads

ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npm run build

EXPOSE 1337
ENV NODE_ENV=production
CMD ["npm", "run", "start"]

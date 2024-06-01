FROM node:22-alpine
WORKDIR /app/
COPY package.json yarn.lock ./
COPY ./src ./src
RUN yarn install
EXPOSE 5535

CMD ["yarn", "start"]
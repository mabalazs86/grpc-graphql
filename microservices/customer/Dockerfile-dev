FROM node:13-alpine

WORKDIR /home/node/app

COPY . .
RUN yarn

EXPOSE 50051

CMD ["yarn", "start:dev"]
FROM node:13-alpine AS builder
WORKDIR /home/node/app
COPY ./package.json ./
RUN yarn
COPY . .
RUN yarn build


FROM node:13-alpine-alpine
WORKDIR /home/node/app
COPY --from=builder /home/node/app ./

EXPOSE 3000

CMD ["yarn", "start:prod"]
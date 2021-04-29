FROM node:13-alpine AS builder

ENV NODE_ENV build
# USER node

WORKDIR /home/node/app
COPY ./package.json ./
COPY . .
RUN yarn \
    && yarn build


FROM node:13-alpine
ENV NODE_ENV production
# USER node

WORKDIR /home/node/app
# COPY --from=builder /home/node/app ./
COPY --from=builder /home/node/app/package*.json /home/node/app/
COPY --from=builder /home/node/app/yarn.lock /home/node/app/
COPY --from=builder /home/node/app/ormconfig.js /home/node/app/
COPY --from=builder /home/node/app/dist/ /home/node/app/dist/

EXPOSE 3000

RUN yarn

CMD ["node", "dist/main.js"]
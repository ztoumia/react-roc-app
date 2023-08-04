FROM node:18 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}}

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn global add @nestjs/cli
RUN yarn install --production=false

COPY . .

RUN yarn build

CMD [ "sh", "-c", "yarn start" ] 
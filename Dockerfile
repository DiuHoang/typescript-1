FROM node:12-alpine

# Create a group and user
RUN addgroup -S ubuntu && adduser -S ubuntu -G ubuntu

WORKDIR /home/ubuntu/portal

COPY package*.json ./

COPY yarn.lock ./

RUN yarn --production

COPY . .

EXPOSE 10000

CMD [ "yarn", "start" ]
#Sample Dockerfile for NodeJS Apps

FROM node:20

# ENV NODE_ENV=production

WORKDIR /app 

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn 

COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]
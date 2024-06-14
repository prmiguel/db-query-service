FROM node:21-alpine3.18
WORKDIR /dbservice
COPY package.json package.json
RUN npm i
COPY src src
EXPOSE 3000
CMD [ "node", "src/app" ]

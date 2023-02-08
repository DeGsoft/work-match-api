FROM node:18.13.0-bullseye-slim

WORKDIR /app

COPY ["./package*.json", "./"]

COPY [".", "."]

RUN npm i

# CMD [ "npm", "start" ]
# base image
FROM node:16.17.0-alpine as development
# Set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH  /usr/src/app/node_modules/.bin:$PATH
ENV SHELL=/bin/sh

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --silent
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000

# start app
CMD "npm" "run" "dev"
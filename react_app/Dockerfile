# pull official base image
FROM node:12-alpine

RUN mkdir -p /usr/src/app

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# add app
COPY . ./

RUN npm install --silent

# expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]

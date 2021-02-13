# Pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /usr/local/app

# add `/usr/local/app/node_modules/.bin`to $PATH
ENV PATH /usr/local/app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

RUN npm install 

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]
# Pull official base image
FROM node:14.9.0-alpine3.10

# set working directory
WORKDIR /usr/local/app

# add `/usr/local/app/node_modules/.bin`to $PATH
ENV PATH /usr/local/app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

RUN npm install 
#RUN npm install react-scripts@3.4.0

# add app
COPY . ./

# start app
CMD ["yarn", "start"]
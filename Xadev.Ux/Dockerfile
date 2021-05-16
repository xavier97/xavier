##### STAGE 1 - BUILD #####
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

##### STAGE 2 - RUN #####
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/xadev-me-app /usr/share/nginx/html

# FROM node:12.2.0 AS build-env

# LABEL version 1.0

# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install
# RUN npm install -g @angular/cli@10.0.0

# # add app
# COPY . /app

# RUN update-ca-certificates

# EXPOSE 5200

# # start app
# CMD ng serve --host 0.0.0.0 --disableHostCheck
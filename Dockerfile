FROM node:8.11.3
# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

#Install app dependancies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available(npm@6+)
ENV PATH `/usr/src/app/node_modules/.bin`:$PATH
COPY package*.json ./

RUN npm install --silent
RUN npm install @angular/cli -g
RUN echo $(ls -l /usr/src/app)

COPY . /usr/src/app
CMD ng serve --host 0.0.0.0
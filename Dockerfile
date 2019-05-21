FROM node:10.15.1-alpine

RUN apk add --update
RUN apk add python
RUN apk add make
RUN apk add g++
RUN npm config set unsafe-perm true

RUN mkdir -p /var/www/app

COPY . /var/www/app

WORKDIR /var/www/app

RUN npm install pm2 -g
RUN npm install

EXPOSE 8080

CMD ["pm2-runtime","--no-auto-exit","--raw","app.js"]

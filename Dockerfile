FROM mhart/alpine-node:6.4.0

WORKDIR /root/

RUN npm i -g ied

ADD package.json .

RUN ied i

ADD static static
ADD server server

CMD node server/app.js

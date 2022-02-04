FROM node

WORKDIR /usr/src/app

COPY package.json .

RUN yarn | npm install 

COPY . .

EXPOSE 8080

CMD ["node", "dist/index.js"]
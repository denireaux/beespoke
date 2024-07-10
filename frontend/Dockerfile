FROM node:18
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ENV CHOKIDAR_USEPOLLING=true

EXPOSE 3000
CMD ["yarn", "start", "--host", "0.0.0.0"]

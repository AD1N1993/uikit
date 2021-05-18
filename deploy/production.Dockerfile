FROM node:14.15.4-alpine3.12 as builder

WORKDIR /build

COPY package*.json yarn.lock ./
RUN yarn install --pure-lockfile

COPY . .
RUN yarn build

FROM nginx:alpine as nginx
COPY --from=builder /build/public /var/www/data
COPY deploy/default.nginx /etc/nginx/conf.d/default.conf

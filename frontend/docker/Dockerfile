FROM nginx:1.23.4-alpine

RUN apk add jq --no-cache
EXPOSE 80

COPY docker/40-create-config-json.sh /docker-entrypoint.d
COPY dist /usr/share/nginx/html


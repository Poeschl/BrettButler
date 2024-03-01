FROM nginx:1.25.4-alpine

EXPOSE 80

COPY --chmod=555 docker/40-create-runtime-env.sh /docker-entrypoint.d/
COPY --chmod=555 docker/50-config-path-prefix.sh /docker-entrypoint.d/
COPY docker/nginx-subdomain.conf /etc/nginx/conf.d/nginx-subdomain.template
COPY docker/nginx-subpath.conf /etc/nginx/conf.d/nginx-subpath.template
COPY dist /usr/share/nginx/html

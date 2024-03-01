#!/usr/bin/env sh
set -e

# Move sources to right path
cd /usr/share/nginx/html
mkdir -p ".${BRETTBUTLER_PATH_PREFIX}"
mv *.html ".${BRETTBUTLER_PATH_PREFIX}"
mv assets ".${BRETTBUTLER_PATH_PREFIX}"
mv img ".${BRETTBUTLER_PATH_PREFIX}"

echo "Serve Path: ${BRETTBUTLER_PATH_PREFIX:-/}"

if [[ "${BRETTBUTLER_PATH_PREFIX}" == "" ]]; then
  mv /etc/nginx/conf.d/nginx-subdomain.template /etc/nginx/conf.d/default.conf
else
  # Configure nginx.conf for path prefix
  envsubst '$BRETTBUTLER_PATH_PREFIX' < /etc/nginx/conf.d/nginx-subpath.template > /etc/nginx/conf.d/default.conf
fi

#!/usr/bin/env sh
set -e

ls /usr/share/nginx/html/assets/env-*js
ENV_FILE=$(ls /usr/share/nginx/html/assets/env-*js)

sed -i \
  -e "s|brettbutlerPathPrefix:\"\"|brettbutlerPathPrefix:\"$BRETTBUTLER_PATH_PREFIX\"|" \
  $ENV_FILE

#!/usr/bin/env sh
set -e

ls /usr/share/nginx/html/assets/env-*js
ENV_FILE=$(ls /usr/share/nginx/html/assets/env-*js)

sed -i \
  -e "s|plausibleDomain:\"\"|plausibleDomain:\"$PLAUSIBLE_DOMAIN\"|" \
  -e "s|plausibleCustomApiHost:\"\"|plausibleCustomApiHost:\"$PLAUSIBLE_API_HOST\"|" \
  -e "s|brettbutlerPathPrefix:\"\"|brettbutlerPathPrefix:\"$BRETTBUTLER_PATH_PREFIX\"|" \
  $ENV_FILE

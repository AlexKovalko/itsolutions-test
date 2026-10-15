#!/bin/bash
set -euo pipefail

if [ -z "${DB_URL:-}" ]; then
  echo "DB_URL is required" >&2
  exit 1
fi

# postgresql://user:password@host:port/database
rest="${DB_URL#*://}"
userinfo="${rest%%@*}"
export POSTGRES_USER="${userinfo%%:*}"
export POSTGRES_PASSWORD="${userinfo#*:}"
hostpart="${rest#*@}"
export POSTGRES_DB="${hostpart##*/}"

exec docker-entrypoint.sh postgres

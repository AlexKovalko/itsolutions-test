#!/bin/sh
set -eu

export PATH="/app/node_modules/.bin:${PATH}"

echo "Waiting for database..."
attempts=0
until prisma migrate deploy; do
  attempts=$((attempts + 1))
  if [ "$attempts" -ge 30 ]; then
    echo "Database is not ready after ${attempts} attempts" >&2
    exit 1
  fi
  echo "Migrate failed (attempt ${attempts}/30), retrying in 2s..."
  sleep 2
done

echo "Seeding database..."
prisma db seed

echo "Starting application..."
exec "$@"

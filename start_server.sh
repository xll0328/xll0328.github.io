#!/usr/bin/env bash
set -euo pipefail

# Local Jekyll preview.

cd "$(dirname "$0")"

HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-4000}"
export BUNDLE_IGNORE_CONFIG="${BUNDLE_IGNORE_CONFIG:-1}"
export BUNDLE_PATH="${BUNDLE_PATH:-/tmp/xll0328_bundle}"

echo "Starting Jekyll at http://${HOST}:${PORT}"
echo "Press Ctrl+C to stop."

bundle exec jekyll serve --livereload --host "$HOST" --port "$PORT" --trace

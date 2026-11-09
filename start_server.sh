#!/usr/bin/env bash
set -euo pipefail

# Local Jekyll preview.

cd "$(dirname "$0")"

HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-4000}"
export BUNDLE_IGNORE_CONFIG="${BUNDLE_IGNORE_CONFIG:-1}"
export BUNDLE_PATH="${BUNDLE_PATH:-/tmp/xll0328_bundle}"

# Jekyll 3.9 and the relative-links plugin can fall back to US-ASCII when a
# shell inherits the plain C locale. Keep Chinese pages and filenames UTF-8.
if [[ "${LC_ALL:-}" == "C" || "${LC_ALL:-}" == "POSIX" ]]; then
  export LC_ALL="en_US.UTF-8"
fi
if [[ "${LANG:-}" == "C" || "${LANG:-}" == "POSIX" || -z "${LANG:-}" ]]; then
  export LANG="en_US.UTF-8"
fi

echo "Starting Jekyll at http://${HOST}:${PORT}"
echo "Press Ctrl+C to stop."

bundle exec jekyll serve --livereload --host "$HOST" --port "$PORT" --trace

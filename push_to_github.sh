#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

if [ "$#" -eq 0 ]; then
  echo "Usage: $0 \"commit message\""
  exit 1
fi

export BUNDLE_IGNORE_CONFIG="${BUNDLE_IGNORE_CONFIG:-1}"
export BUNDLE_PATH="${BUNDLE_PATH:-/tmp/xll0328_bundle}"
bundle exec jekyll build --trace
git status --short
git add -A
git commit -m "$1"
git push origin main

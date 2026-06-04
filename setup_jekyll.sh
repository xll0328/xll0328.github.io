#!/usr/bin/env bash
set -euo pipefail

# Jekyll 本地环境设置脚本
# 这个脚本会安装 Jekyll 和所有依赖，用于本地预览

echo "🚀 开始设置 Jekyll 本地环境..."
echo ""

# 检查 Ruby
if ! command -v ruby &> /dev/null; then
    echo "❌ 错误: 未找到 Ruby，请先安装 Ruby"
    exit 1
fi

echo "✅ Ruby 版本: $(ruby --version)"
echo ""

# 检查 Bundler
if ! command -v bundle &> /dev/null; then
    echo "Bundler not found. Installing bundler..."
    gem install bundler
else
    echo "✅ Bundler 已安装: $(bundle --version)"
fi

echo ""
echo "📦 正在安装项目依赖（这可能需要几分钟）..."
echo ""

export BUNDLE_IGNORE_CONFIG="${BUNDLE_IGNORE_CONFIG:-1}"
export BUNDLE_PATH="${BUNDLE_PATH:-/tmp/xll0328_bundle}"
bundle install

echo ""
echo "Dependencies installed."
echo "Run: bash start_server.sh"
echo "Open: http://127.0.0.1:4000"

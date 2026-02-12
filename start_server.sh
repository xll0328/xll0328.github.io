#!/bin/bash

# 启动 Jekyll 本地服务器脚本
# 使用代理加速（如果需要）

cd "$(dirname "$0")"

# 设置代理（如果需要，请取消注释并修改为你的代理地址）
export https_proxy=http://127.0.0.1:7890
export http_proxy=http://127.0.0.1:7890
export all_proxy=socks5://127.0.0.1:7890

echo "🚀 启动 Jekyll 本地服务器..."
echo ""
echo "📝 提示："
echo "   - 服务器地址: http://127.0.0.1:4000"
echo "   - 按 Ctrl+C 停止服务器"
echo "   - 修改文件后会自动刷新（livereload）"
echo ""

bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000

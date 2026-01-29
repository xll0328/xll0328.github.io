#!/bin/bash

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
    echo "⚠️  未找到 Bundler，正在安装..."
    sudo gem install bundler
else
    echo "✅ Bundler 已安装: $(bundle --version)"
fi

echo ""
echo "📦 正在安装项目依赖（这可能需要几分钟）..."
echo ""

# 安装依赖到本地目录，避免权限问题
bundle config set --local path 'vendor/bundle'
bundle install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 依赖安装完成！"
    echo ""
    echo "🎉 设置完成！现在你可以运行以下命令启动本地服务器："
    echo ""
    echo "   cd $(pwd)"
    echo "   bundle exec jekyll serve"
    echo ""
    echo "   或者直接运行:"
    echo "   bash run_server.sh"
    echo ""
    echo "   然后在浏览器中打开: http://127.0.0.1:4000"
else
    echo ""
    echo "❌ 安装失败，请检查错误信息"
    exit 1
fi

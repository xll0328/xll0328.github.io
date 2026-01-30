#!/bin/bash
cd "$(dirname "$0")"
echo "=== 当前目录 ==="
pwd
echo ""
echo "=== Git 状态 ==="
git status
echo ""
echo "=== 添加所有文件 ==="
git add -A
echo ""
echo "=== 暂存区状态 ==="
git status --short
echo ""
echo "=== 提交更改 ==="
git commit -m "完整更新：背景音乐《小星星》、音效系统、交互功能等所有更改"
echo ""
echo "=== 推送到GitHub ==="
git push origin main
echo ""
echo "=== 完成 ==="

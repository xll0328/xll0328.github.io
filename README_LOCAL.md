# 本地 Jekyll 环境使用指南

## ✅ 环境已设置完成

Jekyll 本地环境已经成功设置，你现在可以在本地预览你的个人网站了！

## 🚀 启动本地服务器

### 方法 1: 使用启动脚本（推荐）

```bash
cd /Users/sony/Desktop/xll0328.github.io
bash start_server.sh
```

### 方法 2: 使用原始脚本

```bash
cd /Users/sony/Desktop/xll0328.github.io
bash run_server.sh
```

### 方法 3: 手动启动

```bash
cd /Users/sony/Desktop/xll0328.github.io

# 如果使用 VPN，先设置代理（可选）
export https_proxy=http://127.0.0.1:33210
export http_proxy=http://127.0.0.1:33210
export all_proxy=socks5://127.0.0.1:33211

# 启动服务器
bundle exec jekyll serve --livereload
```

## 📝 访问网站

启动服务器后，在浏览器中打开：

**http://127.0.0.1:4000**

## ✨ 功能特性

- **自动刷新**: 使用 `--livereload` 参数，修改文件后浏览器会自动刷新
- **实时预览**: 修改 `_pages/about.md` 或 `_config.yml` 后，网站会自动更新

## 🛑 停止服务器

在终端中按 `Ctrl + C` 停止服务器

## 📁 重要文件说明

- `_config.yml` - 网站配置文件（标题、描述、个人信息等）
- `_pages/about.md` - 主页内容（你的介绍、论文、新闻等）
- `assets/css/main.scss` - 主样式文件
- `images/` - 图片资源目录

## 🔧 常见问题

### 1. 如果遇到编码错误
已经创建了 `assets/css/style.scss` 文件来解决这个问题。

### 2. 如果依赖安装失败
运行以下命令重新安装：
```bash
bundle install
```

### 3. 如果服务器启动失败
检查端口 4000 是否被占用：
```bash
lsof -ti:4000 | xargs kill -9
```

## 📤 推送到 GitHub

修改完成后，推送到 GitHub：

```bash
git add .
git commit -m "更新网站内容"
git push
```

GitHub Pages 会自动部署你的更改（通常需要几分钟）。

## ⚠️ 注意事项

1. **不会影响原项目**: 本地预览不会影响 GitHub 上的项目，只有当你 `git push` 时才会更新
2. **vendor/bundle 目录**: 这个目录包含安装的依赖，不需要提交到 Git（已在 .gitignore 中）
3. **_site 目录**: 这是 Jekyll 生成的静态文件，也不需要提交到 Git

## 🎉 开始使用

现在你可以：
1. 修改 `_pages/about.md` 更新你的个人信息
2. 修改 `_config.yml` 更新网站配置
3. 在浏览器中实时查看更改效果

祝你使用愉快！

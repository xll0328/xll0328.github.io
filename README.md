# 个人学术主页

<div align="center">

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-在线访问-blue)](https://xll0328.github.io)
[![Jekyll](https://img.shields.io/badge/Jekyll-静态站点生成器-red)](https://jekyllrb.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

<p align="center">一个现代化、响应式的个人学术主页</p>

<p align="center">
    <br>
    <strong>在线访问：</strong> <a href="https://xll0328.github.io">https://xll0328.github.io</a>
    <br>
</p>

## 项目简介

这是一个基于 Jekyll 构建的个人学术主页，展示作者的公开研究成果、教育经历和学术服务信息。工作相关内容按保密要求使用公开版占位符。网站采用现代化的设计风格，包含丰富的动画效果和交互体验。

## 主要特性

- 🖥️ **研究桌面设计**：以轻量桌面系统为灵感，使用深色工作区、应用图标和可拖拽内容窗口组织主页
- ✨ **窗口式交互**：论文、动态、经历、荣誉和合作伙伴都可以作为独立窗口打开、置顶、最小化或关闭
- 📱 **响应式布局**：自动适配不同屏幕尺寸和设备
- 🌐 **中英文双语**：英文主页与中文主页共享同一套研究桌面交互
- 🔄 **自动更新**：通过 GitHub Actions 自动更新 Google Scholar 引用数据
- 🎯 **SEO 优化**：支持搜索引擎优化，提高网站可见性
- 📊 **数据分析**：支持 Google Analytics 流量统计
- 🎭 **交互体验**：窗口拖拽、焦点状态、快捷键关闭、配色切换和无脚本阅读回退

## 快速开始

### 1. Fork 并重命名仓库

1. Fork 本仓库
2. 将仓库重命名为 `USERNAME.github.io`，其中 `USERNAME` 是你的 GitHub 用户名

### 2. 配置 Google Scholar 引用统计

1. 在 Google Scholar 主页找到你的用户 ID（URL 中的 `user=SCHOLAR_ID`）
2. 在仓库的 `Settings -> Secrets -> Actions` 中添加新的 secret：
   - Name: `GOOGLE_SCHOLAR_ID`
   - Value: 你的 Google Scholar ID
3. 在仓库的 `Actions` 页面启用 workflows
4. GitHub Action 会在 `google-scholar-stats` 分支生成 `gs_data.json` 文件
5. 每天 08:00 UTC 自动更新，或当主分支更新时触发

### 3. 配置网站信息

编辑 `_config.yml` 文件，修改以下配置：

- `title`: 网站标题
- `description`: 网站描述
- `repository`: 仓库名称（格式：USER_NAME/REPO_NAME）
- `author`: 作者信息（姓名、头像、简介、位置、工作单位等）
- `google_analytics_id`: Google Analytics ID（可选）
- SEO 相关配置（可选）

### 4. 添加个人内容

编辑 `_pages/about.md` 文件，添加你的个人信息：

- 关于我
- 新闻动态
- 发表论文
- 荣誉奖项
- 教育经历
- 公开版工作信息占位
- 朋友链接

你可以使用 HTML + Markdown 语法，支持显示论文引用数：

```html
<span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span>
```

> **如何获取 Google Scholar 论文 ID？**  
> 访问你的 Google Scholar 主页，点击论文名称，在 URL 中找到 `citation_for_view=XXXX`，其中 `XXXX` 就是论文 ID。

### 5. 生成 Favicon

使用 [favicon-generator](https://redketchup.io/favicon-generator) 生成网站图标，将所有生成的文件下载到 `images/` 目录。

### 6. 发布网站

提交更改并推送到 GitHub，网站会自动发布到 `https://USERNAME.github.io`。

## 本地调试

### 环境要求

- Ruby（推荐 2.6+）
- RubyGems
- GCC 和 Make
- Bundler

### 安装步骤

1. **克隆仓库到本地**
   ```bash
   git clone https://github.com/xll0328/xll0328.github.io.git
   cd xll0328.github.io
   ```

2. **安装 Jekyll 依赖**
   ```bash
   bash setup_jekyll.sh
   ```
   或者手动安装：
   ```bash
   bundle install
   ```

3. **启动本地服务器**
   ```bash
   bash start_server.sh
   ```
   或者：
   ```bash
   bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000
   ```

4. **访问网站**
   在浏览器中打开 http://127.0.0.1:4000

5. **实时预览**
   修改源代码后，livereload 服务器会自动刷新页面

### 代理设置（如需要）

如果网络访问受限，可以在 `start_server.sh` 中配置代理环境变量：

```bash
export https_proxy=your_proxy_address
export http_proxy=your_proxy_address
export all_proxy=your_proxy_address
```

请根据你的实际代理配置修改相应的地址和端口。

## 项目特色

### 研究桌面设计

- 深色渐变工作区配合网格、轨道和状态栏，形成类似轻量桌面系统的首屏
- 左侧应用启动器对应关于我、研究方向、动态、论文、经历、简历和联系等内容
- 窗口支持拖拽、置顶、最大化、最小化和关闭；移动端自动切换为可滚动的内容卡片
- 交互脚本失败或禁用时，主页仍保留可读的普通 HTML 内容

### 优化的内容展示

- **新闻动态**：可滚动容器，卡片式布局
- **发表论文**：支持 CCF、Core、IF 等学术指标展示
- **荣誉奖项**：网格卡片布局，图标和徽章
- **教育经历**：时间轴布局，清晰的视觉层次
- **公开版经历**：时间轴展示公开学术经历，敏感工作内容使用占位符

## 文件结构

```
.
├── _config.yml          # Jekyll 配置文件
├── _data/               # 数据文件（导航等）
├── _includes/           # 包含文件（头部、脚本等）
├── _layouts/            # 布局模板
├── _pages/              # 页面内容
│   └── about.md        # 主页内容
├── assets/              # 静态资源
│   ├── css/             # 样式文件
│   └── js/              # JavaScript 文件（含 research-desktop.js）
├── _sass/_research-desktop.scss # 研究桌面样式
├── images/              # 头像、论文图和协作者图片
├── setup_jekyll.sh      # Jekyll 环境安装脚本
└── start_server.sh     # 服务器启动脚本
```

## 技术栈

- **Jekyll**: 静态站点生成器
- **SCSS**: CSS 预处理器
- **JavaScript**: 动态效果和交互
- **GitHub Pages**: 网站托管
- **GitHub Actions**: 自动化工作流

## 致谢

- 本网站基于 [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) 模板构建
- 使用了 [Font Awesome](https://fontawesome.com/) 图标库
- 受到 [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) 和 [academicpages](https://github.com/academicpages/academicpages.github.io) 的启发

## 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 联系方式

- **网站**: https://xll0328.github.io
- **GitHub**: https://github.com/xll0328
- **Google Scholar**: https://scholar.google.com/citations?user=gRXN-rMAAAAJ

---

## 最新优化 (2026年1月)

### 性能优化
- ✅ **图片懒加载**：所有非首屏图片使用 `loading="lazy"`，提升首屏加载速度
- ✅ **JavaScript 优化**：所有脚本使用 `defer` 属性，不阻塞页面渲染
- ✅ **资源预加载**：添加 DNS 预解析和资源预连接，加快外部资源加载
- ✅ **自适应性能**：漂浮图标动画根据设备性能自动调整，移动端更流畅

### 交互体验优化
- ✅ **回到顶部按钮**：滚动超过 300px 时显示，点击平滑回到顶部（位置已优化，避免与其他按钮重合）
- ✅ **图片放大查看**：论文图片支持点击放大查看，按 ESC 或点击背景关闭
- ✅ **复制邮箱功能**：邮箱链接旁显示复制图标，侧边栏使用内联图标避免破坏布局
- ✅ **3D 卡片效果**：论文、荣誉、时间轴等卡片支持 3D 倾斜交互
- ✅ **平滑滚动**：页面内锚点跳转使用平滑滚动，体验更流畅
- ✅ **滚动进度条**：页面顶部显示阅读进度条，使用渐变色
- ✅ **阅读时间估算**：显示预计阅读时间，帮助用户规划
- ✅ **键盘快捷键**：支持 T（回到顶部）、B（回到底部）、ESC（关闭弹窗）、/（打开搜索）等快捷键
- ✅ **移动端优化**：增强触摸反馈，优化移动设备交互体验
- ✅ **全站搜索功能**：支持搜索页面标题和内容，智能匹配和高亮显示，按 `/` 键快速打开

### 视觉优化
- ✅ **窗口滚动条**：论文、动态和长内容窗口使用独立滚动区域
- ✅ **徽章美化**：论文徽章使用渐变背景和悬停动画效果
- ✅ **图片悬停效果**：论文图片悬停时轻微放大并增强阴影
- ✅ **链接下划线动画**：链接悬停时显示渐变色下划线动画

---

<p align="center">⭐ 如果这个项目对你有帮助，欢迎 Star！</p>

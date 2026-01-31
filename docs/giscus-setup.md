# Giscus 留言板配置说明

## 什么是 Giscus？

Giscus 是一个基于 GitHub Discussions 的留言板系统，完全免费，无需后端服务器。访客可以使用 GitHub 账号登录并留言。

## 配置步骤

### 1. 启用 GitHub Discussions

1. 访问你的 GitHub 仓库：`https://github.com/xll0328/xll0328.github.io`
2. 点击仓库顶部的 **Settings**（设置）
3. 在左侧菜单中找到 **Features**（功能）
4. 勾选 **Discussions**（讨论）选项
5. 点击 **Set up discussions**（设置讨论）

### 2. 创建 Discussions 分类

1. 在仓库中点击 **Discussions** 标签
2. 点击 **New discussion**（新建讨论）
3. 选择 **Announcements**（公告）分类（如果没有，可以创建）
4. 创建后，Discussions 功能就启用了

### 3. 获取 Repository ID 和 Category ID

#### 方法一：使用 Giscus 配置工具（推荐）

1. 访问：https://giscus.app/
2. 填写以下信息：
   - **Repository**: `xll0328/xll0328.github.io`
   - **Category**: `Announcements`（或你创建的分类名）
   - **Mapping**: `pathname`
   - **Theme**: `light`（或你喜欢的主题）
   - **Language**: `zh-CN`
3. 点击 **Generate**（生成）
4. 复制生成的配置代码中的 `data-repo-id` 和 `data-category-id`

#### 方法二：使用 GitHub API

1. 获取 Repository ID：
   ```bash
   curl https://api.github.com/repos/xll0328/xll0328.github.io
   ```
   在返回的 JSON 中找到 `"id"` 字段

2. 获取 Category ID：
   ```bash
   curl https://api.github.com/repos/xll0328/xll0328.github.io/discussions/categories
   ```
   在返回的 JSON 中找到对应分类的 `"id"` 字段

### 4. 更新配置

编辑 `_pages/about.md` 文件，找到 Giscus 脚本部分，更新以下两个属性：

```html
<script src="https://giscus.app/client.js"
  data-repo="xll0328/xll0328.github.io"
  data-repo-id="你的仓库ID"           <!-- 替换这里 -->
  data-category="Announcements"
  data-category-id="你的分类ID"        <!-- 替换这里 -->
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="light"
  data-lang="zh-CN"
  data-loading="lazy"
  crossorigin="anonymous"
  async>
</script>
```

### 5. 测试

1. 提交并推送更改到 GitHub
2. 等待 GitHub Pages 构建完成（通常 2-5 分钟）
3. 访问你的网站，滚动到页面底部的留言板部分
4. 如果配置正确，应该能看到 Giscus 留言板界面

## 常见问题

### Q: 留言板不显示？
A: 检查以下几点：
- 是否已启用 Discussions？
- `data-repo-id` 和 `data-category-id` 是否正确？
- 浏览器控制台是否有错误信息？

### Q: 如何更改留言板主题？
A: 修改 `data-theme` 属性，可选值：
- `light` - 浅色主题
- `dark` - 深色主题
- `preferred_color_scheme` - 跟随系统设置

### Q: 如何更改语言？
A: 修改 `data-lang` 属性，可选值：
- `zh-CN` - 简体中文
- `en` - 英文
- 其他语言代码

## 更多信息

- Giscus 官方文档：https://giscus.app/
- GitHub Discussions 文档：https://docs.github.com/en/discussions

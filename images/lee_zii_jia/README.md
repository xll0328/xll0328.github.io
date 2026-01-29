# 李梓嘉图片使用说明

## 📸 如何获取李梓嘉的图片

### 推荐来源（确保版权合规）：
1. **官方社交媒体**
   - 李梓嘉的官方 Instagram: @leezijia_official
   - 官方 Facebook 页面
   - 官方 Twitter/X 账号

2. **体育媒体网站**
   - BWF (Badminton World Federation) 官方网站
   - 各大体育新闻网站（如 ESPN、BBC Sport 等）
   - 羽毛球专业媒体

3. **图片资源网站（注意版权）**
   - Unsplash (搜索 "badminton player")
   - Pexels (搜索 "badminton")
   - Getty Images (需要购买授权)
   - 新华社、中新社等官方媒体（注意授权）

## 📁 图片放置位置

将下载的图片放在此目录下：
```
images/lee_zii_jia/
├── hero.jpg          # 主要展示图片（推荐尺寸：1200x600px）
├── bg-pattern.jpg    # 背景装饰图（可选）
└── gallery/          # 图片画廊（可选）
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

## 🎨 图片优化建议

### 1. 压缩图片大小
使用 ImageMagick 或在线工具压缩图片：
```bash
# 压缩图片（保持质量）
mogrify -resize 1200x1200> -quality 85% images/lee_zii_jia/*.jpg

# 或使用在线工具：
# - TinyPNG (https://tinypng.com/)
# - Squoosh (https://squoosh.app/)
```

### 2. 推荐图片尺寸
- **Hero 图片**: 1200x600px (16:9 比例)
- **画廊图片**: 800x600px (4:3 比例)
- **背景图**: 1920x1080px (全屏背景)

### 3. 文件格式
- 优先使用 JPG（照片类）
- 如需透明背景，使用 PNG
- 考虑使用 WebP 格式（更小体积）

## 🔧 如何使用

### 方法 1: 在 About Me 部分添加主图
编辑 `_pages/about.md`，找到：
```html
<div class="hero-image-container">
    <!-- 取消注释并添加图片路径 -->
    <img src="/images/lee_zii_jia/hero.jpg" alt="Lee Zii Jia" class="hero-image">
</div>
```

### 方法 2: 添加图片画廊
在 `about.md` 的合适位置添加：
```html
<div class="lee-gallery">
    <div class="gallery-item">
        <img src="/images/lee_zii_jia/gallery/photo1.jpg" alt="Lee Zii Jia">
    </div>
    <div class="gallery-item">
        <img src="/images/lee_zii_jia/gallery/photo2.jpg" alt="Lee Zii Jia">
    </div>
</div>
```

### 方法 3: 添加背景装饰
如果要在整个页面添加淡背景，确保图片路径正确：
```scss
/* 在 main.scss 中已配置，只需确保图片存在 */
background-image: url('/images/lee_zii_jia/bg-pattern.jpg');
```

## ⚠️ 版权注意事项

1. **确保授权**: 使用任何图片前，确保你有使用权
2. **标注来源**: 如果使用他人图片，建议在网站底部标注来源
3. **个人使用**: 如果是个人网站，使用公开媒体图片通常可以，但商业用途需要授权
4. **最佳实践**: 优先使用自己拍摄或明确授权的图片

## 🎯 推荐图片类型

- 李梓嘉比赛中的精彩瞬间
- 训练场景
- 获奖时刻
- 与球迷互动
- 羽毛球相关元素（球拍、场地等）

## 📝 示例代码

完整的使用示例已添加到 `_pages/about.md` 中，取消注释相应部分即可使用。

---

**提示**: 如果暂时没有图片，可以先保持占位区域为空，样式已经配置好，添加图片后会自动应用美化效果。

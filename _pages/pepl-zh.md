---
permalink: /zh/pepl/
title: "PEPL: Precision-Enhanced Pseudo-Labeling"
excerpt: "ICASSP 2025 — 中文项目页"
author_profile: false
lang: zh
---

<div class="project-hero">
  <div class="project-hero-copy">
    <p class="project-kicker">ICASSP 2025 · CCF B · Core B</p>
    <h1>PEPL: Precision-Enhanced Pseudo-Labeling for Fine-Grained Image Classification</h1>
    <p class="project-subtitle">中文项目页</p>
    <div class="project-hero-actions">
      <a class="project-btn primary" href="https://arxiv.org/pdf/2409.03192">论文</a>
    </div>
  </div>
  <img class="project-hero-figure" src="{{ '/images/WechatIMG168.jpg' | relative_url }}" alt="PEPL overview">
</div>

<div class="project-tldr">
<p class="project-tldr-label">TL;DR</p>
<p>PEPL 使用类激活图生成并细化伪标签，从而提升半监督细粒度图像分类中的标签质量，尤其适合难区分的视觉类别。</p>
</div>

**作者：** Bowen Tian†, **Songning Lai†**, Lujundong Li, Zhihao Shuai, Runwei Guan, Tian Wu, Yutao Yue

---

## 概览

<img src="{{ '/images/WechatIMG168.jpg' | relative_url }}" alt="PEPL method overview" style="max-width: 90%; height: auto;" />

细粒度图像分类需要对微妙视觉细节进行可靠监督。PEPL 利用 Class Activation Maps 生成并细化伪标签，再通过语义混合增强半监督学习。

---

## 核心思想

- **精度增强伪标签：** 使用判别性 CAM 区域细化标签。
- **细粒度聚焦：** 保留标准伪标签方法可能遗漏的细微类别线索。
- **半监督设置：** 在仅有部分数据带标注时提升模型表现。

---

## 链接

[**论文**](https://arxiv.org/pdf/2409.03192)

[← 返回首页]({{ '/zh/' | relative_url }})

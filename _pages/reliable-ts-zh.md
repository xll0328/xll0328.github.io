---
permalink: /zh/reliable-ts/
title: "Reliable Time Series Forecasting under Future Uncertainty"
excerpt: "ICASSP 2026 — 中文项目页"
author_profile: false
lang: zh
---

<div class="project-hero">
  <div class="project-hero-copy">
    <p class="project-kicker">ICASSP 2026 · CCF B · Core A</p>
    <h1>Towards Reliable Time Series Forecasting under Future Uncertainty</h1>
    <p class="project-subtitle">中文项目页</p>
    <div class="project-hero-actions">
      <a class="project-btn primary" href="https://arxiv.org/pdf/2503.19656">论文</a>
    </div>
  </div>
  <img class="project-hero-figure" src="{{ '/images/ICASSP26.png' | relative_url }}" alt="Reliable time series forecasting overview">
</div>

<div class="project-tldr">
<p class="project-tldr-label">TL;DR</p>
<p>我们通过歧义拒绝和新颖性拒绝提升未来不确定性下的时间序列预测可靠性，使模型能够对低置信或分布偏移预测选择 abstain。</p>
</div>

**作者：** Ninghui Feng†, **Songning Lai†**, Xin Zhou, Jiayu Yang, Kunlong Feng, Zhenxiao Yin, Fobao Zhou, Zhangyi Hu, Yutao Yue, Yuxuan Liang, Boyu Wang, Hang Zhao

---

## 概览

<img src="{{ '/images/ICASSP26.png' | relative_url }}" alt="Reliable time series forecasting method" style="max-width: 92%; height: auto;" />

可靠预测系统应当知道自己的预测何时可能失败。该工作研究两类实用的不确定性来源：未来结果本身的歧义性，以及新的分布变化。所提出框架结合基于预测误差方差的歧义拒绝与基于表示距离的新颖性拒绝，在未来真实值不可获得时降低预测风险。

---

## 核心思想

- **歧义拒绝：** 识别预测不确定性高的样本，并拒绝输出不可靠预测。
- **新颖性拒绝：** 通过表示空间距离检测未来条件是否分布外。
- **部署导向：** 在不依赖未来标签的情况下减少动态环境中的预测错误。

---

## 链接

[**论文**](https://arxiv.org/pdf/2503.19656)

[← 返回首页]({{ '/zh/' | relative_url }})

---
permalink: /pepl/
title: "PEPL: Precision-Enhanced Pseudo-Labeling"
excerpt: "ICASSP 2025 — Official project page"
author_profile: false
---

<div class="project-hero">
  <div class="project-hero-copy">
    <p class="project-kicker">ICASSP 2025 · CCF B · Core B</p>
    <h1>PEPL: Precision-Enhanced Pseudo-Labeling for Fine-Grained Image Classification</h1>
    <p class="project-subtitle">Official project page</p>
    <div class="project-hero-actions">
      <a class="project-btn primary" href="https://arxiv.org/pdf/2409.03192">Paper</a>
    </div>
  </div>
  <img class="project-hero-figure" src="{{ '/images/WechatIMG168.jpg' | relative_url }}" alt="PEPL overview">
</div>

<div class="project-tldr">
<p class="project-tldr-label">TL;DR</p>
<p>PEPL improves semi-supervised fine-grained image classification by generating and refining pseudo-labels with class activation maps, improving label quality for difficult visual categories.</p>
</div>

**Authors:** Bowen Tian†, **Songning Lai†**, Lujundong Li, Zhihao Shuai, Runwei Guan, Tian Wu, Yutao Yue

---

## Overview

<img src="{{ '/images/WechatIMG168.jpg' | relative_url }}" alt="PEPL method overview" style="max-width: 90%; height: auto;" />

Fine-grained image classification needs reliable supervision over subtle visual details. PEPL improves pseudo-label quality by using Class Activation Maps to generate and refine labels, then applies semantic mixing to strengthen semi-supervised learning.

---

## Key Ideas

- **Precision-enhanced pseudo-labels:** refine labels with discriminative CAM regions.
- **Fine-grained focus:** preserve subtle category cues that standard pseudo-labeling can miss.
- **Semi-supervised setting:** improve performance when only part of the data is labeled.

---

## Links

[**Paper**](https://arxiv.org/pdf/2409.03192)

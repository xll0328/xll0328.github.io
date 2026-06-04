---
permalink: /reliable-ts/
title: "Reliable Time Series Forecasting under Future Uncertainty"
excerpt: "ICASSP 2026 — Official project page"
author_profile: false
---

<div class="project-hero">
  <div class="project-hero-copy">
    <p class="project-kicker">ICASSP 2026 · CCF B · Core A</p>
    <h1>Towards Reliable Time Series Forecasting under Future Uncertainty</h1>
    <p class="project-subtitle">Official project page</p>
    <div class="project-hero-actions">
      <a class="project-btn primary" href="https://arxiv.org/pdf/2503.19656">Paper</a>
    </div>
  </div>
  <img class="project-hero-figure" src="{{ '/images/ICASSP26.png' | relative_url }}" alt="Reliable time series forecasting overview">
</div>

<div class="project-tldr">
<p class="project-tldr-label">TL;DR</p>
<p>We improve time-series forecasting reliability under future uncertainty with ambiguity rejection and novelty rejection, allowing models to abstain from low-confidence or distribution-shifted predictions.</p>
</div>

**Authors:** Ninghui Feng†, **Songning Lai†**, Xin Zhou, Jiayu Yang, Kunlong Feng, Zhenxiao Yin, Fobao Zhou, Zhangyi Hu, Yutao Yue, Yuxuan Liang, Boyu Wang, Hang Zhao

---

## Overview

<img src="{{ '/images/ICASSP26.png' | relative_url }}" alt="Reliable time series forecasting method" style="max-width: 92%; height: auto;" />

Reliable forecasting systems should know when their predictions are likely to fail. This work studies two practical uncertainty sources: ambiguous future outcomes and novel distribution shifts. The proposed framework combines ambiguity rejection based on prediction error variance with novelty rejection using representation distance, reducing risk when ground-truth future values are unavailable.

---

## Key Ideas

- **Ambiguity rejection:** identify forecasts with high predictive uncertainty and abstain from unreliable outputs.
- **Novelty rejection:** detect out-of-distribution future conditions through representation-based distance.
- **Deployment focus:** reduce forecasting errors in dynamic environments without requiring future labels.

---

## Links

[**Paper**](https://arxiv.org/pdf/2503.19656)

---
permalink: /reliable-ts/
title: "Reliable Time Series Forecasting under Future Uncertainty"
excerpt: "ICASSP 2026 project page for reliable forecasting under uncertainty"
author_profile: false
project_page: true
project:
  kicker: "ICASSP 2026 - CCF B"
  heading: "Towards Reliable Time Series Forecasting under Future Uncertainty"
  subtitle: "Ambiguity and novelty rejection for forecasting"
  paper_url: "https://arxiv.org/pdf/2503.19656"
  image: "/images/optimized/reliable-ts.jpg"
  image_alt: "Reliable time-series forecasting overview"
  tldr: "This work improves forecasting reliability by rejecting ambiguous or distribution-shifted predictions before deployment risk grows."
  authors: "Ninghui Feng†, Songning Lai†, Xin Zhou, Jiayu Yang, Kunlong Feng, Zhenxiao Yin, Fobao Zhou, Zhangyi Hu, Yutao Yue, Yuxuan Liang, Boyu Wang, Hang Zhao"
  venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2026"
  abstract: "Forecasting systems often fail because future uncertainty is not visible at training time. This work combines ambiguity rejection and novelty rejection to identify low-confidence or out-of-distribution future states, allowing the model to abstain from unreliable predictions when future labels are unavailable."
  key_points:
    - "Uses ambiguity rejection to abstain under high predictive uncertainty."
    - "Uses novelty rejection to detect distribution-shifted future conditions."
    - "Targets deployment settings where future ground truth is unavailable."
  figure_caption: "Overview of ambiguity and novelty rejection for reliable time-series forecasting."
---

{% include project-poster.html %}

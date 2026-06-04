---
permalink: /pepl/
title: "PEPL: Precision-Enhanced Pseudo-Labeling"
excerpt: "ICASSP 2025 project page for precision-enhanced pseudo-labeling"
author_profile: false
project_page: true
project:
  kicker: "ICASSP 2025 - CCF B"
  heading: "PEPL: Precision-Enhanced Pseudo-Labeling for Fine-Grained Image Classification"
  subtitle: "Better pseudo-labels for fine-grained semi-supervised learning"
  paper_url: "https://arxiv.org/pdf/2409.03192"
  image: "/images/optimized/pepl.jpg"
  image_alt: "PEPL method overview"
  tldr: "PEPL refines pseudo-labels with class activation maps to improve semi-supervised fine-grained image classification."
  authors: "Bowen Tian†, Songning Lai†, Lujundong Li, Zhihao Shuai, Runwei Guan, Tian Wu, Yutao Yue"
  venue: "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025"
  abstract: "Fine-grained recognition depends on subtle visual cues, making noisy pseudo-labels especially harmful. PEPL improves semi-supervised learning by generating and refining pseudo-labels with class activation maps, then strengthening label quality through semantic mixing."
  key_points:
    - "Uses CAMs to focus pseudo-label generation on discriminative regions."
    - "Improves pseudo-label precision for fine-grained categories."
    - "Targets semi-supervised settings with limited labeled data."
  figure_caption: "PEPL overview for precision-enhanced pseudo-label generation and refinement."
---

{% include project-poster.html %}

---
permalink: /svct/
title: "SVCT: Stable Vision Concept Transformers for Medical Diagnosis"
excerpt: "ECML-PKDD 2025 project page for stable medical concept transformers"
author_profile: false
project_page: true
project:
  kicker: "ECML-PKDD 2025 - CCF B"
  heading: "Stable Vision Concept Transformers for Medical Diagnosis"
  subtitle: "Stable concept explanations for medical vision transformers"
  paper_url: "https://arxiv.org/pdf/2506.05286"
  code_url: "https://github.com/xll0328/-ECML-2025-SVCT"
  image: "/images/optimized/svct.jpg"
  image_alt: "SVCT concept stability example"
  tldr: "SVCT combines concept-enhanced ViT features with denoised diffusion smoothing to stabilize medical explanations."
  authors: "Lijie Hu†, Songning Lai†, Yuan Hua, Shu Yang, Jingfeng Zhang, Di Wang"
  venue: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML-PKDD), 2025"
  abstract: "Concept bottleneck models can make medical predictions more interpretable, but their explanations may shift under small perturbations. SVCT fuses concept and visual features in a Vision Transformer and applies denoised diffusion smoothing to improve explanation stability while preserving diagnostic performance."
  key_points:
    - "Builds Vision Concept Transformer with fused concept and image features."
    - "Uses denoised diffusion smoothing for stable top-k concept explanations."
    - "Evaluates robustness on HAM10000, Covid19-CT, BloodMNIST, and OCT2017."
  figure_caption: "Concept output before and after perturbation, motivating stable concept transformers."
---

{% include project-poster.html %}

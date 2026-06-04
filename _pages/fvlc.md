---
permalink: /fvlc/
title: "FVLC: Faithful Vision-Language Interpretation via Concept Bottleneck Models"
excerpt: "ICLR 2024 project page for faithful label-free CBMs"
author_profile: false
project_page: true
project:
  kicker: "ICLR 2024 - CCF A"
  heading: "Faithful Vision-Language Interpretation via Concept Bottleneck Models"
  subtitle: "Stable label-free concept bottleneck explanations"
  paper_url: "https://openreview.net/pdf?id=rp0EdI8X4e"
  code_url: "https://github.com/xll0328/FVLC"
  image: "/images/optimized/fvlc.jpg"
  image_alt: "FVLC perturbation example"
  tldr: "FVLC improves the stability and faithfulness of label-free Concept Bottleneck Models under input and concept perturbations."
  authors: "Songning Lai, Lijie Hu, Junxiao Wang, Laure Berti, Di Wang"
  venue: "International Conference on Learning Representations (ICLR), 2024"
  abstract: "Label-free Concept Bottleneck Models reduce annotation cost but can produce unstable explanations when inputs or concept sets are slightly perturbed. FVLC defines faithfulness requirements for vision-language concepts and optimizes concept representations so explanations and predictions remain consistent."
  key_points:
    - "Formalizes faithfulness for label-free vision-language concept models."
    - "Optimizes concept stability under input and word perturbations."
    - "Maintains interpretability while limiting accuracy degradation."
  figure_caption: "Example showing how concept weights can shift under perturbation and why faithful optimization is needed."
---

{% include project-poster.html %}

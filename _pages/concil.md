---
permalink: /concil/
title: "CONCIL: Continual Learning for Multimodal Concept Bottleneck Models"
excerpt: "ACM MM 2025 project page for continual learning in multimodal CBMs"
author_profile: false
project_page: true
project:
  kicker: "ACM MM 2025 - BNI Track - Oral"
  heading: "CONCIL: Continual Learning for Multimodal Concept Bottleneck Models"
  subtitle: "Learning new concepts while preserving old knowledge"
  paper_url: "https://arxiv.org/pdf/2411.17471"
  code_url: "https://github.com/xll0328/CONCIL---ACM-MM-2025-BNI-Track-"
  image: "/images/optimized/concil.jpg"
  image_alt: "CONCIL task definition"
  tldr: "CONCIL enables concept and class incremental learning for multimodal Concept Bottleneck Models through efficient analytic updates."
  authors: "Songning Lai, Mingqian Liao, Zhangyi Hu, Jiayu Yang, Wenshuo Chen, Hongru Xiao, Jianheng Tang, Haicheng Liao, Yutao Yue"
  venue: "ACM Multimedia (ACM MM), 2025 BNI Track"
  abstract: "Concept Bottleneck Models are usually trained for static concept and class sets, which limits their use in evolving environments. CONCIL defines concept-incremental and class-incremental learning for CBMs, then updates concept and decision layers through recursive analytic operations to reduce catastrophic forgetting."
  key_points:
    - "Defines the CICIL setting for continual multimodal CBMs."
    - "Updates concept and classifier layers without full retraining."
    - "Targets efficient learning of new concepts and classes while retaining old knowledge."
  figure_caption: "CICIL: concept and class sets expand across tasks while old knowledge must remain usable."
---

{% include project-poster.html %}

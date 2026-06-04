---
permalink: /ace/
title: "ACE: Attribution-Controlled Knowledge Editing for Multi-hop Factual Recall"
excerpt: "ICLR 2026 project page for attribution-controlled knowledge editing"
author_profile: false
project_page: true
project:
  kicker: "ICLR 2026 - CCF A"
  heading: "ACE: Attribution-Controlled Knowledge Editing for Multi-hop Factual Recall"
  subtitle: "Neuron-attribution control for multi-hop knowledge editing"
  paper_url: "https://arxiv.org/pdf/2510.07896"
  code_url: "https://github.com/xll0328/ICLR26-ACE"
  image: "/images/optimized/ace.jpg"
  image_alt: "ACE framework"
  tldr: "ACE locates query-value neuron pathways and edits the components that matter for multi-hop factual recall."
  authors: "Jiayu Yang†, Yuxuan Fan†, Songning Lai†, Shengen Wu, Jiaqi Tang, Chun Kang, Zhijiang Guo, Yutao Yue"
  venue: "International Conference on Learning Representations (ICLR), 2026"
  abstract: "Existing locate-then-edit methods can update single-hop facts but often fail when a multi-hop answer depends on intermediate implicit subjects. ACE uses neuron-level attribution to identify query and value pathways in transformer layers, then edits both so updated knowledge can propagate through the reasoning chain."
  key_points:
    - "Analyzes how implicit subjects activate value neurons during multi-hop recall."
    - "Uses attribution to identify critical query and value layers."
    - "Improves editing effectiveness on GPT-J and Qwen3-8B in multi-hop settings."
  figure_caption: "ACE edits query-value neuron pathways rather than only single-hop value locations."
---

{% include project-poster.html %}

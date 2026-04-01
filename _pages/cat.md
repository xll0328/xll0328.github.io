---
permalink: /cat/
title: "CAT: Concept-Level Backdoor Attacks on Concept Bottleneck Models"
excerpt: "TMLR 2026 — Official project page"
author_profile: true
---

<div class="project-hero">
<p class="project-kicker">TMLR 2026 · Accepted</p>
<h1>Multimodal Deception in Explainable AI: Concept-Level Backdoor Attacks on Concept Bottleneck Models</h1>
<p class="project-subtitle">Official project page</p>
<div class="project-hero-actions">
<a class="project-btn primary" href="https://openreview.net/forum?id=bntZBG9fBY">Paper</a>
<a class="project-btn secondary" href="/">Code (Coming Soon)</a>
</div>
</div>

<div class="project-tldr">
<p class="project-tldr-label">TL;DR</p>
<p>We reveal and optimize concept-level backdoor attacks on CBMs (CAT/CAT+), achieving high attack success while preserving clean performance, and validate practical end-to-end feasibility via Image2Trigger_c.</p>
</div>

**Title:** Multimodal Deception in Explainable AI: Concept-Level Backdoor Attacks on Concept Bottleneck Models  
**Authors:** Songning Lai, Jiayu Yang, Yu Huang, Lijie Hu, Tianlang Xue, Zhangyi Hu, Jiaxu Li, Haicheng Liao, Zongyang Liu, Yutao Yue

---

## Overview

<img src="{{ '/images/cat/introduce.png' | relative_url }}" alt="CAT overview" style="max-width: 95%; height: auto;" />

Concept Bottleneck Models (CBMs) are designed for interpretability through human-understandable concepts, but we show they are still vulnerable to stealthy backdoor manipulation. We introduce **CAT** and **CAT+**, concept-level backdoor attack methods that target concept representations while preserving clean-data performance.

---

## Key idea

- **CAT** injects trigger concepts during training with a filtering strategy, rather than random concept corruption.
- **CAT+** further optimizes trigger-concept association using a concept-correlation function.
- We conduct a **two-stage evaluation**:
  1. Controlled concept-layer vulnerability analysis.
  2. End-to-end attack validation via **Image2Trigger_c**.

---

## Main results

### Attack effectiveness

<img src="{{ '/images/cat/ASR_by_Trigger_Size_and_Injection_Rate.png' | relative_url }}" alt="ASR results" style="max-width: 85%; height: auto;" />

CAT/CAT+ achieve significantly higher attack success rate than random-selection baselines while retaining strong clean performance.

### End-to-end feasibility

<img src="{{ '/images/cat/i2t_demo.png' | relative_url }}" alt="Image2Trigger_c demo" style="max-width: 90%; height: auto;" />

With Image2Trigger_c, concept-level trigger manipulation can be translated into practical image-space attacks.

### Defense analysis

<img src="{{ '/images/cat/nc_defense_demo.png' | relative_url }}" alt="Neural Cleanse defense analysis" style="max-width: 90%; height: auto;" />

Conventional defenses such as Neural Cleanse show limited capability in detecting these semantic backdoor patterns.

---

## Abstract

Deep learning has demonstrated transformative potential across domains, yet its inherent opacity has driven the development of Explainable Artificial Intelligence (XAI). Concept Bottleneck Models (CBMs), which enforce interpretability through human-understandable concepts, represent a prominent advancement in XAI. However, despite their semantic transparency, CBMs remain vulnerable to security threats such as backdoor attacks—malicious manipulations that induce controlled misbehaviors during inference.

While CBMs leverage multimodal representations (visual inputs and textual concepts) to enhance interpretability, their dual-modality structure introduces unique, unexplored attack surfaces.

To address this risk, we propose **CAT** (Concept-level Backdoor ATtacks), a methodology that injects stealthy triggers into conceptual representations during training. Unlike naive attacks that randomly corrupt concepts, CAT employs a sophisticated filtering mechanism to enable precise prediction manipulation without compromising clean-data performance. We further propose **CAT+**, an enhanced variant incorporating a concept correlation function to iteratively optimize trigger-concept associations, thereby maximizing attack effectiveness and stealthiness.

Crucially, we validate our approach through a rigorous **two-stage evaluation framework**. First, we establish the fundamental vulnerability of the concept bottleneck layer in a controlled setting, showing that CAT+ achieves high attack success rates while remaining statistically indistinguishable from natural data. Second, we demonstrate practical end-to-end feasibility via **Image2Trigger_c**, which translates visual perturbations into concept-level triggers. Extensive experiments show that CAT outperforms random-selection baselines significantly, and standard defenses like Neural Cleanse fail to detect these semantic attacks.

---

## Citation

```bibtex
@article{lai2026cat,
  title={Multimodal Deception in Explainable AI: Concept-Level Backdoor Attacks on Concept Bottleneck Models},
  author={Lai, Songning and Yang, Jiayu and Huang, Yu and Hu, Lijie and Xue, Tianlang and Hu, Zhangyi and Li, Jiaxu and Liao, Haicheng and Liu, Zongyang and Yue, Yutao},
  journal={Transactions on Machine Learning Research},
  year={2026}
}
```

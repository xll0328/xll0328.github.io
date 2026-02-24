---
permalink: /concil/
title: "CONCIL: Continual Learning for Multimodal Concept Bottleneck Models"
excerpt: "ACM MM 2025 — Official project page and code"
author_profile: true
---

**ACM MM 2025 (BNI Track, Oral)** · [arXiv](https://arxiv.org/pdf/2411.17471) · [**Code (GitHub)**](https://github.com/xll0328/CONCIL---ACM-MM-2025-BNI-Track-)

---

## Abstract

Concept Bottleneck Models (CBMs) enhance the interpretability of AI systems by bridging visual input with human-understandable concepts. However, existing CBMs typically assume static datasets, which limits their adaptability to real-world, continuously evolving multimodal data streams. We define a novel continual learning task for CBMs: **concept-incremental and class-incremental learning (CICIL)**. This task requires models to continuously acquire new concepts and classes while robustly preserving previously learned knowledge. We propose **CONCIL** (Conceptual Continual Incremental Learning), a framework that reformulates concept and decision layer updates as linear regression problems, eliminating gradient-based optimization and effectively preventing catastrophic forgetting. CONCIL relies solely on recursive matrix operations, rendering it computationally efficient and suitable for real-time and large-scale multimodal applications. We provide a theoretical proof of "absolute knowledge memory" and demonstrate that CONCIL significantly outperforms traditional CBM methods in both concept- and class-incremental settings.

---

## Task: CICIL

The CICIL task: sequential phases with growing concept and class sets. Each task provides training/test data with inputs $\mathbf{x}$, concept vectors $\mathbf{c}$, and labels $y$.

<img src="{{ '/images/concil/intro-figure.png' | relative_url }}" alt="CICIL task definition" style="max-width: 90%; height: auto;" />

*Figure 1: Concept-Incremental and Class-Incremental Continual Learning (CICIL) for CBMs.*

---

## Method: CONCIL

Base training (Task 0) jointly trains backbone, concept layer, and classifier; the backbone is then frozen. Incremental tasks use recursive analytic updates for the concept layer and classifier, with expanding concept and class dimensions.

<img src="{{ '/images/concil/framework.png' | relative_url }}" alt="CONCIL framework" style="max-width: 95%; height: auto;" />

*Figure 2: CONCIL framework overview.*

---

## Results

CONCIL vs. baseline: average concept/class accuracy and forgetting rates across phases on CUB and AwA.

<img src="{{ '/images/concil/incremental_learning_results.png' | relative_url }}" alt="CONCIL results" style="max-width: 92%; height: auto;" />

*Main result figure: CONCIL achieves higher accuracy and lower forgetting rates than the baseline.*

---

## Code & Repo

- **GitHub (code, data prep, training scripts):** [github.com/xll0328/CONCIL---ACM-MM-2025-BNI-Track-](https://github.com/xll0328/CONCIL---ACM-MM-2025-BNI-Track-)
- **Paper (PDF):** [arXiv:2411.17471](https://arxiv.org/pdf/2411.17471)

## Citation

```bibtex
@inproceedings{lai2025learning,
  title={Learning New Concepts, Remembering the Old: Continual Learning for Multimodal Concept Bottleneck Models},
  author={Lai, Songning and Liao, Mingqian and Hu, Zhangyi and Yang, Jiayu and Chen, Wenshuo and Xiao, Hongru and Tang, Jianheng and Liao, Haicheng and Yue, Yutao},
  booktitle={Proceedings of the ACM International Conference on Multimedia (ACM MM)},
  year={2025}
}
```

---

[← Back to Home]({{ '/' | relative_url }})

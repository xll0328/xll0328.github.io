---
permalink: /drive/
title: "DRIVE: Dependable Robust Interpretable Visionary Ensemble Framework in Autonomous Driving"
excerpt: "ICRA 2025 — Official project page and code"
author_profile: true
---

**This paper was accepted at ICRA 2025** (IEEE International Conference on Robotics and Automation 2025). CCF B, Core A\* · [**Paper (arXiv)**](https://arxiv.org/abs/2409.10330) · [**Code (GitHub)**](https://github.com/xll0328/ICRA25-DRIVE) · [**Dataset (Comma2k19)**](https://github.com/commaai/comma2k19)

**Authors:** Songning Lai~, Tianlang Xue~, Hongru Xiao, Lijie Hu, Jiemin Wu, Ninghui Feng, Runwei Guan, Haicheng Liao, Zhenning Li, Yutao Yue†  
**Affiliation:** HKUST(GZ), Tongji University, KAUST, University of Macau

---

## Teaser

<p align="center">
  <img src="https://raw.githubusercontent.com/xll0328/xll0328_ed.github.io/main/project/DRIVE/DRIVE_small.gif" alt="DRIVE teaser" style="max-width: 85%; height: auto;" />
</p>
<p align="center"><em>DRIVE is all you need!</em></p>

---

## Abstract

Recent advancements in autonomous driving have seen a paradigm shift towards end-to-end learning paradigms, which map sensory inputs directly to driving actions, thereby enhancing the robustness and adaptability of autonomous vehicles. However, these models often sacrifice interpretability, posing significant challenges to trust, safety, and regulatory compliance. To address these issues, we introduce **DRIVE** — **D**ependable **R**obust **I**nterpretable **V**isionary **E**nsemble Framework in Autonomous Driving, a comprehensive framework designed to improve the dependability and stability of explanations in end-to-end unsupervised autonomous driving models.

Our work specifically targets the inherent instability problems observed in the Driving through the Concept Gridlock (DCG) model, which undermine the trustworthiness of its explanations and decision-making processes. We define four key attributes of **DRIVE**: **consistent interpretability**, **stable interpretability**, **consistent output**, and **stable output**. These attributes collectively ensure that explanations remain reliable and robust across different scenarios and perturbations. Through extensive empirical evaluations, we demonstrate the effectiveness of our framework in enhancing the stability and dependability of explanations, thereby addressing the limitations of current models. Our contributions include an in-depth analysis of the dependability issues within the DCG model, a rigorous definition of **DRIVE** with its fundamental properties, a framework to implement **DRIVE**, and novel metrics for evaluating the dependability of concept-based explainable autonomous driving models. These advancements lay the groundwork for the development of more reliable and trusted autonomous driving systems, paving the way for their broader acceptance and deployment in real-world applications.

---

## Motivation

- **Enhancing public trust** — Interpretable and stable explanations help users and regulators trust autonomous driving systems.
- **Addressing black-box issues** — End-to-end models often lack transparency; DRIVE makes the decision process transparent and robust.
- **Meeting regulatory requirements** — Safety and explainability standards increasingly require dependable and auditable AI.

---

## Contributions

- **In-depth analysis of DCG dependability** — We identify and characterize instability issues in concept-based explanations.
- **Rigorous definition and properties of DRIVE** — Four key attributes (consistent/stable interpretability and output) with clear metrics.
- **Framework for optimizing dependability** — Implementation and training strategy to achieve consistent and stable interpretability and output.
- **Novel evaluation metrics** — Metrics for assessing the reliability of concept-based explainable autonomous driving models.

---

## Framework

<p align="center">
  <img src="https://raw.githubusercontent.com/xll0328/xll0328_ed.github.io/main/project/DRIVE/framwork_all.png" alt="DRIVE framework" style="max-width: 95%; height: auto;" />
</p>
<p align="center"><em>The Dependable Robust Interpretable Visionary Ensemble (DRIVE) model framework.</em></p>

---

## Demo

<p align="center">
  <img src="https://raw.githubusercontent.com/xll0328/xll0328_ed.github.io/main/project/DRIVE/MyVideo2_DRIVE.gif" alt="DRIVE demo" style="max-width: 85%; height: auto;" />
</p>

---

## Code, Data & Repo

| Resource | Link |
|----------|------|
| **Code (GitHub)** | [github.com/xll0328/ICRA25-DRIVE](https://github.com/xll0328/ICRA25-DRIVE) |
| **Paper (PDF)** | [arXiv:2409.10330](https://arxiv.org/abs/2409.10330) |
| **Dataset** | [Comma2k19](https://github.com/commaai/comma2k19) |

Installation, dataset preprocessing, training (DCG → DRIVE), and script examples are documented in the [repository README](https://github.com/xll0328/ICRA25-DRIVE).

---

## Citation

If you find this work useful, please cite:

```bibtex
@inproceedings{lai2025drive,
  title={DRIVE: Dependable Robust Interpretable Visionary Ensemble Framework in Autonomous Driving},
  author={Songning Lai and Tianlang Xue and Hongru Xiao and Lijie Hu and Jiemin Wu and Ninghui Feng and Runwei Guan and Haicheng Liao and Zhenning Li and Yutao Yue},
  booktitle={Proceedings of the IEEE International Conference on Robotics and Automation (ICRA)},
  year={2025},
  eprint={2409.10330},
  archivePrefix={arXiv},
  primaryClass={cs.RO},
  url={https://arxiv.org/abs/2409.10330},
}
```

---

[← Back to Home]({{ '/' | relative_url }})

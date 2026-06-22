---
permalink: /zh/drive/
title: "DRIVE: Dependable Robust Interpretable Visionary Ensemble Framework in Autonomous Driving"
excerpt: "ICRA 2025 — 中文项目页"
author_profile: false
lang: zh
---

<div class="project-hero">
  <div class="project-hero-copy">
    <p class="project-kicker">ICRA 2025 · CCF B · Core A*</p>
    <h1>DRIVE: Dependable Robust Interpretable Visionary Ensemble Framework in Autonomous Driving</h1>
    <p class="project-subtitle">中文项目页</p>
    <div class="project-hero-actions">
      <a class="project-btn primary" href="https://arxiv.org/abs/2409.10330">论文</a>
      <a class="project-btn secondary" href="https://github.com/xll0328/ICRA25-DRIVE">代码</a>
      <a class="project-btn secondary" href="https://github.com/commaai/comma2k19">数据集</a>
    </div>
  </div>
  <img class="project-hero-figure" src="{{ '/images/WechatIMG169.jpg' | relative_url }}" alt="DRIVE teaser">
</div>

<div class="project-tldr">
<p class="project-tldr-label">TL;DR</p>
<p>DRIVE 通过约束解释和输出的一致性与稳定性，提升基于概念的自动驾驶系统可靠性，并提供专门指标与充分实证验证。</p>
</div>

**作者：** Songning Lai~, Tianlang Xue~, Hongru Xiao, Lijie Hu, Jiemin Wu, Ninghui Feng, Runwei Guan, Haicheng Liao, Zhenning Li, Yutao Yue†  
**单位：** HKUST(GZ), Tongji University, KAUST, University of Macau

---

## Teaser

<p align="center">
  <img src="https://raw.githubusercontent.com/xll0328/xll0328_ed.github.io/main/project/DRIVE/DRIVE_small.gif" alt="DRIVE teaser" style="max-width: 85%; height: auto;" />
</p>
<p align="center"><em>DRIVE is all you need!</em></p>

---

## 摘要

自动驾驶近期逐渐转向端到端学习范式，即从传感器输入直接映射到驾驶动作，以增强车辆鲁棒性和适应性。然而，这些模型通常牺牲可解释性，给信任、安全与合规带来挑战。为解决这些问题，我们提出 **DRIVE**：**D**ependable **R**obust **I**nterpretable **V**isionary **E**nsemble Framework in Autonomous Driving，用于提升端到端无监督自动驾驶模型解释的可靠性和稳定性。

我们的工作针对 Driving through the Concept Gridlock (DCG) 模型中的固有不稳定问题，这些问题会削弱解释和决策过程的可信度。我们定义 DRIVE 的四个关键属性：**consistent interpretability**、**stable interpretability**、**consistent output** 与 **stable output**。这些属性共同保证解释在不同场景和扰动下仍保持可靠与鲁棒。通过大量实证评估，我们证明该框架能够增强解释的稳定性和可靠性。贡献包括：对 DCG 可靠性问题的深入分析、DRIVE 及其基本性质的严格定义、实现 DRIVE 的框架，以及用于评估概念式可解释自动驾驶模型可靠性的新指标。

---

## 动机

- **增强公众信任**：可解释且稳定的解释帮助用户和监管机构信任自动驾驶系统。
- **处理黑盒问题**：端到端模型往往缺乏透明度；DRIVE 让决策过程更透明且更鲁棒。
- **满足监管需求**：安全与可解释标准越来越需要可靠且可审计的 AI。

---

## 贡献

- **深入分析 DCG 可靠性**：识别并刻画概念式解释中的不稳定问题。
- **严格定义 DRIVE 及其性质**：提出一致/稳定解释与输出四个关键属性及对应指标。
- **可靠性优化框架**：给出实现一致、稳定解释与输出的训练策略。
- **新的评估指标**：用于评估概念式可解释自动驾驶模型的可靠性。

---

## 框架

<p align="center">
  <img src="https://raw.githubusercontent.com/xll0328/xll0328_ed.github.io/main/project/DRIVE/framwork_all.png" alt="DRIVE framework" style="max-width: 95%; height: auto;" />
</p>
<p align="center"><em>DRIVE 模型框架。</em></p>

---

## 演示

<p align="center">
  <img src="https://raw.githubusercontent.com/xll0328/xll0328_ed.github.io/main/project/DRIVE/MyVideo2_DRIVE.gif" alt="DRIVE demo" style="max-width: 85%; height: auto;" />
</p>

---

## 代码、数据与仓库

| 资源 | 链接 |
|----------|------|
| **代码（GitHub）** | [github.com/xll0328/ICRA25-DRIVE](https://github.com/xll0328/ICRA25-DRIVE) |
| **论文 PDF** | [arXiv:2409.10330](https://arxiv.org/abs/2409.10330) |
| **数据集** | [Comma2k19](https://github.com/commaai/comma2k19) |

安装、数据预处理、训练（DCG → DRIVE）和脚本示例见 [仓库 README](https://github.com/xll0328/ICRA25-DRIVE)。

---

## 引用

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

[← 返回首页]({{ '/zh/' | relative_url }})

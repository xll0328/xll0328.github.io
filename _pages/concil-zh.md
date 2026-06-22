---
permalink: /zh/concil/
title: "CONCIL: Continual Learning for Multimodal Concept Bottleneck Models"
excerpt: "ACM MM 2025 — 中文项目页"
author_profile: false
lang: zh
---

<div class="project-hero">
  <div class="project-hero-copy">
    <p class="project-kicker">ACM MM 2025 · BNI Track · Oral</p>
    <h1>CONCIL: Continual Learning for Multimodal Concept Bottleneck Models</h1>
    <p class="project-subtitle">中文项目页</p>
    <div class="project-hero-actions">
      <a class="project-btn primary" href="https://arxiv.org/pdf/2411.17471">论文</a>
      <a class="project-btn secondary" href="https://github.com/xll0328/CONCIL---ACM-MM-2025-BNI-Track-">代码</a>
    </div>
  </div>
  <img class="project-hero-figure" src="{{ '/images/concil/intro-figure.png' | relative_url }}" alt="CICIL task definition">
</div>

<div class="project-tldr">
<p class="project-tldr-label">TL;DR</p>
<p>CONCIL 将 CBM 中概念和类别的增量更新表述为递归解析解，降低遗忘并保持适合持续多模态学习的高效率。</p>
</div>

---

## 摘要

概念瓶颈模型（CBMs）通过连接视觉输入与人类可理解概念来增强 AI 系统的可解释性。然而，现有 CBM 通常假设数据集静态不变，这限制了它们适应真实世界中持续演化的多模态数据流。我们定义了面向 CBM 的新持续学习任务：**concept-incremental and class-incremental learning (CICIL)**。该任务要求模型持续获取新概念和新类别，同时稳健保持已有知识。我们提出 **CONCIL**（Conceptual Continual Incremental Learning），将概念层和决策层更新重写为线性回归问题，避免梯度优化并有效防止灾难性遗忘。CONCIL 仅依赖递归矩阵运算，计算高效，适合实时和大规模多模态应用。我们给出 “absolute knowledge memory” 的理论证明，并展示 CONCIL 在概念增量和类别增量设置中显著优于传统 CBM 方法。

---

## 任务：CICIL

CICIL 任务包含概念集与类别集逐步扩展的序列阶段。每个任务提供训练/测试数据，包括输入 **x**、概念向量 **c** 和标签 **y**。

<img src="{{ '/images/concil/intro-figure.png' | relative_url }}" alt="CICIL task definition" style="max-width: 90%; height: auto;" />

*图 1：面向 CBM 的概念增量与类别增量持续学习（CICIL）。*

---

## 方法：CONCIL

基础训练（Task 0）联合训练骨干网络、概念层和分类器，随后冻结骨干网络。增量任务使用递归解析更新扩展概念层和分类器，并同步扩展概念与类别维度。

<img src="{{ '/images/concil/framework.png' | relative_url }}" alt="CONCIL framework" style="max-width: 95%; height: auto;" />

*图 2：CONCIL 框架概览。*

---

## 结果

CONCIL 与基线在 CUB 和 AwA 上比较各阶段平均概念/类别准确率和遗忘率。

<img src="{{ '/images/concil/incremental_learning_results.png' | relative_url }}" alt="CONCIL results" style="max-width: 92%; height: auto;" />

*主要结果：CONCIL 相比基线获得更高准确率和更低遗忘率。*

---

## 代码与仓库

- **GitHub（代码、数据准备、训练脚本）：** [github.com/xll0328/CONCIL---ACM-MM-2025-BNI-Track-](https://github.com/xll0328/CONCIL---ACM-MM-2025-BNI-Track-)
- **论文 PDF：** [arXiv:2411.17471](https://arxiv.org/pdf/2411.17471)

## 引用

```bibtex
@inproceedings{lai2025learning,
  title={Learning New Concepts, Remembering the Old: Continual Learning for Multimodal Concept Bottleneck Models},
  author={Lai, Songning and Liao, Mingqian and Hu, Zhangyi and Yang, Jiayu and Chen, Wenshuo and Xiao, Hongru and Tang, Jianheng and Liao, Haicheng and Yue, Yutao},
  booktitle={Proceedings of the ACM International Conference on Multimedia (ACM MM)},
  year={2025}
}
```

[← 返回首页]({{ '/zh/' | relative_url }})

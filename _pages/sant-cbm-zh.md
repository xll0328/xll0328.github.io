---
permalink: /zh/sant-cbm/
title: "SANT-CBM: Structurally-Aware and Noise-Tolerant Semi-supervised Concept Bottleneck Models"
excerpt: "MICCAI 2026 — 中文项目页"
author_profile: false
lang: zh
---

<div class="project-hero">
  <div class="project-hero-copy">
    <p class="project-kicker">MICCAI 2026 · CCF B · Provisionally Accepted</p>
    <h1>SANT-CBM: Structurally-Aware and Noise-Tolerant Semi-supervised Concept Bottleneck Models</h1>
    <p class="project-subtitle">中文项目页</p>
    <div class="project-hero-actions">
      <a class="project-btn primary" href="#overview">概览</a>
      <a class="project-btn secondary" href="#results">结果</a>
    </div>
  </div>
  <img class="project-hero-figure" src="{{ '/images/sant-cbm/framework.png' | relative_url }}" alt="SANT-CBM framework">
</div>

<div class="project-tldr">
<p class="project-tldr-label">TL;DR</p>
<p>SANT-CBM 通过 GMM 动态加权降低噪声伪标签影响，并用结构一致性约束临床上合理的概念相关关系，从而改进皮肤病诊断中的半监督 CBM。</p>
</div>

**作者：** HongWei Liu, Jia Liu, **Songning Lai~**  
**会议：** Medical Image Computing and Computer Assisted Intervention (**MICCAI 2026**, CCF B), provisionally accepted  
**说明：** `~` 表示通讯作者。论文与代码链接将在 MICCAI 公开发布和开源制品（artifact release）要求满足后补充。

---

<span class='anchor' id='overview'></span>

## 概览

<img src="{{ '/images/sant-cbm/framework.png' | relative_url }}" alt="SANT-CBM framework" style="max-width: 98%; height: auto;" />

概念瓶颈模型（CBMs）通过在最终诊断前预测人类可理解的临床概念，让医学图像分类器更具可解释性。但在标注稀缺的医学场景中，半监督 CBM 面临两个可靠性问题：来自无标注数据的噪声伪标签，以及可能违反病理相关关系的概念预测。

SANT-CBM 用两个互补分支解决这些问题：

1. **Noise-Tolerant learning：** 基于 GMM 的动态加权机制从损失分布估计每个概念伪标签是否干净，并降低不可靠监督的权重。
2. **Structurally-Aware learning：** 结构一致性损失将预测概念相关矩阵与临床先验构建的参考矩阵对齐，鼓励生物学上合理的概念组合。

---

## 方法

模型遵循 CBM 流程，由概念预测器和标签预测器组成。对于无标注样本，SANT-CBM 先从 feature bank 生成初始伪概念标签，再使用两组件 Gaussian Mixture Model 估计概念级干净权重。

去噪伪标签损失为：

$$
\mathcal{L}_{denoise} =
\frac{1}{N_U}\sum_{i=1}^{N_U}\sum_{j=1}^{M}
w_{i,j}\cdot(g(\mathbf{u}_i)_j-\tilde{c}_{i,j})^2.
$$

对于结构一致性，模型计算可微的 batch-wise 概念相关矩阵，并与临床参考矩阵对齐：

$$
\mathcal{L}_{struct} =
\left\|\mathbf{R}_{ref}-\hat{\mathbf{R}}_{batch}\right\|_F^2.
$$

完整目标结合监督 CBM 训练、噪声鲁棒伪标签对齐和结构一致性：

$$
\mathcal{L}_{total} =
\mathcal{L}_{sup}+\lambda_u\mathcal{L}_{denoise}+\lambda_s\mathcal{L}_{struct}.
$$

---

<span class='anchor' id='results'></span>

## 结果

SANT-CBM 在两个公开皮肤病数据集 **Fitzpatrick17k** 和 **7-point Checklist** 上评估。在 10% 有标注设置下，它相比最先进的半监督 CBM 基线提升了任务准确率。

| 数据集 | SSCBM 任务准确率 | SANT-CBM 任务准确率 | 提升 |
|---------|------------------|--------------------|------|
| Fitzpatrick17k | 71.52% | **77.83%** | +6.31% |
| 7-point Checklist | 67.52% | **73.27%** | +5.75% |

### Fitzpatrick17k 上的消融

| GMM 去噪 | 结构损失 | 概念准确率 | 任务准确率 |
|---------------|-----------------|--------------|-----------|
| - | - | 86.31% | 71.51% |
| 是 | - | 87.81% | 74.38% |
| - | 是 | 86.47% | 75.13% |
| 是 | 是 | **88.84%** | **77.83%** |

---

## 可视化

<img src="{{ '/images/sant-cbm/qualitative.png' | relative_url }}" alt="SANT-CBM qualitative analysis" style="max-width: 95%; height: auto;" />

定性分析显示，SANT-CBM 比 SSCBM 更好地匹配参考概念相关结构；同时 GMM 模块能识别低置信无标注样本，并在训练中降低其影响。

---

## 发布

论文已被 MICCAI 2026 临时接收。公开论文链接、引用元数据和代码仓库链接将在终稿（camera-ready）与 MICCAI 公开发布流程完成后更新。

[← 返回首页]({{ '/zh/' | relative_url }})

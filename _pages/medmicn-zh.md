---
permalink: /zh/medmicn/
title: "Med-MICN: Towards Multi-dimensional Explanation Alignment for Medical Classification"
excerpt: "NeurIPS 2024 — 中文项目页"
author_profile: false
lang: zh
---

<div class="project-hero">
  <div class="project-hero-copy">
    <p class="project-kicker">NeurIPS 2024 · CCF A</p>
    <h1>Med-MICN: Towards Multi-dimensional Explanation Alignment for Medical Classification</h1>
    <p class="project-subtitle">中文项目页</p>
    <div class="project-hero-actions">
      <a class="project-btn primary" href="https://arxiv.org/abs/2410.21494">论文</a>
      <a class="project-btn secondary" href="https://github.com/xll0328/NeurIPS24-Med_MICN">代码</a>
    </div>
  </div>
  <img class="project-hero-figure" src="{{ '/images/medmicn/framework.jpg' | relative_url }}" alt="Med-MICN framework">
</div>

<div class="project-tldr">
<p class="project-tldr-label">TL;DR</p>
<p>Med-MICN 在一个医学框架中对齐概念语义、神经符号推理与显著性解释，在保持强性能的同时提供多维可解释性。</p>
</div>

**作者：** Lijie Hu†, Songning Lai†, Wenshuo Chen† (equal contribution), Hongru Xiao, Hongbin Lin, Lu Yu, Jingfeng Zhang, Di Wang

---

## 摘要

医学图像分析缺乏可解释性会带来重要伦理和法律问题。现有可解释方法面临依赖特定模型、难以理解和可视化、效率不足等挑战。为解决这些限制，我们提出 **Med-MICN**（Medical Multi-dimensional Interpretable Concept Network）。Med-MICN 从神经符号推理、概念语义和显著图等多个角度提供解释对齐，优于现有可解释方法。其优势包括高预测准确率、多维可解释性，以及端到端概念标注流程带来的自动化能力，降低迁移到新数据集时的人力成本。我们在四个基准数据集上应用 Med-MICN 并与基线比较，结果显示 Med-MICN 具有更优性能和可解释性。

---

## 框架概览

<img src="{{ '/images/medmicn/framework.jpg' | relative_url }}" alt="Med-MICN framework" style="max-width: 95%; height: auto;" />

Med-MICN 框架包含四个主要模块：(1) **特征提取模块（Feature Extraction Module）**：用骨干网络提取图像特征。(2) **概念嵌入模块（Concept Embedding Module）**：将特征输入概念嵌入模块，输出概念嵌入和预测类别信息。(3) **概念语义对齐（Concept Semantic Alignment）**：使用 VLM 标注图像特征并生成与预测类别对齐的概念类别标注。(4) **神经符号层（Neural Symbolic Layer）**：将概念嵌入输入神经符号层推导概念规则。概念嵌入与原始图像嵌入拼接后输入最终分类层得到预测。

---

## 多维可解释性

<img src="{{ '/images/medmicn/ct.jpg' | relative_url }}" alt="Multi-dimensional interpretability" style="max-width: 95%; height: auto;" />

Med-MICN 展示了多维可解释性，包括概念分数预测、概念推理规则和显著图，并在统一解释框架内完成对齐。纵轴展示概念 \(c_0, \ldots, c_7\)（例如 “Peripheral ground-glass opacities” 作为 \(c_0\)）。

---

## 概念标注对齐

<img src="{{ '/images/medmicn/label.jpg' | relative_url }}" alt="Concept labeling" style="max-width: 95%; height: auto;" />

自动概念标注对齐：(a) 概念集生成（例如通过 GPT-4V）；(b) 基于 VLM 的概念热图和伪标签，与概念集对齐。

---

## 方法（关键公式）

**热图与概念分数。** 给定视觉特征图 \(V\) 与概念 \(c_i\) 的文本嵌入 \(t_i\)，相似度热图为：

$$P_{h,w,i} = \frac{t_i^T V_{h,w}}{\|t_i\| \cdot \|V_{h,w}\|}.$$

平均池化得到概念分数 \(s_i = \frac{1}{H \cdot W} \sum_{h,w} P_{h,w,i}\)，概念向量 \(e = (s_1, \ldots, s_N)^T\)。

**概念嵌入。** Backbone \(\Theta_b\) 与概念编码器 \(\Theta_c\)：

$$f(x_m) = \Theta_b(x_m), \quad f_c(x_m), \hat{C}_m = \Theta_c(f(x_m)).$$

概念损失：

$$\mathcal{L}_c = \mathrm{BCE}(\hat{c}, c).$$

**神经符号层。** 对每个类别 \(j\)，结合概念极性 \(I_{o,i,j}\) 与相关性 \(I_{r,i,j}\)（模糊逻辑）：

$$\hat{y}_j = \land_{i=1}^{N} ( \neg I_{o, i, j} \lor I_{r, i, j} ) = \min_{i \in [N]} \{ \max\{1-I_{o, i, j} , I_{r, i, j}\} \}.$$

**最终预测与损失。** 融合预测 \(\tilde{y}_m = W_F \cdot \mathrm{Concat}(f(x_m), f_c(x_m))\)。总损失为：

$$\mathcal{L} = \mathcal{L}_{\mathrm{task}} + \lambda_1 \cdot \mathcal{L}_{c} + \lambda_2 \cdot \mathcal{L}_{\mathrm{neural}},$$

其中

$$\mathcal{L}_{\mathrm{task}} = \mathrm{CE}(\tilde{y}, y), \quad \mathcal{L}_{\mathrm{neural}} = \mathrm{BCE}(\hat{y}_{\mathrm{neural}}, y), \quad \lambda_1 = \lambda_2 = 0.1.$$

---

## 单维与多维可解释性

<img src="{{ '/images/medmicn/contrast.jpg' | relative_url }}" alt="Single vs multi-dimensional" style="max-width: 95%; height: auto;" />

单独依赖显著图或概念嵌入并不能提供充分解释；通过整合多维策略，模型能够对齐不同维度信息，提供更完整的可解释信息和更准确的预测。

---

## 主要结果

### 效用结果（Acc.% / F1%）

| 方法 | 骨干网络 | COVID-CT | DDI | Chest X-Ray | Fitzpatrick17k | 可解释性 |
|--------|----------|----------|-----|-------------|----------------|------------------|
| Baseline | ResNet50 | 81.36 / 81.67 | 77.27 / 72.77 | 75.64 / 71.72 | 80.79 / 80.79 | × |
| Baseline | VGG19 | 79.60 / 79.88 | 76.52 / 70.12 | **81.41** / **77.56** | 75.37 / 75.37 | × |
| Baseline | DenseNet169 | **85.59** / **85.59** | 78.03 / 69.51 | 69.55 / 61.66 | 76.85 / 76.83 | × |
| Label-free CBM | — | 69.49 / 69.21 | 70.34 / 69.21 | 71.21 / 70.84 | 75.24 / 75.41 | ✓ |
| DCR | — | 55.93 / 51.41 | 76.52 / 65.32 | 62.02 / 41.33 | 68.05 / 66.12 | ✓ |
| **Ours** | ResNet50 | **84.75** / **84.75** | **81.82** / **76.33** | 78.37 / 74.42 | **82.76** / **83.03** | ✓ |
| **Ours** | VGG19 | 83.05 / 84.37 | **82.58** / **78.07** | **88.30** / **88.16** | 77.34 / 77.53 | ✓ |
| **Ours** | DenseNet169 | **86.44** / **87.15** | 79.55 / 69.79 | 73.88 / 65.70 | 80.79 / **81.11** | ✓ |

### 消融实验

ResNet50 消融显示，同时使用概念损失和神经损失能在 COVID-CT、DDI、Chest X-Ray 和 Fitzpatrick17k 上获得最优 Acc./AUC。例如在 DDI 上，仅使用概念损失带来 +3.79% AUC；仅使用神经损失提升不明显；二者同时使用带来 +8.71% AUC。

---

## 数据集与使用

**数据集：** COVID-CT（CT 图像）、DDI（皮肤病）、Chest X-Ray、Fitzpatrick17k（含肤色信息的皮肤病数据）。

**代码：** [https://github.com/xll0328/NeurIPS24-Med_MICN](https://github.com/xll0328/NeurIPS24-Med_MICN)

```bash
# 使用不同骨干网络训练
python train_skin_neural.py --backbone RN50
python train_skin_neural.py --backbone DenseNet
python train_skin_neural.py --backbone DINOv2
```

---

## 引用

```bibtex
@inproceedings{hu2024medmicn,
  title={Towards Multi-dimensional Explanation Alignment for Medical Classification},
  author={Hu, Lijie and Lai, Songning and Chen, Wenshuo and Xiao, Hongru and Lin, Hongbin and Yu, Lu and Zhang, Jingfeng and Wang, Di},
  booktitle={Advances in Neural Information Processing Systems (NeurIPS)},
  year={2024}
}
```

[← 返回首页]({{ '/zh/' | relative_url }})

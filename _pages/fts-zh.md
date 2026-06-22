---
permalink: /zh/fts/
title: "FTS: From Guesswork to Guarantee — Faithful Multimedia Web Forecasting with TimeSieve"
excerpt: "ACM MM 2025 — 中文项目页"
author_profile: false
lang: zh
---

<div class="project-hero">
  <div class="project-hero-copy">
    <p class="project-kicker">ACM MM 2025 · CCF A · Core A*</p>
    <h1>FTS: From Guesswork to Guarantee — Faithful Multimedia Web Forecasting with TimeSieve</h1>
    <p class="project-subtitle">中文项目页</p>
    <div class="project-hero-actions">
      <a class="project-btn primary" href="https://dl.acm.org/doi/10.1145/3746027.3754963">论文</a>
      <a class="project-btn secondary" href="https://github.com/xll0328/MM25-FTS">代码</a>
    </div>
  </div>
  <img class="project-hero-figure" src="{{ '/images/fts/framework.png' | relative_url }}" alt="FTS framework">
</div>

<div class="project-tldr">
<p class="project-tldr-label">TL;DR</p>
<p>FTS 通过忠实性感知优化（Sib/Cps/Snp）增强 TimeSieve，在保持 SOTA 准确率的同时提升其对随机种子、输入扰动和层扰动的鲁棒性。</p>
</div>

**作者：** Songning Lai, Ninghui Feng, Jiechao Gao, Hao Wang, Haochen Sui, Xin Zou, Jiayu Yang, Wenshuo Chen, Lijie Hu, Hang Zhao, Xuming Hu, Yutao Yue

---

## 框架（来自论文）

<img src="{{ '/images/fts/framework.png' | relative_url }}" alt="FTS framework" style="max-width: 95%; height: auto;" />

**我们提出的 Faithful TimeSieve (FTS) 框架。**

---

## 摘要

时间序列预测在富媒体 Web 流量（视频流负载、动态内容分发）和跨平台广告点击预测中具有关键应用，因此受到广泛关注。虽然 **TimeSieve** 在 Web 访问指标预测方面表现强劲，但它存在严重的<strong>不忠实性</strong>问题：对随机种子、输入噪声、层噪声和参数扰动敏感。我们提出 **Faithful TimeSieve (FTS)**，系统检测并缓解 TimeSieve 中的不忠实性，显著提升模型稳定性和一致性。实验表明，FTS 大幅提高模型忠实性，并在多个数据集上达到 **SOTA**，为时序预测方法树立新的稳定性标准。这一点对 Web 流量预测尤为关键，因为预测准确性会直接影响运营决策。

---

## 主要贡献

1. **全面忠实性评估**：深入分析 TimeSieve，识别影响其忠实性的因素（随机种子、输入/层/参数扰动）。
2. **Faithful TimeSieve 定义**：给出严格的 \((\alpha_1, \alpha_2, \beta, \delta, R_1, R_2)\)-Faithful 定义，包含 **Sib**、**Cps**、**Snp** 三个属性。
3. **多媒体感知鲁棒框架**：使用 PGD 与内容自适应稳定化的 min-max 优化；框架可迁移到其他时间序列模型（如 PatchTST）。
4. **理论与实验验证**：给出 Sib/Cps/Snp 的边界，并在 Wiki、ETTh1、Exchange 上大量实验；FTS 同时达到 SOTA 与强鲁棒性。

---

## 动机：为什么需要忠实性？

- **随机种子稳定性**：不同训练运行之间性能不应剧烈波动（我们观察到最高约 50% 的变化）。
- **输入扰动鲁棒性**：轻微输入噪声会使 TimeSieve 性能下降约 30%；FTS 通过优化恢复稳定性。
- **层/参数扰动鲁棒性**：模型行为在参数噪声下应保持一致，例如 IFCB 层扰动。

---

## FTS 三个属性（形式化）

**Sib (Similarity in IB Space)：** 扰动前后 approximation/detail 表示之间距离 \(D_1\) 至多为 \(\beta\)，对所有 \(\|\delta\| \leq R_1\) 成立。

$$D_1(\hat{\pi}_a(x(t)), \hat{\pi}_a(x(t)+\delta)) \leq \beta \quad \text{(and similarly for } \hat{\pi}_d\text{).}$$

**Cps (Consistency in Prediction Space)：** fine-tuned weights 与 original weights 下预测之间距离 \(D_2\) 至多为 \(\alpha_1\)。

$$D_2(y(x(t), \tilde{\omega}), y(x(t), \omega)) \leq \alpha_1.$$

**Snp (Stability in Noise Perturbations)：** 在扰动输入下预测之间距离 \(D_3\) 至多为 \(\alpha_2\)，对所有 \(\|\delta\| \leq R_2\) 成立。

$$D_3(y(x(t), \tilde{\omega}), y(x(t)+\delta, \tilde{\omega})) \leq \alpha_2.$$

---

## 框架与损失

总训练目标为：

$$\mathcal{L} = \mathcal{L}_{\mathrm{reg}} + \mathcal{L}_{\mathrm{IB}} + \lambda_1 \mathcal{L}_{\mathrm{sib}} + \lambda_2 \mathcal{L}_{\mathrm{cps}} + \lambda_3 \mathcal{L}_{\mathrm{snp}}$$

其中 **L**<sub>reg</sub> 为回归损失，**L**<sub>IB</sub> 为 TimeSieve IB loss，**L**<sub>sib</sub>、**L**<sub>cps</sub>、**L**<sub>snp</sub> 为忠实性辅助损失。PGD 寻找 worst-case perturbation \(\delta\)，随后通过梯度下降更新 fine-tuned weights。

---

## 理论（来自论文）

**Preliminaries (TimeSieve).** Wavelet Decomposition Block 将输入 \(x(t)\) 分解为 approximation coefficients \(\pi_a\) 和 detail coefficients \(\pi_d\)：

$$\pi_a = \int_{-\infty}^{\infty} x(t) \phi(t)\, dt, \qquad \pi_d = \int_{-\infty}^{\infty} x(t) \psi(t)\, dt,$$

其中 \(\phi(t)\) 与 \(\psi(t)\) 为 scaling 和 wavelet functions。重构为 \(y = MLP(\sum \hat{\pi}_a \phi(t) + \sum \hat{\pi}_d \psi(t))\)，\(\hat{\pi}_a,\hat{\pi}_d\) 为 IFCB 过滤后的系数。IFCB 最小化 \(I(\pi_i; z) - \beta \cdot I(z; \hat{\pi}_i)\)，并使用 IB loss：

$$\mathcal{L}_{\mathrm{IB}} = D_{\mathrm{KL}}[\mathcal{N}(\mu_z, \Sigma_z) \| \mathcal{N}(0, I)] + D_{\mathrm{KL}}[p(z) \| p(z|i)].$$

**Theorem 1 (Sib upper bound).** 在 faithful TimeSieve 条件下，如果 \(x(t)\) 与 \(x(t)+\delta\) 的 IB 表示距离至少为 \(\beta\)，则 decoder 输出变化有界：

$$\|f(z, \hat{\pi}_i; \theta_d) - f(z, \hat{\pi}_i'; \theta_d)\| \leq c\delta.$$

**Theorem 2 (Sib lower bound).** 若 \(\delta \sim N(0, \sigma^2)\)，则：

$$\sigma^2 \geq \max\left\{ \delta,\; \frac{\mu R_1^2}{2\beta} \right\}.$$

当 \(\mu R_1^2/(2\sigma^2) \leq \beta\) 时，FTS 满足 Sib。

**Theorem 3 与 4.** 预测空间一致性和噪声扰动稳定性分别由 stable diameter 与 \(\alpha_1,\alpha_2\) 控制，保证 \(\tilde{\omega}\) 下的预测与原模型及扰动输入下的预测保持有界差异。

---

## 图 1：10 个随机种子下 TS vs FTS

选择 10 个随机种子分别训练 TimeSieve (TS) 与 Faithful TimeSieve (FTS)。FTS 在不同种子下表现更一致。

<img src="{{ '/images/fts/fig1.png' | relative_url }}" alt="TS vs FTS under 10 random seeds" style="max-width: 95%; height: auto;" />

---

## 主要结果

### 表 1：预测结果（无扰动）

Forecast length \(H \in \{48, 96, 144, 192\}\)，lookback \(T=2H\)。<span style="color:#c00;">**红色为最佳**</span>，<span style="color:#07c;">**蓝色为次优**</span>。

| Dataset | H | FTS (MAE / MSE) | TS (MAE / MSE) | Koopa | PatchTST | TSMixer | DLinear | NSTformer | LightTS | Autoformer |
|---------|---|------------------|----------------|-------|----------|---------|---------|-----------|---------|------------|
| **Wiki** | 48 | <span style="color:#c00;">**0.305 / 0.467**</span> | 0.323 / <span style="color:#07c;">0.490</span> | 0.314 / 0.496 | 0.312 / 0.495 | 0.318 / <span style="color:#07c;">0.490</span> | 0.350 / 0.517 | <span style="color:#07c;">0.307</span> / 0.508 | 0.313 / 0.494 | 0.315 / 0.522 |
| | 96 | <span style="color:#c00;">**0.262 / 0.430**</span> | <span style="color:#07c;">0.266 / 0.433</span> | 0.283 / 0.451 | 0.280 / 0.445 | 0.277 / 0.435 | 0.286 / 0.462 | 0.303 / 0.633 | 0.287 / 0.460 | 0.348 / 0.550 |
| | 144 | <span style="color:#c00;">**0.268 / 0.445**</span> | <span style="color:#07c;">0.270 / 0.447</span> | 0.284 / 0.459 | 0.280 / 0.451 | 0.320 / 0.496 | 0.287 / 0.458 | 0.309 / 0.521 | 0.291 / 0.471 | 0.360 / 0.616 |
| | 192 | <span style="color:#c00;">**0.273 / 0.447**</span> | <span style="color:#07c;">0.276 / 0.452</span> | 0.294 / 0.467 | 0.289 / 0.461 | 0.370 / 0.644 | 0.289 / 0.463 | 0.339 / 0.605 | 0.301 / 0.490 | 0.373 / 0.629 |
| **ETTh1** | 48 | <span style="color:#c00;">**0.360 / 0.340**</span> | <span style="color:#07c;">0.361 / 0.341</span> | 0.385 / 0.364 | 0.375 / 0.342 | 0.432 / 0.407 | 0.372 / 0.342 | 0.465 / 0.614 | 0.406 / 0.404 | 0.432 / 0.678 |
| | 96 | <span style="color:#c00;">**0.383 / 0.376**</span> | <span style="color:#07c;">0.384 / 0.376</span> | 0.411 / 0.406 | 0.395 / 0.377 | 0.473 / 0.466 | 0.395 / 0.380 | 0.498 / 0.653 | 0.431 / 0.435 | 0.496 / 0.578 |
| | 144 | <span style="color:#c00;">**0.396 / 0.391**</span> | <span style="color:#07c;">0.397 / 0.393</span> | 0.426 / 0.424 | 0.412 / 0.394 | 0.528 / 0.537 | 0.401 / 0.394 | 0.536 / 0.602 | 0.442 / 0.453 | 0.521 / 0.761 |
| | 192 | <span style="color:#c00;">**0.406 / 0.402**</span> | <span style="color:#07c;">0.408 / 0.402</span> | 0.434 / 0.430 | 0.437 / 0.416 | 0.592 / 0.642 | 0.416 / 0.408 | 0.543 / 0.684 | 0.457 / 0.471 | 0.568 / 0.598 |
| **Exchange** | 48 | <span style="color:#c00;">**0.139 / 0.042**</span> | <span style="color:#07c;">0.140 / 0.043</span> | 0.149 / 0.046 | 0.145 / 0.048 | 0.149 / 0.046 | 0.145 / 0.046 | 0.187 / 0.073 | 0.159 / 0.067 | 0.205 / 0.124 |
| | 96 | <span style="color:#c00;">**0.196 / 0.084**</span> | <span style="color:#07c;">0.197 / 0.086</span> | 0.211 / 0.092 | 0.204 / 0.090 | 0.211 / 0.092 | 0.223 / 0.089 | 0.294 / 0.159 | 0.247 / 0.168 | 0.778 / 0.409 |
| | 144 | <span style="color:#c00;">**0.242 / 0.123**</span> | <span style="color:#07c;">0.243 / 0.124</span> | 0.265 / 0.141 | 0.265 / 0.138 | 0.265 / 0.141 | 0.256 / 0.133 | 0.375 / 0.292 | 0.272 / 0.310 | 0.680 / 0.671 |
| | 192 | <span style="color:#c00;">**0.287 / 0.170**</span> | <span style="color:#07c;">0.292 / 0.179</span> | 0.329 / 0.212 | 0.298 / 0.181 | 0.329 / 0.212 | 0.301 / 0.182 | 0.464 / 0.494 | 0.354 / 0.403 | 0.979 / 0.544 |

### 表 2：随机种子稳定性（Exchange, 96-step, MSE）

Baseline seed 为 2021*。**Preference (%)** 同时衡量性能和稳定性，越高表示越偏好 FTS。

| Seed | TS (MSE) | FTS (MSE) | Preference (%) |
|------|----------|-----------|----------------|
| 2021* | 0.0929 | 0.0868 | — |
| 2022 | 0.0989 | 0.0867 | **99.61%** |
| 2023 | 0.0819 | 0.0864 | **96.09%** |
| 2024 | 0.0993 | 0.0860 | **87.95%** |
| 2025 | 0.0917 | 0.0878 | **4.49%** |
| 2026 | 0.0960 | 0.0876 | **69.27%** |
| 2027 | 0.0826 | 0.0892 | **74.16%** |
| 2028 | 0.0818 | 0.0863 | **95.81%** |
| 2029 | 0.1160 | 0.0879 | **94.69%** |
| 2030 | 0.0897 | 0.0898 | **1.53%** |

### 表 3：扰动下鲁棒性（MAE / MSE）

NP = no perturbation，NPO = NP with FTS optimization，IP = input perturbation，IPO = IP with optimization，ILP = intermediate-layer perturbation，ILPO = ILP with optimization。**粗体**表示 FTS 改进后结果。

| Dataset | H | NP | NPO | IP | IPO | ILP | ILPO |
|---------|---|-----|-----|-----|-----|-----|------|
| Wiki | 48 | 0.323/0.490 | **0.305/0.467** | 0.433/0.608 | **0.367/0.531** | 0.453/0.590 | **0.399/0.551** |
| Wiki | 96 | 0.266/0.433 | **0.262/0.430** | 0.405/0.575 | **0.321/0.482** | 0.367/0.681 | **0.329/0.613** |
| Wiki | 144 | 0.270/0.447 | **0.268/0.445** | 0.409/0.600 | **0.326/0.542** | 0.375/0.967 | **0.305/0.723** |
| Wiki | 192 | 0.276/0.452 | **0.273/0.447** | 0.408/0.580 | **0.327/0.493** | 0.404/1.548 | **0.366/1.165** |
| ETTh1 | 48 | 0.361/0.341 | **0.360/0.340** | 0.386/0.375 | **0.376/0.361** | 0.437/0.456 | **0.392/0.392** |
| ETTh1 | 96 | 0.384/0.377 | **0.383/0.376** | 0.411/0.424 | **0.404/0.408** | 0.415/0.422 | **0.401/0.397** |
| ETTh1 | 144 | 0.397/0.393 | **0.396/0.391** | 0.422/0.437 | **0.413/0.422** | 0.483/0.520 | **0.447/0.472** |
| ETTh1 | 192 | 0.408/0.404 | **0.406/0.402** | 0.431/0.445 | **0.420/0.426** | 0.443/0.451 | **0.428/0.430** |
| Exchange | 48 | 0.140/0.043 | **0.139/0.042** | 0.220/0.102 | **0.186/0.073** | 0.160/0.045 | **0.148/0.044** |
| Exchange | 96 | 0.197/0.086 | **0.196/0.084** | 0.265/0.131 | **0.237/0.104** | 0.221/0.102 | **0.202/0.092** |
| Exchange | 144 | 0.243/0.124 | **0.242/0.123** | 0.312/0.175 | **0.271/0.141** | 0.292/0.164 | **0.253/0.149** |
| Exchange | 192 | 0.292/0.179 | **0.287/0.170** | 0.345/0.239 | **0.307/0.178** | 0.331/0.205 | **0.304/0.190** |

---

## Heatmaps（来自论文）：prediction length 48, 96, 144, 192

Exchange 数据集上的 intermediate layer tensors（MSE）。Nper vs Oper 展示优化的有效性。

<p align="center">
  <img src="{{ '/images/fts/heatmaps_48.png' | relative_url }}" alt="H=48" style="max-width:48%; height:auto; display:inline-block;">
  <img src="{{ '/images/fts/heatmaps_96.png' | relative_url }}" alt="H=96" style="max-width:48%; height:auto; display:inline-block;">
</p>
<p align="center">
  <img src="{{ '/images/fts/heatmaps_144.png' | relative_url }}" alt="H=144" style="max-width:48%; height:auto; display:inline-block;">
  <img src="{{ '/images/fts/heatmaps_192.png' | relative_url }}" alt="H=192" style="max-width:48%; height:auto; display:inline-block;">
</p>

---

## 实验设置（来自论文）

- **数据集：** Wiki pageviews（2015-2016 top 10 hot words）、ETTh1、Exchange。
- **Lookback：** T = 2H（预测长度 H 的两倍）。
- **随机种子：** 10 个不同种子（2021-2030）；2021 作为 base。
- **扰动：** 输入噪声（sequence-decomposition residual）；IFCB 层参数噪声（Gaussian）。
- **硬件：** NVIDIA RTX 4090, Intel Xeon E5-2686 v4。**训练：** 10 epochs，batch size 32，learning rate 0.0001。

---

## 附录：证明、Preference 公式与实验设置

附录包含 **Theorem 1**（Sib 上界）与 **Theorem 2**（Sib 下界）的证明、seed-stability 表中使用的 **Preference formula**，以及实验设置的说明。选择输入扰动、层扰动和随机种子扰动，是因为它们与真实应用（如 Web 流量预测）直接相关：输入扰动反映活动和事件等外部因素；层扰动来自参数初始化与训练；随机种子扰动来自深度学习初始化。FTS 定义同时处理三者，以提升时间序列预测中的鲁棒性和稳定性。

**Preference (%)** 公式：

$$\Delta V_{\mathrm{fts}} = |V_{\mathrm{ftsb}} - V_{\mathrm{ftsc}}|, \qquad \Delta V_{\mathrm{ts}} = |V_{\mathrm{tsb}} - V_{\mathrm{tsc}}|.$$

$$\text{Preference }(\%) = \left(1 - \frac{|V_{\mathrm{ftsb}} - V_{\mathrm{ftsc}}|}{|V_{\mathrm{tsb}} - V_{\mathrm{tsc}}|} \times \frac{V_{\mathrm{tsb}}}{V_{\mathrm{ftsb}}}\right) \times 100\%.$$

更高 preference 表示 FTS 在改变随机种子时更稳定，且相对 TS 在 baseline 下拥有更好的 MSE。

---

## 代码与仓库

| 资源 | 链接 |
|----------|------|
| **代码（GitHub）** | [github.com/xll0328/MM25-FTS](https://github.com/xll0328/MM25-FTS) |
| **会议** | ACM MM 2025, Dublin, Ireland |
| **DOI** | [10.1145/3746027.3754963](https://dl.acm.org/doi/10.1145/3746027.3754963) |

---

## 引用

```bibtex
@inproceedings{lai2025fts,
  title={From Guesswork to Guarantee: Towards Faithful Multimedia Web Forecasting with TimeSieve},
  author={Songning Lai and Ninghui Feng and Jiechao Gao and Hao Wang and Haochen Sui and Xin Zou and Jiayu Yang and Wenshuo Chen and Lijie Hu and Hang Zhao and Xuming Hu and Yutao Yue},
  booktitle={Proceedings of the 33rd ACM International Conference on Multimedia (MM '25)},
  year={2025},
  address={Dublin, Ireland},
}
```

[← 返回首页]({{ '/zh/' | relative_url }})

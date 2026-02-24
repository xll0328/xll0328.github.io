---
permalink: /fts/
title: "FTS: From Guesswork to Guarantee — Faithful Multimedia Web Forecasting with TimeSieve"
excerpt: "ACM MM 2025 — Official project page and code"
author_profile: true
---

**This paper was accepted at ACM MM 2025** (33rd ACM International Conference on Multimedia, October 27–31, 2025, Dublin, Ireland). CCF A, Core A\* · [**Code (GitHub)**](https://github.com/xll0328/MM25-FTS)

**Authors:** Songning Lai, Ninghui Feng, Jiechao Gao, Hao Wang, Haochen Sui, Xin Zou, Jiayu Yang, Wenshuo Chen, Lijie Hu, Hang Zhao, Xuming Hu, Yutao Yue

---

## Framework (from paper)

<img src="{{ '/images/fts/framework.png' | relative_url }}" alt="FTS framework" style="max-width: 95%; height: auto;" />

**Framework of our proposed Faithful TimeSieve (FTS).**

---

## Abstract

The domain of time series forecasting has gained significant attention due to its critical applications in multimedia-rich web traffic (video streaming workloads, dynamic content delivery) and cross-platform advertisement click predictions. While **TimeSieve** has demonstrated strong capabilities in predicting web visitation metrics, it suffers from critical **unfaithfulness** issues: sensitivity to random seeds, input noise, layer noise, and parameter perturbations. We propose **Faithful TimeSieve (FTS)**, an enhanced framework that systematically detects and mitigates unfaithfulness in TimeSieve, significantly enhancing its stability and consistency. Experimental results demonstrate that FTS substantially improves the model's faithfulness and achieves **SOTA** on multiple datasets, setting a new standard for temporal forecasting methods. This advancement is particularly crucial for web traffic forecasting where prediction accuracy directly impacts operational decisions.

---

## Key Contributions

1. **Comprehensive Faithfulness Assessment** — In-depth analysis of TimeSieve identifying factors that affect its faithfulness (random seeds, input/layer/parameter perturbations).
2. **Definition of Faithful TimeSieve** — Rigorous (α₁, α₂, β, δ, R₁, R₂)-Faithful definition with three attributes: **Sib**, **Cps**, **Snp**.
3. **Multimedia-aware Robustness Framework** — Min-max optimization with PGD and content-adaptive stabilization; framework transfers to other time series models (e.g. PatchTST).
4. **Theoretical and Experimental Validation** — Bounds for Sib/Cps/Snp and extensive experiments on Wiki, ETTh1, Exchange; FTS achieves SOTA and strong robustness.

---

## Motivation: Why Faithfulness?

- **Stability under random seeds** — Performance should not vary drastically (e.g. up to ~50% in our study) across different training runs.
- **Robustness to input perturbations** — Minor input noise led to ~30% performance decline in TimeSieve; FTS recovers via optimization.
- **Robustness to layer/parameter perturbations** — Model behavior should remain consistent under parameter noise (e.g. IFCB layer).

---

## FTS: Three Attributes (formal)

1. **Similarity in IB Space (Sib):** Distance D₁ between approximation/detail representations under perturbation is at most β, for all ‖δ‖ ≤ R₁:
   $$D_1(\hat{\pi}_a(x(t)), \hat{\pi}_a(x(t)+\delta)) \leq \beta \quad \text{(and similarly for } \hat{\pi}_d\text{).}$$
2. **Consistency in Prediction Space (Cps):** Distance D₂ between predictions under fine-tuned weights and original weights is at most α₁:
   $$D_2(y(x(t), \tilde{\omega}), y(x(t), \omega)) \leq \alpha_1.$$
3. **Stability in Noise Perturbations (Snp):** Distance D₃ between predictions under x(t) and x(t)+δ is at most α₂ for all ‖δ‖ ≤ R₂:
   $$D_3(y(x(t), \tilde{\omega}), y(x(t)+\delta, \tilde{\omega})) \leq \alpha_2.$$

---

## Framework & Loss

The total training objective is:

$$\mathcal{L} = \mathcal{L}_{\mathrm{reg}} + \mathcal{L}_{\mathrm{IB}} + \lambda_1 \mathcal{L}_{\mathrm{sib}} + \lambda_2 \mathcal{L}_{\mathrm{cps}} + \lambda_3 \mathcal{L}_{\mathrm{snp}}$$

Here **L_reg** is the regression loss, **L_IB** is the TimeSieve IB loss, and **L_sib**, **L_cps**, **L_snp** are the faithfulness auxiliary losses (tied to D₁, D₂, D₃ above). PGD is used to find worst-case perturbation δ, then the fine-tuned weights are updated by gradient descent.

---

## Figure 1: TS vs FTS under 10 random seeds (from paper)

Ten different random seeds are selected to train TimeSieve (TS) and Faithful TimeSieve (FTS) respectively. FTS maintains more consistent performance across seeds.

<img src="{{ '/images/fts/fig1.png' | relative_url }}" alt="TS vs FTS under 10 random seeds" style="max-width: 95%; height: auto;" />

---

## Main Results

### Table 1: Forecasting results (no perturbation)

Forecast length H ∈ {48, 96, 144, 192}, lookback T = 2H. **Bold** = best, *second best*.

| Dataset | H | FTS (MAE / MSE) | TS (MAE / MSE) | Koopa | PatchTST | TSMixer | DLinear | NSTformer | LightTS | Autoformer |
|---------|---|------------------|----------------|-------|----------|---------|---------|-----------|---------|------------|
| **Wiki** | 48 | **0.305 / 0.467** | 0.323 / *0.490* | 0.314 / 0.496 | 0.312 / 0.495 | 0.318 / *0.490* | 0.350 / 0.517 | *0.307* / 0.508 | 0.313 / 0.494 | 0.315 / 0.522 |
| | 96 | **0.262 / 0.430** | *0.266 / 0.433* | 0.283 / 0.451 | 0.280 / 0.445 | 0.277 / 0.435 | 0.286 / 0.462 | 0.303 / 0.633 | 0.287 / 0.460 | 0.348 / 0.550 |
| | 144 | **0.268 / 0.445** | *0.270 / 0.447* | 0.284 / 0.459 | 0.280 / 0.451 | 0.320 / 0.496 | 0.287 / 0.458 | 0.309 / 0.521 | 0.291 / 0.471 | 0.360 / 0.616 |
| | 192 | **0.273 / 0.447** | *0.276 / 0.452* | 0.294 / 0.467 | 0.289 / 0.461 | 0.370 / 0.644 | 0.289 / 0.463 | 0.339 / 0.605 | 0.301 / 0.490 | 0.373 / 0.629 |
| **ETTh1** | 48 | **0.360 / 0.340** | *0.361 / 0.341* | 0.385 / 0.364 | 0.375 / 0.342 | 0.432 / 0.407 | 0.372 / 0.342 | 0.465 / 0.614 | 0.406 / 0.404 | 0.432 / 0.678 |
| | 96 | **0.383 / 0.376** | *0.384 / 0.376* | 0.411 / 0.406 | 0.395 / 0.377 | 0.473 / 0.466 | 0.395 / 0.380 | 0.498 / 0.653 | 0.431 / 0.435 | 0.496 / 0.578 |
| | 144 | **0.396 / 0.391** | *0.397 / 0.393* | 0.426 / 0.424 | 0.412 / 0.394 | 0.528 / 0.537 | 0.401 / 0.394 | 0.536 / 0.602 | 0.442 / 0.453 | 0.521 / 0.761 |
| | 192 | **0.406 / 0.402** | *0.408 / 0.402* | 0.434 / 0.430 | 0.437 / 0.416 | 0.592 / 0.642 | 0.416 / 0.408 | 0.543 / 0.684 | 0.457 / 0.471 | 0.568 / 0.598 |
| **Exchange** | 48 | **0.139 / 0.042** | *0.140 / 0.043* | 0.149 / 0.046 | 0.145 / 0.048 | 0.149 / 0.046 | 0.145 / 0.046 | 0.187 / 0.073 | 0.159 / 0.067 | 0.205 / 0.124 |
| | 96 | **0.196 / 0.084** | *0.197 / 0.086* | 0.211 / 0.092 | 0.204 / 0.090 | 0.211 / 0.092 | 0.223 / 0.089 | 0.294 / 0.159 | 0.247 / 0.168 | 0.778 / 0.409 |
| | 144 | **0.242 / 0.123** | *0.243 / 0.124* | 0.265 / 0.141 | 0.265 / 0.138 | 0.265 / 0.141 | 0.256 / 0.133 | 0.375 / 0.292 | 0.272 / 0.310 | 0.680 / 0.671 |
| | 192 | **0.287 / 0.170** | *0.292 / 0.179* | 0.329 / 0.212 | 0.298 / 0.181 | 0.329 / 0.212 | 0.301 / 0.182 | 0.464 / 0.494 | 0.354 / 0.403 | 0.979 / 0.544 |

### Table 2: Random seed stability (Exchange, 96-step, MSE)

Baseline seed 2021*. **Preference (%)** quantifies combined performance and stability (higher = FTS preferred).

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

### Robustness under perturbation (summary)

Under **input perturbation (IP)** and **intermediate-layer perturbation (ILP)**, FTS with optimization (IPO, ILPO) significantly recovers performance. For example, Wiki 48-step: IP MAE 0.433→0.367 (IPO); ILP MAE 0.453→0.399 (ILPO). See paper for full Table 3.

### Loss ablation

Full combination **L_total** = L_reg + L_IB + λ₁·L_sib + λ₂·L_cps + λ₃·L_snp achieves best. Removing L_snp, L_cps, or L_sib degrades robustness (paper Table 4).

---

## Heatmaps (from paper): prediction length 48, 96, 144, 192

Intermediate layer tensors on Exchange dataset (MSE). Nper vs Oper shows effectiveness of optimization.

<p align="center">
  <img src="{{ '/images/fts/heatmaps_48.png' | relative_url }}" alt="H=48" style="max-width:48%; height:auto; display:inline-block;">
  <img src="{{ '/images/fts/heatmaps_96.png' | relative_url }}" alt="H=96" style="max-width:48%; height:auto; display:inline-block;">
</p>
<p align="center">
  <img src="{{ '/images/fts/heatmaps_144.png' | relative_url }}" alt="H=144" style="max-width:48%; height:auto; display:inline-block;">
  <img src="{{ '/images/fts/heatmaps_192.png' | relative_url }}" alt="H=192" style="max-width:48%; height:auto; display:inline-block;">
</p>

---

## Experimental settings (from paper)

- **Datasets:** Wiki pageviews (top 10 hot words 2015–2016), ETTh1, Exchange.
- **Lookback:** T = 2H (twice forecast length H).
- **Seeds:** 10 distinct seeds (2021–2030); 2021 as base.
- **Perturbations:** Input noise (sequence-decomposition residual); IFCB layer parameter noise (Gaussian).
- **Hardware:** NVIDIA RTX 4090, Intel Xeon E5-2686 v4. **Training:** 10 epochs, batch size 32, learning rate 0.0001.

---

## Appendix: Theoretical Derivations

The following presents the proofs for **Theorem 1** (upper bound for Sib) and **Theorem 2** (lower bound for Sib), and the **derivation of the Preference formula** used in the main paper.

### Theorem 1 (Upper bound for Sib)

Under (α₁, α₂, β, δ, R₁, R₂)-Faithful TimeSieve, for the decoder *f*: if the distance between IB representations at *x*(t) and *x*(t)+δ is at least β (for *i* ∈ {*a*, *d*}), then for all *x*(t)′ = *x*(t)+δ with ‖*x*(t)−*x*(t)′‖ ≤ R₁,

$$\|f(z, \hat{\pi}_i; \theta_d) - f(z, \hat{\pi}_i'; \theta_d)\| \leq c\delta,$$

where the primed representation is at *x*(t)+δ and *c* is a constant.

**Proof.** The approximation and detail coefficients π_a, π_d are defined in the main text (wavelet decomposition). For convenience we omit the argument *t*. Write

$$\pi_i' = \pi_i(x(t)+\delta) = \int_{-\infty}^{\infty} (x(t)+\delta)\, \phi(t)\, dt.$$

For all ‖δ‖ ≤ R₁,

$$
\|\pi_a - \pi_a'\| = \left\| \int_{-\infty}^{\infty} x(t)\phi(t)\,dt - \int_{-\infty}^{\infty} (x(t)+\delta)\phi(t)\,dt \right\| = \left\| \int_{-\infty}^{\infty} \delta\,\phi(t)\,dt \right\|.
$$

By normalization of the scaling function, the integral of the scaling function equals 1, so

$$\left\| \int_{-\infty}^{\infty} \delta\,\phi(t)\,dt \right\| \leq \|\delta\|.$$

The same argument applies to π_d. □

---

### Theorem 2 (Lower bound for Sib)

Under (α₁, α₂, β, δ, R₁, R₂)-Faithful TimeSieve, with IB space measured by Rényi divergence *D*_μ and norm ‖·‖, if δ ∼ N(0, σ²), then for any μ ∈ (1, ∞) and input *x*(t),

$$\sigma^2 \geq \max\left\{ \delta,\; \frac{\mu R_1^2}{2\beta} \right\}.$$

**Proof.** The Rényi divergence between N(0, σ² I_d) and N(δ, σ² I_d) is bounded by μ‖δ‖²/(2σ²). Thus

$$
D_\mu\bigl(\hat{\pi}_i(x(t)),\, \hat{\pi}_i(x(t)+\delta)\bigr) \leq \frac{\mu \|x(t)-(x(t)+\delta)\|^2}{2\sigma^2} \leq \frac{\mu R_1^2}{2\sigma^2}.
$$

When μ R₁²/(2σ²) ≤ β, the FTS framework satisfies **Similarity in IB Space (Sib)**. □

---

### Derivation of Preference Formula

The **Preference (%)** in the seed-stability table quantifies how much FTS is preferred over TS when changing the random seed. Notation:

- **V_ftsb**: MSE of FTS under baseline seed (e.g. 2021)
- **V_tsb**: MSE of TS under baseline seed
- **V_ftsc**: MSE of FTS under current seed
- **V_tsc**: MSE of TS under current seed

**Step 1 — MSE change:**

$$\Delta V_{\mathrm{fts}} = |V_{\mathrm{ftsb}} - V_{\mathrm{ftsc}}|, \qquad \Delta V_{\mathrm{ts}} = |V_{\mathrm{tsb}} - V_{\mathrm{tsc}}|.$$

**Step 2 — Ratio of changes:**

$$\frac{\Delta V_{\mathrm{fts}}}{\Delta V_{\mathrm{ts}}}.$$

**Step 3 — Adjustment by baseline:**

$$\frac{\Delta V_{\mathrm{fts}}}{\Delta V_{\mathrm{ts}}} \times \frac{V_{\mathrm{tsb}}}{V_{\mathrm{ftsb}}}.$$

**Step 4 — Preference percentage:**

$$\text{Preference }(\%) = \left(1 - \frac{|V_{\mathrm{ftsb}} - V_{\mathrm{ftsc}}|}{|V_{\mathrm{tsb}} - V_{\mathrm{tsc}}|} \times \frac{V_{\mathrm{tsb}}}{V_{\mathrm{ftsb}}}\right) \times 100\%.$$

Higher preference indicates that FTS is more stable (smaller change when varying the seed) and/or better in MSE relative to TS under the baseline.

---

## Code & Repo

| Resource | Link |
|----------|------|
| **Code (GitHub)** | [github.com/xll0328/MM25-FTS](https://github.com/xll0328/MM25-FTS) |
| **Conference** | ACM MM 2025, Dublin, Ireland |
| **DOI** | [10.1145/3746027.3754963](https://dl.acm.org/doi/10.1145/3746027.3754963) |

---

## Citation

```bibtex
@inproceedings{lai2025fts,
  title={From Guesswork to Guarantee: Towards Faithful Multimedia Web Forecasting with TimeSieve},
  author={Songning Lai and Ninghui Feng and Jiechao Gao and Hao Wang and Haochen Sui and Xin Zou and Jiayu Yang and Wenshuo Chen and Lijie Hu and Hang Zhao and Xuming Hu and Yutao Yue},
  booktitle={Proceedings of the 33rd ACM International Conference on Multimedia (MM '25)},
  year={2025},
  address={Dublin, Ireland},
}
```

---

[← Back to Home]({{ '/' | relative_url }})

---
permalink: /fts/
title: "FTS: From Guesswork to Guarantee — Faithful Multimedia Web Forecasting with TimeSieve"
excerpt: "ACM MM 2025 — Official project page and code"
author_profile: true
---

**This paper was accepted at ACM MM 2025** (33rd ACM International Conference on Multimedia, October 27–31, 2025, Dublin, Ireland). CCF A, Core A\* · [**Code (GitHub)**](https://github.com/xll0328/MM25-FTS)

**Authors:** Songning Lai, Ninghui Feng, Jiechao Gao, Hao Wang, Haochen Sui, Xin Zou, Jiayu Yang, Wenshuo Chen, Lijie Hu, Hang Zhao, Xuming Hu, Yutao Yue

---

## Abstract

The domain of time series forecasting has gained significant attention due to its critical applications in multimedia-rich web traffic (including video streaming workloads and dynamic content delivery) and cross-platform advertisement click predictions. While models like **TimeSieve** have demonstrated strong capabilities in predicting web visitation metrics, they suffer from critical **unfaithfulness** issues: sensitivity to random seeds, input noise, layer noise, and parameter perturbations. We propose **Faithful TimeSieve (FTS)**, an enhanced framework designed to improve prediction reliability and robustness. Our approach systematically detects and mitigates unfaithfulness in TimeSieve, significantly enhancing its stability and consistency. Experimental results demonstrate that FTS substantially improves the model's faithfulness and achieves SOTA on multiple datasets, setting a new standard for temporal forecasting methods. This advancement is particularly crucial for web traffic forecasting where prediction accuracy directly impacts operational decisions.

---

## Motivation

- **Stability under random seeds** — Performance should not vary drastically across different training runs.
- **Robustness to input perturbations** — Small noise in the input should not cause large prediction errors.
- **Robustness to layer/parameter perturbations** — Model behavior should remain consistent under parameter noise.

---

## FTS: Three Attributes

1. **Similarity in IB Space (Sib)** — Filtered coefficients in the information-bottleneck space remain close under bounded input perturbation (radius R₁, threshold β).
2. **Consistency in Prediction Space (Cps)** — Predictions with fine-tuned weights vs. original weights differ by at most α₁.
3. **Stability in Noise Perturbations (Snp)** — Predictions under input perturbation δ (‖δ‖ ≤ R₂) differ by at most α₂.

---

## Framework

The FTS framework adds three auxiliary losses to TimeSieve training: **L_sib**, **L_cps**, **L_snp**, and uses PGD to find worst-case perturbations. The total loss is:

**L = L_reg + L_IB + λ₁·L_sib + λ₂·L_cps + λ₃·L_snp**

<img src="{{ '/images/fts/model.png' | relative_url }}" alt="FTS framework" style="max-width: 95%; height: auto;" />

*Framework of Faithful TimeSieve (FTS).*

---

## Results

**Forecasting (no perturbation):** FTS achieves best or second-best MAE/MSE on Wiki, ETTh1, and Exchange for horizons 48, 96, 144, 192 (lookback T=2H).

**Faithfulness under random seeds:** On Exchange 96-step, FTS reduces seed-induced variability (e.g. Preference up to 99.61% vs. baseline).

**Robustness under perturbation:** Under input perturbation (IP) and intermediate-layer perturbation (ILP), FTS with optimization (IPO, ILPO) significantly recovers performance (see paper tables).

**Heatmaps (Wiki):** Prediction horizons 48, 96, 144, 192.

<p align="center">
  <img src="{{ '/images/fts/heatmaps_48.png' | relative_url }}" alt="H=48" style="max-width:24%; height:auto; display:inline-block;">
  <img src="{{ '/images/fts/heatmaps_96.png' | relative_url }}" alt="H=96" style="max-width:24%; height:auto; display:inline-block;">
  <img src="{{ '/images/fts/heatmaps_144.png' | relative_url }}" alt="H=144" style="max-width:24%; height:auto; display:inline-block;">
  <img src="{{ '/images/fts/heatmaps_192.png' | relative_url }}" alt="H=192" style="max-width:24%; height:auto; display:inline-block;">
</p>

---

## Code & Repo

| Resource | Link |
|----------|------|
| **Code (GitHub)** | [github.com/xll0328/MM25-FTS](https://github.com/xll0328/MM25-FTS) |
| **Conference** | ACM MM 2025, Dublin, Ireland |

Installation, data preparation, and run instructions are in the [repository README](https://github.com/xll0328/MM25-FTS).

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

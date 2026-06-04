---
permalink: /
title: ""
excerpt: ""
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<div class="about-hero-card">
  <div class="about-hero-main">
    <h1 class="about-hero-name">Songning Lai <span>(Sony)</span></h1>
    <p class="about-hero-role">
      <span class="about-hero-role-line">Quant Researcher at <a href="https://www.joinquant.com"><strong>JoinQuant</strong></a></span>
      <span class="about-hero-role-line">Trustworthy AI / Concept Bottleneck Models / Robust ML</span>
    </p>
  </div>
  <div class="about-hero-chips">
    <span class="about-chip">Trustworthy AI</span>
    <span class="about-chip">CBMs</span>
    <span class="about-chip">Explainability</span>
    <span class="about-chip">Robustness</span>
    <span class="about-chip">Reliable Forecasting</span>
    <span class="about-chip">LLM Interpretability</span>
  </div>
</div>

I received my undergraduate degree from the School of Information Science and Engineering, <a href="https://www.sdu.edu.cn/"><strong>Shandong University</strong></a>, where I was supervised by Prof. <a href="https://faculty.sdu.edu.cn/liuzhi1/zh_CN/index.htm"><strong>Zhi Liu</strong></a>. I later worked as a research assistant at HKUST(GZ) AI Thrust & INFO Hub under Prof. <a href="https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/YUE-Yutao/yutaoyue"><strong>Yutao Yue</strong></a>.

My research focuses on <strong>trustworthy AI</strong>, especially <strong>concept bottleneck models</strong>, robust interpretability, reliable forecasting, medical AI, autonomous driving, and LLM knowledge editing. Representative work has appeared at ICLR, NeurIPS, ACM MM, TMLR, ECML-PKDD, ICRA, and ICASSP.

Please email me at <em>lais0328eee@gmail.com</em> for research discussions or collaboration.

<p class="home-action-row">
  <a class="home-action" href="{{ '/cv/' | relative_url }}">Full CV and publications</a>
  <a class="home-action secondary" href="{{ site.author.googlescholar }}">Google Scholar</a>
  <a class="home-action secondary" href="https://github.com/{{ site.author.github }}">GitHub</a>
</p>

<span class='anchor' id='research'></span>

# Research

<div class="research-focus-grid">
  <div class="research-focus-card">
    <h3>Trustworthy AI</h3>
    <p>Explanation, robustness, faithfulness, and safety for models that need to be inspected before deployment.</p>
  </div>
  <div class="research-focus-card">
    <h3>Concept Bottleneck Models</h3>
    <p>Concept-level interfaces for vision, multimodal, medical, autonomous-driving, continual-learning, and security settings.</p>
  </div>
  <div class="research-focus-card">
    <h3>Reliable Forecasting</h3>
    <p>Forecasting systems that expose uncertainty, reject unreliable predictions, and remain useful under distribution shift.</p>
  </div>
</div>

<div class="section-divider"></div>

<span class='anchor' id='news'></span>

# News

<div class="news-scroll-container">
<ul class="news-list news-list-home">
<li><em>06.2026</em> Our paper <a href="{{ '/images/FixCBM_ICANN2026.pdf' | relative_url }}">"Concept-Consistent Semi-Supervised Learning for Concept Bottleneck Models via Confidence-Guided Pseudo-Label Propagation"</a> has been accepted at <strong>ICANN 2026</strong>.</li>
<li><em>03.2026</em> <a href="https://openreview.net/forum?id=bntZBG9fBY">"Multimodal Deception in Explainable AI"</a> has been accepted at <strong>TMLR 2026</strong>. <strong><a href="{{ '/cat/' | relative_url }}">Project Page</a></strong></li>
<li><em>03.2026</em> "Towards Better Evaluation Metrics for Text-to-Motion Generation" won the <strong><a href="https://time.griffith.edu.au/workshop/time2026/pages/media.html">Best Paper Runner-Up Award</a></strong> at the WWW 2026 TIME Workshop.</li>
<li><em>01.2026</em> "ACE: Attribution-Controlled Knowledge Editing for Multi-hop Factual Recall" has been accepted at <strong>ICLR 2026</strong>.</li>
<li><em>01.2026</em> "Towards Reliable Time Series Forecasting under Future Uncertainty" has been accepted at <strong>ICASSP 2026</strong>.</li>
<li><em>08.2025</em> Three papers have been accepted at <strong>ACM MM 2025 BNI Track</strong>, including CONCIL.</li>
<li><em>07.2025</em> Four papers have been accepted at <strong>ACM MM 2025</strong>, including FTS.</li>
<li><em>05.2025</em> "Stable Vision Concept Transformers for Medical Diagnosis" has been accepted at <strong>ECML-PKDD 2025</strong>.</li>
</ul>
</div>

<p><a href="{{ '/cv/' | relative_url }}">More news, honors, service, and complete publications are listed in the CV page.</a></p>

<div class="section-divider"></div>

<span class='anchor' id='publications'></span>

# Publications (Selected)

<div class="publications-scroll-container">
{% include selected-publications.html %}
</div>

<p class="home-footnote">Symbols: † indicates equal contribution; ~ indicates corresponding author where used in the paper record.</p>

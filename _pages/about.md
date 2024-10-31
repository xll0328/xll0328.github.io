---
permalink: /
title: ""
excerpt: ""
author_profile: true
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

Here is **Songning Lai (赖颂宁)**.( You can call me Sony. )

I am a junior student studying in the School of Information Science and Engineering([**Chongxin College**](https://baike.baidu.com/item/%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6%E5%B4%87%E6%96%B0%E5%AD%A6%E5%A0%82/20809738?fr=aladdin)), [**Shandong University**](https://www.sdu.edu.cn/) in China,supervised by Prof. [**Zhi Liu**](https://faculty.sdu.edu.cn/liuzhi1/zh_CN/index.htm). I am also an incoming PhD student at HKUST@AI Thrust&INFO Hub, supervised by Prof. [**Yutao Yue**](https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/YUE-Yutao/yutaoyue).

My research interests are **Explainable AI (XAI)** and **Privacy-preserving AI**. Specifically, my research goal is to build faithful XAI systems which are easily understood by users and are robust in various environments (e.g. **XAI4LLM, XAI4NLP, XAI4MM, XAI4CV, XAI4Security** and so on). I am also interested in applying the XAI to real-world scenarios (e.g. optical systems, recommender systems, and traffic forecasting etc.). At the same time, I am also very interested in the research of AI in the field of **astronomy, environmental science, materials and medicine**.

Prior to this, I have also been exposed to bioinformatics, multimodal sentiment analysis, domain generalization and other research areas.

If you are interested in any aspect of me, I would love to chat and collaborate, please email me at - *songninglai[at]hkust-gz[dot]edu[dot]cn*.


# 🔥 News
- *09.2024:* Our paper “Towards Multi-dimensional Explanation Alignment for Medical Classification” has been accepted at The Conference on Neural Information Processing Systems **(NeurIPS 2024)**!
- *07.2024:* Our paper on Time Series has been accepted by **IJCAI 2024 workshop**(CCF A).
- *06.2024:* Our paper on Community Detection has been accepted by [Neurocomputing](https://arxiv.org/pdf/2309.11798)(JCR Q1; CCF C).
- *03.2024:* I am awarded the honor of **excellent graduate of Shandong Province** and **excellent graduate of Shandong University**.
- *03.2024:* Our paper on Multimodal Sentiment Analysis has been accepted by [**IJCNN2024**](https://www.google.com/search?q=ijcnn2024&oq=IJCNN&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIGCAAQRRg9MgYIARBFGDsyBggCECMYJzIGCAMQABgeMgYIBBBFGDsyBggFEAAYHjIGCAYQRRg9MgYIBxBFGDzSAQg0MzIyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8)(CCF C).
- *01.2024:* Our paper “Faithful Vision-Language Interpretation via Concept Bottleneck Models” has been accepted at The 12th International Conference on Learning Representations **(ICLR 2024)**!.
- *10.2023:* Our paper on Multimodal Sentiment Analysis has been accepted by the journal [**Displays**](https://www.sciencedirect.com/journal/displays) (JCR Q1).
- *10.2023:* Our paper on Computer Vison has been accepted by the journal [**Image and Vison Computing**](https://www.sciencedirect.com/journal/image-and-vision-computing) (JCR Q1; CCF C).
- *11.2022:* Get the **First Prize** in Contemporary Undergraduate Mathematical Contest in Modeling National (top 0.6%).
- *11.2022:* I am very glad to give an **oral** report at the international conference [CISP-BMEI](http://www.cisp-bmei.cn/) 2022 and win the **Best Paper Award**.
- *10.2022:* Our paper on Bioinformation has been accepted by CISP-BMEI 2022 (Tsinghua B)

# 📝 Publications (selected)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2024</div><img src='images/Accepted_ICLR_24_FCBM.pdf' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Faithful Vision-Language Interpretation via Concept Bottleneck Models](https://openreview.net/forum?id=rp0EdI8X4e)**

**Songning Lai†**, Lijie Hu†, Junxiao Wang, Laure Berti and Di Wang

The Twelfth International Conference on Learning Representations (**ICLR2024**). (CCF None)

[**Paper**](https://openreview.net/forum?id=rp0EdI8X4e) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>


</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/NeurIPS_24_Multi_dimensional_Explanation (1).pdf' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[Towards Multi-dimensional Explanation Alignment for Medical Classification](https://arxiv.org/abs/2410.21494)**

  
Lijie Hu†, **Songning Lai†**, Wenshuo Chen†, Hongru Xiao, Hongbin Lin, Lu Yu, Jingfeng Zhang, and Di Wang

The Conference on Neural Information Processing Systems (**NeurIPS 2024**).(CCF A)

[**Paper**](https://arxiv.org/abs/2410.21494) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

- We proposed an end-to-end framework called Med-MICN, which leverages the strength of different XAI methods such as concept-based models, neural symbolic methods, saliency maps, and concept semantics.
- Our outputs are interpreted in multiple dimensions, including concept prediction, saliency maps, and concept reasoning rules, making it easier for experts to identify and correct errors.
- Med-MICN demonstrates superior performance and interpretability compared with other concept-based models and the black-box model baselines.  
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/time_pre.png' alt="sym" width="100%"></div></div>

<div class='paper-box-text' markdown="1">
  
**[FTS: A FRAMEWORK TO FIND A FAITHFUL TIMESIEVE](https://arxiv.org/pdf/2405.19647)**
  
Songning Lai#, Ninghui Feng#, Jiechao Gao, Hao Wang, Haochen Sui, Xin Zou, Jiayu Yang, **Wenshuo Chen**, Hang Zhao, Xuming Hu, Yutao Yue
- Our research provides faithful technical support and theoretical support to the field of time series forecasting, promising to advance the development and reliability of forecasting methods within the industry. Through these efforts, we aim to bolster the trustworthiness of models, ultimately supporting decision-making processes that rely on accurate and consistent predictions.
</div>
</div>


# 🎖 Honors and Awards
- *2023.10* National first prize in CUMCM-2023 **(Top 0.3%)**
- *2023.12* National Award for Intelligent Car 5G Communication Outdoor Competition 2023 **(Top 0.2%)**. 

# 📖 Educations
- *2021.09 - Present*, Undergraduate Student, Shandong University, Qingdao. 





# 💻 Internships
- *2024.09* I join CUHK(shenzhen) as a RA supervised by Professor [Zhizheng Wu](https://drwuz.com/).
- *2023.12*: I am a remote intern supervised by Professor [Di Wang](https://shao3wangdi.github.io/).
- *2023.08*: I am a remote intern supervised by Professor [Chen Chen](https://www.crcv.ucf.edu/chenchen/).
- *2023.06*: I join Agibot as a reasearch intern.

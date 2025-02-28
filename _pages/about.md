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

Here is **Songning Lai**.( You can call me Sony. )

I am a junior student studying in the School of Information Science and Engineering([**Chongxin College**](https://baike.baidu.com/item/%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6%E5%B4%87%E6%96%B0%E5%AD%A6%E5%A0%82/20809738?fr=aladdin)), [**Shandong University**](https://www.sdu.edu.cn/) in China,supervised by Prof. [**Zhi Liu**](https://faculty.sdu.edu.cn/liuzhi1/zh_CN/index.htm). I am also an incoming PhD student (25 Fall) at HKUST@AI Thrust&INFO Hub, supervised by Prof. [**Yutao Yue**](https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/YUE-Yutao/yutaoyue).

My primary research interest lies in the domain of **Trustworthy AI**, encompassing **explainability**, **robustness**, **faithfulness**, and **safety** of AI. Specifically, I have focused extensively on **Concept Bottleneck Models (CBMs)** within the realm of explainability. My past research includes an investigation into the robustness and generalization of CBMs in unsupervised settings [(ICLR 2024)](https://openreview.net/forum?id=rp0EdI8X4e), application of CBMs in multimodal contexts for unsupervised tasks (Under Review), pioneering work on continual learning with CBMs [(Under review)](https://arxiv.org/pdf/2411.17471), as well as the first exploration of CBMs in the context of security, particularly backdoor attacks [(Under review 1;](https://arxiv.org/pdf/2410.04823)[ Under review 2)](https://arxiv.org/pdf/2411.16512). Furthermore, my research has extended to applying CBMs in medical fields [(NIPS 2024;](https://arxiv.org/abs/2410.21494) Under review) and autonomous driving applications [(ICRA 2025)](https://arxiv.org/pdf/2409.10330).

Beyond my work with CBMs, I have also explored issues related to robustness and faithfulness in time series (Under review), continual learning for time series classification tasks [(Under review)](https://arxiv.org/pdf/2410.15954), and image segmentation tasks [(Under review)](https://arxiv.org/pdf/2412.10834). Prior to these endeavors, my research efforts were directed towards computer vision ([Image and Vison Computing](https://www.sciencedirect.com/science/article/pii/S0262885623002081); [ICASSP 2025](https://arxiv.org/pdf/2409.03192)), multimodal sentiment analysis ([IJCNN 2024](https://arxiv.org/pdf/2305.08473); [Displays](https://www.sciencedirect.com/science/article/abs/pii/S0141938223001968)), and community detection ([Neurocomputing](https://arxiv.org/pdf/2309.11798)).

Looking ahead, I am keen on pursuing **Joint** PhD opportunities starting in 2025 FALL (With HKUST(GZ)). My future research aims to delve deeper into **Trustworthy AI**, particularly focusing on **explainability, robustness, faithfulness**, and **safety**, alongside exploring its applications in **AI4Science**, especially in the **biological** and **medical sectors**.

If you are interested in any aspect of me, I would love to chat and collaborate, please email me at - *songninglai[at]hkust-gz[dot]edu[dot]cn*.


# 🔥 News
- *02.2025:* Our paper "Enhancing domain adaptation for plant diseases detection through Masked Image Consistency in Multi-Granularity Alignment" has been accepted by **Expert Systems With Applications**(JCR Q1, IF:8.4, CCF C).
- *01.2025:* Our paper "Dependable Robust Interpretable Visionary Ensemble Framework in Autonomous Driving" has been accepted by **ICRA 2025** (CCF B)!
- *12.2024:* Our paper "PEPL:Precision-Enhanced Pseudo-Labeling forFine-Grained lmage Classification inSemi-Supervised Learning" has been accepted at **ICASSP 2025** (CCF B)!
- *09.2024:* Our paper “Towards Multi-dimensional Explanation Alignment for Medical Classification” has been accepted by **(NeurIPS 2024)** (CCF A)!
- *07.2024:* Our paper on Time Series has been accepted by **IJCAI 2024 workshop** (CCF A).
- *06.2024:* Our paper on Community Detection has been accepted by [Neurocomputing](https://arxiv.org/pdf/2309.11798)(JCR Q1; CCF C).
- *03.2024:* I am awarded the honor of **excellent graduate of Shandong Province** and **excellent graduate of Shandong University**.
- *03.2024:* Our paper on Multimodal Sentiment Analysis has been accepted by [**IJCNN2024**](https://www.google.com/search?q=ijcnn2024&oq=IJCNN&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIGCAAQRRg9MgYIARBFGDsyBggCECMYJzIGCAMQABgeMgYIBBBFGDsyBggFEAAYHjIGCAYQRRg9MgYIBxBFGDzSAQg0MzIyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8)(CCF C).
- *01.2024:* Our paper “Faithful Vision-Language Interpretation via Concept Bottleneck Models” has been accepted at The 12th International Conference on Learning Representations **(ICLR 2024)**!.
- *10.2023:* Our paper on Multimodal Sentiment Analysis has been accepted by the journal [**Displays**](https://www.sciencedirect.com/journal/displays) (JCR Q1).
- *10.2023:* Our paper on Computer Vison has been accepted by the journal [**Image and Vison Computing**](https://www.sciencedirect.com/journal/image-and-vision-computing) (JCR Q1; CCF C).
- *11.2022:* Get the **First Prize** in Contemporary Undergraduate Mathematical Contest in Modeling National (top 0.6%).
- *11.2022:* I am very glad to give an **oral** report at the international conference [CISP-BMEI](http://www.cisp-bmei.cn/) 2022 and win the **Best Paper Award**.
- *10.2022:* Our paper on Bioinformation has been accepted by CISP-BMEI 2022 (Tsinghua B)

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2024</div><img src='images/FVLC.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Faithful Vision-Language Interpretation via Concept Bottleneck Models](https://openreview.net/forum?id=rp0EdI8X4e)**

**Songning Lai**, Lijie Hu, Junxiao Wang, Laure Berti and Di Wang

The Twelfth International Conference on Learning Representations (**ICLR2024**). (CCF None)

We introduce the Faithful Vision-Language Concept (FVLC) model, addressing the instability of label-free Concept Bottleneck Models (CBMs). Our FVLC model demonstrates superior stability against input and concept set perturbations across four benchmark datasets, with minimal accuracy degradation compared to standard CBMs, offering a reliable solution for model interpretation.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/medicn.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[Towards Multi-dimensional Explanation Alignment for Medical Classification](https://arxiv.org/abs/2410.21494)**

Lijie Hu†, **Songning Lai†**, Wenshuo Chen†, Hongru Xiao, Hongbin Lin, Lu Yu, Jingfeng Zhang, and Di Wang

The Conference on Neural Information Processing Systems (**NeurIPS 2024**).(CCF A)

- We proposed an end-to-end framework called Med-MICN, which leverages the strength of different XAI methods such as concept-based models, neural symbolic methods, saliency maps, and concept semantics.
- Our outputs are interpreted in multiple dimensions, including concept prediction, saliency maps, and concept reasoning rules, making it easier for experts to identify and correct errors.
- Med-MICN demonstrates superior performance and interpretability compared with other concept-based models and the black-box model baselines.  
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICRA 2025</div><img src='images/WechatIMG169.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[DRIVE: Dependable Robust Interpretable Visionary Ensemble Framework in Autonomous Driving](https://arxiv.org/pdf/2409.10330v1)**

**Songning Lai†**, Tianlang Xue, Hongru Xiao, Lijie Hu, Jiemin Wu, Ruiqiang Xiao, Ninghui Feng, Haicheng Liao, Zhenning Yang, Yutao Yue~

The Conference on (**ICRA 2025**).(CCF B)

We introduce DRIVE, a framework designed to enhance the dependability and stability of explanations in end-to-end unsupervised autonomous driving models, addressing instability issues and improving trustworthiness through consistent and stable interpretability and output, as demonstrated by empirical evaluations. This framework provides novel metrics for assessing the reliability of concept-based explainable autonomous driving systems, advancing their real-world deployment.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2025</div><img src='images/WechatIMG168.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[PEPL: Precision-Enhanced Pseudo-Labeling for Fine-Grained Image Classification in Semi-Supervised Learning](https://arxiv.org/pdf/2409.03192)**

Bowen Tian†, **Songning Lai†**, Lujundong Li, Zhihao Shuai, Runwei Guan, Tian Wu, Yutao Yue~

The Conference on (**ICASSP 2025**).(CCF B)

We introduce Precision-Enhanced Pseudo-Labeling (PEPL), a semi-supervised learning approach for fine-grained image classification that generates and refines pseudo-labels using Class Activation Maps (CAMs) to capture essential details, significantly improving accuracy and robustness over existing methods on benchmark datasets. The approach consists of initial and semantic-mixed pseudo-label generation phases to enhance the quality of labels and has been open-sourced for public use.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CISP-BMEI 2022</div><img src='images/bestpaper.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Predicting Lysine Phosphoglycerylation Sites using Bidirectional Encoder Representations with Transformers & Protein Feature Extraction and Selection](https://ieeexplore.ieee.org/abstract/document/9979871/)**

**Songning Lai**, Xifeng Hu, Jing Han, Chun Wang, Subhas Mukhopadhyay, Zhi Liu~ and Lan Ye~

2022 15th International Congress on Image and Signal Processing, BioMedical Engineering and Informatics (**CISP-BMEI 2022**).(Tsinghua B)

We developed a model using protein feature acquisition, F_Score selection, KNN cleaning, and SMOTE for positive sample synthesis, combined with BERT classification based on Transformer, achieving an accuracy of up to 99.61% and an MCC of 99.1%, surpassing previous models. This work demonstrates significant potential for future applications.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCNN 2024</div><img src='images/WechatIMG163.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Shared and private information learning in multimodal sentiment analysis with deep modal alignment and self-supervised multi-task learning](https://arxiv.org/pdf/2305.08473)**

**Songning La†**, Jiakang Li, Guinan Guo, Xifeng Hu, Yulong Li, Yuan Tan, Zichen Song, Yutong Liu, Zhaoxia Ren~, Chun Wang~, Danmin Miao~ and Zhi Liu~

International Joint Conference on Neural Networks (**IJCNN 2024**). (CCF C)

We propose a deep learning module that captures shared information across modalities using a covariance matrix and introduces a self-supervised label generation module to extract modality-specific private information, enhancing multimodal sentiment analysis performance through multi-task learning. Extensive experiments on benchmark datasets demonstrate the model's effectiveness in capturing subtle multimodal sentiments.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Neurocomputing</div><img src='images/WechatIMG164.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[A Comprehensive Review of Community Detection in Graphs](https://arxiv.org/pdf/2309.11798)**

Jiakang Li†, **Songning Lai†**, Zhihao Shuai, Yuan Tan, Yifan Jia, Mianyang Yu, Zichen Song, Xiaokang Peng, Ziyang Xu, Yongxin Ni, Haifeng Qiu, Jiayu Yang, Yutong Liu, Yonggang Lu~

**Neurocomputing** (JCR Q1 (IF: 6.0) CCF C)

This review explores community detection in graphs, covering methods such as modularity-based, spectral clustering, probabilistic modelling, and deep learning, and introduces a new method, while comparing performances across datasets with and without ground truth. The review offers a comprehensive understanding of the current landscape in community detection techniques.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Displays</div><img src='images/WechatIMG165.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Multimodal Sentiment Analysis: A Survey](https://www.sciencedirect.com/science/article/abs/pii/S0141938223001968)**

**Songning Lai**, Haoxuan Xu, Xifeng Hu, Zhaoxia Ren~ and Zhi Liu~

**Displays** (JCR Q1 (IF: 4.3))

This review provides an overview of multimodal sentiment analysis, covering its definition, history, recent datasets, advanced models, challenges, and future prospects, offering guidance on promising research directions. The review aims to support researchers in developing more effective models in this rapidly evolving field.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Image and Vision Computing</div><img src='images/WechatIMG166.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Cross-domain car detection model with integrated convolutional block attention mechanism](https://www.sciencedirect.com/science/article/pii/S0262885623002081)**

Haoxuan Xu†, **Songning Lai†** and Yang Yang~

**Image and Vision Computing** (JCR Q1 (IF:4.7) CCF C)

We propose a Cross-Domain Car Detection Model with an integrated convolutional block Attention mechanism (CDCDMA), featuring a complete cross-domain detection framework, unpaired target domain image generation emphasizing car headlights, GIOU loss function, and a two-headed CBAM, which improved detection performance by 40% over non-CDCDMA models on the SODA 10 M and BDD100K datasets. This model significantly enhances cross-domain car recognition, outperforming most existing advanced models.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ESWA</div><img src='images/ESWA.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Enhancing domain adaptation for plant diseases detection through Masked Image Consistency in Multi-Granularity Alignment**

Guinan Guo, **Songning Lai**, Qingyang Wu,, Yuntao Shou, and Wenxu Shi

**Expert Systems With Applications** (JCR Q1 (IF:8.4) CCF C)

This study proposes MIC-MGA, a deep learning approach combining Multi-Granularity Alignment and Masked Image Consistency, to enhance cross-domain generalization in plant disease detection. The method improves object detector architecture while integrating domain adaptation and style-augmented training to address feature distribution shifts across different environmental conditions. Experimental results demonstrate state-of-the-art performance in cross-domain detection tasks (highest mAP), showing significant potential for improving disease prevention and sustainable agriculture.

</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG167.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[CAT: Concept-level backdoor ATtacks for Concept Bottleneck Models](https://arxiv.org/abs/2410.04823)**

**Songning Lai**, Jiayu Yang, Yu Huang, Lijie Hu, Tianlang Xue, Zhangyi Hu, Jiaxu Li, Haicheng Liao, Yutao Yue~

We introduce CAT and CAT+, methodologies for concept-level backdoor attacks on Concept Bottleneck Models (CBMs), which use conceptual representations to embed triggers during training, allowing for controlled manipulation of predictions; our evaluation shows high attack success rates and stealthiness, highlighting potential security risks in CBMs.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG172.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Wolf2Pack: The AutoFusion Framework for Dynamic Parameter Fusion](https://arxiv.org/abs/2410.05746?context=cs.CV)**

Bowen Tian†, **Songning Lai†**, Yutao Yue

We introduce AutoFusion, a framework that dynamically permutes parameters across layers of models with the same architecture, enabling multi-task learning without pre-training, and showing superior performance on benchmark datasets compared to methods like Weight Interpolation and Git Re-Basin. This framework provides a scalable solution for integrating models, suitable for advancing research and practical use.

</div>
</div>








<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG170.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[TimeSieve: Extracting Temporal Dynamics through Information Bottleneck](https://arxiv.org/pdf/2406.05036)**

Ninghui Feng†, **Songning Lai†**, Fobao Zhou, Zhenxiao Yin, Hang Zhao~

This paper introduces TimeSieve, an innovative time series forecasting model that uses wavelet transforms and information bottleneck theory to capture multi-scale features and filter redundant information, significantly improving accuracy and generalization without manual hyperparameter tuning, thus outperforming existing methods in most cases.


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/time_pre.png' alt="sym" width="100%"></div></div>

<div class='paper-box-text' markdown="1">
  
**[FTS: A FRAMEWORK TO FIND A FAITHFUL TIMESIEVE](https://arxiv.org/pdf/2405.19647)**
  
**Songning Lai**, Ninghui Feng, Jiechao Gao, Hao Wang, Haochen Sui, Xin Zou, Jiayu Yang, Wenshuo Chen, Hang Zhao, Xuming Hu, Yutao Yue~

- Our research provides faithful technical support and theoretical support to the field of time series forecasting, promising to advance the development and reliability of forecasting methods within the industry. Through these efforts, we aim to bolster the trustworthiness of models, ultimately supporting decision-making processes that rely on accurate and consistent predictions.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG171.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[Maintaining Informative Coherence: Migrating Hallucinations in Large Language Models via Absorbing Markov Chains](https://arxiv.org/pdf/2410.20340)**

Jiemin Wu, **Songning Lai**, Ruiqiang Xiao, Tianlang Xue, Jiayu Yang, Yutao Yue

We propose a novel decoding strategy using absorbing Markov chains to measure and enhance the fidelity of contextual information in Large Language Models (LLMs), reducing hallucinations without additional training, and demonstrating superior performance in maintaining accuracy on benchmarks like TruthfulQA and FACTOR.


</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG425.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[RMDM: Radio Map Diffusion Model with Physics Informed](https://arxiv.org/pdf/2501.19160)**

Haozhe Jia, Wenshuo Chen, Zhihui Huang, Hongru Xiao, Nanqian Jia, Keming Wu, **Songning Lai**, Yutao Yue

Radio map reconstruction is essen- tial for enabling advanced applications, yet chal- lenges such as complex signal propagation and sparse data hinder accurate reconstruction. To ad- dress these issues, we propose the Radio Map Diffusion Model (RMDM), a physics-informed framework that integrates Physics-Informed Neu- ral Networks (PINNs) to incorporate constraints like the Helmholtz equation. RMDM employs a dual U-Net architecture: the first ensures physical consistency by minimizing PDE residuals, bound- ary conditions, and source constraints, while the second refines predictions via diffusion-based de- noising. By leveraging physical laws, RMDM sig- nificantly enhances accuracy, robustness, and gen- eralization. 

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/T2M.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[Free-T2M: Frequency Enhanced Text-to-Motion Diffusion Model With Consistency Loss](https://arxiv.org/pdf/2501.18232)**

Wenshuo Chen, Haozhe Jia, **Songning Lai**, Keming Wu, Hongru Xiao, Lijie Hu, Yutao Yue

Rapid progress in text-to-motion generation has been largely driven by diffusion models. However, existing methods focus solely on temporal modeling, thereby overlooking frequency-domain analysis. We identify two key phases in motion denoising: the **semantic planning stage** and the **fine-grained improving stage**. To address these phases effectively, we propose **Fre**quency **e**nhanced **t**ext-**to**-**m**otion diffusion model (**Free-T2M**), incorporating stage-specific consistency losses that enhance the robustness of static features and improve fine-grained accuracy. 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/SegACIL.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[SegACIL: Solving the Stability-Plasticity Dilemma in Class-Incremental Semantic Segmentation](https://arxiv.org/pdf/2412.10834)**

Jiaxu Li†, **Songning Lai†**, Rui Li, Di Fang, Kejia Fan, Jianheng Tang, Yuhan Zhao, Rongchang Zhao, Dongzhan Zhou, Yutao Yue, Huiping Zhuang

We propose SegACIL, a novel continual learning method for semantic segmentation using a linear closed-form solution, requiring only a single epoch and reducing computational costs. SegACIL achieves performance on par with joint learning, effectively balancing stability and plasticity by retaining prior knowledge while adapting to new data, addressing the stability-plasticity dilemma.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/CONCIL.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[Learning New Concepts, Remembering the Old: A Novel Continual Learning](https://arxiv.org/pdf/2411.17471)**

Songning Lai, Mingqian Liao, Zhangyi Hu, Jiayu Yang, Wenshuo Chen, Yutao Yue

To enhance Concept Bottleneck Models (CBMs) for evolving data streams, we propose CONceptual Continual Incremental Learning (CONCIL), a framework that accumulates new concepts and classes while preventing catastrophic forgetting. CONCIL reformulates updates as linear regression problems, eliminating gradient-based updates and requiring only recursive matrix operations, ensuring computational efficiency. Suitable for real-time and large-scale applications, CONCIL achieves "absolute knowledge memory" and outperforms traditional CBMs in concept- and class-incremental settings, setting new benchmarks for continual learning.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/STA.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[Beyond Task Vectors: Selective Task Arithmetic Based on Importance Metrics](https://arxiv.org/pdf/2411.16139)**

Tian Bowen†, **Lai Songning†**, Wu Jiemin, Shuai Zhihao, Ge Shiming, Yue Yutao


This paper introduces Selective Task Arithmetic (STA), a training-free framework enhancing multi-task performance via task-specific parameter fusion. STA addresses parameter importance diversity using a loss-sensitive metric from a first-order Taylor expansion, reduces over-reliance on hyperparameter tuning by improving task vector sparsity, and mitigates task forgetting more effectively by leveraging parameter importance to minimize noisy elements, improving model generalization and robustness.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/CGard.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[Guarding the Gate: ConceptGuard Battles Concept-Level Backdoors in Concept Bottleneck Models](https://arxiv.org/pdf/2411.16512)**

Songning Lai, Yu Huang, Jiayu Yang, Gaoxiang Huang, Wenshuo Chen, Yutao Yue

Our contributions are threefold: (i) we present ConceptGuard as the first defense mechanism tailored for concept-level backdoor attacks in CBMs; (ii) we provide theoretical guarantees that ConceptGuard can effectively defend against such attacks within a certain trigger size threshold, ensuring robustness; and (iii) we demonstrate that ConceptGuard maintains the high performance and interpretability of CBMs, crucial for trustworthiness. 

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/DRIVE.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[DRIVE: Dual-Robustness via Information Variability and Entropic Consistency in Source-Free Unsupervised Domain Adaptation](https://arxiv.org/pdf/2411.15976)**

Ruiqiang Xiao†, **Songning Lai†**, Yijun Yang, Jiemin Wu, Yutao Yue, Lei Zhu


To address challenges in Source-Free Unsupervised Domain Adaptation (SFUDA), we propose DRIVE, a dual-model framework leveraging mutual information and entropy. DRIVE uses two identically initialized models; one is perturbed via PGD guided by mutual information to focus on high-uncertainty regions, while an entropy-aware pseudo-labeling strategy adjusts label weights based on prediction uncertainty. DRIVE's two-stage adaptation process first aligns models on stable features using mutual information consistency loss, then dynamically adjusts perturbation levels to enhance generalization and robustness. Evaluations show DRIVE outperforms existing methods in adaptation accuracy and stability across complex domains.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/TSACIL.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[TS-ACL: A Time Series Analytic Continual Learning Framework for Privacy-Preserving and Class-Incremental Pattern Recognition](https://arxiv.org/pdf/2410.15954)**

Kejia Fan†, Jiaxu Li†, **Songning Lai†**, Linpu Lv, Anfeng Liu, Jianheng Tang, Houbing Herbert Song, Huiping Zhuang


To tackle catastrophic forgetting in class-incremental time series pattern recognition, we propose TS-ACL, a privacy-preserving, gradient-free continual learning framework. TS-ACL uses a pre-trained frozen encoder for embedding extraction and updates an analytic classifier recursively with a closed-form solution, avoiding catastrophic forgetting without storing historical data. This lightweight approach ensures non-forgetting, privacy preservation, and efficiency, suitable for edge computing. Experiments on five benchmarks demonstrate superior performance compared to existing methods.
</div>
</div>





# 🎖 Honors and Awards
- NIPS 2024 Travel Awards
- IEEE/EI ( CISP-BMEI 2022) **Best Paper Award**
- First Prize in Contemporary Undergraduate Mathematical Contest in Modeling National（**Top 0.6%**）
- First Prize in MathorCup University Mathematical Modeling Challenge National（**Top 3%**）
- Second Prize in National Undergraduate Electronic Design Contest ( Shandong Province )
- Second Prize in National Crypto-math Challenge Second (East China Competition)
- More than **40** university-level awards, including academic competition, social practice, innovation and entrepreneurship, sports, aesthetic education, volunteer, scholarship and other aspects, are not displayed here.
- Outstanding graduates of Shandong Province
- Outstanding graduate of Shandong University


# 📖 Educations
- **Sep 2025 - Future:** Hong Kong University of Science and Technology (Guangzhou) (Incoming AI Phd, supervised by [Prof. Yutao Yue](https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/YUE-Yutao/yutaoyue))
- **Apr 2024 - Sep 2025:** HKUST(GZ) (Intern)
- **Apr 2023 - Mar 2024:** KAUST (Visiting Student)
- **Sep 2020 - June 2024:** Shandong University (BSc, EECS)


# 💻 Internships
- Reviewer:  ECAI2024, Expert Systems with Applications, IJCNN2024, ICML2024, KDD2024, ICLR2025, ICASSP2025, ICRA2025, AISTATS2025, CVPR2025, ICML2025, IJCAI2025, WWW2025, ICCV2025, NIPS2025
- Monitor of Chongxin College of Shandong University (The class was awarded as **Shandong Provincial Excellent Class** and **Shandong University Top Ten Class**)
- **Outstanding Volunteer** of Shandong University with a total volunteer time of **130h**.

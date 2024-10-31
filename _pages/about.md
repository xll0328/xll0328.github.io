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

The demand for transparency in healthcare and finance has led to interpretable machine learning (IML) models, notably the concept bottleneck models (CBMs), valued for their potential in performance and insights into deep neural networks. However, CBM's reliance on manually annotated data poses challenges. Label-free CBMs have emerged to address this, but they remain unstable, affecting their faithfulness as explanatory tools. To address this issue of inherent instability, we introduce a formal definition for an alternative concept called the Faithful Vision-Language Concept (FVLC) model. We present a methodology for constructing an FVLC that satisfies four critical properties. Our extensive experiments on four benchmark datasets using Label-free CBM model architectures demonstrate that our FVLC outperforms other baselines regarding stability against input and concept set perturbations. Our approach incurs minimal accuracy degradation compared to the vanilla CBM, making it a promising solution for reliable and faithful model interpretation.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/NeurIPS_24_Multi_dimensional_Explanation (1).pdf' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[Towards Multi-dimensional Explanation Alignment for Medical Classification](https://arxiv.org/abs/2410.21494)**

Lijie Hu†, **Songning Lai†**, Wenshuo Chen†, Hongru Xiao, Hongbin Lin, Lu Yu, Jingfeng Zhang, and Di Wang

The Conference on Neural Information Processing Systems (**NeurIPS 2024**).(CCF A)

- We proposed an end-to-end framework called Med-MICN, which leverages the strength of different XAI methods such as concept-based models, neural symbolic methods, saliency maps, and concept semantics.
- Our outputs are interpreted in multiple dimensions, including concept prediction, saliency maps, and concept reasoning rules, making it easier for experts to identify and correct errors.
- Med-MICN demonstrates superior performance and interpretability compared with other concept-based models and the black-box model baselines.  
</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CISP-BMEI 2022</div><img src='images/WechatIMG162.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Predicting Lysine Phosphoglycerylation Sites using Bidirectional Encoder Representations with Transformers & Protein Feature Extraction and Selection](https://ieeexplore.ieee.org/abstract/document/9979871/)**

**Songning Lai**, Xifeng Hu, Jing Han, Chun Wang, Subhas Mukhopadhyay, Zhi Liu~ and Lan Ye~

2022 15th International Congress on Image and Signal Processing, BioMedical Engineering and Informatics (**CISP-BMEI 2022**).(Tsinghua B)

Phosphorylation, a post-translational modification of proteins, greatly affects protein structure and functionand plays an important role in the pathogenesis of human diseases. Elucidation of the molecular mechanism of phosphorylation is important for the development of therapeutic agents for some diseases. Nowdays, identification of phosphorylation sites is one of the hotspots in many studies. However, it is difficult and costly to identify phosphorylation sites only by conventional experimental methods. In our works, we focued on developing a model to predict the phosphorylation sites of lysine. This model uses protein feature acquisition, F_Score feature selection, KNN data cleaning, SMOTE synthesis of positive samples and other algorithms to construct the feature set. Subsequently, the transformer-based BERT classification technique was applied to this prediction model. In the BERT model, the present study used two different feature sequence inputing methods. the accuracy are 98.43% and 99.61%, and the MCC are 96.5% and 99.1% respectively, which are better than other previous models for predicting phosphoglycerylation sites. The results of our work have an incalculable future.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCNN 2024</div><img src='images/WechatIMG163.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Shared and private information learning in multimodal sentiment analysis with deep modal alignment and self-supervised multi-task learning](https://arxiv.org/pdf/2305.08473)**

**Songning Lai†**, Jiakang Li†, Guinan Guo, Xifeng Hu, Yulong Li, Yuan Tan, Zichen Song, Yutong Liu, Zhaoxia Ren~, Chun Wang~, Danmin Miao~ and Zhi Liu~

International Joint Conference on Neural Networks (**IJCNN 2024**). (CCF C)

Designing an effective representation learning method for multimodal sentiment analysis is a critical research area. The primary challenge is capturing shared and private information within a comprehensive modal representation, es- pecially when dealing with uniform multimodal labels and raw feature fusion.To overcome this challenge, we propose a novel deep modal shared information learning module that utilizes the covariance matrix to capture shared information across modalities. Additionally, we introduce a label generation module based on a self-supervised learning strategy to capture the private information specific to each modality. Our module can be easily integrated into multimodal tasks and offers flexibility by allowing parameter adjustment to control the information exchange relationship between modes, facilitating the learning of private or shared information as needed. To further enhance performance, we employ a multi-task learning strategy that enables the model to focus on modal differentiation during training. We provide a detailed formulation derivation and feasibility proof for the design of the deep modal shared infor- mation learning module.To evaluate our approach, we conduct extensive experiments on three common multimodal sentiment analysis benchmark datasets. The experimental results validate the reliability of our model, demonstrating its effectiveness in capturing nuanced information in multimodal sentiment analysis tasks.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Neurocomputing</div><img src='images/WechatIMG164.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[A Comprehensive Review of Community Detection in Graphs](https://arxiv.org/pdf/2309.11798)**

Jiakang Li†, **Songning Lai†**, Zhihao Shuai, Yuan Tan, Yifan Jia, Mianyang Yu, Zichen Song, Xiaokang Peng, Ziyang Xu, Yongxin Ni, Haifeng Qiu, Jiayu Yang, Yutong Liu, Yonggang Lu~

**Neurocomputing** (JCR Q1 (IF: 6.0) CCF C)

The study of complex networks has significantly advanced our understanding of community structures which serves as a crucial feature of real-world graphs. De- tecting communities in graphs is a challenging problem with applications in soci- ology, biology, and computer science. Despite the efforts of an interdisciplinary community of scientists, a satisfactory solution to this problem has not yet been achieved. This review article delves into the topic of community detection in graphs, which serves as a thorough exposition of various community detection methods from perspectives of modularity-based method, spectral clustering, prob- abilistic modelling, and deep learning. Along with the methods, a new community detection method designed by us is also presented. Additionally, the performance of these methods on the datasets with and without ground truth is compared. In conclusion, this comprehensive review provides a deep understanding of commu- nity detection in graphs.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Displays</div><img src='images/WechatIMG165.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Multimodal Sentiment Analysis: A Survey](https://www.sciencedirect.com/science/article/abs/pii/S0141938223001968)**

**Songning Lai**, Haoxuan Xu, Xifeng Hu, Zhaoxia Ren~ and Zhi Liu~

**Displays** (JCR Q1 (IF: 4.3))

Multimodal sentiment analysis has emerged as a prominent research field within artificial intelligence, benefiting immensely from recent advancements in deep learning. This technology has unlocked unprecedented possibilities for application and research, rendering it a highly sought-after area of study. In this review, we aim to present a comprehensive overview of multimodal sentiment analysis by delving into its definition, historical context, and evolutionary trajectory. Furthermore, we explore recent datasets and state-of-the-art models, with a particular focus on the challenges encountered and the future prospects that lie ahead. By offering constructive suggestions for promising research directions and the development of more effective multimodal sentiment analysis models, this review intends to provide valuable guidance to researchers in this dynamic field.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Image and Vision Computing</div><img src='images/WechatIMG166.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Cross-domain car detection model with integrated convolutional block attention mechanism](https://www.sciencedirect.com/science/article/pii/S0262885623002081)**

Haoxuan Xu†, **Songning Lai†** and Yang Yang~

**Image and Vision Computing** (JCR Q1 (IF:4.7) CCF C)

Car detection, especially through camera vision, has become a major focus in the field of computer vision and has gained widespread adoption. While current car detection systems are capable of achieving good detection performance, reliable detection can still be challenging due to factors such as car proximity, varying light conditions, and environmental visibility. To address these issues, we propose Cross-Domain Car Detection Model with integrated convolutional block Attention mechanism(CDCDMA) that is specifically designed for car recognition in autonomous driving and related domains. CDCDMA includes several novelties: 1)Building a complete cross-domain target detection framework. 2)Developing an unpaired target domain picture generation module with an integrated convolutional attention mechanism which specifically emphasizes the car headlights feature. 3)Adopting Generalized Intersection over Union (GIOU) as the loss function of the target detection framework. 4)Designing an object detection model integrated with two-headed Convolutional Block Attention Module(CBAM). To evaluate the model's effectiveness, we performed experiments on the SODA 10 M and BDD100K datasets by applying a reduced resolution process to the data, which served as our benchmark dataset for the task. The experimental results demonstrate that the performance of the cross-domain car target detection model improves by 40% compared to the model without our CDCDMA framework. Moreover, our improvements have a significant impact on cross-domain car recognition, surpassing the performance of most advanced cross-domain models.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG167.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[CAT: Concept-level backdoor ATtacks for Concept Bottleneck Models](https://arxiv.org/abs/2410.04823)**

**Songning Lai†**, Jiayu Yang†, Yu Huang†, Lijie Hu, Tianlang Xue, Zhangyi Hu, Jiaxu Li, Haicheng Liao, Yutao Yue~

Despite the transformative impact of deep learning across multiple domains, the inherent opacity of these models has driven the development of Explainable Artificial Intelligence (XAI). Among these efforts, Concept Bottleneck Models (CBMs) have emerged as a key approach to improve interpretability by leveraging high-level semantic information. However, CBMs, like other machine learning models, are susceptible to security threats, particularly backdoor attacks, which can covertly manipulate model behaviors. Understanding that the community has not yet studied the concept level backdoor attack of CBM, because of "Better the devil you know than the devil you don't know.", we introduce CAT (Concept-level Backdoor ATtacks), a methodology that leverages the conceptual representations within CBMs to embed triggers during training, enabling controlled manipulation of model predictions at inference time. An enhanced attack pattern, CAT+, incorporates a correlation function to systematically select the most effective and stealthy concept triggers, thereby optimizing the attack's impact. Our comprehensive evaluation framework assesses both the attack success rate and stealthiness, demonstrating that CAT and CAT+ maintain high performance on clean data while achieving significant targeted effects on backdoored datasets. This work underscores the potential security risks associated with CBMs and provides a robust testing methodology for future security assessments.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG172.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**[Wolf2Pack: The AutoFusion Framework for Dynamic Parameter Fusion](https://arxiv.org/abs/2410.05746?context=cs.CV)**

Bowen Tian†, **Songning Lai†**, Yutao Yue

In the rapidly evolving field of deep learning, specialized models have driven significant advancements in tasks such as computer vision and natural language processing. However, this specialization leads to a fragmented ecosystem where models lack the adaptability for broader applications. To overcome this, we introduce AutoFusion, an innovative framework that fuses distinct model parameters(with the same architecture) for multi-task learning without pre-trained checkpoints. Using an unsupervised, end-to-end approach, AutoFusion dynamically permutes model parameters at each layer, optimizing the combination through a loss-minimization process that does not require labeled data. We validate AutoFusion's effectiveness through experiments on commonly used benchmark datasets, demonstrating superior performance over established methods like Weight Interpolation, Git Re-Basin, and ZipIt. Our framework offers a scalable and flexible solution for model integration, positioning it as a powerful tool for future research and practical applications.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG168.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[PEPL: Precision-Enhanced Pseudo-Labeling for Fine-Grained Image Classification in Semi-Supervised Learning](https://arxiv.org/pdf/2409.03192)**

Bowen Tian†, **Songning Lai†**, Lujundong Li, Zhihao Shuai, Runwei Guan, Tian Wu, Yutao Yue~

Fine-grained image classification has witnessed sig- nificant advancements with the advent of deep learning and computer vision technologies. However, the scarcity of de- tailed annotations remains a major challenge, especially in scenarios where obtaining high-quality labeled data is costly or time-consuming. To address this limitation, we introduce Precision-Enhanced Pseudo-Labeling (PEPL) approach specif- ically designed for fine-grained image classification within a semi-supervised learning framework. Our method leverages the abundance of unlabeled data by generating high-quality pseudo- labels that are progressively refined through two key phases: initial pseudo-label generation and semantic-mixed pseudo-label generation. These phases utilize Class Activation Maps (CAMs) to accurately estimate the semantic content and generate refined labels that capture the essential details necessary for fine-grained classification. By focusing on semantic-level information, our approach effectively addresses the limitations of standard data augmentation and image-mixing techniques in preserving critical fine-grained features. We achieve state-of-the-art performance on benchmark datasets, demonstrating significant improvements over existing semi-supervised strategies, with notable boosts in accuracy and robustness.Our code has been open sourced at https://github.com/TianSuya/SemiFG.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG169.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[DRIVE: Dependable Robust Interpretable Visionary Ensemble Framework in Autonomous Driving](https://arxiv.org/pdf/2409.03192)**

Bowen Tian†, **Songning Lai†**, Lujundong Li, Zhihao Shuai, Runwei Guan, Tian Wu, Yutao Yue~

Recent advancements in autonomous driving have seen a paradigm shift towards end-to-end learning paradigms, which map sensory inputs directly to driving actions, thereby enhancing the robustness and adaptability of autonomous vehicles. However, these models often sacrifice interpretability, posing significant challenges to trust, safety, and regulatory compliance. To address these issues, we introduce DRIVE – Dependable Robust Interpretable Visionary Ensemble Frame- work in Autonomous Driving, a comprehensive framework designed to improve the dependability and stability of explana- tions in end-to-end unsupervised autonomous driving models. Our work specifically targets the inherent instability problems observed in the Driving through the Concept Gridlock (DCG) model, which undermine the trustworthiness of its explanations and decision-making processes. We define four key attributes of DRIVE: consistent interpretability, stable interpretability, con- sistent output, and stable output. These attributes collectively ensure that explanations remain reliable and robust across dif- ferent scenarios and perturbations. Through extensive empirical evaluations, we demonstrate the effectiveness of our framework in enhancing the stability and dependability of explanations, thereby addressing the limitations of current models. Our contributions include an in-depth analysis of the dependability issues within the DCG model, a rigorous definition of DRIVE with its fundamental properties, a framework to implement DRIVE, and novel metrics for evaluating the dependability of concept-based explainable autonomous driving models. These advancements lay the groundwork for the development of more reliable and trusted autonomous driving systems, paving the way for their broader acceptance and deployment in real-world applications.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG170.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[TimeSieve: Extracting Temporal Dynamics through Information Bottleneck](https://arxiv.org/pdf/2406.05036)**

Ninghui Feng†, **Songning Lai†**, Fobao Zhou, Zhenxiao Yin, Hang Zhao~

Time series forecasting has become an increasingly popular research area due to its critical applica- tions in various real-world domains such as traffic management, weather prediction, and financial analysis. Despite significant advancements, existing models face notable challenges, including the necessity of manual hyperparameter tuning for different datasets, and difficulty in effectively distinguishing signal from redundant features in data characterized by strong seasonality. These issues hinder the generalization and practical application of time series forecasting models. To solve this issues, this paper propose an innovative time series forecasting model - TimeSieve designed to address these challenges. Our approach employs wavelet transforms to preprocess time series data, effectively capturing multi-scale features without the need for additional parameters or manual hyperparameter tuning. Additionally, this paper introduce the information bottleneck theory that filters out redundant features from both detail and approximation coefficients, retaining only the most predictive information. This combination reduces significantly improves the model’s accuracy. Extensive experiments demonstrate that our model outperforms existing state-of-the-art methods in most cases, achieving higher predictive accuracy and better generalization. Our results validate the effectiveness of our approach in addressing the key challenges in time series forecasting, paving the way for more reliable and efficient predictive models in practical applications.


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/time_pre.png' alt="sym" width="100%"></div></div>

<div class='paper-box-text' markdown="1">
  
**[FTS: A FRAMEWORK TO FIND A FAITHFUL TIMESIEVE](https://arxiv.org/pdf/2405.19647)**
  
**Songning Lai†**, Ninghui Feng†, Jiechao Gao, Hao Wang, Haochen Sui, Xin Zou, Jiayu Yang, Wenshuo Chen, Hang Zhao, Xuming Hu, Yutao Yue~

- Our research provides faithful technical support and theoretical support to the field of time series forecasting, promising to advance the development and reliability of forecasting methods within the industry. Through these efforts, we aim to bolster the trustworthiness of models, ultimately supporting decision-making processes that rely on accurate and consistent predictions.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/WechatIMG171.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
  
**[Maintaining Informative Coherence: Migrating Hallucinations in Large Language Models via Absorbing Markov Chains](https://arxiv.org/pdf/2410.20340)**

Jiemin Wu, **Songning Lai**, Ruiqiang Xiao, Tianlang Xue, Jiayu Yang, Yutao Yue

Large Language Models (LLMs) are powerful tools for text generation, translation, and summarization, but they often suffer from hallucinations-instances where they fail to maintain the fidelity and coherence of contextual information during decoding, sometimes overlooking critical details due to their sampling strategies and inherent biases from training data and fine-tuning discrepancies. These hallucinations can propagate through the web, affecting the trustworthiness of information disseminated online. To address this issue, we propose a novel decoding strategy that leverages absorbing Markov chains to quantify the significance of contextual information and measure the extent of information loss during generation. By considering all possible paths from the first to the last token, our approach enhances the reliability of model outputs without requiring additional training or external data. Evaluations on datasets including TruthfulQA, FACTOR, and HaluEval highlight the superior performance of our method in mitigating hallucinations, underscoring the necessity of ensuring accurate information flow in web-based applications.


</div>
</div>



# 🎖 Honors and Awards
- First Prize in Contemporary Undergraduate Mathematical Contest in Modeling National（**Top 0.6%**）
- First Prize in MathorCup University Mathematical Modeling Challenge National（**Top 3%**）
- Second Prize in National Undergraduate Electronic Design Contest ( Shandong Province )
- Second Prize in National Crypto-math Challenge Second (East China Competition)
- More than **40** university-level awards, including academic competition, social practice, innovation and entrepreneurship, sports, aesthetic education, volunteer, scholarship and other aspects, are not displayed here.
- Outstanding graduates of Shandong Province
- Outstanding graduate of Shandong University
- IEEE/EI ( CISP-BMEI 2022) **Best Paper Award**


# 📖 Educations
- **Feb 2025 - Future:** Hong Kong University of Science and Technology (Guangzhou) (Incoming AI Phd, supervised by [Prof. Yutao Yue](https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/YUE-Yutao/yutaoyue))
- **Sep 2024 - Future:** University of Macau (RA)
- **Apr 2024 - Feb 2025:** HKUST(GZ) (Intern)
- **Apr 2023 - Mar 2024:** KAUST (Visiting Student)
- **Sep 2020 - June 2024:** Shandong University (BSc, EECS)


# 💻 Services
- Reviewer:  ECAI2024, Expert Systems with Applications, IJCNN2024, ICML2024, KDD2024, ICLR2025, ICASSP2025, ICRA2025, AISTATS2025
- Monitor of Chongxin College of Shandong University (The class was awarded as **Shandong Provincial Excellent Class** and **Shandong University Top Ten Class**)
- **Outstanding Volunteer** of Shandong University with a total volunteer time of **130h**.

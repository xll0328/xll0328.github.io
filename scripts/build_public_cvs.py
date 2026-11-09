"""Build the public, privacy-safe English and Chinese CV PDFs.

The public copies intentionally expose role, dates, and broad research scope
while withholding employers and work-specific systems, datasets, metrics, and
implementation details.
"""

from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1] / "files" / "cv"
ROOT.mkdir(parents=True, exist_ok=True)

NAVY = HexColor("#142b47")
BLUE = HexColor("#2871ad")
TEAL = HexColor("#2b8f8c")
ORANGE = HexColor("#c45b3d")
INK = HexColor("#26384d")
MUTED = HexColor("#66778c")
LINE = HexColor("#d8e1ea")
PALE = HexColor("#f5f8fb")
PALE_BLUE = HexColor("#edf5fb")
REDACT = HexColor("#fff3ed")


PUBLIC_ROLES_EN = [
    ("Sep 2026 - Present", "Machine Learning Quantitative Research Engineer", "Large quantitative research organization", "End-to-end medium-to-high-frequency CTA research; work-specific details withheld."),
    ("Jan 2026 - Aug 2026", "Quantitative Research / AI Algorithms", "Quantitative research organization", "Quantitative research and AI algorithm development; project details withheld."),
    ("Nov 2025 - Jan 2026", "Quantitative Research / AI Algorithms Intern", "Public employer details withheld", "Quantitative research and AI algorithm exploration."),
]
PUBLIC_ROLES_ZH = [
    ("2026.09 - 至今", "机器学习量化研究工程师", "大型量化研究机构", "中高频 CTA 全流程研究；具体系统、数据与实现细节不公开。"),
    ("2026.01 - 2026.08", "量化研究 / 人工智能算法", "量化研究机构", "量化研究与人工智能算法开发；项目细节不公开。"),
    ("2025.11 - 2026.01", "量化研究 / 人工智能算法实习生", "单位信息不公开", "量化研究与人工智能算法探索。"),
]

EDUCATION_EN = [
    ("Sep 2020 - Jun 2024", "Shandong University", "B.Eng. in Communication Engineering · School of Information Science and Engineering / Chongxin Honors Program"),
]
EDUCATION_ZH = [
    ("2020.09 - 2024.06", "山东大学", "通信工程本科 · 信息科学与工程学院 / 崇新学堂"),
]

PUBS_EN = [
    ("NUM2EVENT: Structured Event Inference from Numerical Time-Series", "EMNLP 2026 Findings · Co-first author"),
    ("Dynamic-V2C: Editable and Continual Vision-to-Concept Bottleneck Models via Influence Functions", "ECCV 2026 · First author"),
    ("SANT-CBM: Structurally-Aware and Noise-Tolerant Semi-supervised Concept Bottleneck Models", "MICCAI 2026 · Corresponding author"),
    ("Concept-Consistent Semi-Supervised Learning for Concept Bottleneck Models via Confidence-Guided Pseudo-Label Propagation", "ICANN 2026 · Corresponding author"),
    ("Multimodal Deception in Explainable AI: Concept-Level Backdoor Attacks on Concept Bottleneck Models", "TMLR 2026 · First author"),
    ("ACE: Attribution-Controlled Knowledge Editing for Multi-hop Factual Recall", "ICLR 2026 · Co-first author"),
    ("Towards Reliable Time Series Forecasting under Future Uncertainty: Ambiguity and Novelty Rejection Mechanisms", "ICASSP 2026 · Co-first author"),
    ("Learning New Concepts, Remembering the Old: Continual Learning for Multimodal Concept Bottleneck Models", "ACM MM 2025 · First author"),
    ("From Guesswork to Guarantee: Towards Faithful Multimedia Web Forecasting with TimeSieve", "ACM MM 2025 · First author"),
    ("DRIVE: Dependable Robust Interpretable Visionary Ensemble Framework in Autonomous Driving", "ICRA 2025 · First author"),
    ("Stable Vision Concept Transformers for Medical Diagnosis", "ECML-PKDD 2025 · Co-first author"),
    ("PEPL: Precision-Enhanced Pseudo-Labeling for Fine-Grained Image Classification in Semi-Supervised Learning", "ICASSP 2025 · Co-first author"),
    ("Faithful Vision-Language Interpretation via Concept Bottleneck Models", "ICLR 2024 · First author"),
    ("Towards Multi-dimensional Explanation Alignment for Medical Classification", "NeurIPS 2024 · Co-first author"),
    ("Shared and Private Information Learning in Multimodal Sentiment Analysis with Deep Modal Alignment and Self-supervised Multi-task Learning", "IJCNN 2024 · First author"),
    ("A Comprehensive Review of Community Detection in Graphs", "Neurocomputing 2024 · Co-first author"),
    ("Multimodal Sentiment Analysis: A Survey", "Displays 2023 · First author"),
    ("Cross-domain Car Detection Model with Integrated Convolutional Block Attention Mechanism", "Image and Vision Computing 2023 · Co-first author"),
    ("Predicting Lysine Phosphoglycerylation Sites using Bidirectional Encoder Representations with Transformers & Protein Feature Extraction and Selection", "CISP-BMEI 2022 · First author"),
]
PUBS_ZH = [
    ("NUM2EVENT: Structured Event Inference from Numerical Time-Series", "EMNLP 2026 Findings · 共同第一作者"),
    ("Dynamic-V2C: Editable and Continual Vision-to-Concept Bottleneck Models via Influence Functions", "ECCV 2026 · 第一作者"),
    ("SANT-CBM: Structurally-Aware and Noise-Tolerant Semi-supervised Concept Bottleneck Models", "MICCAI 2026 · 通讯作者"),
    ("Concept-Consistent Semi-Supervised Learning for Concept Bottleneck Models via Confidence-Guided Pseudo-Label Propagation", "ICANN 2026 · 通讯作者"),
    ("Multimodal Deception in Explainable AI: Concept-Level Backdoor Attacks on Concept Bottleneck Models", "TMLR 2026 · 第一作者"),
    ("ACE: Attribution-Controlled Knowledge Editing for Multi-hop Factual Recall", "ICLR 2026 · 共同第一作者"),
    ("Towards Reliable Time Series Forecasting under Future Uncertainty: Ambiguity and Novelty Rejection Mechanisms", "ICASSP 2026 · 共同第一作者"),
    ("Learning New Concepts, Remembering the Old: Continual Learning for Multimodal Concept Bottleneck Models", "ACM MM 2025 · 第一作者"),
    ("From Guesswork to Guarantee: Towards Faithful Multimedia Web Forecasting with TimeSieve", "ACM MM 2025 · 第一作者"),
    ("DRIVE: Dependable Robust Interpretable Visionary Ensemble Framework in Autonomous Driving", "ICRA 2025 · 第一作者"),
    ("Stable Vision Concept Transformers for Medical Diagnosis", "ECML-PKDD 2025 · 共同第一作者"),
    ("PEPL: Precision-Enhanced Pseudo-Labeling for Fine-Grained Image Classification in Semi-Supervised Learning", "ICASSP 2025 · 共同第一作者"),
    ("Faithful Vision-Language Interpretation via Concept Bottleneck Models", "ICLR 2024 · 第一作者"),
    ("Towards Multi-dimensional Explanation Alignment for Medical Classification", "NeurIPS 2024 · 共同第一作者"),
    ("Shared and Private Information Learning in Multimodal Sentiment Analysis with Deep Modal Alignment and Self-supervised Multi-task Learning", "IJCNN 2024 · 第一作者"),
    ("A Comprehensive Review of Community Detection in Graphs", "Neurocomputing 2024 · 共同第一作者"),
    ("Multimodal Sentiment Analysis: A Survey", "Displays 2023 · 第一作者"),
    ("Cross-domain Car Detection Model with Integrated Convolutional Block Attention Mechanism", "Image and Vision Computing 2023 · 共同第一作者"),
    ("Predicting Lysine Phosphoglycerylation Sites using Bidirectional Encoder Representations with Transformers & Protein Feature Extraction and Selection", "CISP-BMEI 2022 · 第一作者"),
]

COAUTH_EN = [
    ("ClinStab: Stability-Oriented Learning for Medical Time Series via Dual-Stream Alignment", "NeurIPS 2026 Poster · Coauthor"),
    ("Mimicking the Physicist’s Eye: A VLM-centric Approach for Physics Formula Discovery", "NeurIPS 2026 Poster · Second author"),
    ("Decomposing Visual Histories with Vision-Language Agents: Hierarchical Temporal Guidance for Compositional Image Generation", "EMNLP 2026 Main Conference · Coauthor"),
    ("Demystifying Hidden-State Recurrence: Switchable Latent Reasoning with On-Policy Reinforcement Learning", "EMNLP 2026 Findings · Coauthor"),
]
COAUTH_ZH = [
    ("ClinStab: Stability-Oriented Learning for Medical Time Series via Dual-Stream Alignment", "NeurIPS 2026 Poster · 合作作者"),
    ("Mimicking the Physicist’s Eye: A VLM-centric Approach for Physics Formula Discovery", "NeurIPS 2026 Poster · 第二作者"),
    ("Decomposing Visual Histories with Vision-Language Agents: Hierarchical Temporal Guidance for Compositional Image Generation", "EMNLP 2026 主会 · 合作作者"),
    ("Demystifying Hidden-State Recurrence: Switchable Latent Reasoning with On-Policy Reinforcement Learning", "EMNLP 2026 Findings · 合作作者"),
]


def styles(lang):
    body = "STSong-Light" if lang == "zh" else "Helvetica"
    bold = body if lang == "zh" else "Helvetica-Bold"
    return {
        "body": ParagraphStyle("body", fontName=body, fontSize=8.7, leading=12.0, textColor=INK),
        "body_small": ParagraphStyle("body_small", fontName=body, fontSize=7.5, leading=10.2, textColor=INK),
        "meta": ParagraphStyle("meta", fontName=body, fontSize=7.2, leading=9.4, textColor=MUTED),
        "header_name": ParagraphStyle("header_name", fontName=bold, fontSize=25, leading=27, textColor=colors.white),
        "header_sub": ParagraphStyle("header_sub", fontName=body, fontSize=9.4, leading=11, textColor=HexColor("#cfe3f2")),
        "header_contact": ParagraphStyle("header_contact", fontName=body, fontSize=7.5, leading=9, textColor=HexColor("#dceaf4")),
        "header_mark": ParagraphStyle("header_mark", fontName=bold, fontSize=8, leading=9, textColor=HexColor("#0b2138")),
        "card_title": ParagraphStyle("card_title", fontName=bold, fontSize=9.5, leading=11, textColor=NAVY),
        "role": ParagraphStyle("role", fontName=bold, fontSize=8.4, leading=10.4, textColor=NAVY),
        "role_meta": ParagraphStyle("role_meta", fontName=body, fontSize=7.25, leading=9.3, textColor=MUTED),
        "role_desc": ParagraphStyle("role_desc", fontName=body, fontSize=7.7, leading=10.2, textColor=INK),
        "pub_title": ParagraphStyle("pub_title", fontName=bold, fontSize=7.3, leading=9.0, textColor=NAVY),
        "pub_meta": ParagraphStyle("pub_meta", fontName=body, fontSize=6.8, leading=8.4, textColor=MUTED),
        "pill": ParagraphStyle("pill", fontName=bold, fontSize=6.7, leading=8, textColor=ORANGE),
        "footer": ParagraphStyle("footer", fontName=body, fontSize=6.7, leading=8, textColor=MUTED),
    }


def para(text, style):
    return Paragraph(escape(text).replace("\n", "<br/>"), style)


def rich(text, style):
    return Paragraph(text, style)


def header(lang, st):
    if lang == "zh":
        name, sub = "赖颂宁", "机器学习量化研究工程师  ·  可信 AI / CTA 研究"
        contact = "lais0328eee@gmail.com  ·  xll0328.github.io  ·  Google Scholar 886 / h-index 13 / i10-index 20"
        badge = "公开版简历"
    else:
        name, sub = "Songning Lai", "Machine Learning Quantitative Research Engineer  ·  Trustworthy AI / CTA Research"
        contact = "lais0328eee@gmail.com  ·  xll0328.github.io  ·  Google Scholar 886 / h-index 13 / i10-index 20"
        badge = "PUBLIC EDITION"
    left = [para(name, st["header_name"]), para(sub, st["header_sub"]), Spacer(1, 2), para(contact, st["header_contact"])]
    right = Table([[para("SL", st["header_mark"])], [para(badge, st["header_contact"])]] , colWidths=[29 * mm])
    right.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), HexColor("#7ed1ce")),
        ("BACKGROUND", (0, 1), (-1, 1), HexColor("#23496a")),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BOX", (0, 0), (-1, -1), 0, colors.white),
        ("LEFTPADDING", (0, 0), (-1, -1), 5), ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    table = Table([[left, right]], colWidths=[145 * mm, 29 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (0, 0), 10), ("RIGHTPADDING", (0, 0), (0, 0), 5),
        ("LEFTPADDING", (1, 0), (1, 0), 0), ("RIGHTPADDING", (1, 0), (1, 0), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 10), ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    return table


def card(title, contents, width, st, accent=BLUE):
    title_row = Table([[para(title, st["card_title"])]], colWidths=[width - 12 * mm])
    title_row.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE_BLUE),
        ("LINEBELOW", (0, 0), (-1, -1), 1.3, accent),
        ("LEFTPADDING", (0, 0), (-1, -1), 5), ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    table = Table([[title_row], [contents]], colWidths=[width])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("BOX", (0, 0), (-1, -1), .7, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 6), ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return table


def privacy_banner(lang, st):
    if lang == "zh":
        title, body = "公开版 · 研究范围可见，工作实现保密", "公开版本保留职业方向、时间与中高频 CTA 研究范围；单位名称、系统、数据、指标和实现细节不公开。"
    else:
        title, body = "PUBLIC EDITION · SCOPE SHOWN, IMPLEMENTATION WITHHELD", "Role, dates, and medium-to-high-frequency CTA research scope are shown; employer names, systems, datasets, metrics, and implementation details are withheld."
    table = Table([[para(title, st["pill"])], [para(body, st["body_small"])]], colWidths=[174 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), REDACT),
        ("BOX", (0, 0), (-1, -1), .7, HexColor("#e5b8a7")),
        ("LEFTPADDING", (0, 0), (-1, -1), 8), ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return table


def metric_row(lang, st):
    if lang == "zh":
        data = [("职业方向", "机器学习量化研究工程"), ("公开范围", "中高频 CTA 全流程研究"), ("研究主线", "可信 AI / CBM / 可靠 ML")]
    else:
        data = [("ROLE", "ML quantitative research"), ("PUBLIC SCOPE", "End-to-end CTA research"), ("RESEARCH", "Trustworthy AI / CBMs")]
    cells = []
    for label, value in data:
        cells.append([para(label, st["pill"]), para(value, st["body_small"])])
    table = Table([cells], colWidths=[58 * mm, 58 * mm, 58 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE), ("BOX", (0, 0), (-1, -1), .7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), .5, LINE), ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7), ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return table


def role_flow(roles, st):
    out = []
    for date, title, org, desc in roles:
        out.append(rich(f"<font color='{ORANGE.hexval()}'><b>{escape(date)}</b></font>", st["role_meta"]))
        out.append(rich(f"<b>{escape(title)}</b>", st["role"]))
        out.append(para(org, st["role_meta"]))
        out.append(para(desc, st["role_desc"]))
        out.append(Spacer(1, 4))
    return out


def education_flow(education, st):
    out = []
    for date, title, desc in education:
        out.append(para(date, st["role_meta"]))
        out.append(rich(f"<b>{escape(title)}</b>", st["role"]))
        out.append(para(desc, st["role_meta"]))
    return out


def publication_item(idx, title, meta, st):
    return [
        rich(f"<b>{idx}. {escape(title)}</b>", st["pub_title"]),
        para(meta, st["pub_meta"]),
        Spacer(1, 2),
    ]


def footer(canvas, doc, lang, body_font):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(.6)
    canvas.line(doc.leftMargin, 10 * mm, A4[0] - doc.rightMargin, 10 * mm)
    canvas.setFont(body_font, 6.8)
    canvas.setFillColor(MUTED)
    note = "公开版 · 工作实现细节已隐去" if lang == "zh" else "Public edition · work-specific implementation details withheld"
    canvas.drawString(doc.leftMargin, 6.5 * mm, note)
    canvas.drawRightString(A4[0] - doc.rightMargin, 6.5 * mm, str(doc.page))
    canvas.restoreState()


def build(path, lang):
    if lang == "zh":
        pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))
    st = styles(lang)
    body_font = "STSong-Light" if lang == "zh" else "Helvetica"
    doc = BaseDocTemplate(
        str(path), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm,
        topMargin=13 * mm, bottomMargin=14 * mm,
        title="赖颂宁公开版简历" if lang == "zh" else "Songning Lai Public CV",
        author="Songning Lai",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=lambda c, d: footer(c, d, lang, body_font))])

    if lang == "zh":
        roles, education, pubs, coauth = PUBLIC_ROLES_ZH, EDUCATION_ZH, PUBS_ZH, COAUTH_ZH
        profile = "从事机器学习量化研究与可信 AI 研究，公开职业范围聚焦中高频 CTA 全流程研究；学术方向覆盖概念瓶颈模型、可靠时间序列、多模态解释与鲁棒性。"
        interests = "可信 AI；概念瓶颈模型；可编辑与持续学习；多模态解释；医疗 AI；可靠时间序列；鲁棒性；LLM 可解释性。"
        achievements = "ICRA 2026 WBCD Logistics Picking 全球第 1；WWW 2026 Workshop TIME Best Paper Runner-Up；CISP-BMEI 2022 Best Paper；NeurIPS 2024、ICRA 2025 Travel Award；全国大学生数学建模国家一等奖（Top 0.6%）；MathorCup 国家一等奖（Top 3%）。"
        service = "审稿服务覆盖 ICLR、NeurIPS、ICML、CVPR、ICCV、EMNLP、KDD、AAAI、IJCAI、ACM MM 等；技术栈包括 Python、PyTorch、pandas、NumPy、scikit-learn、Git/Linux。"
        selected_title, co_title = "公开论文（精选）", "合作论文（精选）"
        snapshot = "主要作者论文 19 篇；Google Scholar 引用 886、h-index 13、i10-index 20。"
    else:
        roles, education, pubs, coauth = PUBLIC_ROLES_EN, EDUCATION_EN, PUBS_EN, COAUTH_EN
        profile = "Machine learning quantitative research and trustworthy AI researcher. Public professional scope: end-to-end medium-to-high-frequency CTA research; academic work covers concept bottleneck models, reliable time series, multimodal interpretation, and robustness."
        interests = "Trustworthy AI; concept bottleneck models; editable and continual learning; multimodal interpretation; medical AI; reliable time series; robustness; LLM interpretability."
        achievements = "ICRA 2026 WBCD Logistics Picking World 1st; WWW 2026 Workshop TIME Best Paper Runner-Up; CISP-BMEI 2022 Best Paper; NeurIPS 2024 and ICRA 2025 Travel Awards; National Mathematical Modeling First Prize (Top 0.6%); MathorCup National First Prize (Top 3%)."
        service = "Reviewer for ICLR, NeurIPS, ICML, CVPR, ICCV, EMNLP, KDD, AAAI, IJCAI, ACM MM, and related venues. Tools: Python, PyTorch, pandas, NumPy, scikit-learn, Git/Linux."
        selected_title, co_title = "Selected public publications", "Selected coauthored publications"
        snapshot = "19 first-, co-first-, or corresponding-author papers; Google Scholar: 886 citations, h-index 13, i10-index 20."

    left = [
        card("ROLE & TIMELINE" if lang == "en" else "职业方向与时间线", role_flow(roles, st), 79 * mm, st, ORANGE),
        Spacer(1, 6),
        card("EDUCATION" if lang == "en" else "教育背景", education_flow(education, st), 79 * mm, st, TEAL),
        Spacer(1, 6),
        card("RESEARCH AREAS" if lang == "en" else "研究方向", [para(interests, st["body_small"])], 79 * mm, st, BLUE),
    ]
    right = [
        card("RESEARCH PROFILE" if lang == "en" else "研究简介", [para(profile, st["body"])], 89 * mm, st, BLUE),
        Spacer(1, 6),
        card("PUBLIC ACHIEVEMENTS" if lang == "en" else "公开成果与荣誉", [para(achievements, st["body_small"])], 89 * mm, st, ORANGE),
        Spacer(1, 6),
        card("RESEARCH SNAPSHOT" if lang == "en" else "研究概览", [para(snapshot, st["body_small"])], 89 * mm, st, BLUE),
        Spacer(1, 6),
        card("SERVICE & TOOLS" if lang == "en" else "学术服务与技术能力", [para(service, st["body_small"])], 89 * mm, st, TEAL),
        Spacer(1, 6),
        card("PRIVACY BOUNDARY" if lang == "en" else "公开边界", [para("Role, dates, and research scope are public. Employer names and work-specific implementations remain private." if lang == "en" else "公开职业方向、时间与研究范围；单位名称及工作实现细节保持私密。", st["body_small"])], 89 * mm, st, ORANGE),
    ]

    story = [
        header(lang, st), Spacer(1, 5), privacy_banner(lang, st), Spacer(1, 5), metric_row(lang, st), Spacer(1, 7),
        Table([[left, right]], colWidths=[82 * mm, 92 * mm], style=TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ])),
        PageBreak(), header(lang, st), Spacer(1, 7),
        rich(f"<font color='{BLUE.hexval()}'><b>{escape(selected_title)}</b></font>", st["card_title"]),
        HRFlowable(width="100%", thickness=1.4, color=BLUE, spaceBefore=3, spaceAfter=6),
    ]

    pub_cells = [[], []]
    midpoint = (len(pubs) + 1) // 2
    for col, items in enumerate((pubs[:midpoint], pubs[midpoint:])):
        for idx, (title, meta) in enumerate(items, (1 if col == 0 else midpoint + 1)):
            pub_cells[col].extend(publication_item(idx, title, meta, st))
    pub_table = Table([pub_cells], colWidths=[86 * mm, 86 * mm])
    pub_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7), ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4), ("BACKGROUND", (0, 0), (-1, -1), PALE),
        ("BOX", (0, 0), (-1, -1), .7, LINE), ("INNERGRID", (0, 0), (-1, -1), .5, LINE),
    ]))
    story.append(pub_table)
    story.extend([Spacer(1, 8), rich(f"<font color='{TEAL.hexval()}'><b>{escape(co_title)}</b></font>", st["card_title"]), HRFlowable(width="100%", thickness=1.4, color=TEAL, spaceBefore=3, spaceAfter=6)])
    co_cells = [[], []]
    for col, items in enumerate((coauth[:2], coauth[2:])):
        for idx, (title, meta) in enumerate(items, (1 if col == 0 else 3)):
            co_cells[col].extend(publication_item(idx, title, meta, st))
    co_table = Table([co_cells], colWidths=[86 * mm, 86 * mm])
    co_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7), ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4), ("BACKGROUND", (0, 0), (-1, -1), PALE),
        ("BOX", (0, 0), (-1, -1), .7, LINE), ("INNERGRID", (0, 0), (-1, -1), .5, LINE),
    ]))
    story.append(co_table)
    doc.build(story)


build(ROOT / "Songning_Lai_CV_CN_latest.pdf", "zh")
build(ROOT / "Songning_Lai_Resume_EN_latest.pdf", "en")
print("Built public CVs")

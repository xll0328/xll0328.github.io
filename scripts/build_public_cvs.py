"""Create public CV PDFs by redacting the original local CV layout.

The original six-page design is preserved. Public copies show role, dates and
broad CTA research scope while removing employer names, contact details and
work-specific implementation content.
"""
from pathlib import Path
import fitz

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path('/Users/sony/Desktop/xll0328_homepage_backup_20261105_095637')
OUT = ROOT / 'files' / 'cv'
OUT.mkdir(parents=True, exist_ok=True)


def redact(page, rect):
    page.add_redact_annot(fitz.Rect(*rect), fill=(1, 1, 1))
    page.apply_redactions()


def textbox(page, rect, text, *, font='helv', size=8.2, color=(0.18, 0.35, 0.55), align=0):
    page.insert_textbox(
        fitz.Rect(*rect), text, fontname=font, fontsize=size,
        color=color, align=align, lineheight=1.12,
    )


def rebuild_en():
    src = fitz.open(SOURCE / 'Songning_Lai_Resume_EN_latest.pdf')
    page = src[0]
    # Replace the original employer badge and personal contact strip.
    redact(page, (414, 54, 562, 82))
    textbox(page, (419, 58, 558, 81), 'Machine Learning Quantitative Research\nCTA Research | 2026.09 - Present', size=7.2, align=2)
    redact(page, (30, 94, 565, 123))
    textbox(page, (34, 98, 560, 120), 'Email: lais0328eee@gmail.com   Website: xll0328.github.io   Google Scholar: public profile', size=7.3)
    # Preserve the original layout while replacing the private employment block.
    redact(page, (30, 394, 565, 560))
    safe = (
        'Work and Research Experience\n'
        'Machine Learning Quantitative Research Engineer   |   Large quantitative research organization   |   Sep 2026 - Present\n'
        'End-to-end medium-to-high-frequency CTA research; specific systems, datasets, metrics, and implementations withheld.\n\n'
        'Quantitative Research / AI Algorithms   |   Quantitative research organization   |   Jan 2026 - Aug 2026\n'
        'Quantitative research and AI algorithm development; project details withheld.\n\n'
        'Quantitative Research / AI Algorithms Intern   |   Employer details withheld   |   Nov 2025 - Jan 2026\n'
        'Quantitative research and AI algorithm exploration.'
    )
    textbox(page, (34, 397, 560, 558), safe, size=7.0, color=(0.12, 0.28, 0.43))
    src.set_metadata({**src.metadata, 'title': 'Songning Lai - Public Resume', 'subject': 'Public edition with employer and implementation details withheld'})
    src.save(OUT / 'Songning_Lai_Resume_EN_latest.pdf', garbage=4, deflate=True)
    src.close()


def rebuild_zh():
    src = fitz.open(SOURCE / 'Songning_Lai_CV_CN_latest.pdf')
    page = src[0]
    redact(page, (300, 54, 562, 75))
    textbox(page, (304, 57, 558, 73), '机器学习量化研究工程师 | CTA 研究 | 2026.09 - 至今', font='china-s', size=7.2, align=2)
    redact(page, (30, 91, 570, 122))
    textbox(page, (34, 95, 560, 119), '邮箱：lais0328eee@gmail.com   主页：xll0328.github.io   Google Scholar：公开主页', font='china-s', size=7.2)
    redact(page, (30, 300, 565, 484))
    safe = (
        '教育与工作经历\n'
        '机器学习量化研究工程师   |   大型量化研究机构   |   2026.09 - 至今\n'
        '中高频 CTA 全流程研究；具体系统、数据、指标与实现细节不公开。\n\n'
        '量化研究 / 人工智能算法   |   量化研究机构   |   2026.01 - 2026.08\n'
        '量化研究与人工智能算法开发；项目细节不公开。\n\n'
        '量化研究 / 人工智能算法实习生   |   单位信息不公开   |   2025.11 - 2026.01\n'
        '量化研究与人工智能算法探索。'
    )
    textbox(page, (34, 303, 560, 482), safe, font='china-s', size=7.0, color=(0.12, 0.28, 0.43))
    src.set_metadata({**src.metadata, 'title': '赖颂宁 - 公开版简历', 'subject': '公开版，隐去单位和工作实现细节'})
    src.save(OUT / 'Songning_Lai_CV_CN_latest.pdf', garbage=4, deflate=True)
    src.close()


rebuild_en()
rebuild_zh()
print('Rebuilt public CVs from the original local layouts.')

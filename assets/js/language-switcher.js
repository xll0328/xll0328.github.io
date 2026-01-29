// 多语言切换功能
(function() {
    'use strict';
    
    // 翻译数据
    const translations = {
        en: {
            nav: {
                homepage: "Homepage",
                about_me: "About Me",
                news: "News",
                publications: "Publications",
                complete_publications: "Complete Publications",
                honors_and_awards: "Honors and Awards",
                educations: "Educations",
                internships: "Internships",
                friends: "Friends"
            },
            sections: {
                about_me: "About Me",
                news: "News",
                publications: "Publications (Selected)",
                complete_publications: "Complete Publications",
                honors_and_awards: "Honors and Awards",
                educations: "Educations and Experiences",
                internships: "Internships",
                friends: "Friends"
            },
            content: {
                about_intro: "Here is <strong>Songning Lai</strong>.( You can call me Sony. )",
                about_text: "I received my undergraduate degree from the School of Information Science and Engineering(<a href=\"https://baike.baidu.com/item/%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6%E5%B4%87%E6%96%B0%E5%AD%A6%E5%A0%82/20809738?fr=aladdin\"><strong>Chongxin College</strong></a>), <a href=\"https://www.sdu.edu.cn/\"><strong>Shandong University</strong></a> in China,supervised by Prof. <a href=\"https://faculty.sdu.edu.cn/liuzhi1/zh_CN/index.htm\"><strong>Zhi Liu</strong></a>. I was also an RA at HKUST@AI Thrust&INFO Hub, supervised by Prof. <a href=\"https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/YUE-Yutao/yutaoyue\"><strong>Yutao Yue</strong></a>. And now I am a Quant Research Intern in <a href=\"https://www.joinquant.com\"><strong>JoinQuant</strong></a>, supervised by <a href=\"https://dc.simuwang.com/manager/PL00003YUZ.html\"><strong>Rui Xiao</strong></a>.",
                research_interest: "My primary research interest lies in the domain of <strong>Trustworthy AI</strong> 🤖, encompassing <strong>explainability</strong> 🔍, <strong>robustness</strong> 🛡️, <strong>faithfulness</strong> ✅, and <strong>safety</strong> 🔒 of AI."
            }
        },
        zh: {
            nav: {
                homepage: "首页",
                about_me: "关于我",
                news: "新闻动态",
                publications: "发表论文",
                complete_publications: "完整论文列表",
                honors_and_awards: "荣誉奖项",
                educations: "教育经历",
                internships: "工作经历",
                friends: "朋友"
            },
            sections: {
                about_me: "关于我",
                news: "新闻动态",
                publications: "发表论文（精选）",
                complete_publications: "完整论文列表",
                honors_and_awards: "荣誉奖项",
                educations: "教育经历",
                internships: "工作经历",
                friends: "朋友"
            },
            content: {
                about_intro: "这是<strong>赖颂宁</strong>。（你可以叫我Sony。）",
                about_text: "我本科毕业于<a href=\"https://www.sdu.edu.cn/\"><strong>山东大学</strong></a>信息科学与工程学院（<a href=\"https://baike.baidu.com/item/%E5%B1%B1%E4%B8%9C%E5%A4%A7%E5%AD%A6%E5%B4%87%E6%96%B0%E5%AD%A6%E5%A0%82/20809738?fr=aladdin\"><strong>崇新学院</strong></a>），导师为<a href=\"https://faculty.sdu.edu.cn/liuzhi1/zh_CN/index.htm\"><strong>刘治</strong></a>教授。我也曾在香港科技大学（广州）AI学域&信息枢纽担任研究助理，导师为<a href=\"https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/YUE-Yutao/yutaoyue\"><strong>岳宇涛</strong></a>教授。现在我是一名量化研究实习生，就职于<a href=\"https://www.joinquant.com\"><strong>聚宽</strong></a>，导师为<a href=\"https://dc.simuwang.com/manager/PL00003YUZ.html\"><strong>肖锐</strong></a>。",
                research_interest: "我的主要研究兴趣在于<strong>可信AI</strong> 🤖领域，包括AI的<strong>可解释性</strong> 🔍、<strong>鲁棒性</strong> 🛡️、<strong>忠实性</strong> ✅和<strong>安全性</strong> 🔒。"
            }
        }
    };
    
    // 获取当前语言（默认英文）
    function getCurrentLang() {
        return localStorage.getItem('preferred-language') || 'en';
    }
    
    // 设置语言
    function setLanguage(lang) {
        localStorage.setItem('preferred-language', lang);
        document.documentElement.lang = lang;
        applyTranslations(lang);
    }
    
    // 应用翻译
    function applyTranslations(lang) {
        const t = translations[lang];
        if (!t) return;
        
        // 翻译导航栏
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = t;
            for (const k of keys) {
                value = value?.[k];
            }
            if (value) {
                el.textContent = value;
            }
        });
        
        // 翻译导航栏链接
        document.querySelectorAll('[data-i18n-nav]').forEach(el => {
            const key = el.getAttribute('data-i18n-nav');
            // 将导航标题转换为翻译键（如 "About Me" -> "about_me"）
            const navKey = key.toLowerCase().replace(/\s+/g, '_');
            if (t.nav[navKey]) {
                el.textContent = t.nav[navKey];
            }
        });
        
        // 翻译Homepage链接
        const homepageLink = document.querySelector('a[href="#about-me"][data-i18n]');
        if (homepageLink && t.nav.homepage) {
            homepageLink.textContent = t.nav.homepage;
        }
        
        // 翻译section标题（带span的）
        document.querySelectorAll('h1 span[data-i18n], h2 span[data-i18n]').forEach(el => {
            const dataKey = el.getAttribute('data-i18n');
            const keys = dataKey.split('.');
            let value = t;
            for (const k of keys) {
                value = value?.[k];
            }
            if (value) {
                el.textContent = value;
            }
        });
        
        // 翻译内容区域
        document.querySelectorAll('[data-i18n-content]').forEach(el => {
            const key = el.getAttribute('data-i18n-content');
            if (t.content && t.content[key]) {
                el.innerHTML = t.content[key];
            }
        });
        
        // 更新切换按钮文本
        const switchBtn = document.getElementById('lang-switch-text');
        if (switchBtn) {
            switchBtn.textContent = lang === 'en' ? '中文' : 'English';
        }
    }
    
    // 初始化
    function init() {
        const currentLang = getCurrentLang();
        setLanguage(currentLang);
        
        // 绑定切换按钮
        const switchBtn = document.getElementById('lang-switch-btn');
        if (switchBtn) {
            switchBtn.addEventListener('click', function() {
                const currentLang = getCurrentLang();
                const newLang = currentLang === 'en' ? 'zh' : 'en';
                setLanguage(newLang);
            });
        }
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

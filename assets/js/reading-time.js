// 阅读时间估算功能
(function() {
    'use strict';
    
    function calculateReadingTime() {
        const article = document.querySelector('.page__content');
        if (!article) return;
        
        // 获取文本内容
        const text = article.innerText || article.textContent || '';
        const wordCount = text.trim().split(/\s+/).length;
        
        // 平均阅读速度：中文约 300 字/分钟，英文约 200 词/分钟
        // 混合内容取中间值
        const wordsPerMinute = 250;
        const readingTime = Math.ceil(wordCount / wordsPerMinute);
        
        if (readingTime < 1) return; // 少于1分钟不显示
        
        // 检查是否已存在
        if (document.getElementById('reading-time')) return;
        
        const readingTimeEl = document.createElement('div');
        readingTimeEl.id = 'reading-time';
        readingTimeEl.innerHTML = `⏱️ 预计阅读时间：${readingTime} 分钟`;
        readingTimeEl.style.cssText = `
            position: fixed;
            bottom: 250px;
            right: 20px;
            padding: 8px 12px;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(30, 136, 229, 0.2);
            border-radius: 20px;
            font-size: 0.85em;
            color: #555;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            z-index: 9997;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            opacity: 0.8;
        `;
        
        readingTimeEl.addEventListener('mouseenter', () => {
            readingTimeEl.style.opacity = '1';
            readingTimeEl.style.transform = 'scale(1.05)';
        });
        
        readingTimeEl.addEventListener('mouseleave', () => {
            readingTimeEl.style.opacity = '0.8';
            readingTimeEl.style.transform = 'scale(1)';
        });
        
        document.body.appendChild(readingTimeEl);
        
        // 滚动时隐藏
        let hideTimeout;
        function handleScroll() {
            readingTimeEl.style.opacity = '0.3';
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                readingTimeEl.style.opacity = '0.8';
            }, 1000);
        }
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', calculateReadingTime);
    } else {
        calculateReadingTime();
    }
})();

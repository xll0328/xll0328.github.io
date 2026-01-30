// 打字机效果
(function() {
    'use strict';
    
    // 为带有 data-typewriter 属性的元素添加打字机效果
    function initTypewriter() {
        const elements = document.querySelectorAll('[data-typewriter]');
        
        elements.forEach((el, index) => {
            const text = el.textContent;
            el.textContent = '';
            el.style.opacity = '1';
            
            // 延迟启动，避免同时开始
            setTimeout(() => {
                typeText(el, text, 0);
            }, index * 500);
        });
    }
    
    function typeText(element, text, index) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => {
                typeText(element, text, index + 1);
            }, 50 + Math.random() * 50); // 随机速度，更自然
        }
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTypewriter);
    } else {
        initTypewriter();
    }
})();

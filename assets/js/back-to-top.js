// 回到顶部按钮
(function() {
    'use strict';
    
    // 创建回到顶部按钮
    function createBackToTopButton() {
        const button = document.createElement('button');
        button.id = 'back-to-top';
        button.className = 'back-to-top-btn';
        button.innerHTML = '<span>↑</span>';
        button.setAttribute('aria-label', '回到顶部');
        button.style.cssText = `
            position: fixed;
            bottom: 190px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #1e88e5 0%, #43a047 50%, #ff9800 100%);
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 9998;
            box-shadow: 0 4px 15px rgba(30, 136, 229, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(5px);
        `;
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // 悬停效果
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            button.style.boxShadow = '0 6px 20px rgba(30, 136, 229, 0.5)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = '0 4px 15px rgba(30, 136, 229, 0.3)';
        });
        
        document.body.appendChild(button);
        return button;
    }
    
    // 显示/隐藏按钮
    function toggleBackToTopButton() {
        const button = document.getElementById('back-to-top');
        if (!button) return;
        
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    }
    
    // 初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            createBackToTopButton();
            window.addEventListener('scroll', toggleBackToTopButton);
            toggleBackToTopButton();
        });
    } else {
        createBackToTopButton();
        window.addEventListener('scroll', toggleBackToTopButton);
        toggleBackToTopButton();
    }
})();

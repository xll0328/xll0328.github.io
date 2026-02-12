// 键盘快捷键功能
(function() {
    'use strict';
    
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // 忽略在输入框中的按键
            if (e.target.tagName === 'INPUT' || 
                e.target.tagName === 'TEXTAREA' || 
                e.target.isContentEditable) {
                return;
            }
            
            // T 键：回到顶部
            if (e.key === 't' || e.key === 'T') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            
            // B 键：回到底部
            if (e.key === 'b' || e.key === 'B') {
                e.preventDefault();
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            }
            
            // ESC 键：关闭所有弹窗/模态框
            if (e.key === 'Escape') {
                // 关闭图片放大
                const imageOverlay = document.querySelector('.image-zoom-overlay');
                if (imageOverlay && imageOverlay.style.display === 'flex') {
                    imageOverlay.style.opacity = '0';
                    setTimeout(() => {
                        imageOverlay.style.display = 'none';
                        document.body.style.overflow = '';
                    }, 300);
                }
            }
            
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initKeyboardShortcuts);
    } else {
        initKeyboardShortcuts();
    }
})();

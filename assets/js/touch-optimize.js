// 移动端触摸优化
(function() {
    'use strict';
    
    function initTouchOptimize() {
        // 检测是否为移动设备
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (!isMobile) return;
        
        // 优化触摸反馈
        const interactiveElements = document.querySelectorAll('a, button, .paper-box, .honor-card, .timeline-item, .friend-card');
        
        interactiveElements.forEach(el => {
            // 添加触摸反馈类
            el.addEventListener('touchstart', function() {
                this.style.transition = 'all 0.1s ease';
                this.style.transform = 'scale(0.98)';
                this.style.opacity = '0.8';
            }, { passive: true });
            
            el.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.opacity = '';
                }, 100);
            }, { passive: true });
            
            el.addEventListener('touchcancel', function() {
                this.style.transform = '';
                this.style.opacity = '';
            }, { passive: true });
        });
        
        // 优化滚动性能
        let lastTouchY = 0;
        document.addEventListener('touchmove', (e) => {
            const touchY = e.touches[0].clientY;
            const deltaY = touchY - lastTouchY;
            lastTouchY = touchY;
            
            // 防止过度滚动
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            
            if ((scrollTop <= 0 && deltaY < 0) || (scrollTop >= scrollHeight - windowHeight && deltaY > 0)) {
                // 在顶部或底部，允许少量弹性滚动
                return;
            }
        }, { passive: true });
        
        // 添加移动端特定的样式
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                /* 增大触摸目标 */
                a, button {
                    min-height: 44px;
                    min-width: 44px;
                }
                
                /* 优化卡片间距 */
                .paper-box, .honor-card, .friend-card {
                    margin-bottom: 1.5em;
                }
                
                /* 优化按钮大小 */
                #back-to-top {
                    width: 45px;
                    height: 45px;
                    bottom: 100px;
                    right: 15px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTouchOptimize);
    } else {
        initTouchOptimize();
    }
})();

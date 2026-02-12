// 平滑滚动增强 - 添加滚动进度指示
(function() {
    'use strict';
    
    function createScrollProgress() {
        // 检查是否已存在
        if (document.getElementById('scroll-progress-bar')) return;
        
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #1e88e5 0%, #43a047 50%, #ff9800 100%);
            z-index: 10000;
            transition: width 0.1s ease-out;
            box-shadow: 0 2px 4px rgba(30, 136, 229, 0.3);
        `;
        
        document.body.appendChild(progressBar);
        
        function updateProgress() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            
            progressBar.style.width = Math.min(100, Math.max(0, scrollPercent)) + '%';
        }
        
        // 使用节流优化性能
        let ticking = false;
        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateProgress();
                    ticking = false;
                });
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', onScroll, { passive: true });
        updateProgress(); // 初始更新
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createScrollProgress);
    } else {
        createScrollProgress();
    }
})();

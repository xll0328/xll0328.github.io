// 滚动进度条
(function() {
    'use strict';
    
    // 创建进度条
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #1e88e5 0%, #43a047 50%, #ff9800 100%);
        background-size: 200% 100%;
        z-index: 10000;
        transition: width 0.1s ease-out;
        box-shadow: 0 2px 4px rgba(30, 136, 229, 0.3);
        animation: progress-gradient 3s ease infinite;
    `;
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes progress-gradient {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(progressBar);
    
    // 更新进度条
    function updateProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollableHeight = documentHeight - windowHeight;
        const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
        
        progressBar.style.width = progress + '%';
    }
    
    // 节流函数
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // 监听滚动事件
    window.addEventListener('scroll', throttle(updateProgress, 10));
    window.addEventListener('resize', updateProgress);
    
    // 初始更新
    updateProgress();
})();

// 平滑滚动增强 - 添加滚动进度指示
(function() {
    'use strict';

    function getProgressStyle() {
        const isProjectPage = document.body.classList.contains('project-page');
        if (isProjectPage) {
            return {
                background: 'linear-gradient(90deg, rgba(121, 201, 255, 0.95), rgba(255, 196, 82, 0.92))',
                shadow: '0 2px 10px rgba(121, 201, 255, 0.26)'
            };
        }

        return {
            background: 'linear-gradient(90deg, rgba(29, 45, 68, 0.94), rgba(138, 106, 63, 0.9))',
            shadow: '0 2px 10px rgba(29, 45, 68, 0.16)'
        };
    }

    function createScrollProgress() {
        // 检查是否已存在
        if (document.getElementById('scroll-progress-bar')) return;

        const style = getProgressStyle();
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background: ${style.background};
            z-index: 10000;
            transition: width 0.1s ease-out;
            box-shadow: ${style.shadow};
        `;

        document.body.appendChild(progressBar);

        function updateProgress() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollableHeight = documentHeight - windowHeight;
            const scrollPercent = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

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

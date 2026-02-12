// 图片放大查看功能
(function() {
    'use strict';
    
    function initImageZoom() {
        const paperImages = document.querySelectorAll('.paper-box-image img');
        
        paperImages.forEach(img => {
            // 添加悬停提示
            img.style.cursor = 'zoom-in';
            img.title = '点击放大查看';
            
            // 创建放大容器
            const overlay = document.createElement('div');
            overlay.className = 'image-zoom-overlay';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                z-index: 10000;
                display: none;
                align-items: center;
                justify-content: center;
                cursor: zoom-out;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            const zoomedImg = document.createElement('img');
            zoomedImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 8px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            `;
            
            overlay.appendChild(zoomedImg);
            document.body.appendChild(overlay);
            
            // 点击放大
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                zoomedImg.src = img.src;
                zoomedImg.alt = img.alt;
                overlay.style.display = 'flex';
                setTimeout(() => {
                    overlay.style.opacity = '1';
                }, 10);
                document.body.style.overflow = 'hidden';
            });
            
            // 点击关闭
            overlay.addEventListener('click', () => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                    document.body.style.overflow = '';
                }, 300);
            });
            
            // ESC 键关闭
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && overlay.style.display === 'flex') {
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                        document.body.style.overflow = '';
                    }, 300);
                }
            });
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initImageZoom);
    } else {
        initImageZoom();
    }
})();

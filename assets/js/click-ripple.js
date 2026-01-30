// 点击涟漪效果
(function() {
    'use strict';
    
    // 创建涟漪容器
    const rippleContainer = document.createElement('div');
    rippleContainer.id = 'ripple-container';
    rippleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9997;
        overflow: hidden;
    `;
    document.body.appendChild(rippleContainer);
    
    // 创建涟漪效果
    function createRipple(x, y) {
        const ripple = document.createElement('div');
        const size = 50;
        const colors = [
            'rgba(30, 136, 229, 0.4)',
            'rgba(67, 160, 71, 0.4)',
            'rgba(255, 152, 0, 0.4)',
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        ripple.style.cssText = `
            position: absolute;
            left: ${x - size / 2}px;
            top: ${y - size / 2}px;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: ${color};
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        `;
        
        // 添加动画样式（如果还没有）
        if (!document.getElementById('ripple-animation-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation-style';
            style.textContent = `
                @keyframes ripple-animation {
                    to {
                        transform: scale(10);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        rippleContainer.appendChild(ripple);
        
        // 动画结束后移除
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }
    
    // 监听点击事件（排除按钮和链接，避免重复效果）
    document.addEventListener('click', (e) => {
        // 排除特定元素
        if (e.target.matches('button, a, input, textarea, .piano-key, .piano-close')) {
            return;
        }
        
        createRipple(e.clientX, e.clientY);
    });
})();

// 回到顶部按钮
(function() {
    'use strict';

    function getButtonPalette() {
        const isProjectPage = document.body.classList.contains('project-page');
        if (isProjectPage) {
            return {
                background: 'rgba(10, 18, 33, 0.84)',
                border: '1px solid rgba(121, 201, 255, 0.18)',
                color: '#eef6ff',
                shadow: '0 14px 32px rgba(0, 0, 0, 0.28)',
                hoverBackground: 'rgba(18, 30, 52, 0.94)',
                hoverShadow: '0 18px 34px rgba(0, 0, 0, 0.34)'
            };
        }

        return {
            background: 'rgba(255, 255, 255, 0.88)',
            border: '1px solid rgba(29, 45, 68, 0.12)',
            color: '#1d2d44',
            shadow: '0 16px 32px rgba(29, 45, 68, 0.12)',
            hoverBackground: 'rgba(255, 255, 255, 0.98)',
            hoverShadow: '0 18px 36px rgba(29, 45, 68, 0.16)'
        };
    }

    // 创建回到顶部按钮
    function createBackToTopButton() {
        if (document.getElementById('back-to-top')) return document.getElementById('back-to-top');

        const palette = getButtonPalette();
        const button = document.createElement('button');
        button.id = 'back-to-top';
        button.className = 'back-to-top-btn';
        button.innerHTML = '<span>↑</span>';
        button.setAttribute('aria-label', '回到顶部');
        button.style.cssText = `
            position: fixed;
            bottom: 28px;
            right: 24px;
            width: 46px;
            height: 46px;
            border-radius: 16px;
            background: ${palette.background};
            border: ${palette.border};
            color: ${palette.color};
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transform: translateY(8px);
            transition: opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
            z-index: 9998;
            box-shadow: ${palette.shadow};
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(12px);
        `;

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.background = palette.hoverBackground;
            button.style.boxShadow = palette.hoverShadow;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = window.pageYOffset > 300 ? 'translateY(0)' : 'translateY(8px)';
            button.style.background = palette.background;
            button.style.boxShadow = palette.shadow;
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
            button.style.transform = 'translateY(0)';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
            button.style.transform = 'translateY(8px)';
        }
    }

    // 初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            createBackToTopButton();
            window.addEventListener('scroll', toggleBackToTopButton, { passive: true });
            toggleBackToTopButton();
        });
    } else {
        createBackToTopButton();
        window.addEventListener('scroll', toggleBackToTopButton, { passive: true });
        toggleBackToTopButton();
    }
})();

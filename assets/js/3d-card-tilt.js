// 3D卡片倾斜效果
(function() {
    'use strict';
    
    // 为卡片添加3D倾斜效果
    const cards = document.querySelectorAll('.paper-box, .honor-card, .internship-card, .friend-card, .timeline-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'none';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease';
        });
        
        // 添加3D效果的基础样式
        card.style.transformStyle = 'preserve-3d';
        card.style.willChange = 'transform';
    });
})();

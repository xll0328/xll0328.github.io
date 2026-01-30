// 鼠标跟随粒子效果
(function() {
    'use strict';
    
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let animationId = null;
    
    // 创建粒子容器
    const container = document.createElement('div');
    container.id = 'mouse-particles-container';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9998;
        overflow: hidden;
    `;
    document.body.appendChild(container);
    
    // 粒子类
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.life = 1.0;
            this.decay = Math.random() * 0.02 + 0.01;
            this.size = Math.random() * 3 + 1;
            this.color = this.getRandomColor();
            this.element = this.createElement();
            container.appendChild(this.element);
        }
        
        getRandomColor() {
            const colors = [
                'rgba(30, 136, 229, 0.6)',   // 蓝色
                'rgba(67, 160, 71, 0.6)',    // 绿色
                'rgba(255, 152, 0, 0.6)',    // 橙色
                'rgba(156, 39, 176, 0.6)',   // 紫色
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        
        createElement() {
            const el = document.createElement('div');
            el.style.cssText = `
                position: absolute;
                width: ${this.size}px;
                height: ${this.size}px;
                background: ${this.color};
                border-radius: 50%;
                pointer-events: none;
                box-shadow: 0 0 ${this.size * 2}px ${this.color};
            `;
            return el;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life -= this.decay;
            this.vx *= 0.98;
            this.vy *= 0.98;
            
            this.element.style.left = this.x + 'px';
            this.element.style.top = this.y + 'px';
            this.element.style.opacity = this.life;
            this.element.style.transform = `scale(${this.life})`;
            
            if (this.life <= 0) {
                this.destroy();
                return false;
            }
            return true;
        }
        
        destroy() {
            if (this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        }
    }
    
    // 鼠标移动事件
    let lastMouseTime = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 节流：每50ms创建一次粒子
        const now = Date.now();
        if (now - lastMouseTime > 50) {
            createParticles(e.clientX, e.clientY);
            lastMouseTime = now;
        }
    });
    
    // 创建粒子
    function createParticles(x, y) {
        const count = 2; // 每次创建2个粒子
        for (let i = 0; i < count; i++) {
            particles.push(new Particle(x, y));
        }
        
        // 限制粒子数量
        if (particles.length > 100) {
            const removed = particles.shift();
            removed.destroy();
        }
    }
    
    // 动画循环
    function animate() {
        particles = particles.filter(p => p.update());
        animationId = requestAnimationFrame(animate);
    }
    
    // 启动动画
    animate();
    
    // 页面不可见时暂停
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        } else {
            if (!animationId) {
                animate();
            }
        }
    });
})();

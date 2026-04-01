// 全屏漂浮图标动画
(function() {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    // 根据网页内容提取的图标列表
    const icons = [
        '🏸', // 羽毛球
        '🤖', // AI/机器人
        '🔬', // 研究
        '📚', // 学术
        '📝', // 论文
        '🎓', // 教育
        '⭐', // 优秀
        '🏆', // 奖项
        '💻', // 技术
        '⚡', // 能量
        '🔍', // 探索
        '📊', // 数据
        '💡', // 想法
        '🧠', // 智能
        '🛡️', // 安全
        '✅', // 正确
        '🔒', // 安全
        '💬', // 交流
        '📧', // 邮件
        '🎯', // 目标
        '🚀', // 创新
        '🌟', // 亮点
        '💎', // 珍贵
        '🎨', // 创意
        '🔬', // 实验
        '📈', // 增长
        '🎪', // 精彩
        '🌈', // 多彩
        '✨', // 闪耀
        '🔥'  // 热门
    ];
    
    // 动画类型（已移除，现在动态生成）
    
    function createFloatingIcon() {
        const container = document.getElementById('floating-icons-container');
        if (!container) return;
        
        // 创建图标元素
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        
        // 随机选择图标
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        icon.textContent = randomIcon;
        
        // 随机选择动画类型（统一从边缘开始，加快速度）
        const animationOptions = [
            { type: 'up', speed: Math.random() < 0.5 ? 'fast' : 'medium' },
            { type: 'down', speed: Math.random() < 0.5 ? 'fast' : 'medium' },
            { type: 'side', speed: Math.random() < 0.5 ? 'fast' : 'medium' }
        ];
        const selected = animationOptions[Math.floor(Math.random() * animationOptions.length)];
        const animationClass = `float-${selected.type}-${selected.speed}`;
        icon.classList.add(animationClass);
        
        // 统一从边缘开始，确保流畅
        if (selected.type === 'up') {
            // 从下往上：随机水平位置，从屏幕底部外开始
            icon.style.left = Math.random() * 100 + '%';
            icon.style.bottom = '-8vh';
        } else if (selected.type === 'down') {
            // 从上往下：随机水平位置，从屏幕顶部外开始
            icon.style.left = Math.random() * 100 + '%';
            icon.style.top = '-8vh';
        } else {
            // 左右：随机垂直位置，从屏幕左侧外开始
            icon.style.top = Math.random() * 100 + '%';
            icon.style.left = '-8vw';
        }
        
        // 随机大小
        const size = 1.5 + Math.random() * 1.5; // 1.5em - 3.0em
        icon.style.fontSize = size + 'em';
        
        // 最小延迟，让图标更快出现
        const delay = Math.random() * 1.5; // 0-1.5秒
        icon.style.animationDelay = delay + 's';
        
        // 添加到容器
        container.appendChild(icon);
        
        // 动画结束后移除元素（节省内存）
        const animationDuration = selected.speed === 'fast' ? 15000 : 20000;
        const removeTimeout = setTimeout(() => {
            if (icon.parentNode) {
                icon.parentNode.removeChild(icon);
            }
        }, animationDuration + delay * 1000 + 2000);
        
        // 使用 requestAnimationFrame 优化动画性能
        icon.style.willChange = 'transform, opacity';
    }
    
    // 初始化：创建初始图标
    function initFloatingIcons() {
        // 根据设备性能调整初始图标数量
        const isMobile = window.innerWidth < 768;
        const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
        const initialCount = isMobile || isLowEndDevice ? 15 : 25; // 移动设备或低端设备减少图标数量
        
        for (let i = 0; i < initialCount; i++) {
            setTimeout(() => {
                createFloatingIcon();
            }, i * 200); // 每0.2秒创建一个，快速填充
        }
        
        // 持续创建新图标，保持动态效果（根据设备性能调整频率）
        const createInterval = isMobile || isLowEndDevice ? 2000 : 1500; // 移动设备降低创建频率
        setInterval(() => {
            // 限制同时存在的图标数量，避免性能问题
            const container = document.getElementById('floating-icons-container');
            if (container && container.children.length < (isMobile ? 20 : 35)) {
                createFloatingIcon();
            }
        }, createInterval);
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFloatingIcons);
    } else {
        initFloatingIcons();
    }
    
    // 页面可见性变化时暂停/恢复（可选，节省性能）
    document.addEventListener('visibilitychange', function() {
        const container = document.getElementById('floating-icons-container');
        if (!container) return;
        
        if (document.hidden) {
            container.style.animationPlayState = 'paused';
        } else {
            container.style.animationPlayState = 'running';
        }
    });
})();

/**
 * 点赞功能
 * 使用 localStorage 存储点赞数据
 */

(function() {
  'use strict';

  // 初始化
  function initLikeButton() {
    const likeBtn = document.getElementById('like-btn');
    const likeCountEl = document.getElementById('like-count');
    const likeMessageEl = document.getElementById('like-message');

    if (!likeBtn || !likeCountEl) return;

    // 从 localStorage 读取点赞数
    const storageKey = 'site_likes';
    let likes = parseInt(localStorage.getItem(storageKey) || '0', 10);
    const hasLiked = localStorage.getItem('site_has_liked') === 'true';

    // 更新显示
    function updateDisplay() {
      likeCountEl.textContent = likes;
      
      if (hasLiked) {
        likeBtn.classList.add('liked');
        likeBtn.setAttribute('aria-label', '已点赞');
      } else {
        likeBtn.classList.remove('liked');
        likeBtn.setAttribute('aria-label', '点赞');
      }
    }

    // 显示消息
    function showMessage(text, type = 'success') {
      if (!likeMessageEl) return;
      
      likeMessageEl.textContent = text;
      likeMessageEl.className = `like-message ${type}`;
      likeMessageEl.style.opacity = '1';
      
      setTimeout(() => {
        likeMessageEl.style.opacity = '0';
        setTimeout(() => {
          likeMessageEl.textContent = '';
        }, 300);
      }, 2000);
    }

    // 点赞处理
    function handleLike() {
      if (hasLiked) {
        showMessage('你已经点过赞了！', 'info');
        return;
      }

      // 播放音效（如果存在）
      if (window.SoundEffects && window.SoundEffects.isEnabled()) {
        window.SoundEffects.playClick();
      }

      // 增加点赞数
      likes++;
      localStorage.setItem(storageKey, likes.toString());
      localStorage.setItem('site_has_liked', 'true');

      // 更新显示
      updateDisplay();

      // 显示消息
      showMessage('感谢你的点赞！❤️', 'success');

      // 添加动画效果
      likeBtn.style.transform = 'scale(1.2)';
      setTimeout(() => {
        likeBtn.style.transform = 'scale(1)';
      }, 200);

      // 创建粒子效果
      createLikeParticles(likeBtn);
    }

    // 创建点赞粒子效果
    function createLikeParticles(element) {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'like-particle';
        particle.style.cssText = `
          position: fixed;
          left: ${centerX}px;
          top: ${centerY}px;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          opacity: 1;
        `;

        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / 12;
        const distance = 50 + Math.random() * 30;
        const duration = 800 + Math.random() * 400;

        particle.animate([
          {
            transform: `translate(0, 0) scale(1)`,
            opacity: 1
          },
          {
            transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
            opacity: 0
          }
        ], {
          duration: duration,
          easing: 'ease-out'
        }).onfinish = () => {
          particle.remove();
        };
      }
    }

    // 绑定事件
    likeBtn.addEventListener('click', handleLike);
    likeBtn.addEventListener('mouseenter', function() {
      if (window.SoundEffects && window.SoundEffects.isEnabled()) {
        window.SoundEffects.playHover();
      }
    });

    // 初始化显示
    updateDisplay();
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLikeButton);
  } else {
    initLikeButton();
  }
})();

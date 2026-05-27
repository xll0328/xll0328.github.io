// 复制邮箱地址功能
(function() {
    'use strict';
    
    function initCopyEmail() {
        // 查找所有邮箱链接，但排除侧边栏中的（避免破坏布局）
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        
        emailLinks.forEach(link => {
            // 检查是否在侧边栏中，如果是，使用不同的处理方式
            const isInSidebar = link.closest('.sidebar, .author__urls, .author__urls_sm');
            const isInHeroActions = link.closest('.about-hero-actions');
            
            if (isInSidebar) {
                // 侧边栏中的邮箱链接：在链接文本后添加复制图标
                const email = link.href.replace('mailto:', '');
                
                // 检查是否已经添加过复制按钮
                if (link.querySelector('.copy-email-icon')) return;
                
                // 创建内联复制图标
                const copyIcon = document.createElement('span');
                copyIcon.className = 'copy-email-icon';
                copyIcon.innerHTML = '📋';
                copyIcon.title = '复制邮箱地址';
                copyIcon.style.cssText = `
                    display: inline-block;
                    margin-left: 6px;
                    cursor: pointer;
                    font-size: 0.9em;
                    opacity: 0.6;
                    transition: all 0.3s ease;
                    vertical-align: middle;
                `;
                
                copyIcon.addEventListener('mouseenter', () => {
                    copyIcon.style.opacity = '1';
                    copyIcon.style.transform = 'scale(1.2)';
                });
                
                copyIcon.addEventListener('mouseleave', () => {
                    copyIcon.style.opacity = '0.6';
                    copyIcon.style.transform = 'scale(1)';
                });
                
                copyIcon.addEventListener('click', async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    try {
                        await navigator.clipboard.writeText(email);
                        copyIcon.innerHTML = '✓';
                        copyIcon.style.color = '#43a047';
                        
                        setTimeout(() => {
                            copyIcon.innerHTML = '📋';
                            copyIcon.style.color = '';
                        }, 2000);
                    } catch (err) {
                        const textarea = document.createElement('textarea');
                        textarea.value = email;
                        textarea.style.position = 'fixed';
                        textarea.style.opacity = '0';
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textarea);
                        
                        copyIcon.innerHTML = '✓';
                        copyIcon.style.color = '#43a047';
                        setTimeout(() => {
                            copyIcon.innerHTML = '📋';
                            copyIcon.style.color = '';
                        }, 2000);
                    }
                });
                
                // 插入到链接内部（在文本后）
                link.appendChild(copyIcon);
            } else {
                // 非侧边栏中的邮箱链接：使用原来的按钮方式
                const copyBtn = document.createElement('button');
                copyBtn.className = 'copy-email-btn';
                copyBtn.innerHTML = '⎘';
                copyBtn.title = '复制邮箱地址';
                copyBtn.style.cssText = isInHeroActions ? `
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 2.85rem;
                    min-width: 2.85rem;
                    height: 2.85rem;
                    margin-left: 0;
                    padding: 0;
                    background: rgba(255, 255, 255, 0.72);
                    border: 1px solid rgba(29, 45, 68, 0.12);
                    border-radius: 999px;
                    color: #1d2d44;
                    cursor: pointer;
                    font-size: 1rem;
                    line-height: 1;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
                    vertical-align: middle;
                ` : `
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 8px;
                    padding: 4px 8px;
                    background: rgba(255, 255, 255, 0.72);
                    border: 1px solid rgba(29, 45, 68, 0.14);
                    border-radius: 999px;
                    color: #1d2d44;
                    cursor: pointer;
                    font-size: 0.95rem;
                    line-height: 1;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
                    vertical-align: middle;
                `;
                
                copyBtn.addEventListener('mouseenter', () => {
                    copyBtn.style.background = 'rgba(255, 255, 255, 0.96)';
                    copyBtn.style.borderColor = 'rgba(138, 106, 63, 0.28)';
                    copyBtn.style.boxShadow = '0 14px 26px rgba(29, 45, 68, 0.08)';
                    copyBtn.style.transform = 'translateY(-1px)';
                });
                
                copyBtn.addEventListener('mouseleave', () => {
                    copyBtn.style.background = isInHeroActions ? 'rgba(255, 255, 255, 0.72)' : 'rgba(255, 255, 255, 0.72)';
                    copyBtn.style.borderColor = 'rgba(29, 45, 68, 0.12)';
                    copyBtn.style.boxShadow = 'none';
                    copyBtn.style.transform = 'translateY(0)';
                });
                
                copyBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const email = link.href.replace('mailto:', '');
                    
                    try {
                        await navigator.clipboard.writeText(email);
                        const originalText = copyBtn.innerHTML;
                        copyBtn.innerHTML = '✓';
                        copyBtn.style.background = 'rgba(86, 111, 102, 0.14)';
                        copyBtn.style.borderColor = 'rgba(86, 111, 102, 0.28)';
                        copyBtn.style.color = '#365247';
                        
                        setTimeout(() => {
                            copyBtn.innerHTML = originalText;
                            copyBtn.style.background = 'rgba(255, 255, 255, 0.72)';
                            copyBtn.style.borderColor = 'rgba(29, 45, 68, 0.12)';
                            copyBtn.style.color = '#1d2d44';
                        }, 2000);
                    } catch (err) {
                        const textarea = document.createElement('textarea');
                        textarea.value = email;
                        textarea.style.position = 'fixed';
                        textarea.style.opacity = '0';
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textarea);
                        
                        copyBtn.innerHTML = '✓';
                        copyBtn.style.color = '#365247';
                        setTimeout(() => {
                            copyBtn.innerHTML = '⎘';
                            copyBtn.style.color = '#1d2d44';
                        }, 2000);
                    }
                });
                
                // 插入到链接后面
                if (link.nextSibling) {
                    link.parentNode.insertBefore(copyBtn, link.nextSibling);
                } else {
                    link.parentNode.appendChild(copyBtn);
                }
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCopyEmail);
    } else {
        initCopyEmail();
    }
})();

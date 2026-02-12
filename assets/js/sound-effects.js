// 网页音效系统（优化版）
(function() {
    'use strict';
    
    // 音频上下文（延迟初始化，避免浏览器自动播放策略问题）
    let audioContext = null;
    let masterGainNode = null;
    let isEnabled = true; // 音效开关
    let activeSounds = 0; // 当前活跃音效数量
    const MAX_CONCURRENT_SOUNDS = 8; // 最大同时播放音效数
    
    // 从localStorage读取音效设置
    const savedSetting = localStorage.getItem('sound-effects-enabled');
    if (savedSetting !== null) {
        isEnabled = savedSetting === 'true';
    }
    
    // 初始化音频上下文
    function initAudioContext() {
        if (!audioContext) {
            try {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                // 创建主音量控制节点
                masterGainNode = audioContext.createGain();
                masterGainNode.gain.value = isEnabled ? 0.3 : 0; // 默认音量30%（进一步降低）
                masterGainNode.connect(audioContext.destination);
            } catch (e) {
                console.warn('Web Audio API not supported');
                return null;
            }
        }
        return audioContext;
    }
    
    // 更新主音量
    function updateMasterVolume(enabled) {
        if (masterGainNode) {
            masterGainNode.gain.value = enabled ? 0.3 : 0; // 进一步降低整体音量
        }
        isEnabled = enabled;
        localStorage.setItem('sound-effects-enabled', enabled.toString());
    }
    
    // 生成音调（优化版：支持滤波器和更自然的包络）
    function playTone(frequency, duration, type = 'sine', volume = 0.1, options = {}) {
        if (!isEnabled || activeSounds >= MAX_CONCURRENT_SOUNDS) return;
        
        const ctx = initAudioContext();
        if (!ctx || !masterGainNode) return;
        
        // 如果上下文被暂停，恢复它
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        activeSounds++;
        
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        const filter2 = ctx.createBiquadFilter(); // 第二层滤波器，进一步柔化
        
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        
        // 添加多层滤波器，让声音更柔和自然
        if (options.filterType) {
            filter.type = options.filterType;
            filter.frequency.value = options.filterFreq || 1500;
            filter.Q.value = options.filterQ || 0.5;
            
            // 第二层低通滤波器，进一步去除高频
            filter2.type = 'lowpass';
            filter2.frequency.value = Math.min(options.filterFreq || 1500, 1200);
            filter2.Q.value = 0.3;
            
            oscillator.connect(filter);
            filter.connect(filter2);
            filter2.connect(gainNode);
        } else {
            // 即使没有指定滤波器，也添加默认的低通滤波器
            filter.type = 'lowpass';
            filter.frequency.value = 1200;
            filter.Q.value = 0.3;
            oscillator.connect(filter);
            filter.connect(gainNode);
        }
        
        gainNode.connect(masterGainNode);
        
        // 更自然的音量包络（ADSR：Attack, Decay, Sustain, Release）
        const now = ctx.currentTime;
        const attack = options.attack || 0.01;
        const decay = options.decay || 0.05;
        const sustain = options.sustain || 0.7;
        const release = options.release || 0.1;
        
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(volume, now + attack);
        gainNode.gain.linearRampToValueAtTime(volume * sustain, now + attack + decay);
        gainNode.gain.linearRampToValueAtTime(volume * sustain, now + duration - release);
        gainNode.gain.linearRampToValueAtTime(0, now + duration);
        
        oscillator.start(now);
        oscillator.stop(now + duration);
        
        // 音效结束后减少计数
        oscillator.onended = () => {
            activeSounds = Math.max(0, activeSounds - 1);
        };
    }
    
    // 生成自然的点击声（使用白噪声+滤波器，模拟真实点击）
    function playNaturalClick() {
        if (!isEnabled || activeSounds >= MAX_CONCURRENT_SOUNDS) return;
        
        const ctx = initAudioContext();
        if (!ctx || !masterGainNode) return;
        
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        activeSounds++;
        
        const bufferSize = ctx.sampleRate * 0.02; // 20ms
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        // 生成白噪声
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const source = ctx.createBufferSource();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        const filter2 = ctx.createBiquadFilter();
        
        source.buffer = buffer;
        
        // 多层低通滤波器，去除高频，只保留低频的"砰"声
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        filter.Q.value = 0.5;
        
        filter2.type = 'lowpass';
        filter2.frequency.value = 600;
        filter2.Q.value = 0.3;
        
        source.connect(filter);
        filter.connect(filter2);
        filter2.connect(gainNode);
        gainNode.connect(masterGainNode);
        
        const now = ctx.currentTime;
        const duration = 0.02;
        
        // 快速起音，快速衰减
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.04, now + 0.001);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
        
        source.start(now);
        source.stop(now + duration);
        
        source.onended = () => {
            activeSounds = Math.max(0, activeSounds - 1);
        };
    }
    
    // 生成更柔和的按钮点击声（使用自然噪声）
    function playClickSound() {
        playNaturalClick();
    }
    
    // 生成更柔和的悬停声（非常轻柔的低频提示）
    function playHoverSound() {
        playTone(300, 0.1, 'sine', 0.03, { 
            attack: 0.05, 
            decay: 0.02, 
            sustain: 0.3, 
            release: 0.03,
            filterType: 'lowpass',
            filterFreq: 800,
            filterQ: 0.4
        });
    }
    
    // 生成成功声（柔和的低音提示）
    function playSuccessSound() {
        const ctx = initAudioContext();
        if (!ctx) return;
        
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        // 使用更低的频率，更柔和
        const frequencies = [200, 250, 300]; // 低音序列
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                playTone(freq, 0.15, 'sine', 0.05, {
                    attack: 0.02,
                    decay: 0.03,
                    sustain: 0.5,
                    release: 0.1,
                    filterType: 'lowpass',
                    filterFreq: 600,
                    filterQ: 0.4
                });
            }, index * 80);
        });
    }
    
    // 生成滚动声（非常轻微的低频噪声）
    function playScrollSound() {
        if (!isEnabled || activeSounds >= MAX_CONCURRENT_SOUNDS) return;
        
        const ctx = initAudioContext();
        if (!ctx || !masterGainNode) return;
        
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        activeSounds++;
        
        const bufferSize = ctx.sampleRate * 0.05; // 50ms
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        // 生成白噪声
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const source = ctx.createBufferSource();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        
        source.buffer = buffer;
        
        // 强低通滤波，只保留非常低的频率
        filter.type = 'lowpass';
        filter.frequency.value = 200;
        filter.Q.value = 0.2;
        
        source.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(masterGainNode);
        
        const now = ctx.currentTime;
        const duration = 0.05;
        
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.015, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
        
        source.start(now);
        source.stop(now + duration);
        
        source.onended = () => {
            activeSounds = Math.max(0, activeSounds - 1);
        };
    }
    
    // 生成链接点击声（使用自然点击声）
    function playLinkSound() {
        playNaturalClick();
    }
    
    // 生成卡片翻转声（使用自然点击声）
    function playCardFlipSound() {
        playNaturalClick();
    }
    
    // 生成通知声（柔和的低音提示）
    function playNotificationSound() {
        const frequencies = [250, 300]; // 低音
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                playTone(freq, 0.12, 'sine', 0.04, {
                    attack: 0.03,
                    release: 0.09,
                    filterType: 'lowpass',
                    filterFreq: 600,
                    filterQ: 0.4
                });
            }, index * 120);
        });
    }
    
    // 生成错误声（柔和的低音下降）
    function playErrorSound() {
        const frequencies = [250, 200]; // 低音下降
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                playTone(freq, 0.12, 'sine', 0.05, {
                    attack: 0.02,
                    release: 0.1,
                    filterType: 'lowpass',
                    filterFreq: 500,
                    filterQ: 0.4
                });
            }, index * 100);
        });
    }
    
    // 生成页面加载完成声（柔和的低音和弦）
    function playPageLoadSound() {
        const ctx = initAudioContext();
        if (!ctx) return;
        
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        // 延迟播放，避免与页面加载冲突
        setTimeout(() => {
            const frequencies = [200, 250, 300]; // 低音和弦
            frequencies.forEach((freq, index) => {
                setTimeout(() => {
                    playTone(freq, 0.3, 'sine', 0.04, {
                        attack: 0.05,
                        decay: 0.08,
                        sustain: 0.5,
                        release: 0.17,
                        filterType: 'lowpass',
                        filterFreq: 600,
                        filterQ: 0.4
                    });
                }, index * 80);
            });
        }, 800);
    }
    
    // 节流函数（避免滚动时音效过于频繁）
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // 创建音效控制按钮
    function createSoundControl() {
        const control = document.createElement('div');
        control.id = 'sound-control';
        control.innerHTML = isEnabled ? '🔊' : '🔇';
        control.title = isEnabled ? '点击关闭音效' : '点击开启音效';
        
        const style = document.createElement('style');
        style.textContent = `
            #sound-control {
                position: fixed;
                bottom: 80px;
                right: 20px;
                width: 45px;
                height: 45px;
                background: linear-gradient(135deg, rgba(30, 136, 229, 0.95) 0%, rgba(67, 160, 71, 0.95) 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5em;
                cursor: pointer;
                z-index: 9999;
                box-shadow: 0 4px 12px rgba(30, 136, 229, 0.4);
                transition: all 0.3s ease;
                border: 2px solid rgba(255, 255, 255, 0.4);
                backdrop-filter: blur(5px);
                user-select: none;
            }
            
            #sound-control:hover {
                transform: scale(1.1) rotate(-5deg);
                box-shadow: 0 6px 20px rgba(30, 136, 229, 0.6);
                background: linear-gradient(135deg, rgba(30, 136, 229, 1) 0%, rgba(67, 160, 71, 1) 100%);
            }
            
            #sound-control:active {
                transform: scale(0.95);
            }
        `;
        document.head.appendChild(style);
        
        control.addEventListener('click', (e) => {
            e.stopPropagation();
            isEnabled = !isEnabled;
            updateMasterVolume(isEnabled);
            control.innerHTML = isEnabled ? '🔊' : '🔇';
            control.title = isEnabled ? '点击关闭音效' : '点击开启音效';
            
            // 播放切换音效（如果开启）
            if (isEnabled) {
                playNotificationSound();
            }
        });
        
        return control;
    }
    
    // 初始化音效系统
    function init() {
        // 创建音效控制按钮
        const soundControl = createSoundControl();
        document.body.appendChild(soundControl);
        
        // 用户首次交互时初始化音频上下文
        const initOnInteraction = () => {
            initAudioContext();
            document.removeEventListener('click', initOnInteraction);
            document.removeEventListener('touchstart', initOnInteraction);
        };
        
        document.addEventListener('click', initOnInteraction);
        document.addEventListener('touchstart', initOnInteraction);
        
        // 为所有链接添加点击音效
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a, button, .lang-btn, .paper-box, .honor-card, .timeline-item, .internship-card, .friend-card, .news-item-card');
            if (target) {
                if (target.tagName === 'A' || target.classList.contains('paper-box')) {
                    playLinkSound();
                } else if (target.tagName === 'BUTTON') {
                    playClickSound();
                } else {
                    playCardFlipSound();
                }
            }
        }, true);
        
        // 为可交互元素添加悬停音效（使用事件委托，更高效）
        let hoverTimeout = null;
        document.addEventListener('mouseover', (e) => {
            const target = e.target.closest('a, button, .paper-box, .honor-card, .timeline-item, .internship-card, .friend-card, .news-item-card, .masthead__menu-item a, .piano-key');
            
            if (target && !target.dataset.hoverSoundBound) {
                target.dataset.hoverSoundBound = 'true';
                
                // 防抖：避免快速移动时播放过多音效
                clearTimeout(hoverTimeout);
                hoverTimeout = setTimeout(() => {
                    playHoverSound();
                }, 50);
            }
        }, true);
        
        // 滚动音效（优化：更智能的触发）
        const throttledScrollSound = throttle(() => {
            playScrollSound();
        }, 300); // 增加节流时间，减少频率
        
        let lastScrollTop = 0;
        let scrollDirection = 0; // 1: 向下, -1: 向上
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const delta = scrollTop - lastScrollTop;
            
            // 只在明显向下滚动时播放（避免微小滚动）
            if (delta > 5 && scrollTop > 100) {
                scrollDirection = 1;
                throttledScrollSound();
            } else if (delta < -5) {
                scrollDirection = -1;
            }
            
            lastScrollTop = scrollTop;
        });
        
        // 页面加载完成音效（延迟播放）
        if (document.readyState === 'complete') {
            playPageLoadSound();
        } else {
            window.addEventListener('load', () => {
                playPageLoadSound();
            });
        }
        
        // 导航栏点击音效
        const navLinks = document.querySelectorAll('.masthead__menu-item a, .greedy-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                playClickSound();
            });
        });
        
        // 出版物卡片悬停音效
        const pubCards = document.querySelectorAll('.paper-box');
        pubCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                playHoverSound();
            });
        });
        
        // 表单输入音效（如果有表单）
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                playHoverSound();
            });
            input.addEventListener('keydown', (e) => {
                // 只对字符键播放，使用自然点击声
                if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
                    // 使用非常轻微的自然点击声
                    if (isEnabled && activeSounds < MAX_CONCURRENT_SOUNDS) {
                        playNaturalClick();
                    }
                }
            });
        });
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // 导出到全局（用于调试和控制）
    window.SoundEffects = {
        playClick: playClickSound,
        playHover: playHoverSound,
        playSuccess: playSuccessSound,
        playScroll: playScrollSound,
        playLink: playLinkSound,
        playCardFlip: playCardFlipSound,
        playNotification: playNotificationSound,
        playError: playErrorSound,
        setEnabled: (enabled) => {
            updateMasterVolume(enabled);
            const control = document.getElementById('sound-control');
            if (control) {
                control.innerHTML = enabled ? '🔊' : '🔇';
                control.title = enabled ? '点击关闭音效' : '点击开启音效';
            }
        },
        isEnabled: () => isEnabled,
        toggle: () => {
            isEnabled = !isEnabled;
            window.SoundEffects.setEnabled(isEnabled);
        }
    };
})();

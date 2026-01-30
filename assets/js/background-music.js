// 背景音乐系统（使用Web Audio API生成《好运来》BGM）
(function() {
    'use strict';
    
    let isPlaying = false;
    let isEnabled = false; // 默认关闭
    let volume = 0.3; // 默认音量30%
    
    // 从localStorage读取设置
    const savedEnabled = localStorage.getItem('bg-music-enabled');
    const savedVolume = localStorage.getItem('bg-music-volume');
    if (savedEnabled !== null) {
        isEnabled = savedEnabled === 'true';
    }
    if (savedVolume !== null) {
        volume = parseFloat(savedVolume);
    }
    
    // 全局按钮状态更新函数
    let updateButtonStateGlobal = null;
    
    // 播放背景音乐（使用生成的BGM）
    function playMusic() {
        if (!isEnabled) return;
        
        // 初始化音乐生成器
        if (window.MusicGenerator) {
            window.MusicGenerator.init();
            window.MusicGenerator.start();
            isPlaying = true;
            if (updateButtonStateGlobal) {
                updateButtonStateGlobal();
            }
        }
    }
    
    // 停止背景音乐
    function stopMusic() {
        if (window.MusicGenerator) {
            window.MusicGenerator.stop();
        }
        isPlaying = false;
        if (updateButtonStateGlobal) {
            updateButtonStateGlobal();
        }
    }
    
    // 切换背景音乐
    function toggleMusic() {
        isEnabled = !isEnabled;
        localStorage.setItem('bg-music-enabled', isEnabled.toString());
        
        if (isEnabled) {
            playMusic();
        } else {
            stopMusic();
        }
        
        if (updateButtonStateGlobal) {
            updateButtonStateGlobal();
        }
    }
    
    // 设置音量（暂时保留，虽然生成器不支持音量控制）
    function setVolume(newVolume) {
        volume = Math.max(0, Math.min(1, newVolume));
        localStorage.setItem('bg-music-volume', volume.toString());
    }
    
    // 创建控制按钮
    function createMusicControl() {
        const control = document.createElement('div');
        control.id = 'bg-music-control';
        control.innerHTML = isEnabled ? '🎵' : '🔇';
        control.title = isEnabled ? '点击关闭背景音乐' : '点击开启背景音乐';
        
        const style = document.createElement('style');
        style.textContent = `
            #bg-music-control {
                position: fixed;
                bottom: 135px;
                right: 20px;
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, rgba(255, 87, 34, 0.95) 0%, rgba(255, 152, 0, 0.95) 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.8em;
                cursor: pointer;
                z-index: 9999;
                box-shadow: 0 4px 12px rgba(255, 87, 34, 0.4);
                transition: all 0.3s ease;
                border: 3px solid rgba(255, 255, 255, 0.5);
                backdrop-filter: blur(5px);
                user-select: none;
            }
            
            #bg-music-control:hover {
                transform: scale(1.15) rotate(10deg);
                box-shadow: 0 6px 20px rgba(255, 87, 34, 0.6);
                background: linear-gradient(135deg, rgba(255, 87, 34, 1) 0%, rgba(255, 152, 0, 1) 100%);
            }
            
            #bg-music-control:active {
                transform: scale(0.95);
            }
            
            #bg-music-control.playing {
                animation: music-pulse 2s ease-in-out infinite;
            }
            
            @keyframes music-pulse {
                0%, 100% {
                    box-shadow: 0 4px 12px rgba(255, 87, 34, 0.4);
                }
                50% {
                    box-shadow: 0 4px 25px rgba(255, 87, 34, 0.8);
                }
            }
            
            /* 音量控制滑块（悬停时显示） */
            #bg-music-volume-control {
                position: fixed;
                bottom: 190px;
                right: 20px;
                width: 45px;
                height: 120px;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%);
                backdrop-filter: blur(10px);
                border-radius: 12px;
                padding: 10px 5px;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                z-index: 9998;
                display: none;
                border: 2px solid rgba(30, 136, 229, 0.3);
            }
            
            #bg-music-control:hover ~ #bg-music-volume-control,
            #bg-music-volume-control:hover {
                display: block;
            }
            
            #bg-music-volume-control input[type="range"] {
                width: 100%;
                height: 100px;
                writing-mode: bt-lr; /* IE */
                -webkit-appearance: slider-vertical; /* WebKit */
                appearance: slider-vertical;
                background: transparent;
                outline: none;
            }
            
            #bg-music-volume-control input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 20px;
                height: 20px;
                background: linear-gradient(135deg, #1e88e5 0%, #43a047 50%, #ff9800 100%);
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
            
            #bg-music-volume-control input[type="range"]::-moz-range-thumb {
                width: 20px;
                height: 20px;
                background: linear-gradient(135deg, #1e88e5 0%, #43a047 50%, #ff9800 100%);
                border-radius: 50%;
                cursor: pointer;
                border: none;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
        `;
        document.head.appendChild(style);
        
        // 创建音量控制
        const volumeControl = document.createElement('div');
        volumeControl.id = 'bg-music-volume-control';
        const volumeSlider = document.createElement('input');
        volumeSlider.type = 'range';
        volumeSlider.min = '0';
        volumeSlider.max = '100';
        volumeSlider.value = (volume * 100).toString();
        volumeSlider.title = '调节音量';
        volumeControl.appendChild(volumeSlider);
        
        volumeSlider.addEventListener('input', (e) => {
            const newVolume = e.target.value / 100;
            setVolume(newVolume);
        });
        
        control.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMusic();
        });
        
        // 更新按钮状态
        function updateButtonState() {
            // 同步播放状态
            if (window.MusicGenerator) {
                isPlaying = window.MusicGenerator.isPlaying();
            }
            
            if (isEnabled && isPlaying) {
                control.innerHTML = '🎵';
                control.title = '点击关闭背景音乐';
                control.classList.add('playing');
            } else if (isEnabled && !isPlaying) {
                control.innerHTML = '⏸️';
                control.title = '点击关闭背景音乐';
                control.classList.remove('playing');
            } else {
                control.innerHTML = '🔇';
                control.title = '点击开启背景音乐';
                control.classList.remove('playing');
            }
        }
        
        // 保存全局引用
        updateButtonStateGlobal = updateButtonState;
        
        // 定期检查播放状态（用于同步）
        setInterval(() => {
            if (isEnabled && window.MusicGenerator) {
                const currentPlaying = window.MusicGenerator.isPlaying();
                if (currentPlaying !== isPlaying) {
                    isPlaying = currentPlaying;
                    updateButtonState();
                }
            }
        }, 500);
        
        return { control, volumeControl, updateButtonState };
    }
    
    // 初始化
    function init() {
        const { control, volumeControl } = createMusicControl();
        document.body.appendChild(control);
        document.body.appendChild(volumeControl);
        
        // 如果之前是开启状态，尝试播放（需要用户交互）
        if (isEnabled) {
            // 等待用户首次交互
            const initOnInteraction = () => {
                playMusic();
                document.removeEventListener('click', initOnInteraction);
                document.removeEventListener('touchstart', initOnInteraction);
            };
            
            document.addEventListener('click', initOnInteraction, { once: true });
            document.addEventListener('touchstart', initOnInteraction, { once: true });
        }
        
        // 页面可见性变化时暂停/恢复
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (isPlaying && window.MusicGenerator) {
                    window.MusicGenerator.stop();
                    isPlaying = false;
                    updateButtonStateGlobal();
                }
            } else {
                if (isEnabled && !isPlaying) {
                    playMusic();
                }
            }
        });
    }
    
    // 更新按钮状态（供外部调用）
    function updateButtonState() {
        if (updateButtonStateGlobal) {
            updateButtonStateGlobal();
        }
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // 导出到全局
    window.BackgroundMusic = {
        play: playMusic,
        stop: stopMusic,
        toggle: toggleMusic,
        setVolume: setVolume,
        isEnabled: () => isEnabled,
        isPlaying: () => isPlaying
    };
})();

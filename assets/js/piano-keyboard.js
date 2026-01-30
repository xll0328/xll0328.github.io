// 钢琴键盘彩蛋
(function() {
    'use strict';
    
    let audioContext = null;
    let pianoVisible = false;
    let pianoContainer = null;
    
    // 初始化音频上下文
    function initAudioContext() {
        if (!audioContext) {
            try {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) {
                console.warn('Web Audio API not supported');
                return null;
            }
        }
        return audioContext;
    }
    
    // 钢琴键频率映射（C4 到 C6，两个八度）
    const pianoKeys = [
        // 白键
        { note: 'C4', freq: 261.63, key: 'a', isBlack: false },
        { note: 'D4', freq: 293.66, key: 's', isBlack: false },
        { note: 'E4', freq: 329.63, key: 'd', isBlack: false },
        { note: 'F4', freq: 349.23, key: 'f', isBlack: false },
        { note: 'G4', freq: 392.00, key: 'g', isBlack: false },
        { note: 'A4', freq: 440.00, key: 'h', isBlack: false },
        { note: 'B4', freq: 493.88, key: 'j', isBlack: false },
        { note: 'C5', freq: 523.25, key: 'k', isBlack: false },
        { note: 'D5', freq: 587.33, key: 'l', isBlack: false },
        { note: 'E5', freq: 659.25, key: ';', isBlack: false },
        { note: 'F5', freq: 698.46, key: "'", isBlack: false },
        { note: 'G5', freq: 783.99, key: '\\', isBlack: false },
        { note: 'A5', freq: 880.00, key: 'z', isBlack: false },
        { note: 'B5', freq: 987.77, key: 'x', isBlack: false },
        { note: 'C6', freq: 1046.50, key: 'c', isBlack: false },
        // 黑键
        { note: 'C#4', freq: 277.18, key: 'w', isBlack: true, position: 1 },
        { note: 'D#4', freq: 311.13, key: 'e', isBlack: true, position: 2 },
        { note: 'F#4', freq: 369.99, key: 't', isBlack: true, position: 4 },
        { note: 'G#4', freq: 415.30, key: 'y', isBlack: true, position: 5 },
        { note: 'A#4', freq: 466.16, key: 'u', isBlack: true, position: 6 },
        { note: 'C#5', freq: 554.37, key: 'i', isBlack: true, position: 8 },
        { note: 'D#5', freq: 622.25, key: 'o', isBlack: true, position: 9 },
        { note: 'F#5', freq: 739.99, key: '[', isBlack: true, position: 11 },
        { note: 'G#5', freq: 830.61, key: ']', isBlack: true, position: 12 },
        { note: 'A#5', freq: 932.33, key: 'v', isBlack: true, position: 14 },
    ];
    
    // 播放钢琴音
    function playPianoNote(frequency, duration = 0.5) {
        const ctx = initAudioContext();
        if (!ctx) return;
        
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        // 钢琴音色包络（快速起音，缓慢衰减）
        const now = ctx.currentTime;
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.01); // 快速起音
        gainNode.gain.exponentialRampToValueAtTime(0.15, now + 0.1); // 衰减
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration); // 缓慢衰减
        
        oscillator.start(now);
        oscillator.stop(now + duration);
    }
    
    // 创建钢琴键盘
    function createPianoKeyboard() {
        const container = document.createElement('div');
        container.id = 'piano-keyboard';
        container.innerHTML = `
            <div class="piano-header">
                <span class="piano-title">🎹 钢琴键盘</span>
                <button class="piano-close" title="关闭">×</button>
            </div>
            <div class="piano-keys-container">
                ${generatePianoKeys()}
            </div>
            <div class="piano-hint">
                💡 提示：按键盘字母键也可以弹奏哦！点击右上角 × 关闭钢琴
            </div>
        `;
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            #piano-keyboard {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%);
                backdrop-filter: blur(10px);
                border-radius: 16px;
                padding: 1em;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                min-width: 600px;
                max-width: 90vw;
                transition: all 0.3s ease;
                border: 2px solid rgba(30, 136, 229, 0.3);
            }
            
            #piano-keyboard.hidden {
                transform: translateX(-50%) translateY(120%);
                opacity: 0;
                pointer-events: none;
            }
            
            .piano-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1em;
                padding-bottom: 0.5em;
                border-bottom: 2px solid rgba(30, 136, 229, 0.2);
            }
            
            .piano-title {
                font-size: 1.2em;
                font-weight: 700;
                background: linear-gradient(135deg, #1e88e5 0%, #43a047 50%, #ff9800 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .piano-close {
                background: rgba(255, 0, 0, 0.1);
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 1.5em;
                cursor: pointer;
                color: #d32f2f;
                transition: all 0.3s ease;
                line-height: 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .piano-close:hover {
                background: rgba(255, 0, 0, 0.2);
                transform: scale(1.1);
            }
            
            .piano-keys-container {
                position: relative;
                display: flex;
                gap: 0;
                margin-bottom: 1em;
                padding: 0.5em;
                background: rgba(0, 0, 0, 0.05);
                border-radius: 8px;
            }
            
            .piano-key {
                position: relative;
                cursor: pointer;
                user-select: none;
                transition: all 0.1s ease;
                border-radius: 0 0 6px 6px;
            }
            
            .piano-key.white {
                background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
                border: 1px solid #ddd;
                width: 40px;
                height: 150px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .piano-key.white:hover {
                background: linear-gradient(to bottom, #f0f0f0 0%, #e0e0e0 100%);
                transform: translateY(2px);
            }
            
            .piano-key.white.active {
                background: linear-gradient(to bottom, #e3f2fd 0%, #bbdefb 100%);
                transform: translateY(4px);
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            }
            
            .piano-key.black {
                background: linear-gradient(to bottom, #212121 0%, #000000 100%);
                border: 1px solid #000;
                width: 28px;
                height: 100px;
                z-index: 10;
                margin-left: -14px;
                margin-right: -14px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            }
            
            .piano-key.black:hover {
                background: linear-gradient(to bottom, #424242 0%, #212121 100%);
                transform: translateY(2px);
            }
            
            .piano-key.black.active {
                background: linear-gradient(to bottom, #616161 0%, #424242 100%);
                transform: translateY(4px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }
            
            .piano-key-label {
                position: absolute;
                bottom: 8px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.7em;
                font-weight: 600;
                color: #666;
            }
            
            .piano-key.black .piano-key-label {
                color: #fff;
            }
            
            .piano-hint {
                text-align: center;
                font-size: 0.85em;
                color: #666;
                padding: 0.5em;
                background: rgba(30, 136, 229, 0.05);
                border-radius: 6px;
            }
        `;
        document.head.appendChild(style);
        
        // 绑定事件
        container.querySelector('.piano-close').addEventListener('click', togglePiano);
        
        // 为每个键绑定点击事件
        container.querySelectorAll('.piano-key').forEach(keyEl => {
            const keyData = keyEl.dataset;
            keyEl.addEventListener('mousedown', () => {
                playPianoNote(parseFloat(keyData.freq));
                keyEl.classList.add('active');
            });
            keyEl.addEventListener('mouseup', () => {
                keyEl.classList.remove('active');
            });
            keyEl.addEventListener('mouseleave', () => {
                keyEl.classList.remove('active');
            });
        });
        
        return container;
    }
    
    // 生成钢琴键HTML
    function generatePianoKeys() {
        const whiteKeys = pianoKeys.filter(k => !k.isBlack);
        const blackKeys = pianoKeys.filter(k => k.isBlack);
        
        let html = '';
        
        whiteKeys.forEach((key, index) => {
            const blackKeyAfter = blackKeys.find(bk => bk.position === index + 1);
            html += `
                <div class="piano-key white" 
                     data-freq="${key.freq}" 
                     data-note="${key.note}"
                     data-key="${key.key}"
                     title="${key.note} (按 ${key.key.toUpperCase()})">
                    <span class="piano-key-label">${key.key.toUpperCase()}</span>
                </div>
            `;
            
            // 在白键后插入黑键（如果有）
            if (blackKeyAfter) {
                html += `
                    <div class="piano-key black" 
                         data-freq="${blackKeyAfter.freq}" 
                         data-note="${blackKeyAfter.note}"
                         data-key="${blackKeyAfter.key}"
                         title="${blackKeyAfter.note} (按 ${blackKeyAfter.key.toUpperCase()})">
                        <span class="piano-key-label">${blackKeyAfter.key.toUpperCase()}</span>
                    </div>
                `;
            }
        });
        
        return html;
    }
    
    // 显示/隐藏钢琴
    function togglePiano() {
        if (!pianoContainer) {
            pianoContainer = createPianoKeyboard();
            document.body.appendChild(pianoContainer);
        }
        
        pianoVisible = !pianoVisible;
        if (pianoVisible) {
            pianoContainer.classList.remove('hidden');
            initAudioContext(); // 确保音频上下文已初始化
            // 隐藏触发按钮
            const trigger = document.getElementById('piano-trigger');
            if (trigger) {
                trigger.classList.add('hidden');
            }
        } else {
            pianoContainer.classList.add('hidden');
            // 显示触发按钮
            const trigger = document.getElementById('piano-trigger');
            if (trigger) {
                trigger.classList.remove('hidden');
            }
        }
    }
    
    // 创建角落触发按钮
    function createTriggerButton() {
        const trigger = document.createElement('div');
        trigger.id = 'piano-trigger';
        trigger.innerHTML = '🎹';
        trigger.title = '点击打开钢琴键盘';
        
        const style = document.createElement('style');
        style.textContent += `
            #piano-trigger {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, rgba(30, 136, 229, 0.9) 0%, rgba(67, 160, 71, 0.9) 50%, rgba(255, 152, 0, 0.9) 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.8em;
                cursor: pointer;
                z-index: 9999;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                transition: all 0.3s ease;
                border: 2px solid rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(5px);
            }
            
            #piano-trigger:hover {
                transform: scale(1.1) rotate(5deg);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
                background: linear-gradient(135deg, rgba(30, 136, 229, 1) 0%, rgba(67, 160, 71, 1) 50%, rgba(255, 152, 0, 1) 100%);
            }
            
            #piano-trigger:active {
                transform: scale(0.95);
            }
            
            #piano-trigger.hidden {
                opacity: 0;
                pointer-events: none;
                transform: scale(0);
            }
        `;
        document.head.appendChild(style);
        
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePiano();
            // 钢琴显示后，隐藏触发按钮
            if (pianoVisible) {
                trigger.classList.add('hidden');
            }
        });
        
        return trigger;
    }
    
    // 根据键盘按键播放音符
    function handleKeyPress(event) {
        // 如果钢琴未显示，不响应按键
        if (!pianoVisible) return;
        
        const key = event.key.toLowerCase();
        const pianoKey = pianoKeys.find(k => k.key === key);
        
        if (pianoKey) {
            event.preventDefault();
            playPianoNote(pianoKey.freq);
            
            // 视觉反馈
            const keyEl = pianoContainer.querySelector(`[data-key="${key}"]`);
            if (keyEl) {
                keyEl.classList.add('active');
                setTimeout(() => {
                    keyEl.classList.remove('active');
                }, 200);
            }
        }
    }
    
    // 初始化
    function init() {
        // 键盘事件监听
        document.addEventListener('keydown', handleKeyPress);
        
        // 创建初始隐藏的钢琴
        pianoContainer = createPianoKeyboard();
        pianoContainer.classList.add('hidden');
        document.body.appendChild(pianoContainer);
        
        // 创建角落触发按钮
        const triggerButton = createTriggerButton();
        document.body.appendChild(triggerButton);
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // 导出到全局（用于调试）
    window.PianoKeyboard = {
        toggle: togglePiano,
        show: () => { if (!pianoVisible) togglePiano(); },
        hide: () => { if (pianoVisible) togglePiano(); }
    };
})();

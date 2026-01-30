// 《小星星》BGM生成器 - 简单经典的背景音乐
(function() {
    'use strict';
    
    // 音符频率映射（以C4=261.63Hz为基准）
    const notes = {
        'C4': 261.63,
        'D4': 293.66,
        'E4': 329.63,
        'F4': 349.23,
        'G4': 392.00,
        'A4': 440.00,
        'B4': 493.88,
        'C5': 523.25,
        'D5': 587.33,
        'E5': 659.25,
        'F5': 698.46,
        'G5': 783.99,
        'A5': 880.00,
    };
    
    // 《小星星》主旋律（C大调，简单清晰）
    // Twinkle, twinkle, little star
    const melody = [
        // 第一句：一闪一闪亮晶晶
        { note: 'C4', duration: 0.4, time: 0.0 },      // 一
        { note: 'C4', duration: 0.4, time: 0.4 },      // 闪
        { note: 'G4', duration: 0.4, time: 0.8 },      // 一
        { note: 'G4', duration: 0.4, time: 1.2 },     // 闪
        { note: 'A4', duration: 0.4, time: 1.6 },     // 亮
        { note: 'A4', duration: 0.4, time: 2.0 },     // 晶
        { note: 'G4', duration: 0.8, time: 2.4 },      // 晶
        
        // 第二句：满天都是小星星
        { note: 'F4', duration: 0.4, time: 3.2 },      // 满
        { note: 'F4', duration: 0.4, time: 3.6 },     // 天
        { note: 'E4', duration: 0.4, time: 4.0 },      // 都
        { note: 'E4', duration: 0.4, time: 4.4 },     // 是
        { note: 'D4', duration: 0.4, time: 4.8 },      // 小
        { note: 'D4', duration: 0.4, time: 5.2 },      // 星
        { note: 'C4', duration: 0.8, time: 5.6 },      // 星
        
        // 第三句：挂在天上放光明
        { note: 'G4', duration: 0.4, time: 6.4 },      // 挂
        { note: 'G4', duration: 0.4, time: 6.8 },     // 在
        { note: 'F4', duration: 0.4, time: 7.2 },      // 天
        { note: 'F4', duration: 0.4, time: 7.6 },      // 上
        { note: 'E4', duration: 0.4, time: 8.0 },      // 放
        { note: 'E4', duration: 0.4, time: 8.4 },      // 光
        { note: 'D4', duration: 0.8, time: 8.8 },     // 明
        
        // 第四句：好像许多小眼睛
        { note: 'G4', duration: 0.4, time: 9.6 },      // 好
        { note: 'G4', duration: 0.4, time: 10.0 },    // 像
        { note: 'F4', duration: 0.4, time: 10.4 },     // 许
        { note: 'F4', duration: 0.4, time: 10.8 },   // 多
        { note: 'E4', duration: 0.4, time: 11.2 },   // 小
        { note: 'E4', duration: 0.4, time: 11.6 },   // 眼
        { note: 'D4', duration: 0.8, time: 12.0 },   // 睛
        
        // 第五句：一闪一闪亮晶晶
        { note: 'C4', duration: 0.4, time: 12.8 },    // 一
        { note: 'C4', duration: 0.4, time: 13.2 },    // 闪
        { note: 'G4', duration: 0.4, time: 13.6 },   // 一
        { note: 'G4', duration: 0.4, time: 14.0 },   // 闪
        { note: 'A4', duration: 0.4, time: 14.4 },   // 亮
        { note: 'A4', duration: 0.4, time: 14.8 },   // 晶
        { note: 'G4', duration: 0.8, time: 15.2 },   // 晶
        
        // 第六句：满天都是小星星
        { note: 'F4', duration: 0.4, time: 16.0 },    // 满
        { note: 'F4', duration: 0.4, time: 16.4 },   // 天
        { note: 'E4', duration: 0.4, time: 16.8 },   // 都
        { note: 'E4', duration: 0.4, time: 17.2 },   // 是
        { note: 'D4', duration: 0.4, time: 17.6 },   // 小
        { note: 'D4', duration: 0.4, time: 18.0 },   // 星
        { note: 'C4', duration: 1.2, time: 18.4 },  // 星（延长）
    ];
    
    // 简单的和弦伴奏（C大调）
    const chords = [
        { notes: ['C4', 'E4', 'G4'], time: 0.0, duration: 1.6 },    // C
        { notes: ['C4', 'E4', 'G4'], time: 1.6, duration: 0.8 },    // C
        { notes: ['F4', 'A4', 'C5'], time: 3.2, duration: 1.6 },    // F
        { notes: ['C4', 'E4', 'G4'], time: 4.8, duration: 0.8 },    // C
        { notes: ['G4', 'B4', 'D5'], time: 5.6, duration: 0.8 },   // G
        { notes: ['C4', 'E4', 'G4'], time: 6.4, duration: 1.6 },   // C
        { notes: ['F4', 'A4', 'C5'], time: 8.0, duration: 1.6 },    // F
        { notes: ['C4', 'E4', 'G4'], time: 9.6, duration: 0.8 },    // C
        { notes: ['G4', 'B4', 'D5'], time: 10.4, duration: 0.8 },   // G
        { notes: ['C4', 'E4', 'G4'], time: 12.8, duration: 1.6 },   // C
        { notes: ['C4', 'E4', 'G4'], time: 14.4, duration: 0.8 },   // C
        { notes: ['F4', 'A4', 'C5'], time: 16.0, duration: 1.6 },  // F
        { notes: ['C4', 'E4', 'G4'], time: 17.6, duration: 0.8 },   // C
        { notes: ['G4', 'B4', 'D5'], time: 18.4, duration: 1.2 },   // G
    ];
    
    let audioContext = null;
    let isPlaying = false;
    let scheduleInterval = null;
    let startTime = 0;
    let loopDuration = 19.6; // 一个循环的时长（秒）
    let activeOscillators = []; // 跟踪所有活跃的oscillator
    
    // 初始化音频上下文
    function initAudioContext() {
        if (!audioContext) {
            try {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                // 创建主gain节点用于音量控制和快速停止
                audioContext.masterGain = audioContext.createGain();
                audioContext.masterGain.gain.value = 1;
                audioContext.masterGain.connect(audioContext.destination);
            } catch (e) {
                console.warn('Web Audio API not supported');
                return null;
            }
        }
        return audioContext;
    }
    
    // 播放单个音符（优化音色，更柔和）
    function playNote(frequency, startTime, duration, volume = 0.12, type = 'sine') {
        const ctx = initAudioContext();
        if (!ctx) return null;
        
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        
        // 添加低通滤波器，让音色更柔和温暖
        filter.type = 'lowpass';
        filter.frequency.value = 2500;
        filter.Q.value = 0.7;
        
        // 自然的包络（ADSR）
        const now = ctx.currentTime;
        const attack = 0.01;
        const decay = 0.03;
        const sustain = 0.75;
        const release = 0.15;
        
        gainNode.gain.setValueAtTime(0, now + startTime);
        gainNode.gain.linearRampToValueAtTime(volume, now + startTime + attack);
        gainNode.gain.linearRampToValueAtTime(volume * sustain, now + startTime + attack + decay);
        gainNode.gain.linearRampToValueAtTime(volume * sustain, now + startTime + duration - release);
        gainNode.gain.linearRampToValueAtTime(0, now + startTime + duration);
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        
        // 如果存在主gain节点，连接到它；否则直接连接到destination
        if (ctx.masterGain) {
            gainNode.connect(ctx.masterGain);
        } else {
            gainNode.connect(ctx.destination);
        }
        
        // 添加到活跃列表
        activeOscillators.push(oscillator);
        
        // 监听结束事件，从列表中移除
        oscillator.onended = () => {
            const index = activeOscillators.indexOf(oscillator);
            if (index > -1) {
                activeOscillators.splice(index, 1);
            }
        };
        
        oscillator.start(now + startTime);
        oscillator.stop(now + startTime + duration);
        
        return oscillator;
    }
    
    // 播放和弦（更轻柔的伴奏）
    function playChord(chordNotes, startTime, duration, volume = 0.03) {
        chordNotes.forEach(noteName => {
            const freq = notes[noteName];
            if (freq) {
                playNote(freq, startTime, duration, volume, 'triangle');
            }
        });
    }
    
    // 调度音乐循环
    function scheduleLoop(loopIndex) {
        // 双重检查，确保仍在播放状态
        if (!isPlaying || !audioContext) {
            return;
        }
        
        const ctx = initAudioContext();
        if (!ctx) return;
        
        // 再次检查（防止在检查过程中状态改变）
        if (!isPlaying) return;
        
        const baseTime = loopIndex * loopDuration;
        const currentTime = ctx.currentTime;
        const scheduleTime = startTime + baseTime - currentTime;
        
        // 只调度未来的音符（避免重复）
        if (scheduleTime < -0.5 || scheduleTime > loopDuration * 2) return;
        
        // 调度主旋律
        melody.forEach(item => {
            // 每次调度前再次检查
            if (!isPlaying) return;
            
            const freq = notes[item.note];
            if (freq) {
                const noteTime = scheduleTime + item.time;
                if (noteTime >= -0.1 && noteTime < loopDuration + 0.5) {
                    playNote(freq, noteTime, item.duration, 0.15, 'sine');
                }
            }
        });
        
        // 调度和弦伴奏（更轻柔）
        chords.forEach(chord => {
            // 每次调度前再次检查
            if (!isPlaying) return;
            
            const chordTime = scheduleTime + chord.time;
            if (chordTime >= -0.1 && chordTime < loopDuration + 0.5) {
                playChord(chord.notes, chordTime, chord.duration, 0.04);
            }
        });
    }
    
    // 开始播放
    function startPlaying() {
        // 如果已经在播放，先停止（确保干净的状态）
        if (isPlaying) {
            stopPlaying();
            // 等待一小段时间确保完全停止
            setTimeout(() => {
                startPlaying();
            }, 100);
            return;
        }
        
        const ctx = initAudioContext();
        if (!ctx) return;
        
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        // 确保主gain节点已恢复
        if (ctx.masterGain) {
            const now = ctx.currentTime;
            ctx.masterGain.gain.cancelScheduledValues(now);
            ctx.masterGain.gain.setValueAtTime(1, now);
        }
        
        // 重置状态
        isPlaying = true;
        startTime = ctx.currentTime;
        activeOscillators = []; // 清空列表，准备新的播放
        
        // 立即播放第一段
        scheduleLoop(0);
        
        // 每2秒调度一次新的循环（提前调度，确保无缝循环）
        scheduleInterval = setInterval(() => {
            if (!isPlaying) {
                if (scheduleInterval) {
                    clearInterval(scheduleInterval);
                    scheduleInterval = null;
                }
                return;
            }
            
            const currentTime = ctx.currentTime;
            const elapsed = currentTime - startTime;
            const currentLoop = Math.floor(elapsed / loopDuration);
            const nextLoop = currentLoop + 1;
            
            // 调度下一个循环
            scheduleLoop(nextLoop);
        }, 2000);
    }
    
    // 停止播放（立即停止所有声音）
    function stopPlaying() {
        isPlaying = false;
        
        // 清除调度间隔
        if (scheduleInterval) {
            clearInterval(scheduleInterval);
            scheduleInterval = null;
        }
        
        // 立即停止所有正在播放的oscillator
        activeOscillators.forEach(osc => {
            try {
                osc.stop();
            } catch (e) {
                // 忽略已经停止的oscillator
            }
        });
        
        // 清空列表
        activeOscillators = [];
        
        // 如果音频上下文存在，创建一个快速淡出效果
        const ctx = initAudioContext();
        if (ctx && ctx.masterGain) {
            // 快速淡出（0.05秒，更快响应）
            const now = ctx.currentTime;
            ctx.masterGain.gain.cancelScheduledValues(now);
            ctx.masterGain.gain.setValueAtTime(ctx.masterGain.gain.value, now);
            ctx.masterGain.gain.linearRampToValueAtTime(0, now + 0.05);
            
            // 0.1秒后恢复gain（为下次播放准备）
            setTimeout(() => {
                if (ctx && ctx.masterGain && !isPlaying) {
                    const currentTime = ctx.currentTime;
                    ctx.masterGain.gain.cancelScheduledValues(currentTime);
                    ctx.masterGain.gain.setValueAtTime(1, currentTime);
                }
            }, 100);
        }
    }
    
    // 导出API
    window.MusicGenerator = {
        start: startPlaying,
        stop: stopPlaying,
        isPlaying: () => isPlaying,
        init: initAudioContext
    };
})();

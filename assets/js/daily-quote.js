// 每日名言/格言
(function() {
    'use strict';
    
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
        { text: "You learn more from failure than from success.", author: "Unknown" },
        { text: "If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you.", author: "Steve Jobs" },
        { text: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
        { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
        { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
        { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
        { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    ];
    
    // 根据日期选择名言（每天相同）
    function getDailyQuote() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        return quotes[dayOfYear % quotes.length];
    }
    
    // 创建名言显示元素
    function createQuoteWidget() {
        const quote = getDailyQuote();
        const widget = document.createElement('div');
        widget.id = 'daily-quote-widget';
        widget.innerHTML = `
            <div class="quote-content">
                <div class="quote-text">"${quote.text}"</div>
                <div class="quote-author">— ${quote.author}</div>
            </div>
        `;
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            #daily-quote-widget {
                position: fixed;
                top: 80px;
                right: 20px;
                max-width: 300px;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%);
                backdrop-filter: blur(10px);
                border-radius: 12px;
                padding: 1.2em;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
                z-index: 9996;
                border: 2px solid rgba(30, 136, 229, 0.2);
                animation: quote-fade-in 0.5s ease;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            #daily-quote-widget:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            }
            
            .quote-content {
                text-align: left;
            }
            
            .quote-text {
                font-size: 0.9em;
                line-height: 1.6;
                color: #333;
                font-style: italic;
                margin-bottom: 0.5em;
            }
            
            .quote-author {
                font-size: 0.8em;
                color: #666;
                text-align: right;
            }
            
            @keyframes quote-fade-in {
                from {
                    opacity: 0;
                    transform: translateX(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @media (max-width: 768px) {
                #daily-quote-widget {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
        
        // 点击关闭
        widget.addEventListener('click', () => {
            widget.style.animation = 'quote-fade-in 0.5s ease reverse';
            setTimeout(() => {
                if (widget.parentNode) {
                    widget.parentNode.removeChild(widget);
                }
            }, 500);
        });
        
        // 3秒后自动淡出
        setTimeout(() => {
            if (widget.parentNode) {
                widget.style.opacity = '0';
                widget.style.transition = 'opacity 1s ease';
                setTimeout(() => {
                    if (widget.parentNode) {
                        widget.parentNode.removeChild(widget);
                    }
                }, 1000);
            }
        }, 5000);
        
        return widget;
    }
    
    // 页面加载完成后显示
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                document.body.appendChild(createQuoteWidget());
            }, 2000);
        });
    } else {
        setTimeout(() => {
            document.body.appendChild(createQuoteWidget());
        }, 2000);
    }
})();

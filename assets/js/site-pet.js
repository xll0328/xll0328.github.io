(function () {
    'use strict';

    const storageKey = 'site-pet-hidden';
    const messages = [
        'Reading mode.',
        'Clear figures, careful claims.',
        'Research notes stay organized.',
        'Poster pages stay concise.',
        'Back to the evidence.'
    ];

    function initSitePet() {
        const pet = document.querySelector('[data-site-pet]');
        if (!pet) return;

        const button = pet.querySelector('[data-site-pet-button]');
        const bubble = pet.querySelector('[data-site-pet-bubble]');
        const close = pet.querySelector('[data-site-pet-close]');
        let messageIndex = 0;
        let bubbleTimer = null;

        if (window.localStorage && localStorage.getItem(storageKey) === 'true') {
            pet.setAttribute('hidden', '');
            return;
        }

        function showBubble(message) {
            if (!bubble) return;
            bubble.textContent = message;
            pet.classList.add('is-talking');
            window.clearTimeout(bubbleTimer);
            bubbleTimer = window.setTimeout(function () {
                pet.classList.remove('is-talking');
            }, 4200);
        }

        button && button.addEventListener('click', function () {
            messageIndex = (messageIndex + 1) % messages.length;
            showBubble(messages[messageIndex]);
        });

        close && close.addEventListener('click', function () {
            pet.setAttribute('hidden', '');
            if (window.localStorage) localStorage.setItem(storageKey, 'true');
        });

        button && button.addEventListener('mouseenter', function () {
            showBubble(messages[0]);
        }, { once: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSitePet);
    } else {
        initSitePet();
    }
})();

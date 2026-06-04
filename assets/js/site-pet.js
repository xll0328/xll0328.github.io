(function () {
    'use strict';

    const storageKey = 'site-pet-hidden';
    const messages = [
        'Paper trail looks tidy today.',
        'Tiny break. Then back to research.',
        'Trustworthy AI needs steady notes.',
        'Project pages are poster-clean now.',
        'Good ideas like clear figures.'
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
            pet.classList.remove('is-pouncing');
            void pet.offsetWidth;
            pet.classList.add('is-pouncing');
            showBubble(messages[messageIndex]);
        });

        close && close.addEventListener('click', function () {
            pet.setAttribute('hidden', '');
            if (window.localStorage) localStorage.setItem(storageKey, 'true');
        });

        window.setTimeout(function () {
            showBubble(messages[0]);
        }, 900);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSitePet);
    } else {
        initSitePet();
    }
})();

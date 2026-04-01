// 外链安全策略：仅外部链接新开页
(function () {
    'use strict';

    function isExternalUrl(href) {
        if (!href) return false;
        if (href.startsWith('#')) return false;
        if (href.startsWith('/')) return false;
        if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;

        try {
            const url = new URL(href, window.location.origin);
            return url.origin !== window.location.origin;
        } catch (e) {
            return false;
        }
    }

    function applyExternalLinkPolicy() {
        const links = document.querySelectorAll('a[href]');
        links.forEach((link) => {
            const href = link.getAttribute('href');
            if (!isExternalUrl(href)) return;
            if (link.hasAttribute('data-no-blank')) return;

            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyExternalLinkPolicy);
    } else {
        applyExternalLinkPolicy();
    }
})();

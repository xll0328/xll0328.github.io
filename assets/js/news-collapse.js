// News 折叠：默认仅显示最新若干条，可展开全部
(function () {
    'use strict';

    function initNewsCollapse() {
        const list = document.getElementById('news-list');
        const button = document.getElementById('news-toggle-btn');
        if (!list || !button) return;

        const items = Array.from(list.querySelectorAll('li'));
        const defaultVisible = 8;

        if (items.length <= defaultVisible) {
            button.style.display = 'none';
            list.classList.remove('is-collapsed');
            return;
        }

        function applyCollapsed(collapsed) {
            items.forEach((item, idx) => {
                item.style.display = collapsed && idx >= defaultVisible ? 'none' : '';
            });
            list.classList.toggle('is-collapsed', collapsed);
            button.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
            button.textContent = collapsed ? 'Show full news archive' : 'Show recent highlights only';
        }

        applyCollapsed(true);

        button.addEventListener('click', function () {
            const collapsed = list.classList.contains('is-collapsed');
            applyCollapsed(!collapsed);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNewsCollapse);
    } else {
        initNewsCollapse();
    }
})();

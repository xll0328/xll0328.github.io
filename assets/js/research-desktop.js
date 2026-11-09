(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    var pageContent = document.querySelector('.research-desktop-home .page__content');
    var shell = pageContent && pageContent.querySelector('.research-desktop-shell');
    var workspace = shell && shell.querySelector('[data-research-workspace]');
    if (!pageContent || !shell || !workspace) return;

    var locale = shell.getAttribute('data-locale') || 'en';
    var isZh = locale === 'zh';
    var labels = isZh ? {
      about: '关于我', research: '研究方向', news: '动态', publications: '代表性论文',
      publicationList: '完整论文列表', honors: '荣誉与奖励', experience: '教育与工作经历',
      internships: '服务与领导力', collaborators: '合作伙伴', guestbook: '留言板',
      close: '关闭', minimize: '最小化', maximize: '最大化', restore: '还原',
      closeAll: '关闭全部', app: '应用', empty: '从左侧打开一个应用，开始浏览。',
      publicContent: '仅展示公开内容'
    } : {
      about: 'About', research: 'Research', news: 'News', publications: 'Selected publications',
      publicationList: 'Publication archive', honors: 'Honors & awards', experience: 'Education & experience',
      internships: 'Service & leadership', collaborators: 'Collaborators', guestbook: 'Guestbook',
      close: 'Close', minimize: 'Minimize', maximize: 'Maximize', restore: 'Restore',
      closeAll: 'Close all', app: 'Application', empty: 'Open an app from the left to explore the archive.',
      publicContent: 'Public content only'
    };

    var dockApps = shell.querySelector('[data-research-dock-apps]');
    var dockCloseAll = shell.querySelector('[data-dock-close-all]');

    var sourceNodes = Array.prototype.slice.call(pageContent.children).filter(function (node) {
      return node !== shell;
    });
    var groups = [];
    var current = { id: 'about', title: labels.about, nodes: [] };

    function headingGroup(heading) {
      var text = (heading.textContent || '').trim().toLowerCase();
      var id = heading.id || '';
      if (text.indexOf('research') !== -1 || text.indexOf('研究方向') !== -1) return ['research', labels.research];
      if (text === 'news' || text === '动态') return ['news', labels.news];
      if (text.indexOf('publication list') !== -1 || text.indexOf('完整论文') !== -1) return ['publication-list', labels.publicationList];
      if (text.indexOf('publication') !== -1 || text.indexOf('论文') !== -1) return ['publications', labels.publications];
      if (text.indexOf('honor') !== -1 || text.indexOf('荣誉') !== -1) return ['honors', labels.honors];
      if (text.indexOf('education') !== -1 || text.indexOf('work experience') !== -1 || text.indexOf('教育') !== -1 || id === 'educations') return ['experience', labels.experience];
      if (text.indexOf('service') !== -1 || text.indexOf('leadership') !== -1 || text.indexOf('服务') !== -1) return ['internships', labels.internships];
      if (text.indexOf('collaborator') !== -1 || text.indexOf('合作') !== -1) return ['collaborators', labels.collaborators];
      if (text.indexOf('guestbook') !== -1 || text.indexOf('留言') !== -1) return ['guestbook', labels.guestbook];
      return [id || 'section-' + groups.length, (heading.textContent || '').trim() || labels.app];
    }

    sourceNodes.forEach(function (node) {
      if (node.tagName && node.tagName.toLowerCase() === 'h2') {
        if (current.nodes.length) groups.push(current);
        var next = headingGroup(node);
        current = { id: next[0], title: next[1], nodes: [node] };
      } else if (node.tagName && node.tagName.toLowerCase() === 'hr') {
        if (current.nodes.length) groups.push(current);
        current = { id: 'guestbook', title: labels.guestbook, nodes: [] };
      } else if (!(node.classList && node.classList.contains('section-divider'))) {
        current.nodes.push(node);
      }
    });
    if (current.nodes.length) groups.push(current);

    var seen = {};
    var windows = [];
    var z = 30;

    function iconFor(id) {
      var icon = { about: 'SL', research: '∿', news: '✦', publications: '▤', 'publication-list': '≡', honors: '★', experience: '⌁', internships: '✎', collaborators: '◎', guestbook: '@' };
      return icon[id] || '□';
    }

    function makeButton(action, label, icon, className) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'research-window__control research-window__control--' + className;
      button.setAttribute('data-window-action', action);
      button.setAttribute('aria-label', label);
      button.title = label;
      button.innerHTML = icon;
      return button;
    }

    function makeWindow(group) {
      var id = group.id;
      if (seen[id]) return seen[id];
      var win = document.createElement('section');
      win.className = 'research-window research-window--' + id;
      win.id = 'research-window-' + id;
      win.setAttribute('data-window', id);
      win.setAttribute('role', 'dialog');
      win.setAttribute('aria-modal', 'false');
      win.setAttribute('aria-labelledby', 'research-window-title-' + id);
      win.setAttribute('aria-hidden', 'true');

      var bar = document.createElement('header');
      bar.className = 'research-window__bar';
      bar.setAttribute('data-window-drag-handle', 'true');
      var dots = document.createElement('div');
      dots.className = 'research-window__dots';
      dots.appendChild(makeButton('close', labels.close, '×', 'close'));
      dots.appendChild(makeButton('minimize', labels.minimize, '−', 'minimize'));
      dots.appendChild(makeButton('maximize', labels.maximize, '□', 'maximize'));
      var title = document.createElement('div');
      title.className = 'research-window__title';
      title.id = 'research-window-title-' + id;
      title.innerHTML = '<span class="research-window__file-icon">' + iconFor(id) + '</span><span>' + group.title + '</span><small>~/research/' + id + '</small>';
      bar.appendChild(dots);
      bar.appendChild(title);
      bar.appendChild(document.createElement('span')).className = 'research-window__bar-spacer';
      var body = document.createElement('div');
      body.className = 'research-window__body';
      body.tabIndex = -1;
      body.setAttribute('role', 'document');
      group.nodes.forEach(function (node) { body.appendChild(node); });
      win.appendChild(bar);
      win.appendChild(body);
      workspace.appendChild(win);
      seen[id] = win;
      windows.push(win);
      return win;
    }

    groups.forEach(makeWindow);

    shell.querySelectorAll('img').forEach(function (image) {
      image.decoding = 'async';
      if (!image.closest('.home-hero')) image.loading = 'lazy';
    });

    function findWindow(id) {
      if (id === 'educations') id = 'experience';
      if (id === 'internships') id = 'internships';
      if (id === 'publication-list') return seen['publication-list'] || seen.publications;
      return seen[id] || null;
    }

    function refreshDock() {
      if (!dockApps) return;
      dockApps.innerHTML = '';
      var openWindows = windows.filter(function (win) { return win.classList.contains('is-open'); });
      if (!openWindows.length) {
        var empty = document.createElement('span');
        empty.className = 'research-desktop-dockbar__empty';
        empty.textContent = labels.empty;
        dockApps.appendChild(empty);
        return;
      }
      openWindows.forEach(function (win) {
        var button = document.createElement('button');
        var titleNode = win.querySelector('.research-window__title span:nth-child(2)');
        var iconNode = win.querySelector('.research-window__file-icon');
        button.type = 'button';
        button.className = 'research-desktop-dockbar__app' + (win.classList.contains('is-active') ? ' is-active' : '');
        button.setAttribute('data-dock-window', win.getAttribute('data-window'));
        button.setAttribute('aria-pressed', win.classList.contains('is-active') ? 'true' : 'false');
        button.title = titleNode ? titleNode.textContent : labels.app;
        button.innerHTML = '<span class="research-desktop-dockbar__app-icon">' + (iconNode ? iconNode.textContent : '□') + '</span><span class="research-desktop-dockbar__app-label">' + button.title + '</span>';
        dockApps.appendChild(button);
      });
    }

    function bringToFront(win) {
      z += 1;
      win.style.zIndex = z;
      windows.forEach(function (item) {
        var active = item === win && item.classList.contains('is-open');
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-current', active ? 'page' : 'false');
      });
      document.querySelectorAll('[data-open-window]').forEach(function (button) {
        var active = button.getAttribute('data-open-window') === win.getAttribute('data-window') && win.classList.contains('is-open');
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      refreshDock();
    }

    function openWindow(id, focus) {
      var win = findWindow(id);
      if (!win) return;
      win.classList.remove('is-closed', 'is-minimized');
      win.classList.add('is-open');
      win.setAttribute('aria-hidden', 'false');
      bringToFront(win);
      if (focus !== false) {
        var body = win.querySelector('.research-window__body');
        if (window.matchMedia('(max-width: 760px)').matches) win.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else if (body) body.focus({ preventScroll: true });
      }
    }

    function closeWindow(win) {
      win.classList.remove('is-open', 'is-active', 'is-maximized');
      win.classList.add('is-closed');
      win.setAttribute('aria-hidden', 'true');
      win.setAttribute('aria-current', 'false');
      document.querySelectorAll('[data-open-window]').forEach(function (button) {
        if (button.getAttribute('data-open-window') === win.getAttribute('data-window')) {
          button.classList.remove('is-active');
          button.setAttribute('aria-pressed', 'false');
        }
      });
      refreshDock();
    }

    function toggleMaximize(win) {
      win.classList.toggle('is-maximized');
      var button = win.querySelector('[data-window-action="maximize"]');
      if (button) {
        var maximized = win.classList.contains('is-maximized');
        button.setAttribute('aria-label', maximized ? labels.restore : labels.maximize);
        button.title = maximized ? labels.restore : labels.maximize;
      }
      bringToFront(win);
    }

    function setupDrag(win) {
      var handle = win.querySelector('[data-window-drag-handle]');
      if (!handle) return;
      handle.addEventListener('pointerdown', function (event) {
        if (event.target.closest('button')) return;
        if (window.matchMedia('(max-width: 760px)').matches || win.classList.contains('is-maximized')) return;
        var rect = win.getBoundingClientRect();
        var workspaceRect = workspace.getBoundingClientRect();
        var startX = event.clientX;
        var startY = event.clientY;
        var startLeft = rect.left - workspaceRect.left;
        var startTop = rect.top - workspaceRect.top;
        win.setPointerCapture(event.pointerId);
        bringToFront(win);
        function move(e) {
          var maxLeft = Math.max(8, workspaceRect.width - rect.width - 8);
          var maxTop = Math.max(8, workspaceRect.height - rect.height - 8);
          var left = Math.max(8, Math.min(maxLeft, startLeft + e.clientX - startX));
          var top = Math.max(8, Math.min(maxTop, startTop + e.clientY - startY));
          win.style.left = left + 'px';
          win.style.top = top + 'px';
          win.style.right = 'auto';
          win.style.bottom = 'auto';
        }
        function stop() {
          if (win.hasPointerCapture(event.pointerId)) win.releasePointerCapture(event.pointerId);
          win.removeEventListener('pointermove', move);
          win.removeEventListener('pointerup', stop);
          win.removeEventListener('pointercancel', stop);
        }
        win.addEventListener('pointermove', move);
        win.addEventListener('pointerup', stop);
        win.addEventListener('pointercancel', stop);
      });
    }

    windows.forEach(function (win) {
      setupDrag(win);
      win.addEventListener('pointerdown', function () { bringToFront(win); });
      win.addEventListener('click', function (event) {
        var control = event.target.closest('[data-window-action]');
        if (!control) return;
        event.preventDefault();
        var action = control.getAttribute('data-window-action');
        if (action === 'close') closeWindow(win);
        if (action === 'minimize') { win.classList.remove('is-open', 'is-active'); win.classList.add('is-minimized'); win.setAttribute('aria-hidden', 'true'); refreshDock(); }
        if (action === 'maximize') toggleMaximize(win);
      });
    });

    var mobile = window.matchMedia('(max-width: 760px)').matches;
    var defaultOpen = mobile ? ['about'] : ['about', 'publications', 'news'];
    windows.forEach(function (win) {
      if (defaultOpen.indexOf(win.getAttribute('data-window')) !== -1) openWindow(win.getAttribute('data-window'), false);
      else { win.classList.add('is-closed'); win.setAttribute('aria-hidden', 'true'); }
    });

    document.querySelectorAll('[data-open-window]').forEach(function (button) {
      var linkedWindow = findWindow(button.getAttribute('data-open-window'));
      var active = linkedWindow && linkedWindow.classList.contains('is-active') && linkedWindow.classList.contains('is-open');
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
      button.addEventListener('click', function () { openWindow(button.getAttribute('data-open-window')); });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      var active = windows.filter(function (win) { return win.classList.contains('is-active') && win.classList.contains('is-open'); })[0];
      if (active) {
        event.preventDefault();
        closeWindow(active);
      }
    });

    if (dockApps) {
      dockApps.addEventListener('click', function (event) {
        var button = event.target.closest('[data-dock-window]');
        if (button) openWindow(button.getAttribute('data-dock-window'));
      });
    }

    if (dockCloseAll) {
      dockCloseAll.textContent = labels.closeAll;
      dockCloseAll.addEventListener('click', function () {
        windows.slice().forEach(closeWindow);
      });
    }

    function windowForHash(hash) {
      var value = (hash || '').replace(/^#/, '');
      if (!value) return null;
      if (value === 'about-me') return 'about';
      return value;
    }

    document.addEventListener('click', function (event) {
      var link = event.target.closest('a[href*="#"]');
      if (!link) return;
      var href = link.getAttribute('href') || '';
      var hashIndex = href.indexOf('#');
      if (hashIndex < 0) return;
      var hash = href.slice(hashIndex);
      var id = windowForHash(hash);
      if (!findWindow(id)) return;
      event.preventDefault();
      openWindow(id);
      history.replaceState(null, '', hash);
    });

    var clockNodes = document.querySelectorAll('[data-research-clock]');
    function updateClock() {
      var now = new Date();
      var date = new Intl.DateTimeFormat(isZh ? 'zh-CN' : 'en-GB', { timeZone: 'Asia/Shanghai', month: 'short', day: '2-digit' }).format(now);
      var time = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hour12: false }).format(now);
      clockNodes.forEach(function (node) { node.textContent = date + '  ' + time; });
    }
    updateClock();
    window.setInterval(updateClock, 30000);

    document.querySelectorAll('[data-wallpaper-toggle]').forEach(function (button) {
      var themes = ['', 'is-sunrise', 'is-aurora'];
      var themeNames = isZh ? ['默认配色', '日出配色', '极光配色'] : ['Default accent', 'Sunrise accent', 'Aurora accent'];
      var themeIndex = 0;
      button.setAttribute('aria-label', themeNames[themeIndex]);
      button.addEventListener('click', function () {
        shell.classList.remove('is-sunrise', 'is-aurora');
        themeIndex = (themeIndex + 1) % themes.length;
        if (themes[themeIndex]) shell.classList.add(themes[themeIndex]);
        button.setAttribute('aria-label', themeNames[themeIndex]);
        button.title = themeNames[themeIndex];
      });
    });

    document.body.classList.add('research-desktop-ready');
    refreshDock();
    var initial = windowForHash(window.location.hash);
    if (initial && findWindow(initial)) openWindow(initial);
  });
}());

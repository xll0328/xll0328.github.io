// 论文标签筛选功能
(function() {
    'use strict';
    
    function initPublicationFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const publicationItems = document.querySelectorAll('.publication-list li[data-tags]');
        const filterCount = document.getElementById('filter-count');
        
        if (!filterButtons.length || !publicationItems.length) {
            return;
        }
        
        // 筛选函数
        function filterPublications(selectedFilter) {
            let visibleCount = 0;
            let hiddenSections = new Set();
            
            publicationItems.forEach(item => {
                const tags = item.getAttribute('data-tags') || '';
                const tagArray = tags.split(' ').filter(tag => tag.trim());
                
                // 如果选择"全部"，显示所有论文
                if (selectedFilter === 'all') {
                    item.style.display = '';
                    visibleCount++;
                } else {
                    // 检查论文是否包含选中的标签
                    if (tagArray.includes(selectedFilter)) {
                        item.style.display = '';
                        visibleCount++;
                    } else {
                        item.style.display = 'none';
                        // 记录隐藏的论文所在的年份section
                        const section = item.closest('h2');
                        if (section) {
                            hiddenSections.add(section);
                        }
                    }
                }
            });
            
            // 隐藏没有可见论文的年份section
            document.querySelectorAll('.complete-publications-container h2').forEach(section => {
                const list = section.nextElementSibling;
                if (list && list.tagName === 'UL') {
                    const visibleItems = Array.from(list.querySelectorAll('li[data-tags]'))
                        .filter(item => item.style.display !== 'none');
                    if (visibleItems.length === 0 && selectedFilter !== 'all') {
                        section.style.display = 'none';
                        list.style.display = 'none';
                    } else {
                        section.style.display = '';
                        list.style.display = '';
                    }
                }
            });
            
            // 更新计数显示
            if (filterCount) {
                if (selectedFilter === 'all') {
                    filterCount.textContent = `显示全部 ${visibleCount} 篇论文`;
                } else {
                    const filterName = document.querySelector(`[data-filter="${selectedFilter}"]`)?.textContent || selectedFilter;
                    filterCount.textContent = `显示 ${visibleCount} 篇论文 (${filterName})`;
                }
            }
        }
        
        // 为每个筛选按钮添加点击事件
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // 移除所有按钮的active类
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // 添加当前按钮的active类
                button.classList.add('active');
                
                // 获取选中的筛选标签
                const selectedFilter = button.getAttribute('data-filter');
                
                // 执行筛选
                filterPublications(selectedFilter);
            });
        });
        
        // 初始化：显示所有论文
        filterPublications('all');
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPublicationFilter);
    } else {
        initPublicationFilter();
    }
})();

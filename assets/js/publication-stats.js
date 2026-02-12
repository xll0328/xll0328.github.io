// 论文统计和标签筛选功能
(function() {
    'use strict';
    
    // Tag映射：从data-tags值到显示名称
    const tagMap = {
        'ccf-a': 'CCF A',
        'ccf-b': 'CCF B',
        'ccf-c': 'CCF C',
        'iclr': 'ICLR',
        'core-a-star': 'Core A*',
        'core-a': 'Core A',
        'core-b': 'Core B',
        'jcr-q1': 'JCR Q1'
    };
    
    // 统计每个tag的论文数量
    function countPublications() {
        const publicationItems = document.querySelectorAll('.publication-list li[data-tags]');
        const tagCounts = {};
        
        // 初始化计数
        Object.keys(tagMap).forEach(tag => {
            tagCounts[tag] = 0;
        });
        
        // 统计每个tag的数量
        publicationItems.forEach(item => {
            const tags = item.getAttribute('data-tags') || '';
            const tagArray = tags.split(' ').filter(tag => tag.trim());
            
            tagArray.forEach(tag => {
                if (tagCounts.hasOwnProperty(tag)) {
                    tagCounts[tag]++;
                }
            });
        });
        
        return tagCounts;
    }
    
    // 生成统计HTML，每个tag可点击
    function generateStatsHTML(tagCounts) {
        const statsParts = [];
        
        // 按照显示顺序排列
        const displayOrder = ['ccf-a', 'iclr', 'ccf-b', 'ccf-c', 'jcr-q1'];
        
        displayOrder.forEach(tag => {
            if (tagCounts[tag] > 0) {
                const displayName = tagMap[tag];
                statsParts.push(
                    `<span class="stat-tag" data-filter="${tag}">${displayName}: ${tagCounts[tag]}</span>`
                );
            }
        });
        
        // 计算总论文数
        const publicationItems = document.querySelectorAll('.publication-list li[data-tags]');
        const totalCount = publicationItems.length;
        
        // 添加总计标签
        statsParts.push(
            `<span class="stat-tag stat-tag-total" data-filter="all">总计: ${totalCount}</span>`
        );
        
        return statsParts.join(' | ');
    }
    
    // 当前选中的筛选器
    let currentFilter = null;
    
    // 筛选论文
    function filterPublications(selectedFilter) {
        const publicationItems = document.querySelectorAll('.publication-list li[data-tags]');
        let visibleCount = 0;
        
        publicationItems.forEach(item => {
            const tags = item.getAttribute('data-tags') || '';
            const tagArray = tags.split(' ').filter(tag => tag.trim());
            
            // 如果选择"全部"或没有选择，显示所有论文
            if (!selectedFilter || selectedFilter === 'all') {
                item.style.display = '';
                visibleCount++;
            } else {
                // 检查论文是否包含选中的标签
                if (tagArray.includes(selectedFilter)) {
                    item.style.display = '';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            }
        });
        
        // 隐藏没有可见论文的年份section
        document.querySelectorAll('.complete-publications-container h2').forEach(section => {
            const list = section.nextElementSibling;
            if (list && list.tagName === 'UL') {
                const visibleItems = Array.from(list.querySelectorAll('li[data-tags]'))
                    .filter(item => item.style.display !== 'none');
                if (visibleItems.length === 0 && selectedFilter && selectedFilter !== 'all') {
                    section.style.display = 'none';
                    list.style.display = 'none';
                } else {
                    section.style.display = '';
                    list.style.display = '';
                }
            }
        });
        
        // 更新统计标签的样式
        updateStatsTagsStyle();
    }
    
    // 更新统计标签的样式
    function updateStatsTagsStyle() {
        const statTags = document.querySelectorAll('.stat-tag');
        statTags.forEach(tag => {
            const tagFilter = tag.getAttribute('data-filter');
            // 如果没有选中任何筛选器（显示全部），则总计标签应该激活
            if (!currentFilter && tagFilter === 'all') {
                tag.classList.add('active');
            } else if (currentFilter && currentFilter === tagFilter) {
                tag.classList.add('active');
            } else {
                tag.classList.remove('active');
            }
        });
    }
    
    // 初始化
    function initPublicationStats() {
        const statsContainer = document.getElementById('publication-stats');
        const statsContent = document.getElementById('stats-content');
        
        if (!statsContainer || !statsContent) {
            return;
        }
        
        // 统计论文数量
        const tagCounts = countPublications();
        
        // 生成并显示统计HTML
        const statsHTML = generateStatsHTML(tagCounts);
        statsContent.innerHTML = statsHTML;
        
        // 为每个统计标签添加点击事件
        const statTags = document.querySelectorAll('.stat-tag');
        statTags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedFilter = tag.getAttribute('data-filter');
                
                // 如果点击的是"全部"或再次点击同一个tag，则显示全部
                if (selectedFilter === 'all' || currentFilter === selectedFilter) {
                    currentFilter = null;
                    filterPublications('all');
                } else {
                    currentFilter = selectedFilter;
                    filterPublications(selectedFilter);
                }
            });
        });
        
        // 初始化：显示所有论文
        filterPublications('all');
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPublicationStats);
    } else {
        initPublicationStats();
    }
})();

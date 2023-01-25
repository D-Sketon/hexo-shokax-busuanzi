'use strict';

const path=require('path');

hexo.extend.filter.register('theme_inject', function(injects) {
    injects.footer.file('busuanzi', path.join(__dirname, 'busuanzi.pug'),{}, {cache: false});
    injects.style.push(path.join(__dirname, 'busuanzi.styl'));
});
/* global fis */

fis.config.set('modules.parser.js', 'babel');
//jswrapper 用来自动封装 `define`
//require-async 用来支持动态加载组件
fis.config.set('modules.postprocessor.js', 'jswrapper,require-async');
fis.config.set('roadmap.path', [
  {
    // module 目录下的做组件化封装
    reg: '/es6/module/**.js', 
    isMod: true,
    isES6: true
  },
  {
    reg: '/es6/**.js',
    isES6: true
  },
  {
    reg: '**.js',
    isES6: false // 不是 es6 目录下的 js 不进行转换
  }
]);

fis.config.set('settings.postprocessor.jswrapper', {
  type: 'amd' //历史遗留问题，此处应该是 mod.js
});

/* global fis */

fis.config.set('modules.parser.js', 'babel');
fis.config.set('roadmap.path', [
  {
    // module 目录下的做组件化封装
    reg: '/es6/module/**.js', 
    isMod: true,
    extras: {
      isES6: true
    }
  },
  {
    reg: '/es6/**.js',
    extras: {
      isES6: true
    }
  },
  {
    reg: '**.js',
    extras: {
      isES6: false
    }
  }
]);

fis.config.set('settings.postprocessor.jswrapper', {
  type: 'amd' //历史遗留问题，此处应该是 mod.js
});

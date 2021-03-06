(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Hourglass20 = factory());
}(this, (function () { 'use strict';

  var _20 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 20,
      height: 20,
    },
    content: [
      { elem: 'path', attrs: { d: 'M15 19h2v2h-2zm0 4h2v2h-2z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M23 11.67V4h3V2H6v2h3v7.67a2 2 0 0 0 .4 1.2L11.75 16 9.4 19.13a2 2 0 0 0-.4 1.2V28H6v2h20v-2h-3v-7.67a2 2 0 0 0-.4-1.2L20.25 16l2.35-3.13a2 2 0 0 0 .4-1.2zM21 4v7H11V4zm0 16.33V28H11v-7.67L14.25 16 12 13h8l-2.25 3z',
        },
      },
    ],
    name: 'hourglass',
    size: 20,
  };

  return _20;

})));

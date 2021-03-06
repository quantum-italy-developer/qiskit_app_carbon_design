(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.DragVertical24 = factory());
}(this, (function () { 'use strict';

  var _24 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 24,
      height: 24,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M4 20h11v6.17l-2.59-2.58L11 25l5 5 5-5-1.41-1.41L17 26.17V20h11v-2H4v2zm7-13l1.41 1.41L15 5.83V12H4v2h24v-2H17V5.83l2.59 2.58L21 7l-5-5-5 5z',
        },
      },
    ],
    name: 'drag--vertical',
    size: 24,
  };

  return _24;

})));

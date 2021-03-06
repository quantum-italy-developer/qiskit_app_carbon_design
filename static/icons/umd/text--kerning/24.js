(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextKerning24 = factory());
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
            'M30 24H18.83l2.29-2.29-1.41-1.42L15 25l4.71 4.71 1.41-1.42L18.83 26H30v-2zm-16-3l6-17h-2l-6 17h2zM13 4L9 16 5 4H3l5 14h2l5-14h-2zm15 14h2L25 4h-2l-5 14h2l1-3h6zm-6.33-5L24 6l2.33 7z',
        },
      },
    ],
    name: 'text--kerning',
    size: 24,
  };

  return _24;

})));

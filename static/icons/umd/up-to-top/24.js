(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.UpToTop24 = factory());
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
          d: 'M16 13L6 23l1.41 1.41L16 15.83l8.59 8.58L26 23 16 13zM4 7h24v2H4z',
        },
      },
    ],
    name: 'up-to-top',
    size: 24,
  };

  return _24;

})));

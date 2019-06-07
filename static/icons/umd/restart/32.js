(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Restart32 = factory());
}(this, (function () { 'use strict';

  var _32 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 32,
      height: 32,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M25 18A10 10 0 1 1 15 8h6.18l-3.58 3.59L19 13l6-6-6-6-1.4 1.41L21.19 6H15a12 12 0 1 0 12 12z',
        },
      },
    ],
    name: 'restart',
    size: 32,
  };

  return _32;

})));
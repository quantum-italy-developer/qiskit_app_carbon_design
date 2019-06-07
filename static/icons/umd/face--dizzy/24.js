(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.FaceDizzy24 = factory());
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
            'M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M24.41 11L23 9.59l-2 2-2-2L17.59 11l2 2-2 2L19 16.41l2-2 2 2L24.41 15l-2-2 2-2zm-10 0L13 9.59l-2 2-2-2L7.59 11l2 2-2 2L9 16.41l2-2 2 2L14.41 15l-2-2 2-2zM16 19a3 3 0 1 0 3 3 3 3 0 0 0-3-3z',
        },
      },
    ],
    name: 'face--dizzy',
    size: 24,
  };

  return _24;

})));
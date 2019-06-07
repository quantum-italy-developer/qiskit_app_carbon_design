(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MacCommand20 = factory());
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
      {
        elem: 'path',
        attrs: {
          d:
            'M24 13a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-1a4 4 0 0 0-4 4v3h-6V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h3v6H8a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-3h6v3a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4h-3v-6zm-3-5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3zM8 11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3H8zm3 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3zm8-5h-6v-6h6zm2 2h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z',
        },
      },
    ],
    name: 'mac--command',
    size: 20,
  };

  return _20;

})));
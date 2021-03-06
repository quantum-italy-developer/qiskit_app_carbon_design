(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Archive24 = factory());
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
      { elem: 'path', attrs: { d: 'M14 19h4v2h-4z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M6 2v26a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2zm18 26H8V16h16zm0-14H8v-4h16zM8 8V4h16v4z',
        },
      },
    ],
    name: 'archive',
    size: 24,
  };

  return _24;

})));

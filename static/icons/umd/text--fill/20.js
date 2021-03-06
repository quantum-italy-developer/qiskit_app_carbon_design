(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextFill20 = factory());
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
      { elem: 'path', attrs: { d: 'M4 26h24v4H4z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M26 14.54a1 1 0 0 0-.25-.69l-8.58-9.52A1.09 1.09 0 0 0 17 4.2V2h-2v3L4.32 14.74a1 1 0 0 0-.06 1.41l8.57 9.52a1 1 0 0 0 .69.33h.05a1 1 0 0 0 .68-.26L24 16.8V21a1 1 0 0 0 2 0v-6.46zm-12.35 9l-7.23-8L15 7.67V12h2V7.13l6.59 7.33z',
        },
      },
    ],
    name: 'text--fill',
    size: 20,
  };

  return _20;

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Run32 = factory());
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
            'M21 16a6 6 0 1 1-6 6 6 6 0 0 1 6-6m0-2a8 8 0 1 0 8 8 8 8 0 0 0-8-8z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4v-2H6V12h22V6a2 2 0 0 0-2-2zM6 10V6h20v4z',
        },
      },
      { elem: 'path', attrs: { d: 'M19 19v6l5-3-5-3z' } },
    ],
    name: 'run',
    size: 32,
  };

  return _32;

})));

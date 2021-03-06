(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Asset20 = factory());
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
            'M12.075 24a4 4 0 1 1 4-4 4.004 4.004 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M30 6a4.004 4.004 0 0 0-4-4 3.949 3.949 0 0 0-1.854.477l-16.389 8.48a9.992 9.992 0 1 0 13.309 13.236l8.49-16.4A3.95 3.95 0 0 0 30 6zm-4-2a2 2 0 1 1-2 2 2.002 2.002 0 0 1 2-2zm-3.98 1.808c-.004.065-.02.126-.02.192a4.004 4.004 0 0 0 4 4c.065 0 .124-.016.188-.019l-4.332 8.362a10.017 10.017 0 0 0-8.215-8.196zM12 28a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8z',
        },
      },
    ],
    name: 'asset',
    size: 20,
  };

  return _20;

})));

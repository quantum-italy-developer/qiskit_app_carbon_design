(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.YAxis20 = factory());
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
            'M8 26V7.828l2.586 2.586L12 9 7 4 2 9l1.414 1.414L6 7.828V26a2.002 2.002 0 0 0 2 2h20v-2z',
        },
      },
    ],
    name: 'y-axis',
    size: 20,
  };

  return _20;

})));

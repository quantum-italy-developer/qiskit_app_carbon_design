(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ZAxis20 = factory());
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
            'M26 22v3.586l-9-9V5.828l2.586 2.586L21 7l-5-5-5 5 1.414 1.414L15 5.828v10.758l-9 9V22H4v7h7v-2H7.414L16 18.414 24.586 27H21v2h7v-7h-2z',
        },
      },
    ],
    name: 'z-axis',
    size: 20,
  };

  return _20;

})));

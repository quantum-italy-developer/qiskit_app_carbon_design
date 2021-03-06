(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ShrinkScreenFilled20 = factory());
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
        elem: 'rect',
        attrs: { width: '15', height: '10', x: '15', y: '18', rx: '2' },
      },
      {
        elem: 'path',
        attrs: {
          d: 'M12 10v3.586L7.707 9.293l-1.414 1.414L10.586 15H7v2h7v-7h-2z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M13 22H4a2.002 2.002 0 0 1-2-2V7a2.002 2.002 0 0 1 2-2h22a2.002 2.002 0 0 1 2 2v9h-2V7H4v13h9z',
        },
      },
    ],
    name: 'shrink-screen--filled',
    size: 20,
  };

  return _20;

})));

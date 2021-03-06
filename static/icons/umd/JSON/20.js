(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Json20 = factory());
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
            'M31 11v10h-2l-2-6v6h-2V11h2l2 6v-6h2zm-9.666 10h-2.667A1.668 1.668 0 0 1 17 19.334v-6.667A1.668 1.668 0 0 1 18.666 11h2.667A1.668 1.668 0 0 1 23 12.666v6.667A1.668 1.668 0 0 1 21.334 21zM19 19h2v-6h-2zm-5.666 2H9v-2h4v-2h-2a2.002 2.002 0 0 1-2-2v-2.334A1.668 1.668 0 0 1 10.666 11H15v2h-4v2h2a2.002 2.002 0 0 1 2 2v2.333A1.668 1.668 0 0 1 13.334 21zm-8.001 0H2.667A1.668 1.668 0 0 1 1 19.334V17h2v2h2v-8h2v8.334A1.668 1.668 0 0 1 5.333 21z',
        },
      },
    ],
    name: 'JSON',
    size: 20,
  };

  return _20;

})));

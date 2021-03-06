(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextIndentLess20 = factory());
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
            'M2 6h10v2H2zm3 6h7v2H5zm-3 6h10v2H2zm3 6h7v2H5zM16 4h2v24h-2zm12.15 19.5l1.41-1.38L23.27 16l6.29-6.12-1.41-1.38-7.71 7.5 7.71 7.5z',
        },
      },
    ],
    name: 'text--indent--less',
    size: 20,
  };

  return _20;

})));

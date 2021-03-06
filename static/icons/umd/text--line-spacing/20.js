(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextLineSpacing20 = factory());
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
            'M17 6h13v2H17zm0 6h10v2H17zm0 6h13v2H17zm0 6h10v2H17zm-5.41-10.59L8 9.83l-3.59 3.59L3 12l5-5 5 5-1.41 1.41zm0 5.18L8 22.17l-3.59-3.59L3 20l5 5 5-5-1.41-1.41z',
        },
      },
    ],
    name: 'text--line-spacing',
    size: 20,
  };

  return _20;

})));

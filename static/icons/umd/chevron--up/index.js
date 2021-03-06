(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ChevronUpGlyph = factory());
}(this, (function () { 'use strict';

  var index = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 10 6',
      width: '10',
      height: '6',
    },
    content: [{ elem: 'path', attrs: { d: 'M5 0l5 5-.7.7L5 1.4.7 5.7 0 5z' } }],
    name: 'chevron--up',
  };

  return index;

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Bookmark24 = factory());
}(this, (function () { 'use strict';

  var _24 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 24,
      height: 24,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M24 4v22.75l-7.1-3.59-.9-.45-.9.45L8 26.75V4h16m0-2H8a2 2 0 0 0-2 2v26l10-5 10 5V4a2 2 0 0 0-2-2z',
        },
      },
    ],
    name: 'bookmark',
    size: 24,
  };

  return _24;

})));

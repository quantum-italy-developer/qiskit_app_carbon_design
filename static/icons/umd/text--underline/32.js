(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextUnderline32 = factory());
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
            'M4 26h24v2H4zm12-3a7 7 0 0 1-7-7V5h2v11a5 5 0 0 0 10 0V5h2v11a7 7 0 0 1-7 7z',
        },
      },
    ],
    name: 'text--underline',
    size: 32,
  };

  return _32;

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.IsoFilled32 = factory());
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
      { elem: 'path', attrs: { d: 'M21 13h3v6h-3z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8 21H6V11h2zm9-8h-5v2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5v-2h5v-2h-3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h5zm9 6a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2z',
        },
      },
    ],
    name: 'ISO--filled',
    size: 32,
  };

  return _32;

})));

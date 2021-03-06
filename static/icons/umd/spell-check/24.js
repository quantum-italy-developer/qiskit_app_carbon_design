(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.SpellCheck24 = factory());
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
            'M20 22h2l-5-12h-2l-5 12h2l1.24-3h5.53zm-5.93-5l1.82-4.42h.25L18 17z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d:
            'M12 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v11h-2V6H6v20h6zm11-.82l-2.59-2.59L19 26l4 4 7-7-1.41-1.41L23 27.18z',
        },
      },
    ],
    name: 'spell-check',
    size: 24,
  };

  return _24;

})));

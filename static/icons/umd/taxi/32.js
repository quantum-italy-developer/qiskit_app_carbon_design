(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Taxi32 = factory());
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
            'M29.39 16.08l-6.69-2.87-2.54-4.34-.08-.12A2 2 0 0 0 18.52 8h-8a2 2 0 0 0-1.67.89L5.46 14H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.61-.92zM9 26a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm14 0a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm5-3h-1.14a4 4 0 0 0-7.72 0h-6.28a4 4 0 0 0-7.72 0H4v-7h2a1 1 0 0 0 .83-.45L10.54 10h8l2.63 4.5a1 1 0 0 0 .47.42L28 17.66z',
        },
      },
    ],
    name: 'taxi',
    size: 32,
  };

  return _32;

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Attachment16 = factory());
}(this, (function () { 'use strict';

  var _16 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
      width: 16,
      height: 16,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M14.1 9L7 1.9C5.6.6 3.3.7 2 2.1S.7 5.6 1.9 7l1.6 1.6.8-.8-1.6-1.6c-1-.9-1-2.5-.1-3.5s2.5-1 3.5-.1l.1.1 7.1 7.1c1 .9 1 2.5.1 3.5s-2.5 1-3.5.1l-.1-.1-3.3-3.4c-.6-.5-.6-1.4 0-1.9s1.4-.5 1.9 0l1.7 1.7.8-.7-1.8-1.8c-1-.9-2.5-.9-3.5.1-.9.9-.9 2.4 0 3.3L9 14.1c1.4 1.3 3.7 1.2 5-.2s1.3-3.5.1-4.9z',
        },
      },
    ],
    name: 'attachment',
    size: 16,
  };

  return _16;

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.AlarmAdd20 = factory());
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
            'M16 28a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9zM4 7.592l3.582-3.589 1.416 1.413-3.582 3.589zm19-2.184l1.415-1.413 3.581 3.589-1.415 1.413z',
        },
      },
      { elem: 'path', attrs: { d: 'M21 16h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2z' } },
    ],
    name: 'alarm--add',
    size: 20,
  };

  return _20;

})));

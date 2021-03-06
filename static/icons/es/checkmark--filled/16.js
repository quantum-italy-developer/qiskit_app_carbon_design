export default {
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
          'M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zM7 11L4.3 8.3l.9-.8L7 9.3l4-3.9.9.8L7 11z',
      },
    },
    {
      elem: 'path',
      attrs: { d: 'M7 11L4.3 8.3l.9-.8L7 9.3l4-3.9.9.8L7 11z', opacity: '0' },
    },
  ],
  name: 'checkmark--filled',
  size: 16,
};

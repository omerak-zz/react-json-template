'use strict';

var rjt = require('lib/rjt');
var Header = require('components/header.js');


module.exports = {
  type: 'div',
  props: { className: 'renderer' },
  children: [
    {type: Header},
    'div',
    [
      'asdasd',
      'asdasdasd',
      {type: 'div', children: 'asdasd'}
    ]
  ]
};

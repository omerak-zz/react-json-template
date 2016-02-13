'use strict';

var rjt = require('lib/rjt');
var Header = require('components/header.js');


module.exports = {
  type: 'div',
  props: { className: 'renderer' },
  children: [
    {type: Header},
    'Why rjt?',
    [
      {
        type: 'div',
        children: 'rjt is great'
      },
      "you don't need jsx",
      {type: 'div', children: 'Using rjt is pretty easy'}
    ]
  ]
};

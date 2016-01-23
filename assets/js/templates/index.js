'use strict';

var RJT = require('lib/ReactJsonTemplater');
var Header = require('components/header.js');


module.exports = {
  type: 'div',
  props: { className: 'renderer' },
  children: [
    {type: Header}
  ]
};

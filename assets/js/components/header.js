'use strict';

var React = require('react');
var RJT = require('lib/ReactJsonTemplater');


module.exports = React.createClass({
  render: function() {
    return RJT(require('templates/header.js'));
  }
});

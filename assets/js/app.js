'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var RJT = require('lib/ReactJsonTemplater');
var template = require('templates/index.js');


ReactDOM.render(RJT(template), document.getElementById('js-app'));

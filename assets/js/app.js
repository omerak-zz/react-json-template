'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var rjt = require('lib/rjt');
var template = require('templates/index.js');


ReactDOM.render(rjt(template), document.getElementById('js-app'));

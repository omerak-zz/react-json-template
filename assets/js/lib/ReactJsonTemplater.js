'use strict';

var React = require('react');
var clone = require('lodash.clone');


var ReactJsonTemplater = function(dom) {
  var clonedDom = clone(dom);
  if (Array.isArray(clonedDom)) {
    return clonedDom.map(function(element, idx) {
      if (!element.key) {
        element.key = idx;
      }
      return ReactJsonTemplater(element)
    });
  } else if (typeof clonedDom == 'object') {
    var args = [clonedDom.self || 'span', clonedDom];
    if (clonedDom.children) {
      args.push(ReactJsonTemplater(clonedDom.children));
      delete clonedDom.children;
      delete clonedDom.self;
    }
    return React.createElement.apply(this, args);
  } else if (dom) {
    return React.createElement('span', null, dom);
  }
};


module.exports = ReactJsonTemplater;

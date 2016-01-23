'use strict';

var React = require('react');


var ReactJsonTemplater = function(dom) {
  if (Array.isArray(dom)) {
    return dom.map(function(element, idx) {
      if (!element.key) {
        element.key = idx;
      }
      return ReactJsonTemplater(element)
    });
  } else if (typeof dom == 'object') {
    return React.createElement(dom.type, dom.props,
      ReactJsonTemplater(dom.children));
  } else if (dom) {
    return React.createElement('span', null, dom);
  }
};


module.exports = ReactJsonTemplater;

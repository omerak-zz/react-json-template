'use strict';

var React = require('react');


var ReactJsonTemplate = function(dom) {
  if (Array.isArray(dom)) {
    return dom.map(function(element, idx) {
      if (typeof element !== 'string') {
        if (!element.props)
          element.props = {};
        if (!element.props.key)
          element.props.key = idx;
      }

      return ReactJsonTemplate(element)
    });
  } else if (typeof dom === 'object') {
    return React.createElement(dom.type || 'span', dom.props,
      ReactJsonTemplate(dom.children));
  } else if (dom) {
    return dom;
  }
};


module.exports = ReactJsonTemplate;

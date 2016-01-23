'use strict';

var React = require('react');
var RJT = require('lib/ReactJsonTemplater');


module.exports = React.createClass({
  template: function() {
    var that = this;

    return {
      type: 'div',
      props: { className: 'renderer__header' },
      children: [
        {
          type: 'h1',
          props: { className: 'renderer__title' },
          children: 'React Json renderer'
        },
        {
          type: 'ul',
          props: { className: 'renderer__menu' },
          children: [
            {
              type: 'li',
              props: { className: 'renderer__menu__li' },
              children: {
                type: 'a',
                props: {
                  href: '#',
                  onClick: that.onClick
                },
                children: 'some menu',
              }
            },
            {
              type: 'li',
              props: { className: 'renderer__menu__li' },
              children: {
                type: 'a',
                props: { href: '#' },
                children: 'some menu 2',
              }
            }
          ]
        }
      ]
    }
  },

  onClick: function(e) {
    e.preventDefault()
    alert('you can use state in that way');
  },

  render: function() {
    return RJT(this.template());
  }
});

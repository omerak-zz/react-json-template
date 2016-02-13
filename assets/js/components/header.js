'use strict';

var React = require('react');
var rjt = require('lib/rjt');


module.exports = React.createClass({
  words: [
    'How ',
    'to ',
    'use ',
    'rjt',
  ],

  renderWord: function(item, idx) {
    return {
      type: 'span',
      children: item,
      key: idx
    };
  },

  onClick: function(e) {
    e.preventDefault()
    alert('you can use state in that way');
  },

  render: function() {
    var that = this;

    return rjt(
      {
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
                  children: that.words.map(that.renderWord),
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
    );
  }
});

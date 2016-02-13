# React-Json-Template


You can create your react view without jsx with this tool. It's simply writing html in json.



# Simple Usage

You have three optional keys to type. Type, props and children. Type accepts html tags or components.
Props and children are the same as react.


```
var React = require('react');
var rjt = require('rjt');


module.exports = React.createClass({
  data: [
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet'
  ],

  renderData: function(item, idx) {
    return {
      type: 'span',
      children: item,
      key: idx
    }
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
                  children: that.data.map(that.renderData),
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
```

```
var rjt = require('lib/rjt');
var Header = require('components/header.js');


module.exports = {
  type: 'div',
  props: { className: 'renderer' },
  children: [
    {type: Header}, // You can use component as a type
    'lorem', // 'you can use string or array as a child.'
    [
      'asdasd',
      'asdasdasd',
      {type: 'div', children: 'asdasd'}
    ]
  ]
};
```

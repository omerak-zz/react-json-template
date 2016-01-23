# React-Json-Renderer


You can create your react view without jsx with this tool. It's simply writing html with json.

For seeing the result add clone the project, run "npm run build" command and open index.html


# Simple Template

You have three keys to type. Type, props and children. Type accepts html tags or components.
Props and children are the same as react

```
var Header = require('components/header.js');

module.exports = {
  type: 'div',
  props: { className: 'renderer' },
  children: [
    {type: Header} // You can use component as a type
  ]
};
```

```
module.exports = {
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
            props: { href: '#' },
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
};
```

You can run your static templates just that easy.
```
var RJT = require('lib/ReactJsonTemplater');

module.exports = React.createClass({
  render: function() {
    return RJT(require('templates/header.js'));
  }
});
```


or in this way or with using mixin you can run your dynamic templates.
```
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
```


Note: It's just an idea to write react without jsx, and I know it needs to be reviewed and developed

So, any suggestions are very wellcome.

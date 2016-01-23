# React-Json-Renderer


You can create your react view without jsx with this tool. It's simply writing html with json.



# Simple Template
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

You can run your templates just that easy.
```
var RJT = require('lib/ReactJsonTemplater');

module.exports = React.createClass({
  render: function() {
    return RJT(require('templates/header.js'));
  }
});
```


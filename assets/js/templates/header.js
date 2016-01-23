module.exports = {
  self: 'div',
  className: 'renderer__header',
  children: [
    {
      self: 'h1',
      className: 'renderer__title',
      children: 'React Json renderer'
    },
    {
      self: 'ul',
      className: 'renderer__menu',
      children: [
        {
          self: 'li',
          className: 'renderer__menu__li',
          children: {
            self: 'a',
            href: '#',
            children: 'some menu',
          }
        },
        {
          self: 'li',
          className: 'renderer__menu__li',
          children: {
            self: 'a',
            href: '#',
            children: 'some menu 2',
          }
        }
      ]
    }
  ]
}

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

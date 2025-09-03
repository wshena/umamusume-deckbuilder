export const HEADER_NAV:NavLinkProps[] = [
  {
    id: 1,
    label: 'home',
    link: '/'
  },
  {
    id: 2,
    label: 'explore',
    link: '#',
    sublink: [
      {
        id: 1,
        label: 'characters',
        link: '/characters'
      },
      {
        id: 2,
        label: 'support cards',
        link: '/support-cards'
      },
    ]
  },
  {
    id: 3,
    label: 'help',
    link: '/help'
  },
]
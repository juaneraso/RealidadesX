import config from '~/config.json';

export const navLinks = [
  {
    label: 'Servicios',
    pathname: '/#project-1',
  },
  {
    label: 'Quienes somos',
    pathname: '/#details',
  },
  {
    label: 'Artículos',
    pathname: '/articles',
  },
  {
    label: 'Contactos',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Twitter',
    url: `https://twitter.com/${config.twitter}`,
    icon: 'twitter',
  },
  {
    label: 'Figma',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];

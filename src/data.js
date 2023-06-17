import { getPermalink,  getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Socio-Políticos y económicos',
      links: [
        // {
        //   text: '👉 CIBERNÉTICA de las Elecciones y del Desastre Nacional.',
        //   // href: getPermalink('/landing/saas'),
        //   href:'#'
        // },
        // {
        //   text: '👉 Convocatoria a la Intelectualidad Colombiana',
        //   href:'#'
        // },
        {
          text: '👉 Los Planos de la Paz',
          href:'/losplanosdelapaz'
        },
        {
          text: '👉 Revolución científico tecnológica para el desarrollo nacional',
          href:'/revolucioncientificotecnologica'
        },
        {
          text: '👉 Decálogo de la Paz',
          href:'/decalogodelapaz'
        },
        // {
        //   text: '👉 La Realización Personal o la Felicidad en un Nuevo Contrato Social',
        //   href:'#'
        // },
        // {
        //   text: '👉 Plan de Salvación Nacional',
        //   href:'#'
        // },
        // {
        //   text: '👉 Ideología del Libertador para la Segunda Independencia de América latina',
        //   href:'#'
        // },
        // {
        //   text: '👉 Temática libre',
        //   href:'#'
        // },
        {
          text: '👉 Libros',
          href:'/libro'
        },
      ],
    },
    {
      text: '📰Blog',
      href: getPermalink('/blog'),
    },
    {
      text: '🎙️Podcast',
      href: getPermalink('/blog'),
    },
    {
      text: '📽️Reels',
      href: getPermalink('/blog'),
    },
    {
      text: '📚Libros',
      href: '/libro',
    },
  ],
  actions: [
    { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};

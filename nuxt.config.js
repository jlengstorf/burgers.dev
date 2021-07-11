export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Burger Showdown: Splash vs. Smash',
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bangers&display=swap',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#ffb905',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'msapplication-TileColor',
        content: '#ffb905',
      },
      {
        name: 'theme-color',
        content: '#ffb905',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:creator',
        content: '@jlengstorf',
      },
      {
        name: 'twitter:creator',
        content: '@sdras',
      },
      {
        name: 'og:title',
        content: 'Burger Showdown: Splash vs. Smash',
      },
      {
        name: 'og:description',
        content:
          'Sarah Drasner & Jason Lengstorf face off in an epic excuse to feed their friends lots of burgers while talking shit to each other.',
      },
      {
        name: 'og:image',
        content: 'https://www.burgers.dev/images/social-card.jpg',
      },
      {
        name: 'og:image:alt',
        content:
          'A burger with crossed spatulas below it and the text, "Who will be the burger champ, and who will the burger chump?"',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};

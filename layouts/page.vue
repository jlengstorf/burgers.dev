<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Burger Showdown: Splash vs. Smash',
    link: [
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
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  background-color: #110800;
  color: #b59274;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 18px;
  line-height: 1.45;
}

body * + * {
  margin-top: 1rem;
}

main {
  margin: 2rem auto;
  max-width: calc(500px + 4rem);
  width: 90vw;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff5dc;
  font-family: Bangers, sans-serif;
  line-height: 1.1;
}
</style>

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
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bangers&display=swap'
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

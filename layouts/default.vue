<template>
  <div>
    <Header v-if="$nuxt.$route.path !== '/'" />
    <main>
      <Nuxt />
    </main>

    <footer>
      <p>
        built with <span role="img" aria-label="burger">🍔</span> by
        <a href="https://jason.af">Jason Lengstorf</a> and
        <a href="https://twitter.com/sarah_edo">Sarah Drasner</a> ·
        <a href="https://github.com/jlengstorf/burgers.dev">source code</a> ·
        <a href="https://twitter.com/sarah_edo/status/1197721256100909056"
          >Sarah started it</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: this.home,
    };
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

@media (min-width: 800px) {
  main {
    margin-top: 5rem;
  }
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

a {
  color: #70df00;
}

a:hover,
a:focus {
  color: #ffd600;
}

footer {
  margin: 4rem auto 2rem;
  max-width: 90vw;
  text-align: center;
  font-size: 0.875rem;
}

footer a {
  color: inherit;
}
</style>

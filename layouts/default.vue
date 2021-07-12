<template>
  <div>
    <Header v-if="$nuxt.$route.path !== '/'" />
    <main>
      <Nuxt />
    </main>
    <AppFooter />
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
</style>

<style scoped>
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
</style>

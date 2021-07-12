<template>
  <div>
    <Header />
    <main class="burgercontain">
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
main.burgercontain {
  margin: 2rem auto;
  max-width: calc(1000px + 4rem);
  width: 90vw;
}

@media (min-width: 800px) {
  main {
    margin-top: 5rem;
  }
}
</style>

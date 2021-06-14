<template>
  <header>
    <NuxtLink to="/" rel="home" title="Home">
      <Logo />
    </NuxtLink>
    <nav>
      <NuxtLink to="/contenders">The Contenders</NuxtLink>
      <NuxtLink to="/burgers">The Burgers</NuxtLink>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  align-items: center;
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: calc(500px + 4rem);
  width: 90vw;
}

a[rel='home'] {
  display: block;
  transition: 150ms all linear;
  width: 200px;
}

nav {
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  margin-top: 0;
}

nav a {
  color: #fff5dc;
  display: block;
  font-family: Bangers, sans-serif;
  font-size: 1.5rem;
  margin: 0;
  text-decoration: none;
  transition: 150ms all linear;
}

a:active,
a:hover {
  color: #ffd600;
  transform: scale(1.07) rotate(-0.005turn);
}
</style>

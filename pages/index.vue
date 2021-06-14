<template>
  <div>
    <Logo home />
    <section>
      <h1>Who’s the burger champ . . . <br />and who’s the burger chump?</h1>
      <nav>
        <NuxtLink to="/contenders">The Contenders</NuxtLink>
        <NuxtLink to="/burgers">The Burgers</NuxtLink>
      </nav>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  margin-top: -40px;
  position: relative;
  text-align: center;
  z-index: 100;
}

h1 {
  font-size: clamp(1.375rem, 8vw, 2.75rem);
}

br {
  display: none;
}

a {
  background: #ffb905;
  border: 4px solid #ecab05;
  border-radius: 0.5rem;
  color: #422002;
  display: inline-block;
  font-size: clamp(1rem, 4vw, 1.5rem);
  font-weight: 900;
  line-height: 1;
  margin: 0.5rem 0.5rem 0;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  text-transform: uppercase;
}

@media screen and (min-width: 420px) {
  section {
    margin-top: -60px;
  }

  br {
    display: block;
  }
}
</style>

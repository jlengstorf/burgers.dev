<template>
  <div>
    <Logo home />
    <section>
      <h1>Who’s the burger champ . . . <br />and who’s the burger chump?</h1>
      <nav>
        <NuxtLink to="/contenders">The Contenders</NuxtLink>
        <NuxtLink to="/burgers">The Burgers</NuxtLink>
      </nav>
      <p>
        Way back in 2019,
        <a href="https://twitter.com/sarah_edo">Sarah</a> and
        <a href="https://twitter.com/jlengstorf">Jason</a> started arguing about
        who makes the better burger. Sarah holds that a sous vide burger patty,
        finished with a quick sear, is the best of the best. Jason claims that a
        diner-style smashburger is the clear choice.
      </p>
      <p>
        Both Sarah and Jason believe the other is
        <a href="https://www.youtube.com/watch?v=Q84nfWkLsYU">Chris Traeger</a>.
      </p>
      <h2>When is this actually happening?</h2>
      <p>
        The cook off has been postponed due to the pandemic and there is not
        currently a date set. But don't lose hope! It won't be much longer until
        we learn who the Burger Champ is!
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: true,
    };
  },
};
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

h2 {
  font-size: clamp(1.25rem, 6vw, 2rem);
  margin-top: 2rem;
}

br {
  display: none;
}

nav a {
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

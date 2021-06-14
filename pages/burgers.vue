<template>
  <div>
    <PageHeader title="The Burgers">
      <p>Two burgers enter! One burger wins! All burgers are eaten!</p>
      <form>
        <label :class="currentBurger === 'smash' && 'active'">
          <input
            type="radio"
            name="burger"
            :checked="currentBurger === 'smash'"
            @change="toggleBurger"
          />
          Smashburger
        </label>
        <label :class="currentBurger === 'splash' && 'active'">
          <input
            type="radio"
            name="burger"
            :checked="currentBurger === 'splash'"
            @change="toggleBurger"
          />
          Splashburger
        </label>
      </form>
    </PageHeader>
    <section v-if="currentBurger === 'smash'" class="burger-display">
      <h2>The Smashburger</h2>
      <SmashBurger />
    </section>

    <section v-if="currentBurger === 'splash'" class="burger-display">
      <h2>The Splashburger</h2>
      <SplashBurger />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentBurger: 'smash',
    };
  },
  methods: {
    toggleBurger() {
      this.currentBurger = this.currentBurger === 'smash' ? 'splash' : 'smash';
    },
  },
};
</script>

<style>
.burger-chart {
  background: #fff5dc;
}

.burger-chart svg {
  height: auto;
  max-width: 100%;
}
</style>

<style scoped>
form {
  display: block;
  margin-top: 0.25rem;
}

label {
  border-radius: 0.5rem;
  display: inline-block;
  font-size: 1rem;
  font-weight: 900;
  line-height: 1;
  margin: 0 0.5rem;
  padding: 0.25rem 0.75rem 0.125rem;
  text-decoration: none;
  text-transform: uppercase;
}

label.active {
  background: #ffb905;
  border: 4px solid #ecab05;
  color: #422002;
}

input[type='radio'] {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.burger-display {
  margin: 3rem 0 0;
}

h2 {
  font-size: clamp(1.75rem, 10vw, 3rem);
  text-align: center;
}
</style>

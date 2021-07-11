<template>
  <div>
    <PageHeader title="The Burgers">
      <form>
        <label :class="currentBurger === 'smash' && 'active'" for="smash">
          <input
            v-model="currentBurger"
            value="smash"
            type="radio"
            id="smash"
          />
          Smashburger
        </label>
        <label :class="currentBurger === 'sousvide' && 'active'" for="sousvide">
          <input
            v-model="currentBurger"
            value="sousvide"
            type="radio"
            id="sousvide"
          />
          Sous Vide Burger
        </label>
      </form>
    </PageHeader>
    <section v-if="currentBurger === 'smash'" class="burger-display">
      <h2>The Smashburger</h2>
      <SmashBurger />
    </section>

    <section v-if="currentBurger === 'sousvide'" class="burger-display">
      <h2>The Sous Vide Burger</h2>
      <SousVideBurger />
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
};
</script>

<style>
.burger-chart {
  background: #fff5dc;
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
  font-size: clamp(1.25rem, 8vw, 2.5rem);
  text-align: center;
}
</style>

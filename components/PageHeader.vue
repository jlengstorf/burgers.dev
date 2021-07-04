<template>
  <header>
    <h1>{{ title }}</h1>
    <slot></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

h1 {
  font-size: clamp(1.75rem, 12vw, 3rem);
}
</style>

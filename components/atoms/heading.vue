<script lang="ts" setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'h1',
    validator(value) {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value.toLowerCase())
    },
  },
})
</script>

<template>
  <component :is="props.tag">
    <slot />
  </component>
</template>

<style scoped>
h1 {
  @apply text-56 font-bold uppercase;
}
h2 {
  @apply text-40 font-bold uppercase;
}
h3 {
  @apply text-32 font-bold uppercase;
}

h4 {
  @apply text-28 font-bold uppercase;
}

h5 {
  @apply text-24 font-bold uppercase;
}

h6 {
  @apply text-18 font-bold uppercase;
}
</style>

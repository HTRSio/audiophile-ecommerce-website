<script lang="ts" setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'div',
    validator(value) {
      return ['span', 'div'].includes(value.toLowerCase())
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
div,
span {
  @apply text-14 uppercase;
}
</style>

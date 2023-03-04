<script lang="ts" setup>
const props = defineProps({
  tag: {
    type: String,
    default: "div",
    validator(value) {
      return ["span", "div", "h3", "h4", "h6"].includes(value.toLowerCase());
    },
  },
});
</script>

<template>
  <component :is="props.tag">
    <slot />
  </component>
</template>

<style scoped>
span,
div,
h3,
h4,
h5 {
  @apply text-13 text-primary tracking-1 uppercase;
}
</style>

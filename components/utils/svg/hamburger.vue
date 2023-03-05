<script lang="ts" setup>
const props = defineProps({
  height: {
    type: Number,
    default: 15,
  },
  width: {
    type: Number,
    default: 16,
  },
})
</script>

<template>
  <svg
    :height="props.height"
    :width="props.width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#FFF" fill-rule="evenodd">
      <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
    </g>
  </svg>
</template>

<style scoped></style>

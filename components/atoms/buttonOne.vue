<script lang="ts" setup></script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  @apply font-bold text-white uppercase text-13 flex justify-center items-center;
  @apply bg-primary hover:bg-secondary;
  @apply w-[10.5rem] h-[3rem]  px-[1.9062rem] py-[0.9375rem];
}
</style>

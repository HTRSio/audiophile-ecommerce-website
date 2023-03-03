<script lang="ts" setup>
import "@fontsource/manrope";

useHead({
  bodyAttrs: {
    class: ["antialiased", "debug-screens", "font-sans", "text-15"],
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

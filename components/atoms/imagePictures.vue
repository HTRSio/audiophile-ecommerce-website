<script lang="ts" setup>
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  sources: {
    type: Object,
    default() {},
  },
});
</script>

<template>
  <picture>
    <source
      v-for="(source, index) in props.sources"
      :key="index"
      :media="
        source.media === 'desktop' ? '(min-width:1100px)' : '(min-width:768px)'
      "
      :srcset="source.url"
    />
    <img
      :src="props.image.url"
      :alt="props.image.alt"
      :height="props.image.height"
      :width="props.image.width"
    /> </picture
  >‚
</template>

<style scoped></style>

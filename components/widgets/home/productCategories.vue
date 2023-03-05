<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    default() {},
  },
});
</script>

<template>
  <AtomsSection class="mx-auto pt-[5rem] tablet:pt-[10rem] pb-[10.5rem]">
    <div
      class="flex flex-col tablet:flex-row gap-0 tablet:gap-4 desktop:gap-10 w-full"
    >
      <UtilsProductsCategoriesCard
        v-for="(item, index) in props.data"
        :key="index"
        :item="item"
      />
    </div>
  </AtomsSection>
</template>

<style scoped></style>

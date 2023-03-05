<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
    default() {},
  },
});
</script>

<template>
  <div
    class="relative w-full tablet:w-[21.875rem] h-[12.75rem] flex flex-col items-center mt-10"
  >
    <div
      class="absolute -top-[3rem] desktop:-top-[5rem] h-36 w-36 tablet:h-44 tablet:w-44 desktop:h-56 desktop:w-56"
    >
      <img
        :src="props.item.image"
        width="438"
        height="422"
        class="object-cover object-center"
        :alt="`category ${props.item.title}`"
      />
    </div>
    <div
      class="flex flex-col justify-end items-center bg-gray-light rounded-lg w-full h-[10rem] desktop:h-[12.75rem]"
    >
      <h2 class="text-18 uppercase font-bold">
        {{ props.item.title }}
      </h2>
      <AtomsButton variant="three" :link-path="props.item.buttonUrl">
        {{ props.item.buttonText }}
      </AtomsButton>
    </div>
  </div>
</template>

<style scoped></style>

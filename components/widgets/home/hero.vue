<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    default() {},
  },
});
</script>

<template>
  <section class="w-full h-full bg-overlay">
    <div
      class="mx-auto h-[600px] tablet:h-[729px] max-w-screen-mobile tablet:max-w-screen-tablet desktop:max-w-screen-desktop"
    >
      <div
        class="pt-[6rem] px-6 tablet:px-0 tablet:w-full h-full bg-center bg-no-repeat bg-cover bg-opacity-50 border-solid border-seventh bg-[url('../home/mobile/image-header.jpg')] tablet:bg-[url('../home/tablet/image-header.jpg')] desktop:bg-[url('../home/desktop/image-hero.jpg')]"
      >
        <div class="flex h-full items-center">
          <div
            class="mx-auto desktop:mx-0 w-[398px] text-center desktop:text-left"
          >
            <AtomsOverline class="text-white opacity-50">
              {{ props.data.subTitle }}
            </AtomsOverline>
            <AtomsHeading class="text-white py-[1.5rem]">
              {{ props.data.title }}
            </AtomsHeading>

            <p
              class="text-15 text-white opacity-75 w-11/12 font-medium pb-[40px]"
            >
              {{ props.data.content }}
            </p>
            <div class="flex justify-center desktop:justify-start">
              <AtomsButton variant="one" :link-path="props.data.buttonText">
                {{ props.data.buttonText }}
              </AtomsButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

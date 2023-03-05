<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <AtomsSection
    class="h-[38rem] tablet:h-[45rem] desktop:h-[35rem] desktop:mb-[3rem] relative pb-12"
  >
    <div
      class="z-0 absolute -top-44 tablet:-top-20 desktop:top-0 bottom-0 left-0 desktop:-left-20 desktop:left-0 w-full h-full desktop:w-[50rem] bg-[url('../home/desktop/pattern-circles.svg')] bg-no-repeat bg-[length:558px_558px] tablet:bg-[length:994px_944px] bg-center tablet:bg-bottom desktop:bg-[right_top_-2.25rem]"
    ></div>
    <div
      class="flex flex-col desktop:flex-row w-full h-full bg-primary rounded-lg"
    >
      <div class="w-full desktop:w-[60%] h-1/2 desktop:h-full relative">
        <div class="flex justify-center items-center desktop:items-end h-full">
          <div
            class="z-40 h-[11.9375rem] tablet:h-[14.81rem] desktop:h-[28.5rem] w-[9.7812rem] tablet:w-[12.325rem] desktop:w-[24rem] overflow-hidden"
          >
            <AtomsImagePictures
              :image="props.data.image"
              :sources="props.data.sources"
            />
          </div>
        </div>
      </div>
      <div class="z-40 w-full desktop:w-[21.81rem] desktop:h-full">
        <div
          class="flex flex-col justify-center items-center desktop:items-start h-full -mt-2 tablet:mt-0"
        >
          <AtomsHeading
            tag="span"
            class="text-white pb-6 w-1/2 tablet:w-1/3 text-center desktop:text-left"
            extra-class="h1"
          >
            {{ props.data.title }}
          </AtomsHeading>
          <div
            class="text-15 text-white pb-6 tablet:pb-10 w-10/12 tablet:w-5/12 desktop:w-full text-center desktop:text-left"
          >
            {{ props.data.text }}
          </div>
          <AtomsButton variant="four" :link-path="props.data.buttonUrl">
            {{ props.data.buttonText }}
          </AtomsButton>
        </div>
      </div>
    </div>
  </AtomsSection>
</template>

<style scoped></style>

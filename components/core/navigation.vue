<script lang="ts" setup>
const links = [
  { text: "home", url: "#" },
  { text: "Headphones", url: "#" },
  { text: "Speakers", url: "#" },
  { text: "Earphones", url: "#" },
];
</script>

<template>
  <header class="bg-overlay fixed top-0 w-full">
    <div
      class="mx-auto max-w-screen-mobile tablet:max-w-screen-tablet desktop:max-w-screen-desktop pt-8"
    >
      <nav class="tablet:px-0 px-6">
        <div class="flex justify-between items-center leading-7">
          <div
            class="flex desktop:block justify-center items-center gap-0 tablet:gap-12 desktop:gap-0 w-full desktop:w-auto"
          >
            <div class="desktop:hidden">
              <UtilsSvgHamburger />
            </div>
            <div class="w-full flex justify-center tablet:justify-start">
              <UtilsSvgLogo />
            </div>
          </div>
          <div
            class="hidden desktop:flex justify-between items-center w-[505px]"
          >
            <NuxtLink
              v-for="(link, index) in links"
              :key="index"
              :to="link.url"
            >
              {{ link.text }}
            </NuxtLink>
          </div>
          <div>
            <UtilsSvgCard />
          </div>
        </div>
      </nav>
      <div
        class="w-full border-b border-b-solid border-b-tenth opacity-50 pt-7"
      ></div>
    </div>
  </header>
</template>

<style scoped>
a {
  @apply text-13  tracking-2 font-bold text-white uppercase;
}
</style>

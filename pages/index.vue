<script lang="ts" setup>
const data = {
  subTitle: "New product",
  title: "XX99 Mark II Headphones",
  content:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  buttonText: "See product",
  buttonUrl: "#",
};
</script>

<template>
  <div>
    <CoreNavigation />
    <main>
      <WidgetsHomeHero :data="data" />
      <WidgetsHomeProductHighlights />
    </main>
  </div>
</template>

<style scoped></style>

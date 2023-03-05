<script lang="ts" setup>
const heroData = {
  subTitle: "New product",
  title: "XX99 Mark II Headphones",
  content:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  buttonText: "See product",
  buttonUrl: "#",
};

const productCategoriesData = [
  {
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    title: "Headphone",
    buttonText: "Shop",
    buttonUrl: "#",
  },
  {
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    title: "Speakers",
    buttonText: "Shop",
    buttonUrl: "#",
  },
  {
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    title: "Earphones",
    buttonText: "Shop",
    buttonUrl: "#",
  },
];

const promoOne = {
  title: "ZX9 Speaker",
  text: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
  buttonText: "See product",
  buttonUrl: "#",
  image: {
    height: "918",
    width: "918",
    alt: "ZX9 Speaker",
    url: "/assets/home/mobile/image-speaker-zx9.png",
  },
  sources: [
    {
      media: "desktop",
      url: "/assets/home/desktop/image-speaker-zx9.png",
    },
    {
      media: "tablet",
      url: "/assets/home/tablet/image-speaker-zx9.png",
    },
  ],
};
</script>

<template>
  <div>
    <CoreNavigation />
    <main>
      <WidgetsHomeHero :data="heroData" />
      <WidgetsHomeProductCategories :data="productCategoriesData" />
      <WidgetsHomePromoFullHeight :data="promoOne" />
      <WidgetsHomePromoHalfHeight />
    </main>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
const heroData = {
  subTitle: 'New product',
  title: 'XX99 Mark II Headphones',
  content:
    'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
  buttonText: 'See product',
  buttonUrl: '#',
}

const productCategoriesData = [{
  image: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
  title: 'Headphone',
  buttonText: 'Shop',
  buttonUrl: '#',
},
{
  image: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
  title: 'Speakers',
  buttonText: 'Shop',
  buttonUrl: '#',
}, {
  image: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
  title: 'Earphones',
  buttonText: 'Shop',
  buttonUrl: '#',
}]
</script>

<template>
  <div>
    <CoreNavigation />
    <main>
      <WidgetsHomeHero :data="heroData" />
      <WidgetsHomeProductCategories :data="productCategoriesData" />
    </main>
  </div>
</template>

<style scoped></style>

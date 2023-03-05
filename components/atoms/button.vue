<script lang="ts" setup>
const props = defineProps({
  linkType: {
    type: String,
    default: "nuxt-link",
  },
  linkPath: {
    type: String,
    default: "#",
  },
  variant: {
    type: String,
    default: "one",
    validator: (value) => {
      return ["one", "two", "three", "four"].includes(value.toLowerCase());
    },
  },
});
</script>

<template>
  <component
    :is="props.linkType === 'nuxt-link' ? 'nuxt-link' : 'a'"
    :to="props.linkType === 'nuxt-link' ? { path: props.linkPath } : null"
    :href="props.linkType === 'a' ? props.linkPath : null"
    :target="props.linkType === 'a' ? '_blank' : null"
    class="cursor-pointer button"
    :class="props.variant"
  >
    <span
      :class="
        props.variant === 'three'
          ? 'gap-2 flex justify-center items-center w-full'
          : 'flex justify-center items-center w-full'
      "
    >
      <slot />
      <span v-if="props.variant === 'three'">
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </span>
    </span>
  </component>
</template>

<style scoped>
.button {
  @apply font-bold text-white uppercase text-13;
  @apply w-[10.5rem] h-[3.3rem]  px-[1.9062rem] py-[0.9375rem];
}

.one {
  @apply bg-primary hover:bg-secondary;
}

.two {
  @apply bg-white text-black hover:bg-black hover:text-white;
}

.three {
  @apply text-black hover:text-primary;
}

.four {
  @apply bg-black text-white hover:text-primary;
}
</style>

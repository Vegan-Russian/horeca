<template>
  <figure class="image">
    <img
      :class="{ 'image__item--bordered': bordered }"
      class="image__item"
      :src="src"
      alt=""
      v-bind="$attrs"
    />
    <figcaption v-if="$slots.default" class="image__caption">
      <slot />
    </figcaption>
  </figure>
</template>
<script lang="ts" setup>
defineProps<{ src: string; bordered: boolean }>();
</script>

<style lang="scss" scoped>
.image {
  &__caption {
    color: #aea9a9;
    margin-top: 16px;
    font-size: 24px;
    line-height: 1.46;
    &::v-deep(a) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__item {
    line-height: 0;
    display: block;
    &--bordered {
      outline: 0.09375rem solid #000000; // 1.5px
    }
  }
}
</style>

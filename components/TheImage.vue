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
  font-size: 24px;
  line-height: 1.46;
  &__caption {
    color: #aea9a9;
    margin-top: 16px;
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

  @include media('sm') {
    font-size: 20px;
    &__caption {
      margin-top: 12px;
    }
  }

  @include media('xxs') {
    font-size: 16px;
    line-height: 1;
    &__caption {
      margin-top: 8px;
    }
  }

  @include media('xs') {
    font-size: 12px;
    &__caption {
      margin-top: 6px;
    }
  }
}
</style>

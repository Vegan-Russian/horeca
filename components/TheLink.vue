<template>
  <nuxt-link :to="to" class="link">
    <slot />

    <link-arrow class="link__arrow" viewBox="0 0 20 20" />
  </nuxt-link>
</template>
<script lang="ts" setup>
import LinkArrow from '~/assets/images/link-arrow.svg?component';
import { RouteLocationRaw } from 'vue-router';

defineProps<{ to: string | RouteLocationRaw }>();
</script>

<style lang="scss" scoped>
.link {
  font-size: 38px;
  font-weight: 500;
  &:hover {
    transition: color 0.15s ease;
    color: var(--title-color);
  }
  &__arrow {
    display: inline-block;
    margin-left: 16px;
    &:deep() {
      path,
      rect {
        fill: currentColor;
      }
    }
  }

  @include media('md') {
    font-size: 32px;
  }
  @include media('sm') {
    font-size: 24px;
    &__arrow {
      height: 16px;
      width: 16px;
      margin-left: 8px;
    }
  }
  @include media('xxs') {
    font-size: 18px;
    &__arrow {
      height: 10px;
      width: 10px;
      margin-left: 4px;
    }
  }
}
</style>

<template>
  <nuxt-link :to="to" class="link">
    <slot></slot>

    <link-arrow class="link__arrow" />
  </nuxt-link>
</template>
<script lang="ts" setup>
import LinkArrow from "~/assets/images/link-arrow.svg?component";
import { RouteLocationRaw } from "vue-router";

defineProps<{ to: string | RouteLocationRaw }>();
</script>

<style lang="scss" scoped>
.link {
  font-size: 38px;
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
}
</style>

<template>
  <div class="default-layout">
    <the-header />
    <div class="default-layout__content relative">
      <slot />
    </div>
    <the-footer />
  </div>
</template>
<style lang="scss" scoped>
.default-layout {
  &__content {
    padding-top: var(--layout-content-offset);
  }
}
</style>

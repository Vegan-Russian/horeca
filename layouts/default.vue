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
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    padding-top: var(--layout-content-offset);
    flex-grow: 1;
  }
}
</style>

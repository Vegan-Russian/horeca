<template>
  <div class="default-layout">
    <the-header />
    <slot />

    <div class="wrapper default-layout__links">
      <slot name="links"> </slot>
    </div>
    <the-footer />
  </div>
</template>

<style lang="scss">
.default-layout {
  &__links {
    display: flex;
    flex-direction: column;
    margin-top: 92px;
    gap: 32px;
  }
}
</style>

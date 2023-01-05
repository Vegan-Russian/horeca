<template>
  <div class="page">
    <div class="wrapper">
      <h1 class="title-color-2">контакты</h1>
      <p>
        По всем вопросам можно писать на <br />
        <a href="mailto:hello@veganrussian.ru">hello@veganrussian.ru</a>.
      </p>
    </div>
  </div>

  <teleport to="body">
    <img
      src="~/assets/images/first-radial.svg?url"
      class="radial hide-for-xxs"
      alt=""
    />
  </teleport>
</template>
<script setup>
useHead({
  titleTemplate: 'HoReCa - о нас',
});
</script>

<style lang="scss">
.default-layout {
  overflow: hidden;
}
.radial {
  position: fixed;
  top: 20%;
  right: 0;
  pointer-events: none;
}

.page {
  @include media('xxs') {
    h1 {
      margin-bottom: 24px;
    }
  }
}
</style>

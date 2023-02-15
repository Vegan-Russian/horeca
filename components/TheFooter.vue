<template>
  <footer class="footer">
    <nuxt-link :to="{ name: 'index' }" class="footer__main-link">
      Vegan HoReCA
    </nuxt-link>
    <a href="mailto:hello@veganrussian.ru" class="footer__link">Написать нам</a>
    <a
      href="https://www.instagram.com/vegan.russian/"
      target="_blank"
      class="footer__link"
      >Наш нельзяграм</a
    >
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  padding-block: 190px 120px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__main-link {
    font-family: var(--font-logo);
    font-weight: 700;
    font-size: 34px;
    line-height: 106px;
    transition: color 0.3s ease;
    &:hover {
      color: var(--title-color);
    }
  }

  &__link {
    font-size: 22px;
    line-height: 45px;
    font-weight: 500;
    transition: color 0.3s ease;
    &:hover {
      color: var(--title-color);
    }
  }

  @include media('md') {
    padding-block: 110px 80px;
  }

  @include media('sm') {
    padding-block: 90px 60px;
    gap: 24px;
    &__main-link {
      font-size: 24px;
      line-height: 1.1;
    }
    &__link {
      font-size: 20px;
      line-height: 1.1;
    }
  }

  @include media('xxs') {
    gap: 18px;
    &__main-link {
      font-size: 18px;
    }
    &__link {
      font-size: 12px;
    }
  }
}
</style>

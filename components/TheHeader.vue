<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <nuxt-link href="/" class="header__logo-link">Vegan HoReCA</nuxt-link>
      <nav>
        <ul class="header__links">
          <li v-for="{ link, text } in menuItems" :key="link">
            <nuxt-link :to="link" class="header__link upp">{{ text }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const menuItems = [
  { link: "/guide", text: "Справочник" },
  { link: "/suppliers", text: "Поставщики" },
  { link: "/about", text: "О нас" },
  { link: "/contacts", text: "Контакты" },
];
</script>

<style lang="scss" scoped>
.header {
  padding-top: 40px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  &__logo-link {
    font-family: var(--font-logo);
    font-size: 34px;
    line-height: 106.2px;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }
  &__links {
    display: flex;
    gap: 67px;
  }
  &__link {
    font-weight: 600;
    font-size: 22px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      height: 2px;
      width: 100%;
      transition: transform 0.3s ease;
      transform: scaleX(0);
      background-color: currentColor;
    }
    &:hover,
    &.router-link-active {
      &::after {
        transform: scaleX(1);
      }
    }
  }
}
</style>

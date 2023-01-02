<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <nuxt-link href="/" class="header__logo-link" @click="isMenuActive = false">Vegan HoReCA</nuxt-link>
      <nav class="header__navigation" :class="{ active: isMenuActive }">
        <ul class="header__links">
          <li v-for="{ link, text } in menuItems" :key="link">
            <nuxt-link :to="link" class="header__link upp" @click="isMenuActive = false">{{ text }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <button type="button" class="burger show-for-md" @click="isMenuActive = !isMenuActive" :class="{ active: isMenuActive }">
        <span class="burger__line"></span>
        <span class="burger__line"></span>
        <span class="burger__line"></span>
      </button>
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

const isMenuActive = ref(false);

const { lockPage, unlockPage } = useScrollLock();

watch(isMenuActive, () => {
  isMenuActive.value ? lockPage() : unlockPage();
});
</script>

<style lang="scss" scoped>
.header {
  z-index: 100;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

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
  @include media("md") {
    &__logo-link {
      position: relative;
      z-index: 10;
    }

    &__navigation {
      opacity: 0;
      position: fixed;
      height: 100vh;
      inset: 0;
      transform: translateX(100%);
      overflow-y: auto;
      transition: transform 0.3s ease, opacity 0.3s ease;
      background-color: #fffce2;
      &.active {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &__links {
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      line-height: 45px;
    }
  }
}

.burger {
  position: relative;
  height: 20px;
  width: 30px;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
  &::after {
    content: "";
    position: absolute;
    inset: -5px -10px -10px;
  }
  &__line {
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 7px;
    background-color: #000;
    left: 0;
    right: 0;
    transition: transform 0.3s ease;
    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:last-child {
      bottom: 0;
    }

    .active & {
      &:first-child {
        transform: translateY(12px) rotate(135deg);
      }
      &:nth-child(2) {
        transform: scale(0);
      }
      &:last-child {
        transform: translateY(-4.5px) rotate(-135deg);
      }
    }
  }
}

// @include media("md") {
// }

// @include media('') {}
</style>

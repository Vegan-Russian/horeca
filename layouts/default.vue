<template>
  <div class="default-layout">
    <div ref="topElement"></div>
    <the-header />
    <div class="default-layout__content relative">
      <slot />
    </div>
    <the-footer />
    <button
      ref="scroller"
      type="button"
      class="scroller"
      :class="{ 'scroller--hidden': isTopElementNotIntersected }"
      @click="scrollToTop"
    >
      <img src="~/assets/images/scroll-up.webp" alt="" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scroller = ref<null | HTMLElement>(null);
const topElement = ref<null | HTMLElement>(null);
const isTopElementNotIntersected = ref(true);

const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  if (topElement.value) {
    observer.value = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isTopElementNotIntersected.value = entry.isIntersecting;
      },
      {
        rootMargin: '100px',
      },
    );
    observer.value.observe(topElement.value);
  }
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>
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

.scroller {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff4cd;
  border: 1px solid var(--title-color);

  &--hidden {
    visibility: hidden;
  }

  img {
    max-width: 70%;
  }
}
</style>

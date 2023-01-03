<template>
  <main class="about">
    <div class="wrapper">
      <h1 class="about__title title-color-2">о нас</h1>
      <section class="about__section">
        <div>
          <p>
            Vegan HoReCa – это проект, который родился из боли. Боли от того,
            что веганских блюд в общепите нет. А если они и есть, то в их
            составе есть что-то "не то": молоко, рыба, яйца, мёд.
          </p>
          <p>
            Вместо того, чтобы злиться, мы выявили проблему и взялись её решать.
            Проблема: отсутствие качественных образовательных материалов для
            представителей сферы общепита. Нюансов много, и их невозможно
            коротко объяснить. Решение: их нужно систематизировать и собирать в
            справочник.
          </p>
        </div>
        <div class="about__pics">
          <the-image src="images/about/marina.jpg" bordered>
            Марина, основательница <br />
            <a href="https://vegan-map.ru/" target="_blank">vegan-map.ru</a>
          </the-image>
          <the-image src="images/about/julia.jpg" bordered>
            Юля, авторка <br /><a href="https://och-vkusno.com/" target="_blank"
              >och-vkusno.com</a
            >
          </the-image>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
useHead({
  titleTemplate: 'HoReCa - о нас',
});
</script>

<style lang="scss" scoped>
.about {
  &__title {
    margin-bottom: 92px;
  }
  &__section {
    display: grid;
    gap: 120px;
    grid-template-columns: 5fr 6fr;
  }

  &__pics {
    display: flex;
    gap: 20px;

    &::v-deep() {
      .image:last-child img {
        border-radius: 0 120px 0 0;
      }
    }
  }
}
</style>

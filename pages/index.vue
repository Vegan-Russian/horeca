<template>
  <!-- <NuxtLayout> -->
  <main class="main-page">
    <div class="wrapper">
      <section class="main-page__promo">
        <h1>Веганские позиции в вашем <span class="accent-part">ресторане</span></h1>
        <p>
          Наша цель — сделать так, чтобы веганские опции в кафе и ресторанах стали доступнее.
          <br />
          Для этого мы создали справочник ингридиентов и делимся списком проверенных поставщиков растительных альтернатив
        </p>
      </section>
      <section class="main-page__section">
        <div class="main-page__section-content">
          <h2>Кто такие веганы?</h2>
          <p>
            Веганы — это люди, которые отказались от использования животных в своей жизни. Мы не употребляем никакие продукты, полученные от животных.
          </p>
          <p>
            Вегетарианская диета произвольно исключает лишь некоторые животные продукты. Отличие веганов от вегерианцев в том, что первые против
            любого использования животных.
          </p>
        </div>
        <picture><img class="main-page__arc-radius" src="~/assets/images/who-is-vegan.jpg" /></picture>
      </section>
      <section class="main-page__section">
        <div>
          <h2>
            Что едят <br />
            веганы?
          </h2>
          <img class="main-page__arc-right" src="~/assets/images/what-vegan-eats.jpg" />
        </div>
        <div class="main-page__section-content">
          <h4>Мы едим точно такую же еду, что и невеганы, лишь заменяя ингредиенты на веганские</h4>
          <p>
            Веганские опции могут вписаться в любое заведение. В бургерной вместо мясной котлеты — веганская мясная котлета, вместо обычного майонеза
            — соус без яиц, вместо молочного сыра — растительный сыр. В пиццерии сыр заменяется на растительный сыр, а как протеиновые топпинги можно
            использовать веганскую колбасу, сейтан, соевое мясо.
          </p>
        </div>
      </section>
      <section class="main-page__section">
        <div class="main-page__section-content">
          <h2>Есть ли спрос?</h2>
          <h4 class="main-page__subtitle">92% опрошенных считают, что веганских опций недостаточно*</h4>
          <p>
            На данный момент спрос на растительные опции сильно опережает предложение. Зачастую наши единственные опции в кафе — картошка или овощной
            салат. А это далеко не та полноценная и вкусная еда, которую нам хочется заказывать.
          </p>
          <p>* Мы провели инстаграм-опрос “Хватает ли вам веганских опций в общепите?”</p>
        </div>
        <picture><img class="main-page__arc-radius" src="~/assets/images/is-there-request.jpg" /></picture>
      </section>
      <section class="main-page__section main-page__section--heading">
        <h2>Не мало <br />ли веганов?</h2>
        <p>Веганские опции подходят всем и их заказывают далеко не одни только веганы. Ваши растительные блюда будут заказывать:</p>
      </section>
      <section class="main-page__section main-page__section--content">
        <ul class="main-page__list">
          <li>-⠀Вегетарианцы</li>
          <li>-⠀Приверженцы plant-based diet</li>
          <li>-⠀ЗОЖники</li>
          <li>-⠀Спортсмены</li>
        </ul>
        <ul class="main-page__list">
          <li>-⠀Флекситарианцы</li>
          <li>-⠀Друзья и семья веганов/вегетарианцев</li>
          <li>-⠀Гурманы</li>
          <li>-⠀Любители всего нового</li>
        </ul>
      </section>
      <section class="main-page__section">
        <div>
          <img class="main-page__arc-left" src="~/assets/images/how-to-create-vegan-menu.jpg" />
        </div>
        <div class="main-page__section-content">
          <h2>
            самое главное... <br />
            Как создать веганское меню?
          </h2>
        </div>
      </section>
      <section class="main-page__rules">
        <the-sheet v-for="(rule, index) in createMenuRules" :key="index" class="main-page__rule rule">
          <div class="rule__num">{{ index + 1 }}</div>
          <div>
            <h4>{{ rule.title }}</h4>
            <p>{{ rule.text }}</p>
          </div>
          <picture>
            <img class="rule__image" :src="rule.img" alt="" />
          </picture>
        </the-sheet>
      </section>
    </div>
  </main>
  <template #links>
    <the-link :to="{ name: 'guide' }">Открыть справочник по веганским блюдам</the-link>
    <the-link :to="{ name: 'suppliers' }">Посмотреть поставщиков</the-link>
  </template>
  <!-- </NuxtLayout> -->
</template>

<script setup>
useHead({
  titleTemplate: "HoReCa - главная страница",
});

const { data: createMenuRules } = await useAsyncData("rules", () => $fetch("/api/rules"));
</script>

<style lang="scss" scoped>
.main-page {
  &__promo {
    max-width: 910px;
    margin-top: 144px;

    h1 {
      margin-bottom: 41px;
      color: var(--text-color);
    }
  }

  &__section {
    margin-top: 176px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 21px;

    &--heading {
      align-items: end;
      h2 {
        margin-bottom: 0;
      }
      p {
        margin-bottom: 14px;
      }
    }

    &--content {
      margin-top: 115px;
    }
  }

  &__section-content {
    display: flex;
    flex-direction: column;
    h2,
    h4 {
      margin-bottom: auto;
    }
    h4 {
      color: var(--text-color);
    }
  }

  h4.main-page__subtitle {
    margin-bottom: 20px;
  }

  &__arc-radius {
    border-radius: 360px 360px 0 0;
  }
  &__arc-right {
    border-radius: 0 160px 0 0;
  }
  &__arc-left {
    border-radius: 160px 0 0 0;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 22px;
    text-transform: uppercase;
    font-size: 38px;
  }

  &__rules {
    margin-top: 90px;
  }

  &__rule {
    & + & {
      margin-top: 64px;
    }
    &:first-of-type {
      border-radius: 30px 30px 0px 0px;
    }
    &:last-of-type {
      border-radius: 0px 0px 30px 30px;
    }
  }
}

.rule {
  padding-left: 70px;
  display: flex;
  gap: 62px;

  &__num {
    font-size: 84px;
    font-family: var(--title-font);
  }

  &__image {
    border-radius: 320px 320px 0px 0px;
  }
}
</style>

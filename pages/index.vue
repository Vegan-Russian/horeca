<template>
  <div>
    <main class="main-page page">
      <video class="main-page__video" autoplay muted loop>
        <source src="/video/promo-video.mp4" type="video/mp4" />
      </video>

      <div class="main-page__video-placeholder hide-for-sm"></div>
      <section class="main-page__promo">
        <div class="main-page__promo-bg" />
        <div class="wrapper">
          <div class="main-page__promo-content">
            <h1>
              Веганские позиции в вашем
              <span class="accent-part">
                <the-type :texts="accentWords"></the-type
                ><span class="cursor"></span
              ></span>
            </h1>
            <p>
              Наша цель — сделать так, чтобы веганские опции в кафе и ресторанах
              стали доступнее.
              <br />
              Для этого мы создали справочник ингридиентов и делимся списком
              проверенных поставщиков растительных альтернатив
            </p>
          </div>
        </div>
      </section>
      <div class="wrapper">
        <section class="main-page__section">
          <div
            class="main-page__section-content main-page__section-content--leading"
          >
            <h2>Кто такие веганы?</h2>
            <p>
              <span class="accent-text">Веганы</span> — это люди, которые
              отказались от использования животных в своей жизни. Мы не
              употребляем никакие продукты, полученные от животных.
            </p>
            <p>
              Вегетарианская диета произвольно исключает лишь некоторые животные
              продукты.
              <span class="accent-text"
                >Отличие веганов от вегерианцев в том, что первые против любого
                использования животных.</span
              >
            </p>
          </div>
          <picture
            ><img
              class="main-page__arc-radius main-page__arc-radius--leading"
              src="~/assets/images/who-is-vegan.jpg"
          /></picture>
        </section>
        <section class="main-page__section main-page__section--bordered">
          <div class="main-page__title-and-pic-block">
            <h2>
              Что едят <br />
              веганы?
            </h2>

            <picture
              ><img
                class="main-page__arc-right"
                src="~/assets/images/what-vegan-eats.jpg"
            /></picture>
          </div>
          <div class="main-page__section-content">
            <h4>
              Мы едим точно такую же еду, что и невеганы, лишь заменяя
              ингредиенты на веганские
            </h4>
            <p>
              Веганские опции могут вписаться в любое заведение. В бургерной
              вместо мясной котлеты — веганская мясная котлета, вместо обычного
              майонеза — соус без яиц, вместо молочного сыра — растительный сыр.
              В пиццерии сыр заменяется на растительный сыр, а как протеиновые
              топпинги можно использовать веганскую колбасу, сейтан, соевое
              мясо.
            </p>
          </div>
        </section>
        <section class="main-page__section main-page__section--bordered">
          <div class="main-page__section-content">
            <h2>Есть ли спрос?</h2>
            <h4 class="main-page__subtitle">
              92% опрошенных считают, что веганских опций недостаточно*
            </h4>
            <p>
              На данный момент спрос на растительные опции сильно опережает
              предложение. Зачастую наши единственные опции в кафе — картошка
              или овощной салат. А это далеко не та полноценная и вкусная еда,
              которую нам хочется заказывать.
            </p>
            <p>
              * Мы провели онлайн-опрос “Хватает ли вам веганских опций в
              общепите?”
            </p>
          </div>
          <picture
            ><img
              class="main-page__arc-radius"
              src="~/assets/images/is-there-request.jpg"
          /></picture>
        </section>
        <section
          class="main-page__section main-page__section--heading main-page__section--bordered"
        >
          <picture class="show-for-sm"
            ><img
              class="main-page__arc-left"
              src="~/assets/images/how-to-create-vegan-menu.jpg"
          /></picture>
          <div class="main-page__options-content">
            <div class="main-page__section-heading-content">
              <h2>Не мало <br />ли веганов?</h2>
              <p>
                Веганские опции подходят всем и их заказывают далеко не одни
                только веганы. Ваши растительные блюда будут заказывать:
              </p>
            </div>
            <div class="main-page__section main-page__section--content">
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
            </div>
          </div>
        </section>
        <section class="main-page__section main-page__section--how-to">
          <div class="hide-for-sm">
            <img
              class="main-page__arc-left"
              src="~/assets/images/how-to-create-vegan-menu.jpg"
            />
          </div>
          <div class="main-page__section-content">
            <h2>
              самое главное... <br />
              Как создать веганское меню?
            </h2>
          </div>
        </section>
        <section class="main-page__rules">
          <the-sheet
            v-for="(rule, index) in createMenuRules"
            :key="index"
            class="main-page__rule rule"
          >
            <div class="rule__num">{{ index + 1 }}.</div>
            <div class="rule__content">
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
    <div class="wrapper common-links">
      <the-link :to="{ name: 'guide' }">
        Открыть справочник по веганским блюдам
      </the-link>
      <the-link :to="{ name: 'suppliers' }"> Посмотреть поставщиков </the-link>
    </div>
    <img
      src="~/assets/images/first-radial.svg?url"
      class="first-radial hide-for-xxs"
      alt=""
    />
    <img
      src="~/assets/images/second-radial.svg?url"
      class="second-radial hide-for-xxs"
      alt=""
    />
    <img
      src="~/assets/images/third-radial.svg?url"
      class="third-radial hide-for-xxs"
      alt=""
    />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: 'HoReCa - главная страница',
});

const accentWords = ['ресторане', 'Кафе', 'Отеле'];

const { data: createMenuRules } = await useAsyncData('rules', () =>
  $fetch('/api/rules'),
);
</script>

<style lang="scss" scoped>
.main-page {
  overflow: hidden;
  &__video,
  &__video-placeholder {
    height: calc(100vh - var(--layout-content-offset));
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &__video {
    object-fit: cover;
  }
  &__video-placeholder {
    background-color: rgba(#b87c5a, 0.65);
  }
  &__promo {
    overflow: hidden;
    height: calc(100vh - var(--layout-content-offset));
    display: flex;
    align-items: center;
    &-content {
      max-width: 910px;
      h1 {
        margin-bottom: 41px;
        color: var(--text-color);
      }
    }
  }

  &__section {
    margin-top: 176px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 21px;

    &--heading {
      align-items: end;
      // display: grid;
      grid-template-columns: 1fr;
      h2 {
        margin-bottom: 0;
      }
      p {
        margin-bottom: 14px;
      }
    }

    &--how-to {
      h2 {
        margin-bottom: 0 !important;
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
    font-size: 29px;
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
    picture {
      flex-shrink: 0;
    }
  }

  &__section-heading-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: end;
  }

  @include media('md') {
    &__section {
      margin-top: 110px;
      &--content {
        margin-top: 40px;
      }
    }
  }

  @include media('sm') {
    &__promo {
      height: auto;
      padding-block: 60px;
    }
    &__section {
      grid-template-columns: auto;
      margin-top: 60px;
      grid-gap: 30px;
      margin-top: 80px;
      picture {
        order: -1;
        width: 100%;
        img {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          display: block;
        }
      }

      &--bordered {
        border: 1px solid #b87c5a;
      }

      &--content {
        max-width: 60%;
        margin-left: auto;
        margin-top: 20px;
      }
    }

    &__list {
      font-size: 22px;
    }

    &__section-heading-content {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    &__options-content {
      padding: 0px 20px 30px;
    }

    &__section-content {
      padding: 0px 20px 30px;
      h2 {
        margin-bottom: 30px;
      }
      &--leading {
        padding: 0;
      }
    }
    &__arc-radius {
      border-radius: 0;
      &--leading {
        border-radius: 14px 14px 0px 0px;
        border: 1px solid #b87c5a;
      }
    }

    &__rules {
      margin-top: 30px;
    }

    &__arc-right,
    &__arc-left {
      border-radius: 0;
    }

    &__title-and-pic-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      h2 {
        width: 100%;
        padding-inline: 20px;
        margin-bottom: 0;
      }
    }
    &__video {
      display: none;
    }
  }

  @include media('xxs') {
    &__section:not(&__section--content) {
      margin-top: 60px;
    }
  }
  @include media('xs') {
    &__section {
      &--content {
        max-width: 100%;
      }
    }
    &__list {
      font-size: 18px;
    }
  }
}

.rule {
  padding-left: 70px;
  display: flex;
  gap: 62px;

  h4 {
    margin-bottom: 20px;
  }
  p {
    font-size: 23px;
  }

  &__num {
    font-size: 84px;
    line-height: 0.9;
    font-family: var(--title-font);
  }

  &__image {
    border-radius: 320px 320px 0px 0px;
  }

  @include media('md') {
    padding: 24px;
    gap: 24px;
  }

  @include media('sm') {
    display: grid;
    grid-template-areas:
      'num text'
      'img img';
    grid-template-columns: auto 1fr;
    gap: 14px;

    &__num {
      grid-area: num;
    }

    &__content {
      grid-area: text;
    }

    picture {
      grid-area: img;
      height: 0;
      position: relative;
      padding-top: 55%;
    }

    &__image {
      position: absolute;
      inset: 0;
      height: 100%;
      border-radius: 0;
      width: 100%;
      object-fit: cover;
    }
  }

  @include media('xxs') {
    padding: 20px;
    gap: 10px;
    &__num {
      font-size: 34px;
    }
    h4 {
      font-size: 18px;
      line-height: 1.11;
    }
    p {
      font-size: 16px;
    }
  }
}

.first-radial {
  right: 0;
  position: absolute;
  top: 20%;
  z-index: -1;
}

.second-radial {
  left: 0;
  position: absolute;
  top: 40%;
  z-index: -1;
}

.third-radial {
  right: 0;
  position: absolute;
  top: 60%;
  z-index: -1;
}
.cursor {
  border-right: 4px solid #b87c5a;
  padding-right: 8px;
  animation: flashin-border 1s step-start infinite;
}

@keyframes flashin-border {
  0% {
    border-color: #b87c5a;
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: #b87c5a;
  }
}

.accent-part {
  @include media('xxs') {
    display: block;
  }
}
</style>

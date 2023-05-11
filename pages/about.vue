<template>
  <main class="about page">
    <div class="wrapper">
      <h1 class="about__title title-color-2 hide-for-xxs">о нас</h1>
      <section class="about__section about__section--with-coupled-images">
        <div class="about__text">
          <h1 class="title-color-2 show-for-xxs">о нас</h1>
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
          <the-image
            class="about__paired-image"
            src="images/about/marina.jpg"
            bordered
          >
            Марина, основательница <br />
            <a href="https://vegan-map.ru/" target="_blank">vegan-map.ru</a>
          </the-image>
          <the-image
            src="images/about/julia.jpg"
            bordered
            class="about__paired-image about__rounded-pic"
          >
            Юля, авторка <br /><a href="https://och-vkusno.com/" target="_blank"
              >och-vkusno.com</a
            >
          </the-image>
        </div>
      </section>
      <section class="about__section">
        <div class="about__pics">
          <the-image src="images/about/anna.jpg" bordered>
            Анна, авторка
            <a href="https://www.instagram.com/anna_veganka/" target="_blank">
              anna_veganka,
            </a>
            <br />
            владела веганской доставкой
          </the-image>
        </div>
        <div class="about__text">
          <p>
            Над этим справочником трудились те, кто близко знаком с этой
            сферой, некоторые из нас даже имели свой веганский бизнес. Мы
            скрупулёзно собирали всю нашу экспертизу и превращали её в части
            справочника.
          </p>
          <p>
            Мы продолжим добавлять новые записи по мере необходимости и
            обновлять старые. А если у вас возникнет вопрос, то мы ответим на
            него, если вы напишите на
            <a href="mailto:hello@veganrussian.ru.">hello@veganrussian.ru.</a>
          </p>
        </div>
      </section>
      <section class="about__section about__section--contributers">
        <h4 class="about__section-title">над проектОМ работали:</h4>
        <ul>
          <li>
            <b>Авторки справочника</b>: Юлия Амелина, Анна Свердлова, Марина
            Ястремская.
          </li>
          <li><b>Редакторка</b>: Дарья Ларина.</li>
          <li><b>Видео</b>: Михаил Золотарёв.</li>
        </ul>
        <ul>
          <li><b>Актрисы видео</b>: Анна, Наталья, Паулина, Дара.</li>
          <li><b>Фото</b>: Карина Гарифуллина.</li>
          <li><b>Дизайнерка</b>: Маргарита Хайбрахманова</li>
          <li><b>Разработчик</b>: Эдик Гизбрехт.</li>
        </ul>
      </section>
      <div class="common-links">
        <the-link :to="{ name: 'guide' }">
          Открыть справочник по веганским блюдам
        </the-link>
        <the-link :to="{ name: 'suppliers' }">
          Посмотреть поставщиков
        </the-link>
      </div>
    </div>
  </main>
</template>
<script setup>
useHead({
  titleTemplate: 'О нас',
});
</script>

<style lang="scss">
.about {
  &__title {
    margin-bottom: 92px;
  }
  &__section {
    display: grid;
    column-gap: 120px;
    grid-template-columns: 5fr 6fr;

    & + & {
      margin-top: 96px;
    }

    &--contributers {
      border: 2px solid #282b00;
      padding: 60px 100px;
    }

    &--with-coupled-images {
      figure {
        flex-shrink: 0;
        width: 50%;
      }
    }

    &-title {
      grid-column: 1/-1;
      margin-bottom: 40px;
    }
  }

  &__pics {
    display: flex;
    gap: 20px;
  }

  &__rounded-pic {
    border-radius: 0 120px 0 0;
  }

  @include media('md') {
    &__section {
      column-gap: 46px;

      &--contributers {
        padding: 40px 60px;
      }
    }
  }

  @include media('sm') {
    &__section {
      column-gap: 30px;

      &--contributers {
        padding: 30px 40px;
      }

      &-title {
        margin-bottom: 20px;
      }
    }
  }

  @include media('xxs') {
    padding-top: 30px;
    &__section {
      gap: 36px;
      grid-template-columns: 1fr;

      & + & {
        margin-top: 36px;
      }

      &--with-coupled-images {
        .about__pics {
          order: -1;
          figure {
            &:first-child img {
              border-radius: 20px 0px 0px 0px;
            }
            &:last-child img {
              border-radius: 0px 20px 0px 0px;
            }
          }
        }
      }

      &--contributers {
        gap: 0;
        border-radius: 0px 0px 20px 20px;
        padding: 30px 20px;
      }
    }

    &__text {
      padding: 30px 20px;
      border: 1px solid #b87c5a;

      h1 {
        font-size: 30px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>

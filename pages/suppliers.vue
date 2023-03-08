<template>
  <div class="page suppliers">
    <div class="wrapper">
      <div class="suppliers__preview">
        <h1>поставщики</h1>
        <p class="suppliers__text">
          Обратите внимание, что не вся продукция перечисленных ниже поставщиков
          является веганской.
        </p>
        <p class="suppliers__text">
          Если вы хотите добавить свой бренд на эту страницу, напишите нам на
          <a href="mailto:hello@veganrussian.ru">hello@veganrussian.ru</a>.
        </p>
      </div>
      <template v-for="(item, index) in items" :key="index">
        <div
          v-if="'title' in item && 'text' in item"
          class="card suppliers__item"
          :class="{
            'card--reversed': item.reversed,
            'card--first': index === 0,
            'card--last': index === items.length - 1,
          }"
        >
          <div class="card__content">
            <h2 class="card__title" v-html="item.title"></h2>
            <p
              v-for="(paragraph, pIndex) in item.text"
              :key="pIndex"
              class="card__text"
            >
              {{ paragraph }}
            </p>
          </div>
          <div class="card__image-wrapper">
            <img :src="item.image" alt="" class="card__image" />
            <the-button
              class="card__btn"
              bottom-rounded
              width="100%"
              @click="openPresentation(item.link)"
              >Открыть презентацию</the-button
            >
          </div>
        </div>
        <div v-else class="suppliers__item image">
          <img :src="item.image" alt="" />
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
useHead({
  titleTemplate: 'Поставщики',
});

type SuppliersItems = {
  title: string;
  text: string[];
  image: string;
  reversed?: boolean;
  link: string;
};

const openPresentation = (link: string) => {
  window.open(link);
};

const items: Array<SuppliersItems | { image: string }> = [
  {
    title: 'молочка <br /> NEMOLOKO',
    text: [
      'Nemoloko — это растительный продукт, он произведен без использования ингредиентов животного происхождения и не содержит лактозу, казеин, трансжиры, холестерин, гормоны роста или остаточное количество антибиотиков.',
    ],
    image: '/images/suppliers/nemoloko.webp',
    link: 'https://docs.google.com/presentation/d/1IOaJnXhX1MrRLtSNz45yynt4x2eGDy-A/edit?rtpof=true&sd=true',
  },
  {
    title: 'сыр <br /> Vegalize',
    text: [
      'Альтернатива обычному сыру, но без продуктов животного происхождения.',
      'Сыр отлично плавится, поэтому помимо обычных бутербродов идеально подойдёт для веганской пиццы и лазаньи.',
    ],
    image: '/images/suppliers/vegalize.webp',
    link: 'https://drive.google.com/file/d/1Sl0DdkM1jrhNAjVAlx7O30GXqc01Hh2l/view?usp=share_link',
  },
  {
    title: 'сырные дрожжи <br /> Nooch',
    text: [
      'Пищевые неактивные дрожжи часто используют как приправу из-за его пикантного вкуса и пользы для здоровья. Он имеет ореховый, сырный вкус и часто применяется для имитации сыра в веганских блюдах, им загущают соусы и заправки, а также используют как дополнительным источником питательных веществ, так так они является отличным источником белка, витаминов, минералов и антиоксидантов.',
    ],
    image: '/images/suppliers/nooch.webp',
    link: 'https://drive.google.com/file/d/1kusnEsXNU5SmD22cqsjK_NmsT55YYWYk/view?usp=share_link',
  },
  {
    title: 'мясо <br /> Meatless',
    text: [
      'Как мясо, только сделано из растений. Производство растительных альтернатив мясу из Петербурга. В ассортименте котлеты, фарш, фрикадельки, сардельки, колбаски и гуляш. Вкусовые профили: мясо, курица, рыба.',
    ],
    image: '/images/suppliers/meatless.webp',
    link: 'https://drive.google.com/file/d/1dXUDwYhDqAVb35CX4mbx8qkupinzRJXZ/view?usp=share_link',
  },
  {
    title: 'йогурты, <br /> пуддинг 5yes',
    text: [
      'Растительные аналоги молочных продуктов. В арсенале бренда обычные и питьевые йогурты, пудинги, а также молоко. Йогурты содержат живые лактобактерии. Хорошо впишутся в заведение с направлением ЗОЖ.',
    ],
    image: '/images/suppliers/5yes.webp',
    link: 'https://drive.google.com/file/d/12_2xX3LHY9-9HJ9uZq-6mO-qFxSd6R84/view?usp=share_link',
  },
  {
    image: '/images/suppliers/demo-1.webp',
  },
  {
    title: 'мясо, <br /> курица Hi',
    text: [
      'Мясные полуфабрикаты от ЭФКО. Котлеты, фрикадельки, фарш, наггетсы.',
    ],
    image: '/images/suppliers/meat-hi.webp',
    reversed: true,
    link: 'https://drive.google.com/file/d/1eM3mo6zXl-s2T59ezyBPpgnPSI0X1gS1/view?usp=share_link',
  },
  {
    title: 'БАТОНЧИКИ <br /> KICK',
    text: [
      'Вкусные батончики, которые идеально впишутся на прилавок или витрину кофейни. Веганские аналоги популярных батончиков: Bounty, Snickers, Picnic и других.',
    ],
    image: '/images/suppliers/kick-bars.webp',
    reversed: true,
    link: 'https://drive.google.com/file/d/1FGy2YOr1CPyLZfNFtrQ7boVOkfbMh9F5/view?usp=share_link',
  },
  {
    title: 'МОЛОЧКА <br /> ICEcRO',
    text: [
      'В ассортименте АйсКро вы найдёте мороженое и эскимо, сорбеты, йогурты, кефир, сметану, сгущёнку. Обратите внимание, что в презентации есть чайный напиток, который на самом деле не веган – в нём есть мёд.',
    ],
    image: '/images/suppliers/icecro.webp',
    reversed: true,
    link: 'https://drive.google.com/file/d/11JMNCkxRsFpsU5nJxh0D2DrAZ8_dMH1w/view?usp=share_link',
  },
  {
    title: 'МЯСО <br /> WELLDONE',
    text: [
      'У Welldone вы найдёте широкий выбор веганских альтернатив мясу и курице: котлеты, фарш, наггетсы, пельмени, колбаски.',
    ],
    image: '/images/suppliers/welldone.webp',
    reversed: true,
    link: 'https://drive.google.com/file/d/1yQa8brmswxGPErXVB0ZzlNQwB_rl4CCC/view?usp=share_link',
  },
  {
    title: 'тофу <br /> сельский дом',
    text: [
      'Соевый сыр тофу едва ли можно назвать просто сыром. Этот полезный, нежный и вкусный деликатес растительного происхождения изготавливается из соевых бобов и вполне может стать полноценной альтернативой мясу и молоку.',
    ],
    image: '/images/suppliers/tofu-selskij-dom.webp',
    reversed: true,
    link: 'https://drive.google.com/file/d/1WvKDQwZ1rBjY2xdOnVXV3rSX9B4aY1i2/view?usp=share_link',
  },
  {
    image: '/images/suppliers/demo-2.webp',
  },
  {
    title: 'МЯСО, РЫБА <br /> GREENWISE',
    text: [
      'Помимо стандартных котлет Greenwise производит стрипсы, филе, тунца и джерки (вяленое мясо). Сухие стрипсы – хороший вариант для тех, кто не хочет переживать из-за скоропортящейся продукции. Стрипсы нужно разварить перед началом готовки, а на вкус и по текстуре они интереснее обычного соевого мяса.',
    ],
    image: '/images/suppliers/greenwise.webp',
    link: 'https://drive.google.com/file/d/1R1ZtUE7i1ttEiWU4A5nuplg-ltXBFF2G/view?usp=share_link',
  },
  {
    title: 'КОМБУЧА <br /> HQ KOMBUCHA',
    text: ['Один из брендов комбучи, которая подходит веганам.'],
    image: '/images/suppliers/hq-kombucha.webp',
    link: 'https://drive.google.com/file/d/1hPObsPcKhwgn_dJ2OW8fH8aSZamXiunb/view?usp=share_link',
  },
  {
    title: 'АРАХИСОВАЯ ПАСТА  <br /> “АЗБУКА ПРОДУКТОВ”',
    text: [
      'Как мы писали, некоторая арахисовая паста может содержать молочный белок. Так что мы добавили производителя точно веганской арахисовой пасты.',
    ],
    image: '/images/suppliers/azbuka-produktov.webp',
    link: 'https://drive.google.com/file/d/1_dTwI0vhiD0GBpxq4vxcItcLTlcfxYTv/view?usp=share_link',
  },
  {
    title: 'бульоны <br /> easybase',
    text: [
      'Заменить мясные бульоны можно с помощью одного из продуктов EasyBase. Обратите внимание, что некоторые из них невеганские – содержат молоко.',
    ],
    image: '/images/suppliers/easybase.webp',
    link: 'https://drive.google.com/file/d/1qEVzIubKWogMBcBIXPREpPN8lmd20zos/view?usp=share_link',
  },
  {
    title: 'рамболь <br /> beanata',
    text: [
      'Сыры Beanata по своему вкусу и текстуре напоминают рамболь или адыгейский сыр. Из этого сыра получаются отличные сырники.',
    ],
    image: '/images/suppliers/beanata.webp',
    link: 'https://drive.google.com/file/d/1iulEpIj99PkWgjcS8pvWQK-zRi0Lamzu/view?usp=share_link',
  },
  {
    image: '/images/suppliers/demo-3.webp',
  },
  {
    title: 'СОУСЫ Hi',
    text: [
      'В ассортименте соусов Hi вы можете встретить Веганез (веганский майонез), сырный соус, Тар-тар и соус Бургер.',
    ],
    image: '/images/suppliers/sousy-hi.webp',
    reversed: true,
    link: 'https://drive.google.com/file/d/1nwMYDvWDjlIfJ86HH7EWadI5lwdMDF8b/view?usp=share_link',
  },
  {
    title: 'молоко alpro',
    text: [
      'Молоко Alpro – это выбор большинства кофеен, когда нужна качественная альтернатива молоку для напитков.',
    ],
    image: '/images/suppliers/alpro.webp',
    reversed: true,
    link: 'https://drive.google.com/file/d/1TmP7bHv-23rlMnxqU9XKWmc6WVeiV1m9/view?usp=share_link',
  },
  {
    title: 'мясо, молоко, батончики <br /> Biofoodlab',
    text: [
      'Благодаря широкой линейке продуктов, Bite могут пригодиться ресторанам, кафе и кофейням.',
    ],
    image: '/images/suppliers/biofoodlab.webp',
    reversed: true,
    link: 'https://drive.google.com/file/d/1_hXok-tCzrMxhKcX_CEzaPaJH2UzynnO/view?usp=share_link',
  },
];
</script>

<style lang="scss" scoped>
.suppliers {
  &__item {
    & + & {
      margin-top: 100px;
    }
  }

  &__preview {
    margin-bottom: 180px;
    max-width: 50%;
  }

  &__text {
    line-height: 1.73;
    & + & {
      margin-top: 30px;
    }
  }
  @include media('sm') {
    &__item {
      & + & {
        margin-top: 75px;
      }
    }
    &__preview {
      margin-bottom: 120px;
    }
  }
  @include media('xxs') {
    &__item {
      & + & {
        margin-top: 37px;
      }
    }
    &__preview {
      margin-bottom: 68px;
      max-width: 100%;
    }

    &__text {
      & + & {
        margin-top: 20px;
      }
    }
  }
}
.card {
  padding: 100px;
  border: 1.5px solid #000000;
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 50px;
  &--first {
    border-radius: 40px 40px 0px 0px;
  }
  &--last {
    border-radius: 0px 0px 40px 40px;
  }
  &--reversed {
    grid-template-columns: 5fr 7fr;
    .card__image-wrapper {
      order: -1;
    }
  }

  &__title {
    margin-bottom: 64px;
  }

  &__text {
    line-height: 1.73;
  }

  &__btn {
    margin-top: 30px;
  }

  &__image {
    width: 100%;
    border-radius: 230px 230px 0 0;
    outline: 1px solid #000000;
  }

  @include media('lg') {
    padding: 75px;
  }

  @include media('sm') {
    padding: 36px;
    grid-template-columns: 1fr 320px;
    gap: 24px;
    &__title {
      margin-bottom: 40px;
    }
    &--reversed {
      grid-template-columns: 320px 7fr;
    }
    &--first {
      border-radius: 24px 24px 0px 0px;
    }
    &--last {
      border-radius: 0px 0px 24px 24px;
    }
  }

  @include media('xxs') {
    grid-template-columns: 1fr;
    padding: 0;
    gap: 0;
    overflow: hidden;
    &__title {
      margin-bottom: 20px;
    }
    &__content {
      padding: 20px;
    }
    &__image-wrapper {
      display: contents;
    }
    &__image {
      border-radius: 0;
      width: 100%;
      order: -1;
      outline: none;
    }
    &__btn {
      order: 1000;
      border-radius: 0;
      margin: 10px 20px 20px;
      width: calc(100% - 40px);
    }
  }
}

.image img {
  outline: 1px solid #000000;
  width: 100%;
  display: block;
  max-height: 100vh;
  object-fit: cover;
}
</style>

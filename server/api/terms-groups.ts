type Content = {
  type: 'block' | 'image';
  content:
    | {
        type: 'title' | 'text' | 'link' | 'list' | 'subtitle';
        content: string | string[];
        link?: string;
      }[]
    | string;
  imageTitle?: string;
};

type Options = {
  id: string;
  name: string;
  description?: string;
  content?: Content[];
};

const options: Options[] = [
  {
    id: 'kak-zamenit-zhivotnye-produkty',
    name: 'Как заменить <br /> животные продукты',
    description:
      'Вы узнаете, чем можно заменить мясо, рыбу, курицу, молоко, сливки, сыр, пробиотики, сливочное масло, яйца, мед и желатин.',
    content: [
      {
        type: 'block',
        content: [
          {
            type: 'title',
            content: 'Мясо',
          },
          {
            type: 'text',
            content:
              'Для разных целей и блюд мы можем предложить разные замены мяса. Пока что на российском рынке не найти реалистичных стейков (это вопрос времени), но альтернатив попроще — полно. Это <a href="https://veganrussian.ru/tag/not-meat/" target="_blank">Котлеты, фарш, колбаски, фрикадельки, люля-кебаб, филе; соевое мясо; сосики и колбаса.</a>',
          },
          {
            type: 'subtitle',
            content: 'Что с ними можно придумать',
          },
          {
            type: 'list',
            content: [
              'Бургер с веганской котлетой (главное – не забыть адаптировать соус, булочку и сыр.',
              'Пюре или макароны с домашней котлетой, имитирующей говядину или свинину.',
              'Гуляш с соевым мясом. Чтобы оно было вкусным, его нужно хорошо отжать от воды.',
              'Рагу с бобами.',
              'Пицца с веганской колбасой.',
              'Хотдоги с веганской сосиской или колбаской.',
              'В местах с грилем хорошо впишется веганский люля-кебаб.',
              'Веганская шаверма с фаршем.',
              'Болоньезе или лазанья легко адаптируются с помощью замороженного или соевого фарша.',
            ],
          },
        ],
      },
      {
        type: 'image',
        content:
          '/images/guide/kak-zamenit-zhivotnye-produkty/foto-khot-dog.webp',
        imageTitle: 'Фото хот-дог',
      },
      {
        type: 'block',
        content: [
          {
            type: 'title',
            content: 'рыба',
          },
          {
            type: 'text',
            content:
              'Самый простой и очень вкусный рецепт веганской рыбы: замаринованный в соевом соусе брусочек тофу, обёрнутый в лист нори и обжаренный в кляре. Уже такой замене рыбы веганы будут очень рады.',
          },
          {
            type: 'text',
            content:
              'Помимо этого, можно использовать <a href="https://veganrussian.ru/tag/not-fish/" target="_blank">веганские котлеты, филе под рыбу, нерыбные палочки, некрабовые палочки; риет, нешпроты и икру.</a>',
          },
          {
            type: 'subtitle',
            content: 'Таким образом можно сделать, например:',
          },
          {
            type: 'list',
            content: [
              'Рис с рыбной котлетой.',
              'Тарт или бутерброд со спредом и икрой.',
              'Филе гриль.',
              'Некрабовый салат.',
              'Бутерброд с риетом.',
              'Фиш’н’чипз.',
              'Бутерброд с нешпротами.',
            ],
          },
        ],
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'курица' },
          {
            type: 'text',
            content:
              'Больше всего сейчас веганских наггетсов, но и их можно удачно обыграть! Есть также котлеты, филе, фарш, фрикадельки.',
          },
          { type: 'subtitle', content: 'Варианты блюд' },
          {
            type: 'list',
            content: [
              'Вермишелевый суп с фрикадельками.',
              'Цезарь с наггетсами.',
              'Ролл с наггетсами или котлетой.',
              'Пюре или макароны с котлетой.',
            ],
          },
        ],
      },
      {
        type: 'image',
        content:
          '/images/guide/kak-zamenit-zhivotnye-produkty/foto-kofe-s-molokom.webp',
        imageTitle: 'Фото кофе с молоком',
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'МОЛОКО' },
          {
            type: 'text',
            content:
              'Коровье молоко прекрасно заменяется растительным молоком. Более того, в веганской выпечке, соусах, десертах, "милкшейках", заварных кремах, глазурях эта замена значительно улучшает общую вкусовую гамму блюда. Веганское молоко делает её легче и ярче, поскольку на его фоне раскрывается вкус других используемых в рецепте продуктов — ягод, фруктов, овощей, шоколада, специй и добавок.',
          },
          {
            type: 'text',
            content:
              'Но стоит помнить, что некоторые виды растительного молока могут иметь достаточно сильный привкус и послевкусие (миндальное, на жареном миндале), что приглушает роль других компонентов в блюде. Достаточно нейтральное на вкус молоко – овсяное, соевое или рисовое. Учтите, что у некоторых производителей и такие виды молока могут иметь свой сильный вкусовой оттенок.',
          },
          {
            type: 'text',
            content:
              'И даже на упаковке растительного молока имеет смысл читать состав, так как в продукте могут быть невеганские вещества — например, казеинат натрия и кармин. Также часто под вопросом оказывается происхождение витаминов.',
          },
          {
            type: 'text',
            content:
              'Веганское растительное молоко можно найти на <a href="https://veganrussian.ru/" target="_blank">veganrussian.ru</a>.',
          },
        ],
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'Сливки' },
          {
            type: 'text',
            content:
              'Сливки из коровьего молока можно заменить на растительные. Хорошо подойдут овсяные или кокосовые.',
          },
          {
            type: 'text',
            content:
              'Помните, что некоторые кокосовые <a href="https://veganrussian.ru/coconut-milk/" target="_blank"> сливки могут быть невеганскими.</a>',
          },
          { type: 'subtitle', content: 'СОВЕТ' },
          {
            type: 'text',
            content:
              'Перед использованием кокосовых сливок, охладите их в холодильнике в течение 8-12 часов. Это нужно для разделения сливок и кокосовой воды. Для готовки вам нужны только сливки. Кокосовая вода будет давать не очень приятный привкус.',
          },
        ],
      },
      {
        type: 'image',
        content:
          '/images/guide/kak-zamenit-zhivotnye-produkty/foto-tarelka.webp',
        imageTitle: 'Фото тарелка',
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'Сыр' },
          {
            type: 'text',
            content:
              'Для веганских блюд нельзя использовать сыр из молока животных. Вы можете выбрать из <a href="https://veganrussian.ru/tag/cheese/" target="_blank">многообразия веганских сыров</a>", что сейчас представлены на рынке.',
          },
          {
            type: 'text',
            content:
              'На некоторых молочных сырах вы можете увидеть надпись «вегетарианский». Почему так? Это означает, что для изготовления сыра не использовался животный сычужный фермент. Вегетарианцы, которые употребляют молоко, но не животных, стараются это учитывать. Тем не менее, веганам такой сыр не подходит.',
          },
          {
            type: 'text',
            content:
              'Есть также сыры, которые имеют маркировку «растительный», потому что молока в них не так много. Однако <a href="https://veganrussian.ru/fieta-white-cheese-style-greenland-is-not-vegan/" target="_blank">такой сыр</a> все равно не является веганским.',
          },
        ],
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'Сливки для взбивания' },
          {
            type: 'text',
            content:
              'Большинство растительных сливок для взбивания созданы не под веган аудиторию, а для снижения стоимости продукта. Поэтому в составе может появиться казеин, пахта, желатин. А также, кроме этого, непонятные ешки и ароматизаторы.',
          },
          {
            type: 'text',
            content:
              'Поэтому проще всего выбирать сливки, которые есть на <a href="https://veganrussian.ru/" target="_blank">veganrussian.ru</a>. Или же пользоваться кокосовыми, главное – охлаждать их не менее 8-12 часов, чтобы разделить сливки и кокосовую воду, так как у неё не очень приятный привкус.',
          },
        ],
      },
      {
        type: 'image',
        content:
          '/images/guide/kak-zamenit-zhivotnye-produkty/foto-kofe-so-vzbitymi-slivkami.webp',
        imageTitle: 'Фото кофе со взбитыми сливками',
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'Пробиотики / закваска' },
          {
            type: 'text',
            content:
              'Если вы хотите добавить бактерий в своё блюдо, например, сделать кешью-йогурт, то вы должны проверить, чтобы они были веганскими. Да, использовать бактерии – нормально, но веганы проверяют как была выращена закваска. Это можно делать на основе молока, а можно на основе растительных продуктов.',
          },
          {
            type: 'text',
            content:
              'Проще всего выбирать те пробиотики или закваску, которые есть на нашем сайте: <a href="https://veganrussian.ru/tag/probiotics/" target="_blank">veganrussian.ru/tag/probiotics</a>.',
          },
        ],
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'сливочное масло' },
          {
            type: 'text',
            content:
              'Сливочное масло можно заменить растительными спредами и маргаринами. Главное, чтобы в составе спреда не было молочных продуктов и непроверенных добавок. Проще всего выбирать те замены сливочному маслу, которые есть на нашем сайте <a href="https://veganrussian.ru/tag/butter/" target="_blank">veganrussian.ru/tag/butter</a>.',
          },
        ],
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'сухое растительное молоко' },
          {
            type: 'text',
            content:
              'Его часто используют в десертах и азиатской кухне. Проблема в том, что оно может содержать молочный белок (казеин) или молочный сахар (лактозу). Поэтому нужно всегда искать полный состав сухого молока.',
          },
          {
            type: 'text',
            content:
              'Проверенное веган молоко можно найти тут: <a href="https://veganrussian.ru/tag/powdered-milk/" target="_blank">veganrussian.ru/tag/powdered-milk</a>',
          },
        ],
      },
      {
        type: 'image',
        content:
          '/images/guide/kak-zamenit-zhivotnye-produkty/foto-burgery.webp',
        imageTitle: 'Фото бургеры',
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'яйца' },
          {
            type: 'text',
            content:
              'Здесь мы расскажем вам о том, как заменить яйца в выпечке или для взбивания в десерты. А также что можно придумать для замены яйца, как самостоятельного блюда.',
          },
          {
            type: 'subtitle',
            content: 'В выпечке',
          },
          {
            type: 'text',
            content:
              'Веганские сухие заменители яиц прекрасно работают в качестве склеивающего элемента **в тесте для блинов, оладий, кексов, бисквитов, пончиков, печенья и хлеба**. ',
          },
          {
            type: 'text',
            content:
              'Примеры таких смесей: <a href="https://veganrussian.ru/egg-alternative-newa-nutrinion/" target="_blank">Не яйцо</a>; <a href="https://veganrussian.ru/bobs-red-mill-egg-replacer/" target="_blank">Bob’s Red Mill Egg Replacer</a> и др. В составе этих заменителей для выпечки есть крахмалы (кукурузный, картофельный, тапиоковый), пищевая сода и всегда псиллиум (шелуха подорожника). Псиллиум — растворимая клетчатка, которая помогает тесту стать воздушным, нежным и пузырчатым внутри.',
          },
          {
            type: 'subtitle',
            content: 'Вместо яичных белков',
          },
          {
            type: 'text',
            content:
              'Если по рецепту необходимы яйца или яичные белки, взбитые в плотную стабильную пену, используют веганскую замену — аквафабу. Это жидкость из-под отваренного или консервированного нута (в случае с консервированными бобовыми также подойдет жидкость из-под зеленого горошка или белой фасоли). Доступна и <a href="https://veganrussian.ru/aquafaba-vor/" target="_blank">сухая аквафаба в виде порошка</a>.',
          },
          {
            type: 'text',
            content:
              'Если рецепт требует плотной белковой пены, взбитой с сахаром для шарлотки, безе, пирожного Павлова, зефира, муссовых десертов, аквафабу взбивают так же, как и куриные яйца. Предварительно охлажденную, с добавлением сахара или сиропа в несколько подходов. Для увеличения плотности и максимальной стабильности пены в аквафабу добавляют винный камень и камедь — гуаровую или ксантановую.',
          },
          {
            type: 'subtitle',
            content: 'Яичный вкус и текстура:',
          },
          {
            type: 'text',
            content:
              'Текстуру и вкус вареных яиц в блюдах может заменить сочетание тофу, <a href="https://veganrussian.ru/tag/nutritional-yeast/" target="_blank">неактивированных дрожжей</a> и черной соли <a href="https://veganrussian.ru/kala-namak-zoloto-indii/" target="_blank">кала-намак</a>.',
          },
          {
            type: 'text',
            content:
              'Готовят и половинки "вареных" веганских яиц: для белка используют шелковый тофу, кешью или растительное молоко и агар-агар, а для желтка — желтые томаты, отварной маш или картофель, неактивированные дрожжи, соль кала-намак, куркуму, специи, крахмал и/или камеди. <a href="https://www.instagram.com/p/CLXwnVPDWS5/" target="_blank">Вариант веганского "вареного яйца”</a>.',
          },
          {
            type: 'text',
            content:
              'В качестве веганского омлета распространены два популярных варианта: из нутовой муки и из тофу. В обоих случаях в рецепте могут присутствовать растительное молоко, соль кала-намак, неактивированные дрожжи, томаты, веганский сыр, специи и зелень. Есть и <a href="https://veganrussian.ru/egg-alternative-mallakto/" target="_blank">готовые смеси для веганского омлета</a>.',
          },
          {
            type: 'subtitle',
            content: 'Рецепты',
          },
          {
            type: 'text',
            content:
              'Во многих европейских ресторанах пользуются популярностью блюда с веганской "глазуньей", "сырым" веганским желтком или "всмятку" (например, как <a href="https://www.instagram.com/p/CRevIGQsfUt/" target="_blank">украшение веганских спагетти</a>, карбонара или <a href="https://www.instagram.com/p/CRevIGQsfUt/" target="_blank">хачапури</a>), где содержимое желтка — мякоть желтых или оранжевых томатов с неактивированными дрожжами, солью кала-намак, хлористым кальцием или лактатом кальция и специями, а оболочка — жидкость с альгинатом натрия.',
          },
          {
            type: 'text',
            content:
              '<a href="https://www.youtube.com/watch?v=1BnclkwSk0M&ab_channel=SauceStache" target="_blank">Вариант приготовления веганского “желтка” с хлористым кальцием</a>. <br /><a href="https://www.youtube.com/watch?v=8ZrOOBShO-g&ab_channel=Goodful" target="_blank">Вариант приготовления веганского "желтка" с лактатом кальция</a> <br/>(не забудьте проверить <a href="https://veganrussian.ru/e327/" target="_blank">лактат кальция</a>)',
          },
        ],
      },
      {
        type: 'image',
        content: '/images/guide/kak-zamenit-zhivotnye-produkty/foto-keks.webp',
        imageTitle: 'Фото кекс',
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'мёд' },
          {
            type: 'text',
            content:
              'Кафе стремятся использовать мёд как более здоровую замену сахару. К сожалению, веганство часто путают со стремлением питаться более здорóво. Поэтому в веганские опции часто добавляют мёд, хотя это серьезная ошибка.',
          },
          {
            type: 'text',
            content:
              'Некоторые люди любят апеллировать к тому, что мёд — это спорная тема в веганском сообществе. Да, некоторые "веганы" употребляют мёд, но основная масса убеждена в том, что это неприемлемо.',
          },
          {
            type: 'text',
            content:
              'Если вы хотите использовать что-то полезнее сахара, то обратите внимание на <a href="https://veganrussian.ru/tag/vegan-honey/" target="_blank">сиропы</a>. Например, сироп топинамбура или сироп из аллюлозы (имеет нулевой гликемический индекс и нулевую калорийность).',
          },
        ],
      },
      {
        type: 'block',
        content: [
          { type: 'title', content: 'желатин' },
          {
            type: 'text',
            content:
              ' Желатин не является веганским продуктом, поскольку производится из хрящей и соединительных тканей животных. Желатин успешно заменяют растительными загустителями, стабилизаторами и желеобразующими веществами — агар-агаром (e406, полисахариды из водорослей) или пектинами (e440, полисахариды из фруктов), в зависимости от задачи рецепта. Таким образом, любое блюдо, в котором необходим загуститель, стабилизатор и желеобразующий элемент, можно исполнить в веганском варианте.',
          },
          {
            type: 'text',
            content:
              'По своим стабилизирующим свойствам агар-агар в несколько раз сильнее желатина, однако не идентичен ему, так как дает готовому продукту очень плотную, ломкую структуру. Для лучшей замены желатина агар-агар используют в комбинации с пектинами (в том числе с фруктовыми пюре или фруктами, содержащими большое количество пектина: яблоки, груши, цитрусовые, сливы), камедями. Кроме того, на консистенцию и текстуру агаровых "студней" влияют жиры и сахара. Прорабатывая рецептурные композиции на агаре с другими компонентами, от достоинств этого стабилизатора получают максимальный результат.',
          },
          {
            type: 'text',
            content:
              'В работе с пектинами следует обращать внимание на кислотность базовых продуктов: конкретные пектины работают при определённом уровне pH. Так, например, с жёлтым пектином невозможно приготовить кокосовый мармелад: жёлтый пектин работает при pH=3, тогда как у кокосового пюре pH порядка 5. Чтобы приготовить мармелад из кокосового пюре, потребуется бескислотный пектин (acid free), хорошо работающий при pH 4...6. В подобных случаях часто используют универсальный пектин NH, поскольку он срабатывает и в бескислотной среде, нужно лишь добавить его больше. Кроме того, пектин NH термообратим.',
          },
        ],
      },
    ],
  },
  { id: 'zakuski', name: 'Закуски' },
  { id: 'zavtraki', name: 'Завтраки' },
  { id: 'osnovnye-bliuda', name: 'Основные блюда' },
  { id: 'deserty', name: 'Десерты' },
  { id: 'vypechka', name: 'Выпечка' },
  { id: 'pripravy', name: 'Приправы' },
  { id: 'sousy', name: 'Соусы' },
  { id: 'komplimenty', name: 'Комплименты' },
  { id: 'alkogol', name: 'Алкоголь' },
];

export default defineEventHandler((event) => {
  const query = getQuery(event);
  if (query.id) {
    const option = options.find((item) => item.id === query.id);
    return {
      response: option,
      success: !!option,
    };
  }

  return {
    response: options.map(({ id, name }) => ({ id, name })),
    success: true,
  };
});

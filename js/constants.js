export const NAMES = [
  'Виктория', 'Дарья', 'Алексей', 'Александра', 'Сергей', 'Ульяна', 'Патрик', 'Александр', 'Марина', 'Станислав',
  'Елизавета', 'Валентина', 'Егор', 'Фёдор', 'Ольга', 'Владимир', 'Анна', 'Людмила', 'Зоя', 'Виктор',
  'Анатолий', 'Вадим', 'Светлана', 'Екатерина', 'Мария', 'Михаил', 'Иван', 'Илья', 'Дмитрий', 'Маргарита'
];

export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

export const DESCRIPTIONS = [
  'Санаторий "Железнодорожник".', 'Солнечный денёк.', 'Дорога к пляжу.', 'Шум прибоя.', 'Вот она-свобода!', 'Отдыхаем.', 'Черная молния.', 'На диете.',
  'Заряд бодрости.', 'Первым делом-самолёты.', 'Разложить всё по полочкам.', 'Прямо пойдешь-к морюшку придёшь.',
  'Зеленоглазое такси.', 'Радуга в тарелке.', 'Кексоролл.', 'Луностопы.', 'В погоне за мечтой.',
  'Вместе весело шагать по просторам и, конечно, припевать лучше хором.', 'Без комментариев.', 'Волшебные калоши.', 'Пальма финиковая - 8 штук.',
  'Все на ужин!', 'Как Магдалена, морская пена.', 'Я тебя съем.', 'Фаер-шоу в Турции.', 'Оставьте бегемота в покое!'
];

export const MIN_PHOTOS = 1;
export const MAX_PHOTOS = 25;
export const DESCRIPTIONS_COUNT = 25;
export const MIN_LAKES = 15;
export const MAX_LAKES = 200;
export const MIN_COMMENTS = 0;
export const MAX_COMMENTS = 30;
export const MIN_AVATARS = 1;
export const MAX_AVATARS = 6;
export const COMMENTS_STEP = 5;
export const MAX_TAGS = 5;
export const MAX_DESCRIPTION = 140;
export const HASHTAG_FORMULA = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/i;

export const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25
};

export const SCALE_DEFAULT = Scale.MAX;

export const EFFECTS = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none'
};

export const effectConfigs = {
  [EFFECTS.CHROME]: {
    range: { min: 0, max: 1 },
    start: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    range: { min: 0, max: 1 },
    start: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    range: { min: 0, max: 100 },
    start: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    range: { min: 0, max: 3 },
    start: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    range: { min: 0, max: 3 },
    start: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  },
  [EFFECTS.NONE]: {
    range: { min: 0, max: 3 },
    start: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  }
};

export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error'
};

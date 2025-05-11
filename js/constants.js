export const DELAY_TIME = 5000;

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

export const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const RANDOM_COUNT = 10;

export const DEBOUNCE_DELAY = 500;

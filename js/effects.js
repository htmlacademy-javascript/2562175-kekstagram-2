const imagePreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectSelectors = document.querySelectorAll('.effects__radio');

const effectConfigs = {
    chrome: { range:{ min: 0, max:1}, start: 1, step: 0.1},
    sepia: { range:{ min: 0, max:1}, start: 1, step: 0.1},
    marvin: { range:{ min: 0, max:100}, start: 100, step: 1},
    phobos: { range:{ min: 0, max:3}, start: 3, step: 0.1},
    heat: { range:{ min: 0, max:3}, start: 3, step: 0.1},
};
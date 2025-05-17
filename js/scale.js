import { Scale, SCALE_DEFAULT } from './constants.js';

const scaleControlSmaller = document.querySelector('.scale__control--smaller');

const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

let currentScale = SCALE_DEFAULT;

const render = () => {
  imagePreview.style.transform = `scale(${currentScale}%)`;
  scaleControlValue.value = `${currentScale}%`;
};

const minimizePhoto = () => {
  currentScale = currentScale - Scale.STEP >= Scale.MIN ? currentScale - Scale.STEP : Scale.MIN;
  render();
};

const maximizePhoto = () => {
  currentScale = currentScale + Scale.STEP <= Scale.MAX ? currentScale + Scale.STEP : Scale.MAX;
  render();
};

const onSmallerClick = () => {
  minimizePhoto();
};

const onBiggerClick = () => {
  maximizePhoto();
};
scaleControlSmaller.addEventListener('click', onSmallerClick);
scaleControlBigger.addEventListener('click', onBiggerClick);

export const reset = () => {
  currentScale = SCALE_DEFAULT;
  render();
};

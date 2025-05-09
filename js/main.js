import { render } from './render.js';
import './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { initFilters } from './filter.js';

getData()
  .then((photos) => {
    render(photos);
    initFilters(photos)
  })
  .catch(() => {
    showAlert();
  });

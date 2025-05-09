import { createPhotos } from './data.js';
import { render } from './render.js';
import './form.js';
import { getData } from './api.js';

//render(createPhotos());

getData()
  .then((photos) => {
    render(photos);
  })
  .catch((error) => {
    console.log('error!!!!!!!!!!!!!!!!!');
    //showErrorMessage(error.message);
  });

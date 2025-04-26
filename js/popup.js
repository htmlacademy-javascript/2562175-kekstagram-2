import { Popups } from "./constants.js";
const body = document.body;
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const templates = {
  [Popups.SUCCESS]: successTemplate,
  [Popups.ERROR]: errorTemplate
};

export const showPopup = (type) => {
  const popup = templates[type].cloneNode(true);
  body.append(popup)
}

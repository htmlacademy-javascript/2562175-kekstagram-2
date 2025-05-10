import { COMMENTS_STEP } from './constants.js';
import { removeEscapeControl, setEscapeControl } from './escapeControl.js';

const modalTag = document.querySelector('.big-picture');
const bigImageTag = modalTag.querySelector('.big-picture__img img');
const closeButtonTag = modalTag.querySelector('.big-picture__cancel');
const commentsTemplate = modalTag.querySelector('.social__comment');
const commentsTag = modalTag.querySelector('.social__comments');
const commentStatisticTag = modalTag.querySelector('.social__comment-shown-count');
const totalCommentsTag = modalTag.querySelector('.social__comment-total-count');
const loaderTag = modalTag.querySelector('.comments-loader');
const body = document.body;

let localComments = [];
let renderedComments = 0;

const showModal = (isShow = true) => {
  if (isShow) {
    modalTag.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modalTag.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const createComment = ({ avatar, name, message }) => {
  const comment = commentsTemplate.cloneNode(true);
  const avaImageTag = comment.querySelector('.social__picture');
  avaImageTag.src = avatar;
  avaImageTag.alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};

const renderStatistic = () => {
  commentStatisticTag.textContent = renderedComments;
};

const renderLoader = () => {
  if (localComments.length) {
    loaderTag.classList.remove('hidden');
  } else {
    loaderTag.classList.add('hidden');
  }
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, COMMENTS_STEP).forEach((item) => {
    fragment.append(createComment(item));
    renderedComments++;
  });

  commentsTag.append(fragment);
  renderStatistic();
  renderLoader();
};

const render = ({ url}) => {
  bigImageTag.src = url;

  renderComments();
};

export const openModal = ({ url, description, comments, likes }) => {
  renderedComments = 0;
  showModal();
  localComments = [...comments];
  commentsTag.innerHTML = '';
  render({ url, description, likes });
  totalCommentsTag.textContent = comments.length;
  setEscapeControl(closeModal);
};

function closeModal() {
  showModal(false);
}

closeButtonTag.addEventListener('click', () => {
  closeModal();
  removeEscapeControl();
});

loaderTag.addEventListener('click', renderComments);

import { openModal } from "./modal.js";

const picturesContainerTag = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

let localPhotos;

const createCard = (id, url, description, comments, likes) => {
    const cardElement = pictureTemplate.cloneNode(true);
    const imageTag = cardElement.querySelector('.picture__img');
    imageTag.src = url;
    imageTag.alt = description;
    cardElement.querySelector('.picture__comments').textContent = comments.length;
    cardElement.querySelector('.picture__likes').textContent = likes;
    cardElement.dataset.id = id;

    //  cardElement.addEventListener('click', () => {
    //      openModal({url, description, comments, likes});
    //  })

    return cardElement;
};

export const render = (photos) => {
    localPhotos = [...photos];
    const fragment = document.createDocumentFragment();
    photos.forEach(({ id, url, description, comments, likes }) => {
        fragment.append(createCard(id, url, description, comments, likes));
    });
    picturesContainerTag.append(fragment);
};

picturesContainerTag.addEventListener('click', ({ target }) => {
    const card = target.closest('.picture');
    if (card) {
        const id = Number(card.dataset.id);
        console.log(id);
        const photo = localPhotos.find((item) => item.id === id);
        openModal(photo)
    };
});


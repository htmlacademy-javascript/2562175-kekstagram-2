
const picturesContainerTag = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const render = (photos) => {
    const fragment = document.createDocumentFragment();

    photos.forEach(({ url, description, comments, likes }) => {
        const cardElement = pictureTemplate.cloneNode(true);
        const imageTag = cardElement.querySelector('.picture__img');
        imageTag.src = url;
        imageTag.alt = description;
        cardElement.querySelector('.picture__comments').textContent = comments.length;
        cardElement.querySelector('.picture__likes').textContent = likes;
        fragment.append(cardElement);

    });
    picturesContainerTag.append(fragment);
}


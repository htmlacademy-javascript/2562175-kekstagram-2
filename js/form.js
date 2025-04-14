import { isValid } from "./validation.js";

const body = document.body;
const photoUploadForm = document.querySelector('.img-upload__form');
const photoUploadBtn = photoUploadForm.querySelector('.img-upload__input');
const photoEditModal = photoUploadForm.querySelector('.img-upload__overlay');
const photoBigPreview = photoUploadForm.querySelector('.img-upload__preview img');
const photoSmallPreviews = document.querySelectorAll('.effects__preview');
const closeButton = photoUploadForm.querySelector('.img-upload__cancel');

const openForm = () => {
    document.addEventListener('DOMContentLoaded', () => {
        photoUploadBtn.addEventListener('input', () => {
            photoEditModal.classList.remove('hidden');
            body.classList.add('modal-open');
            const file = photoUploadBtn.files[0];

            if (file && file.type.startsWith('image/')) {
                const imageURL.createObjectURL(file);
                photoBigPreview.src = imageUrl;
                photoSmallPreviews.forEach((photoBigPreview) => {
                    photoSmallPreview.style.backgroundImage = `url(${imageUrl})`;
                });
            } else {
                console.warn('Файл не является изображением или не выбран');
            }
        });
    });
};

const closeForm = () => {
    closeButton.addEventListener('click', () => {
        photoEditModal.classList.add('hidden');
        body.classList.remove('modal-open');
        photoUploadBtn.value = '';
        photoBigPreview.src = '';
        photoSmallPreviews.forEach((photoSmallPreview) => {
            photoSmallPreview.style.backgroundImage = '';
        });
    });
};

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        evt.preventDefault();
        photoEditModal.classList.add('hidden');
        body.classList.remove('modal-open');
    };
});


photoUploadForm.addEventListener('submit', (evt) = {
    evt.preventDefault();

    if(isValid()) {
        photoUploadForm.submit();
    }else{
        console.warn('Форма невалидна. Не отправляем.');
    }
});

export { openForm, closeForm };

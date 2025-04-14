const MAX_TAGS = 5;
const MAX_DESCRIPTION = 140;
const HASHTAG_FORMULA = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/i;

const photoUploadForm = document.querySelector('.img-upload__form');
const descriptionField = photoUploadForm.querySelector('.text__description');
const hashtagTag = photoUploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(photoUploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--invalid',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'div',
    errorTextClass: 'form__error'
});

const getHashtags = (value) => value.trim().tolowerCase().split(/\s+/);
const validateHashtags = (value) => {
    if (!value.trim()) {
        return true;
    }
    const hashtag = getHashtags(value);
    return hashtags.every((hashtag) => HASHTAG_FORMULA.test(hashtag));
};

const checkHashtagsCount = (value) => {
    if (!value.trim()) {
        return true;
    }
    const hashtag = getHashtags(value);
    if (hashtag.length > MAX_TAGS) {
        return false;
    }
}


const validateDescription = (value) => value.length <= MAX_DESCRIPTION;

pristine.addValidator(
    hashtagTag,
    validateHashtags,
    'Ошибка'
);

pristine.addValidator(
    descriptionField,
    validateDescription,
    'Ошибка'
);

descriptionField.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        evt.stopPropagation();
    }
});

export const isValid = () => pristine.validate();


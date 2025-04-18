const photoUploadForm = document.querySelector('.img-upload__form');
const descriptionField = photoUploadForm.querySelector('.text__description');
const hashtagTag = photoUploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(photoUploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error'
});

const getHashtags = (value) => value.trim().toLowerCase().split(/\s+/);

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
    return hashtag.length < MAX_TAGS;
};

const checkHashtagUnique = (value) => {
    if (!value.trim()) {
        return true;
    }
    const hashtags = getHashtags(value);
    const uniqueHashtags = [...new Set(hashtags)];
    return hashtags.length === uniqueHashtags.length;
};

const validateDescription = (value) => value.length <= MAX_DESCRIPTION;

pristine.addValidator(
    hashtagTag,
    validateHashtags,
    'Ошибка,хештег должен начинаться со знака #'
);

pristine.addValidator(
    hashtagTag,
    checkHashtagsCount,
    `Количество хештегов не должно превышать ${MAX_TAGS}`
);

pristine.addValidator(
    hashtagTag,
    checkHashtagUnique,
    `Хештеги не должны повторяться`
)
pristine.addValidator(
    descriptionField,
    validateDescription,
    `Количество знаков не должно превышать ${MAX_DESCRIPTION}`
);

export const isValid = () => pristine.validate();

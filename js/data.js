import { getRandomInteger, getUnique, getRandomElement } from './util.js';
import { NAMES, MESSAGES, DESCRIPTIONS, MIN_PHOTOS, MAX_PHOTOS, DESCRIPTIONS_COUNT, MIN_LAKES, MAX_LAKES, MIN_COMMENTS, MAX_COMMENTS, MIN_AVATARS, MAX_AVATARS } from './constants.js';

const getUniqueId = getUnique(MIN_PHOTOS, MAX_PHOTOS);
const getUniquePhoto = getUnique(MIN_PHOTOS, MAX_PHOTOS);

//Функция, генерирующая один комментарий
const getComment = () => ({
  id: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATARS, MAX_AVATARS)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

//Функция, генерирующая массив

/*const getComments = () => {
    const count = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
    const comments = []
    for (let i = 1; i <= count; i++) {
        comments.push(getComment())
    }
    return comments;
};*/

const getComments = () => Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, getComment);


//функция, создающая одну фотографию (возвращает один объект)  //убрали return и фигурные скобки, добавили круглые скобки
const getPhoto = () => ({
  id: getUniqueId(),
  url: `photos/${getUniquePhoto()}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LAKES, MAX_LAKES),
  comments: getComments()
});

/*const createPhotos = () => {
    const result = [];
    for (let i = 1; i <= MAX_PHOTOS; i++) {
        result.push(getPhoto())
    }
    return result;
};*/

export const createPhotos = () => Array.from({ length: MAX_PHOTOS }, getPhoto);

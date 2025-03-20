const massive = [];

const NAMES = [
    'Виктория', 'Дарья', 'Алексей', 'Александра', 'Сергей', 'Ульяна', 'Патрик', 'Александр', 'Марина', 'Станислав',
    'Елизавета', 'Валентина', 'Егор', 'Фёдор', 'Ольга', 'Владимир', 'Анна', 'Людмила', 'Зоя', 'Виктор',
    'Анатолий', 'Вадим', 'Светлана', 'Екатерина', 'Мария', 'Михаил', 'Иван', 'Илья', 'Дмитрий', 'Маргарита'
];

const MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
    'Солнечный денёк.', 'Дорога к пляжу.', 'Шум прибоя.', 'Вот она-свобода!', 'Отдыхаем.', 'Черная молния.', 'На диете.',
    'Заряд бодрости.', 'Первым делом-самолёты.', 'Разложить всё по полочкам.', 'Прямо пойдешь-к морюшку придёшь.',
    'Зеленоглазое такси.', 'Радуга в тарелке.', 'Кексоролл.', 'Луностопы.', 'В погоне за мечтой.',
    'Вместе весело шагать по просторам и, конечно, припевать лучше хором.', 'Без комментариев.', 'Волшебные калоши.', 'Пальма финиковая - 8 штук.',
    'Все на ужин!', 'Как Магдалена, морская пена.', 'Я тебя съем.', 'Фаер-шоу в Турции.', 'Оставьте бегемота в покое!'
];

const PHOTOS_COUNT = 25;

const DESCRIPTIONS_COUNT = 25;

const MIN_LAKES = 15;

const MAX_LAKES = 200;

const MIN_COMMENTS = 0;

const MAX_COMMENTS = 30;

const MIN_AVATARS = 1;

const MAX_AVATARS = 6;

//Функция получения случайного числа из заданного диапазона

const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    let previousResult = -1;
    return () => {
        const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
        if (previousResult !== result) {
            previousResult = result;
            return result;
        };
        return result === upper ? lower : result + 1;
    };
};

//Вложенный объект Comments

const createComment = () => {
    let id = 1;
    const indexMessageArr = getRandomInteger(0, MESSAGES.length - 1);
    const indexNameArr = getRandomInteger(0, NAMES.length - 1);
    //Возвращаемая функция
    return () => {
        const comment = {};
        const idAvatar = getRandomInteger(MIN_AVATARS, MAX_AVATARS);
        comment.id = id;
        comment.avatar = `img/avatar-${idAvatar()}.svg`;
        comment.message = `${MESSAGES[indexMessageArr()]}. ${MESSAGES[indexMessageArr()]}`;
        comment.name = `${NAMES[indexNameArr()]}`;
        id++;
        return comment;
    };
};

//Количество комментариев

const numComments = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);

//Количество лайков

const numLakes = getRandomInteger(MIN_LAKES, MAX_LAKES);

//функция создания объекта

const createPhoto = () => {
    let id = 1;
    return () => {
        const photo = {};
        photo.id = id;
        photo.url = `photos/${id}.jpg`;
        //Массив описаний
        photo.descriptions = Array.from({ length: DESCRIPTIONS_COUNT }, createComment());
        photo.lakes = numLakes();
        //Массив комментариев
        photo.comments = Array.from({ length: numComments() }, createComment());
        id++;
        return photo;
    };
};
//Массив фотографий

const photoArray = Array.from({ length: PHOTOS_COUNT }, createComment());

console.log(photoArray);

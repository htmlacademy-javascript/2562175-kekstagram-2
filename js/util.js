//Функция получения случайного числа из заданного диапазона
const getRandomInteger = (min, max) => {
    const lowerLimit = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
    const upperLimit = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
    const RandomInteger = Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit;
    return Math.floor(RandomInteger);
};

export {getRandomInteger};

//Функция-генератор случайного положительного числа
const getUnique = (min, max) => {
    const previousValues = [];

    return function () {
        let currentValue = getRandomInteger(min, max);

        if (previousValues.length >= (max - min + 1)) {
            console.error(`Перебраны все числа из диапазона от${min} до${max}`);
            return null;
        };

        while (previousValues.includes(currentValue)) {
            currentValue = getRandomInteger(min, max);
        };
        previousValues.push(currentValue);
        return currentValue;
    };
};

export {getUnique};

//Функция, возвращающая случайное значение из массива
const getRandomElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

export {getRandomElement};



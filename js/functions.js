//функция для проверки длины строки

const checkStringLength = (text, stringMaxLength) => text.toString().length <= stringMaxLength;

console.log(checkStringLength('проверяемая строка', 22));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 5));
console.log('ПРОВЕРКА ДЛИНЫ СТРОКИ ЗАВЕРШЕНА');

//функция для проверки является ли строка палиндромом

function checkPalindrome(text) {
  let reversedString = '';
  const lineUpperCase = text.toString().toUpperCase().replaceAll(' ', '');
  for (let i = lineUpperCase.length - 1; i >= 0; i--) {
    reversedString += lineUpperCase[i];
  }
  return lineUpperCase === reversedString;
}

console.log(checkPalindrome('А РОЗА УПАЛА НА ЛАПУ АЗОРА'));
console.log(checkPalindrome('проверяемая строка'));
console.log('ПРОВЕРКА, ЯВЛЯЕТСЯ ЛИ СТРОКА ПАЛИНДРОМОМ, ЗАВЕРШЕНА');

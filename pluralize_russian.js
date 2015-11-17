//* Функция возвращает правильные русские склонения
//* Например: 1 шаг, 2 шага, 5 шагов, 12 шагов
//* В переменную ruswords передать массив из трех склонений

function pluralize_russian (numbers, ruswords) {
  var numbers = numbers || 123;
  var ruswords = ruswords || ['шаг','шага','шагов'];
  var output;
  var numLast = numbers.toString().slice(-1);
  var numTwoLastDigits = Math.abs(numbers);
  if (numTwoLastDigits >= 100) {numTwoLastDigits = numTwoLastDigits.toString().slice(-2)}
  if ( numLast < 2 && ( numTwoLastDigits < 10 || numTwoLastDigits > 20 ) ) {
    output =  numbers + " " + ruswords[0];
  } else if ( ( numLast > 1 && numLast < 5 ) && ( numTwoLastDigits < 11 || numTwoLastDigits > 21 ) ) {
    output =  numbers + " " + ruswords[1];
  } else if ( ( numLast > 4 && numLast < 11 ) || ( numTwoLastDigits > 10 || numTwoLastDigits < 21 ) ) {
    output =  numbers + " " + ruswords[2];
  }
  return output;
}

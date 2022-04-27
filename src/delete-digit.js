const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers=[];  //массив всех возможных вариантов
  for (let i=0 ; i<String(n).length; i++){  //перебор по количеству разрядов в числе
    numbers.push(+(String(n).replace(String(n)[i],""))); //удаляем цифру соответсвующего разряда
  }
  return Math.max(...numbers);  //ищем максимальное
}

module.exports = {
  deleteDigit
};

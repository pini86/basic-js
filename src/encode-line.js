const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1, prev = str[0], result = '';//начальные значения
  for (let i = 1; i <= str.length; i++) {//перебираем
    if (str[i] === prev) {//если равно
      counter++;//текущий счетчик увеличиваем
    } else {
      result += counter === 1 ? prev : counter + prev;
      prev = str[i];
      counter = 1;//сбрасываем
    }
  }
  return result;
}

module.exports = {
  encodeLine
};

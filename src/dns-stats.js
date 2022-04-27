const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    const word = domains[i].split('.');// делим по точкам
    let string = '';
    for (let j = word.length - 1; j >= 0; j--) {//перебираем в обратном порядке
      string += `.${word[j]}`;//прибавляем очередной кусочек
      if (!result[string]) {
        result[string] = 1;//один раз
      } else {
        result[string]++;//много раз
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};

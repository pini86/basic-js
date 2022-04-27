const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(arg) {
  let cats = 0;
  for (let i = 0; i < arg.length; i++) {//перебор по строкам
    for (let j = 0; j < arg[i].length; j++) {// и по столбцам
      if (arg[i][j] === '^^') cats++;// где мяу
    }
  }
  return cats;
}

module.exports = {
  countCats
};

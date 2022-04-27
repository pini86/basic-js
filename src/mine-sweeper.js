const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const undef = 'undefined';
  for (let i = 0; i < matrix.length; i++) {//перебор по строкам
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {//и столбцам
      let counter = 0;
      if ((matrix[i][j - 1] !== undef && matrix[i][j - 1] === true) ||//ищем вокруг
       (matrix[i][j + 1] !== undef && matrix[i][j + 1] === true)) ++counter;
      if (Array.isArray(matrix[i - 1])) {
        if ((matrix[i - 1][j] !== undef && matrix[i - 1][j] === true) ||
            (matrix[i - 1][j + 1] !== undef && matrix[i - 1][j + 1] === true) ||
            (matrix[i - 1][j - 1] !== undef && matrix[i - 1][j - 1] === true)) ++counter;
      }
      if (Array.isArray(matrix[i + 1])) {
        if ((matrix[i + 1][j] !== undef && matrix[i + 1][j] === true) ||
            (matrix[i + 1][j + 1] !== undef && matrix[i + 1][j + 1] === true) ||
            (matrix[i + 1][j - 1] !== undef && matrix[i + 1][j - 1] === true)) ++counter;
      }
      result[i][j] = counter;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};

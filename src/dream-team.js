const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arg) {
  if(!arg || !Array.isArray(arg)) return false//проверка на валидность
  const output = [];
  for(let item of arg) {//перебираем членов
    if (typeof item === 'string') {
      item = item.trim();//подрезали лишнее
      output.push(item[0].toUpperCase());//складывем первые буковки
    }
  }
  return output.sort().join('');//сортируем, склеиваем и на выход
}

module.exports = {
  createDreamTeam
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if ( !(arr instanceof Array) ) {
    throw new Error("'arr' parameter must be an instance of the Array!");//проверка на валидность
  } else if ( !arr.length ) {
    return arr;
  }
  let output = [];
  for(let i = 0; i < arr.length; i++) {//перебор
    const itemLast = output[output.length - 1];//последний элемент
    if(arr[i] === '--discard-next') {
      i++
    } else if(arr[i] === '--discard-prev'){
      if( typeof(itemLast) !== 'undefined' && arr[i-2] !== '--discard-next'){
          output.splice(output.length - 1, 1);//отрежем один
      }
    } else if(arr[i] === '--double-next'){
      if( typeof(arr[i+1]) !== 'undefined' ){
        output.push(arr[i+1]);//положим следующий
      }
    } else if(arr[i] === '--double-prev'){
      if( typeof(arr[i-1]) !== 'undefined' && arr[i-2] !== '--discard-next' ){
        output.push(arr[i-1]);
      }
    } else output.push(arr[i]);//положим текущий
  }
  return output;
}

module.exports = {
  transform
};

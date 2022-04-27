const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maximum = 0, depth = 0;
    for(let i = 0; i < arr.length; i++){//начинаем погружение
      if(Array.isArray(arr[i])){//еще не дно?
        depth = Math.max(this.calculateDepth(arr[i])) ;//тогда глубже
        maximum = maximum < depth ? depth : maximum;
      }
    }
    return ++maximum;//потому что с 0
  }
}

module.exports = {
  DepthCalculator
};

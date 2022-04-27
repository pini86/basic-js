const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(typeof(options.repeatTimes) !== 'number' || options.repeatTimes % 1 !== 0) options.repeatTimes = 1;
  if(typeof(options.additionRepeatTimes) !== 'number' || options.additionRepeatTimes % 1 !== 0) options.additionRepeatTimes = 1;
  if(!options.separator) options.separator = '+';
  if(!options.additionSeparator) options.additionSeparator  = '|';//выбираем разделитель
  let output = '';
  str = String(str);//на всякий случай
  if(!!options.addition){
    options.addition = String(options.addition);
  }
  for(let i = 0; i < options.repeatTimes; i++){//повторяем заданное число раз
    output += str;
    for(let j = 0 ; j < options.additionRepeatTimes; j++){
      if(typeof(options.addition) !== 'undefined') output += options.addition;
      if(j !== options.additionRepeatTimes - 1){
        output += options.additionSeparator;
      }
    }
    if(i !== options.repeatTimes - 1){
      output += options.separator;
    }
  }
return output;
}

module.exports = {
  repeater
};

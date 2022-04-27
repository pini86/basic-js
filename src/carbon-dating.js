const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if ((typeof sampleActivity !== "string" ) || (isNaN(sampleActivity)) ){//проверка на валидность
    return false  
  } else {
    const years = - Math.log( sampleActivity / MODERN_ACTIVITY ) * HALF_LIFE_PERIOD / Math.LN2;//математика
    return ((Math.ceil(years) !== Infinity) && (Math.ceil(years) > 0)) ? Math.ceil(years) : false
  }
}

module.exports = {
  dateSample
};

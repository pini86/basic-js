const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let setmax=(s1.length>=s2.length)?[...s1]:[...s2];//слово подлиннее
  let setmin=(s2.length>s1.length)?[...s1]:[...s2];//слово покороче
  return setmin.reduce((prev,item)=>{  //одно значение на основе массива покороче
     if (setmax.indexOf(item)!=-1){    //если очередной элемент есть в длинном массиве
       setmax.splice(setmax.indexOf(item),1); //то вырезаем его оттуда, чтобы не считать его еще раз
       return ++prev;  //возвращаем увеличенный счетчик общих букв
       } else return prev},0)  //иначе просто возвращаем
}

module.exports = {
  getCommonCharacterCount
};

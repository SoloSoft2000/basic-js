const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let resArr = []
  let sN =  String(n).split('');
  for(let i=0; i<sN.length; i++) {
      let newNum = String(n).split('')
      newNum.splice(i, 1)
      resArr.push(Number(newNum.join('')))
  }
  return Math.max(...resArr)
}

module.exports = {
  deleteDigit
};

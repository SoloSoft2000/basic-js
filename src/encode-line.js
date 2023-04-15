const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 0;
  str.split('').forEach(char=>{
      if(!res.length || char!=res.slice(-1)) {
          res += char;
          count = 1;
      } else {
          count++;
          let tmpRes;
          if(count === 2) {
              tmpRes = res.slice(0, -1)
          } else {
              tmpRes = res.slice(0, -2)
          }
          res = `${tmpRes}${count}${char}`
      }
  })
  return res;
}

module.exports = {
  encodeLine
};

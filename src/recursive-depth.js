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
    if(!Array.isArray(arr)) {
      console.log('not arr', arr);
      return 0;
    }
    let filterArr = arr.filter(item=>Array.isArray(item));
    if(filterArr.length) {
      return 1 + this.calculateDepth([].concat(...filterArr))
    } else {
      return 1
    }
  }
}

module.exports = {
  DepthCalculator
};

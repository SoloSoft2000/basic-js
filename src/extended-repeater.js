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
  const repStr = (strChange, count, strAdd ) => {
    let resStr = ''
    for(let i=0;i<count;i++) {
      resStr += String(strChange)
      if(i<(count-1)) {
        resStr += strAdd;
      }
    }
    return resStr;
  }

  let ourString = String(str)
  if(options.additionRepeatTimes) { 
    ourString += repStr(options.addition, options.additionRepeatTimes, (options.additionSeparator || '|') )
  } else {
    if(options.addition) 
      ourString += repStr(options.addition, 1, (options.additionSeparator || '|') )
  }
  let result = ourString;
  if(options.repeatTimes) {
    result = repStr(result, options.repeatTimes, (options.separator || '+'))
  }
  return result;
}

module.exports = {
  repeater
};

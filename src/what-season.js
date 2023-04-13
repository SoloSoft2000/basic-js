const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date == undefined) 
    return 'Unable to determine the time of year!'
  if(date instanceof Date) {
    try {
      month = date.getMonth(); 
      year = date.getFullYear();
      day = date.getDate();
      tmp = new Date(date);
      if(tmp.getMonth() == month && tmp.getFullYear() == year && tmp.getDate() == day)
        return month>1 && month<5 ? 'spring' : 
            month>4 && month<8 ? 'summer' :
            month>7 && month<11 ? 'autumn' : 'winter'
      else 
      throw new NotImplementedError('Invalid date!');  
    } catch {
      throw new NotImplementedError('Invalid date!');
    }
  }
  throw new NotImplementedError('Invalid date!');
  //return 'Invalid date!'
}

module.exports = {
  getSeason
};

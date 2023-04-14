const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
      this.isDirect = direct;
      this.FIRST_CHAR = 'A'.charCodeAt(0);
      this.SHIFT_NUMBER = 26;
  }


  encrypt(stringFrom, stringKey) {
    if(!stringFrom || !stringKey) {
      throw new Error('Incorrect arguments!')
    }
    let stringTo = '';
    let j = 0;
    for(let i=0; i<stringFrom.length; i++) {
      let shift = stringKey.toUpperCase().charCodeAt(j) 
      let char = stringFrom.toUpperCase().charCodeAt(i) 
      if(char>=65 && char<(65+26)) {
          let newChar = String.fromCharCode( ((shift + char) % 26)+65);
          stringTo += newChar;
          j++;
          if(j==stringKey.length) j=0;
      } else {
          stringTo += stringFrom[i]
      }
    }
    return this.isDirect ? stringTo : stringTo.split("").reverse().join("");
  }

  decrypt(stringFrom, stringKey) {
    if(!stringFrom || !stringKey) {
      throw new Error('Incorrect arguments!')
    }
      let stringTo = '';
      let j = 0;
      for(let i=0; i<stringFrom.length; i++) {
        let shift = stringKey.toUpperCase().charCodeAt(j) 
        let char = stringFrom.toUpperCase().charCodeAt(i) 
        if(char>=65 && char<(65+26)) {
            let diff = (char-shift) < 0 ? (26 + (char-shift)) : (char-shift)
            let newChar = String.fromCharCode( (diff % 26)+65);
            stringTo += newChar;
            j++;
            if(j==stringKey.length) j=0;
        } else {
            stringTo += stringFrom[i]
        }
      }
      return this.isDirect ? stringTo : stringTo.split("").reverse().join("");
  }
}


module.exports = {
  VigenereCipheringMachine
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resApp = []
  let rows = matrix.length;
  let cols = matrix[0].length;
  for(let row = 0; row<rows; row++) {
      let rowArr = []
      for(let col = 0; col<cols; col++) {
          rowArr.push(0)
      }
      resApp.push(rowArr)
  }

  for(let row = 0; row<rows; row++) {
      for(let col = 0; col<cols; col++) {
          if(matrix[row][col]) {
              resApp[row][col] = -1; // есть мина
              prevCol = (col-1)<=0 ? 0 : (col-1)
              nextCol = (col+1)==cols ? col : (col+1)
              prevRow = (row-1)<=0 ? 0 : (row-1)
              nextRow = (row+1)==rows ? row : (row+1)
              for(let trow = prevRow; trow<=nextRow; trow++) {
                  for(let tcol = prevCol; tcol<=nextCol; tcol++) {
                      if(resApp[trow][tcol]!=-1) {
                          resApp[trow][tcol]++
                      }
                  }
              }
          }
      }
  }

  for(let row = 0; row<rows; row++) {
      for(let col = 0; col<cols; col++) {
          if(resApp[row][col]==-1)
              resApp[row][col] = 1;
      }
  }
  return resApp

}

module.exports = {
  minesweeper
};

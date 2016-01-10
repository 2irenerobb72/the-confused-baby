'use strict'
import storage from './storage'
import R from 'ramda'
import board from './board'

const makeMove = (board, piece, from, to) => {
  piece = board[from[0]][from[1]]
  return legalMove(board, piece, from, to)
}

const legalMove = (board, piece, from, to) => {
  const tryTo = checkIfOccupied(board, to)
  if (tryTo && tryTo === piece[0]) {
    return board
  } else {
    board[from[0]][from[1]] = 'x'
    return placePiece(board, piece, to)
  }
}

const placePiece = (board, piece, to) => {
  board[to[0]][to[1]] = piece
  return board
}

const checkIfOccupied = (board, place) => {
  return board[place[0]][place[1]] === 'x' ? false : board[place[0]][place[1]][0]
}

const checkHorizontal = (board, from, to) => {
  for (let i = from[1]+1; i < to[1]; i++) {
    if (board[from[0]][i] != 'x'){
      return false
    }
  }
  return true
}

const checkVerticle = (board) => {
  return(checkHorrizontal(transpose(board)))
}

var transpose = a => {
  return R.map(c => {
    return R.map(r => {
      return r[c];
    } ,a);
  }, R.keys(a[0]));
}

const checkLeftDiagonal = (board, from, to) => {
    var diag1 = [], diag2 = [], reversed, row
    for (let x = array[0].length - 1; x >= 0; x--) {
        row = 0
        reversed = []
        for (let z = x; z < array[0].length && row < 8; z++){
            reversed.push(array[row][z])
            row++
        }
        diagArray1.push(reversed)
    }
    for (let x = 8; x >= 0; x--) {
        row = 7
        reversed = []
        for (let z = x; z >= 0 && row >= 0; z--) {
            reversed.push(array[row][z])
            row--
        }
        diagArray2.push(reversed.reverse())
    }
    return R.union(diagArray1, diagArray2)
}

const checkRightDiagonal = (board, from, to) => {
    var diagArray1 = [], diagArray2 = [], reversed, row
    for (let x = 0; x < array[0].length; x++) {
        row = 0
        reversed = []
        for (let z = x; z >= 0 && row < 8; z--){
            reversed.push(array[row][z])
            row++
        }
        diagArray1.push(reversed)
    }
    for (let x = 0; x < array[0].length; x++) {
        row = 7
        reversed = []
        for (let z = x; z < array[0].length && row >= 0; z++) {
            reversed.push(array[row][z])
            row--
        }
        diagArray2.push(reversed.reverse())
    }
    return R.union(diagArray1, diagArray2)
}
const checkRoute = (board, place, to) => {

}

export { makeMove }

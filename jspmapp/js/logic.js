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
  for (let x = from[1]+1; x < to[1] ; x--) {
    if(board[from[0]][i] != 'x')
    for (let z = x; z ; z++) {
    }
  }
  for (let x = 8; x >= 0; x-- ) {
    for (let z = x; z >= 0; z--) {
    }
  }
}

const checkRightDiagonal = (board, from, to) => {
  for (let x = 0; x ; x++) {
    for (let z = x; z >= 0 ; z--) {

    }
  }
  for (let x = 0; x ; x++) {
    for (let z = x; z ; z++) {
    }
  }
}

const checkRoute = (board, place, to) => {

}

export { makeMove }

'use strict'
const R = require('ramda')


const buildBoard = () => {
  const initial = new Array(8).fill('')
  const board = initial.map((cell) => {
    return new Array(8).fill('   ')
  })
  return board
}




const makeFrontRow = (board, color) => {
  const arrayOfPawns = [color + 'Pn', color + 'Pn', color + 'Pn', color + 'Pn', color + 'Pn', color + 'Pn', color + 'Pn', color + 'Pn']
  const rowToFill = color === 'W' ? 6 : 1
  for (let i in board[rowToFill]) {
    board[rowToFill][i] = arrayOfPawns[i]
  }
  return board
}

const makeBackRow = (board, color) => {
  const arrayOfPieces = [color + 'Rk', color + 'Kt', color + 'Bp', color + 'Qn', color + 'Kg', color + 'Bp', color + 'Kt', color + 'Rk']
  const rowToFill = color === 'W' ? 7 : 0
  for (let i in board[rowToFill]) {
    board[rowToFill][i] = arrayOfPieces[i]
  }
  return board
}

const makeStartingBoard = (board) => {
  board = makeFrontRow(board, 'W')
  board = makeFrontRow(board, 'B')
  board = makeBackRow(board, 'W')
  board = makeBackRow(board, 'B')
  return board
}

console.log(makeStartingBoard(buildBoard()))


// var pieces = {
//   NONE : {name: "None", code: ""}
//   WHITE_KING : {name: "White King", code: "&#9812;"}
//   WHITE_QUEEN : {name: "White Queen", code: "&#9813;"}
//   WHITE_ROOK : {name: "White Rook", code: "&#9814;"}
//   WHITE_BISHOP: {name: "White Bishop", code: "&#9815;"}
//   WHITE_KNIGHT : {name: "White Knight", code: "&#9816;"}
//   WHITE_PAWN : {name: "White Pawn", code: "&#9817;"}
//   BLACK_KING : {name: "Black King", code: "&#9818;"}
//   BLACK_QUEEN : {name: "Black Queen", code: "&#9819;"}
//   BLACK_ROOK : {name: "Black Rook", code: "&#9820;"}
//   BLACK_BISHOP : {name: "Black Bishop", code: "&#9821;"}
//   BLACK_KNIGHT : {name: "Black Knight", code: "&#9822;"}
//   BLACK_PAWN : {name: "Black Pawn", code: "&#9823;"}
//
// }

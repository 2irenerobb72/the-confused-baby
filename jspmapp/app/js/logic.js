'use strict'
const storage = require('./storage')
const R = require('ramda')
const board = require('./board')


const makeMove = (board, piece, from, to) => {
  piece = board[from[0]][from[1]]
  board[from[0]][from[1]] = '   '
  return placePiece(board, piece, to)
}

const placePiece = (board, piece, to) => {
  board[to[0]][to[1]] = piece
  return board
}

const checkIfOccupied = (board, place) => {
  return board[place[0]][place[1]] = '   ' ? true : false
}

const testPawn = (board, from, to) => {
  let makeMove = [from[1]][from[0]]
  return board
}

const testRook = (board, place) => {
  return ? true : false
  }

const testKnight = () => {
  return board[place[0]]
}

const testBishop = () => {

}

const testQueen = () => {

}

const testKing = () => {

}

// const checkRoute = (board, place, from, to) => {
//   return board[place[2]][place[2]] = '   ' && board[from[2]][from[0]] = piece ? true : false
// }

// const testForHomeRow = (board, place, piece) => {
//  return board[place[0][place[0]] = '   ' || board[place[8]][place[8]] = piece ? true : false
// }

module.exports = {
  makeMove: makeMove,
  placePiece: placePiece,
  checkIfOccupied: checkIfOccupied,
  testPawn: testPawn
}

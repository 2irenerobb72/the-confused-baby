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

const checkIfOccupied = (board, piece, otherPiece, to, from) => {
  piece = board[from[0]][from[0]]
  board[from[0]][from[0]] = '   '
  otherPiece = board[from[0]][from[2]]
  board[from[0]][from[2]] = '   '
  return placePiece(board, piece, to)
}

module.exports = {
  makeMove: makeMove,
  placePiece: placePiece
}


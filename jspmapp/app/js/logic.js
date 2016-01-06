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
  return board.makeStartingBoard(place === [0,1]) || board.makeStartingBoard(place !== [0,1]) ? true : false
}

const checkRoute = (board, place) => {
  return board.makeStartingBoard(place) || board.makeStartingBoard(place) ? true : false
}

const testForHomeRow = (board, place, piece) => {
  return board.makeStartingBoard(place === [0,0]) || board.makeStartingBoard(place === [8,8]) ? true : false
}

module.exports = {
  makeMove: makeMove,
  placePiece: placePiece
}

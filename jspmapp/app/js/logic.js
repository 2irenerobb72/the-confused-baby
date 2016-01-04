'use strict'
const storage = require('./storage')
const R = require('ramda')
const board = require('./lib/board')


const makeMove = (board, piece, to, from) => {
  if (board.length === 8) {
  }
  return piece.from(row === 0, col === 0)piece.to(row === 1, col === 1)
}

const checkIfOccupied = () => {
}

const findEmptySpace = (board) => {
}

module.exports = {
  makeMove: makeMove
}

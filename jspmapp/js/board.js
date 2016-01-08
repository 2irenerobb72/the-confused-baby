'use strict'
import R from 'ramda'
import $ from 'jquery'


const buildBoard = () => {
  const initial = new Array(8).fill('')
  const board = initial.map((cell) => {
    return new Array(8).fill('x')
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

const renderBoard = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      $('#board').append('<div class="' + board[i][j] + '">' + board[i][j] + '')
    }
  }
}

export {buildBoard, makeStartingBoard, renderBoard}

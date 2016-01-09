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
      if (board[i][j] === 'x') { board[i][j] = 'empty'}
      $('#board').append('<div class="square"><div class="' + board[i][j]+ '">' + pieces[board[i][j]].code + '</div></div>')
      $('.square').last().attr('data-row', i).attr('data-col', j)
    }
  }
}

const pieces = {
  empty : {name: "None", code: "O"},
  WKg : {name: "White King", code: "&#9812;"},
  WQn : {name: "White Queen", code: "&#9813;"},
  WRk : {name: "White Rook", code: "&#9814;"},
  WBp : {name: "White Bishop", code: "&#9815;"},
  WKt : {name: "White Knight", code: "&#9816;"},
  WPn : {name: "White Pawn", code: "&#9817;"},
  BKg : {name: "Black King", code: "&#9818;"},
  BQn : {name: "Black Queen", code: "&#9819;"},
  BRk : {name: "Black Rook", code: "&#9820;"},
  BBp : {name: "Black Bishop", code: "&#9821;"},
  BKt : {name: "Black Knight", code: "&#9822;"},
  BPn : {name: "Black Pawn", code: "&#9823;"}
 }


export {buildBoard, makeStartingBoard, renderBoard}

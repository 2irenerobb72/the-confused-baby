'use strict'
const R = require('ramda')

const createEmptyBoard = () => {
  let arr = new Array(8)
  for(let i = 0; i < 8; i++) {
    arr[i] = new Array(8)
  }
  return arr
}

var board = ChessBoard('board')
var board = ChessBoard('board', 'start')

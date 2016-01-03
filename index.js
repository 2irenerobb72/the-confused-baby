// 'use strict'
// const R = require('ramda')


// const buildBoard = () => {
//   const initial = new Array(8).fill('')
//   const board = initial.map((cell) => {
//     return new Array(8).fill('   ')
//   })
//   return board
// }




// const makeFrontRow = (board, color) => {
//   const arrayOfPawns = [color + 'Pn', color + 'Pn', color + 'Pn', color + 'Pn', color + 'Pn', color + 'Pn', color + 'Pn', color + 'Pn']
//   const rowToFill = color === 'W' ? 6 : 1
//   for (let i in board[rowToFill]) {
//     board[rowToFill][i] = arrayOfPawns[i]
//   }
//   return board
// }

// const makeBackRow = (board, color) => {
//   const arrayOfPieces = [color + 'Rk', color + 'Kt', color + 'Bp', color + 'Qn', color + 'Kg', color + 'Bp', color + 'Kt', color + 'Rk']
//   const rowToFill = color === 'W' ? 7 : 0
//   for (let i in board[rowToFill]) {
//     board[rowToFill][i] = arrayOfPieces[i]
//   }
//   return board
// }

// const makeStartingBoard = (board) => {
//   board = makeFrontRow(board, 'W')
//   board = makeFrontRow(board, 'B')
//   board = makeBackRow(board, 'W')
//   board = makeBackRow(board, 'B')
//   return board
// }



// const movePawn = () => {

// }

// const moveRook = () => {

// }

// const moveKnight = () => {

// }

// const moveBishop = () => {

// }

// const moveQueen = () => {

// }

// const moveKing = () => {

// }





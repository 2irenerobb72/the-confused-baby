'use strict'
import storage from './storage'
import R from 'ramda'
import board from './board'

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

const testPawn = (board, piece, from, to) => {
  board[to[0]][to[1]] = piece
  board[from[0]][from[1]] = '   '
  return board
}

const testRook = (board, piece, from, to) => {
  board[to[0]][to[1]] = piece
  board[from[0]][from[1]] = '   '
  return board
  }

const testKnight = (board, piece, from, to) => {
  board[to[0]][to[1]] = piece
  board[from[0]][from[1]] = '   '
  return board
}

const testBishop = (board, piece, from, to) => {
  board[to[0]][to[1]] = piece
  board[from[0]][from[1]] = '   '
  return board
}

const testQueen = () => {
  board[to[0]][to[1]] = piece
  board[from[0]][from[1]] = '   '
  return board
}

const testKing = () => {
  board[to[0]][to[1]] = piece
  board[from[0]][from[1]] = '   '
  return board
}

const checkRoute = (board, place, to) => {
  board[from[0]][from][1]] = piece
  return placePiece(board, piece, to)
}

const testForHomeRow = (board, piece, to) => {
  board[to[0]][to[1]] = piece
  return board
}

module.exports = {
  makeMove: makeMove,
  placePiece: placePiece,
  checkIfOccupied: checkIfOccupied,
  testForHomeRow: testForHomeRow,
  checkRoute: checkRoute,
  testPawn: testPawn,
  testRook: testRook,
  testBishop: testBishop,
  testQueen: testQueen,
  testKing: testKing
}

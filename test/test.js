'use strict'
const expect = require('chai').expect
const board = require('../jspmapp/app/js/board')
const logic = require('../jspmapp/app/js/logic')

let currentBoard = board.buildBoard()

describe('loads board', () => {
  it('Loads board with 8 rows', () => {
    expect(board.makeStartingBoard(board.buildBoard()).length).to.equal(8)
  })
  it('Loads board with 8 columns', () => {
    expect(board.makeStartingBoard(board.buildBoard()).length).to.equal(8)
  })
})

describe('place piece', () => {
  it('places piece on square', () => {
    currentBoard = board.buildBoard()
    expect(logic.placePiece(currentBoard, 'WPn', [2,3])[2][3]).to.equal('WPn')
  })
})

describe('moves piece', () => {
  it('moves piece up one column', () => {
    currentBoard = logic.placePiece(board.buildBoard(), 'WPn', [0,0])
    expect(logic.makeMove(currentBoard, 'WPn', [0,0], [1,0])[1][0]).to.equal('WPn')
    })
  xit('does not move piece up one column', () => {
  expect(board.makeStartingBoard())
  })
})
//
// describe('checks if square is occupied', () => {
//   it('move piece to empty square', () => {
//     currentBoard = logic.placePiece(currentBoard, 'WPn', [0,0], [1,0])
//     expect(logic.makeMove(currentBoard, 'WPn', [0,0], [1,0])[1][0]).to.equal('WPn')
//   })
//   it('move piece to occupied square', () => {
//     currentBoard = logic.placePiece(currentBoard, 'WPn', [0,0], [1,0])
//     currentBoard = logic.placePiece(currentBoard, 'WBp', [2,0], [1,0])
//     expect(logic.makeMove(currentBoard, 'WBp', [2,0], [1,0])[1][0]).to.equal('error')
//   })
// })

describe('move piece on filled space', () => {
  it('cannot move piece on', () => {
    currentBoard = board.buildBoard()
    currentBoard = logic.placePiece(board.buildBoard(), 'WBp', [0,0])
    expect(logic.makeMove(currentBoard, 'WBp', [0,0], [0,1]))[0][1].to.equal('WBp')
    expect(logic.placePiece(currentBoard, 'WPn', [0,1]))[0][1].to.equal('WPn')
  })
})

describe('move piece with piece in way', () => {
  it('route is obstructed', () => {
    currentBoard = board.buildBoard()
    currentBoard = logic.placePiece(board.buildBoard(), 'WPn', [3,4])
    expect(logic.makeMove(currentBoard, 'WQn', [3,0], [3,6])).to.equal('retry')
    expect(logic.placePiece(currentBoard, 'WPn', ))
  })
})

describe('test if pawn is on home row', () => {
  it('pawn is on home row', ())
})

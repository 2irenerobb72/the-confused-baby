'use strict'
const expect = require('chai').expect
import {buildBoard, makeStartingBoard} from '../jspmapp/app/js/board'
import {makeMove, placePiece, checkIfOccupied} from '../jspmapp/js/logic'

let currentBoard = buildBoard()

describe('loads board', () => {
  it('Loads board with 8 rows', () => {
    expect(makeStartingBoard(buildBoard()).length).to.equal(8)
  })
  it('Loads board with 8 columns', () => {
    expect(makeStartingBoard(buildBoard()).length).to.equal(8)
  })
})

describe('place piece', () => {
  it('places piece on square', () => {
    currentBoard = buildBoard()
    expect(placePiece(currentBoard, 'WPn', [2,3])[2][3]).to.equal('WPn')
  })
})

describe('moves piece', () => {
  it('moves piece up one column', () => {
    currentBoard = placePiece(buildBoard(), 'WPn', [0,0])
    expect(makeMove(currentBoard, 'WPn', [0,0], [1,0])[1][0]).to.equal('WPn')
  })
})

describe('check if square is occupied', () => {
  it('returns true if space is occupied', () => {
    currentBoard = buildBoard()
    expect(checkIfOccupied(currentBoard, [0,1])).to.equal(true)
  })

})

describe('move piece with piece in way', () => {
  it('route is obstructed', () => {
    currentBoard = buildBoard()
    currentBoard = placePiece(buildBoard(), 'WPn', [3,4])
    expect(makeMove(currentBoard, 'WQn', [3,0], [3,6])).to.equal('retry')
    expect(placePiece(currentBoard, 'WPn', [3,4]))[3][4].to.equal('WPn')
  })
})

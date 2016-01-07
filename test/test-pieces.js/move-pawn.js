'use strict'
const expect = require('chai').expect
const board = require('../jspmapp/app/js/board')
const logic = require('../jspmapp/app/js/logic')

describe('moves pawn', () => {
  it('moves pawn in a legal way', () => {
    currentBoard = board.buildBoard()
    expect(logic.testPawn(currentBoard, 'WPn', [1,0], [2,0]))[2][0].to.equal('WPn')
  })
})




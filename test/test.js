'use strict'
const expect = require('chai').expect
const board = require('../lib/board')

describe('loads board', () => {
  it('Loads board with 8 rows', () => {
    expect(board.makeStartingBoard(board.buildBoard()).length).to.equal(8)
  })
  it('Loads board with 8 columns', () => {
    expect(board.makeStartingBoard(board.buildBoard()).length).to.equal(8)
  })
})






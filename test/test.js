'use strict'
const expect = require('chai').expect
const makeStartingBoard = require('../lib/board')


describe('loads board', () => {
  it('Loads board with 8 rows', () => {
    expect(makeStartingBoard.length).to.equal(8)
  })
  it('Loads board with 8 columns', () => {
    expect(makeStartingBoard.length).to.equal(8)
})
})

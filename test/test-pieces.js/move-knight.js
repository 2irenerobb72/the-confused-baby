'use strict'
const expect = require('chai').expect
const logic = require('../app/js/logic')
const db = require('../app/js/storage')
const overwriteDb = require('./helper').overwriteDb

describe('move Knight', (color, piece) => {
  beforeEach(() => {overwriteDb('empty')})
  xit('moves knight in a legal way', () => {
    logic.makeMove('Kt', color)
    expect(db.read().board[][])
  })
  xit('moves knight in a illegal way', () => {
    let originalBoard = db.read().board
    logic.makeMove('Kt'. color)
    expect(_.isEqual(db.read().board, originalBoard)).to.equal(true)
  })
})

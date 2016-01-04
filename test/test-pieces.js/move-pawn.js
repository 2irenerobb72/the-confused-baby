'use strict'
const expect = require('chai').expect
const logic = require('../app/js/logic')
const db = require('../app/js/storage')
const overwriteDb = require('./helper').overwriteDb

describe('moves Pawn', (color, piece) => {
  beforeEach(() => {overwriteDb('empty')})
  xit('moves pawn in a legal way', () => {
    logic.makeMove('Pn', color)
    expect(db.read().board[][])
  })
  xit('moves pawn in a illegal way', () => {
    let originalBoard = db.read().board
    logic.makeMove('Pn', color)
    expect(_.isEqual(db.read().board, originalBoard)).to.equal(true)
  })
})

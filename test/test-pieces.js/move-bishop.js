'use strict'
const expect = require('chai').expect
const logic = require('../app/js/logic')
const db = require('../app/js/storage')
const overwriteDb = require('./helper').overwriteDb


describe('move bishop', (color, piece) => {
  beforeEach(() => {overwriteDb('empty')})
  xit('moves bishop in a legal way', () => {
    logic.makeBishop('Bp', color)
    expect(db.read().board[][])
  })
  xit('move bishop in a illegal way', () => {
    let originalBoard = db.read().board
    logic.makeBishop('Bp', color)
    expect(_.isEqual(db.read().board, originalBoard)).to.equal(true)
  })
})

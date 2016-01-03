'use strict'
const expect = require('chai').expect
const logic = require('../app/js/loic')
const db = require('../app/js/storage')
const overwriteDb = require('./helper').overwriteDb

describe('moves Rook', (color, piece) => {
  beforeEach(() => {overwriteDb('empty')})
  xit('moves Rook in a legal way', () => {
    logic.makeRook('Rk', color)
    expect(db.read().board[][])
  })
  xit('moves Rook in an illegal way', () => {
    let originalBoard = db.read().board
    logic.moveRook('Rk', color)
    expect(_.isEqual(db.read().board, originalBoard).to.equal(true)
  })
})


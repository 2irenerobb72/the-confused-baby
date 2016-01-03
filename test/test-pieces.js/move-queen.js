'use strict'
const expect = require('chai').expect
const logic = require('../app/js/logic')
const db = require('../app/js/storage')
const overwriteDb = require('./helper').overwriteDb

describe('move queen', () => {
  beforeEach(() => {overwriteDb('empty')})
  xit('move queen in a legal way', () => {
    logic.makeQueen('Qn', color)
    expect(db.read().board[][])
  })
  xit('move queen in a illegal way', () => {
    let originalBoard = db.read().board
    logic.makeQueen('Qn', color)
    expect(_.isEqual(db.read().board, originalBoard)).to.equal(true)
  })
})

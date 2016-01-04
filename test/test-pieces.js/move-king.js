'use strict'
const expect = require('chai').expect
const logic = require('../app/js/storage')
const db = require('../app/js/storage')
const overwriteDb = require('./helper').overwriteDb

describe('move king', () => {
  beforeEach(() => {overwriteDb('empty')})
  xit('move king in a legal way', () => {
    logic.makeMove('Kg', color)
    expect(db.read().board[][])
  })
  xit('move king in a illegal way', () => {
    let originalBoard = db.read().board
    logic.makeMove('Kg', color)
    expect(_.isEqual(db.read().board, originalBoard)).to.equal(true)
  })
})

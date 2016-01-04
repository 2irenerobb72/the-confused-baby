'use strict'
const expect = require('chai').expect
const logic = require('../jspmapp/app/js/logic')
const db = require('../app/js/storage')
const overwriteDb = require('./helper').overwriteDb


describe('move bishop', (color, piece) => {
  beforeEach(() => {overwriteDb('empty')})
  it('moves bishop in a legal way', () => {
    logic.makeMove('Bp', color)
  })
  xit('move bishop in a illegal way', () => {
    let originalBoard = db.read().board
    logic.makeMove('Bp', color)
  })
})

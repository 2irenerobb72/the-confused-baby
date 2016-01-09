import $ from 'jquery'
import {makeStartingBoard, buildBoard, renderBoard} from './board.js'
import {makeMove} from './logic.js'

var board = makeStartingBoard(buildBoard())
renderBoard(board)



$('.square').on('click', function(e){
  console.log("hi")
  !fromSpace ? fromSpace = this : toSpace = this
  if(fromSpace && toSpace) {
    var fromCor = [parseInt($(fromSpace).attr('data-row')), parseInt($(fromSpace).attr('data-col'))]
    var toCor = [parseInt($(toSpace).attr('data-row')), parseInt($(toSpace).attr('data-col'))]
    $('#board').empty()
    board = makeMove(board, 'blah', fromCor, toCor)
    renderBoard(board)
    fromSpace = undefined
    toSpace = undefined
  }
})

let fromSpace,
    toSpace

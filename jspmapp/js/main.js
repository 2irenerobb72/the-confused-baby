import $ from 'jquery'
import {makeStartingBoard, buildBoard, renderBoard} from './board.js'
import {makeMove} from './logic.js'

//SOCKET ROOMS
const socket = io.connect('localhost:8000')
socket.emit('create', 'Lobby')
var room = $('input').data('room')
var player = new Player(room, '', '')

socket.once('connect', function () {
  if (localUser) socket.emit('newUser', localUser)

  socket.on('updateUsers', (data) => {
    $('#users').test('')
    socket.emit('join', {room: room})
  })
  socket.on('disconnect', (data) => {
    localUser = undefined$('.cust-modal').show()
  })
  socket.on('switchRoom', (room) {
    socket.emit('switchRoom', room)
  })
})


$('#new-game').on('submit', (e) => {
  e.preventDefault()
  let gameName = $('#new-game input[name=name]').val()
  $.post('http://localhost:3000/games', {name: gameName})

})

var board = makeStartingBoard(buildBoard())
renderBoard(board)

$('.btn-restart').on('click', function(e){
  board = makeStartingBoard(buildBoard())
  renderNew(board)
})

$('.square').on('click', function(e){
  !fromSpace ? fromSpace = this : toSpace = this
  if(fromSpace && toSpace) {
    var fromCor = [parseInt($(fromSpace).attr('data-row')), parseInt($(fromSpace).attr('data-col'))]
    var toCor = [parseInt($(toSpace).attr('data-row')), parseInt($(toSpace).attr('data-col'))]
    board = makeMove(board, 'blah', fromCor, toCor)
    renderNew(board)
    fromSpace = undefined
    toSpace = undefined
  }
})

const concatBoard = (board) => {
  const longBoard = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      longBoard.push(board[i][j])
    }
  }
  return longBoard
}

const renderNew = (board) => {
  board = concatBoard(board)
  $.each($('.square'), function(index) {
    if (board[index] === 'x') {board[index] = 'empty'}
    $(this).find('div').removeClass().addClass(board[index]).html(pieces[board[index]].code)
  })
}

const pieces = {
  empty : {name: "None", code: "O"},
  WKg : {name: "White King", code: "&#9812;"},
  WQn : {name: "White Queen", code: "&#9813;"},
  WRk : {name: "White Rook", code: "&#9814;"},
  WBp : {name: "White Bishop", code: "&#9815;"},
  WKt : {name: "White Knight", code: "&#9816;"},
  WPn : {name: "White Pawn", code: "&#9817;"},
  BKg : {name: "Black King", code: "&#9818;"},
  BQn : {name: "Black Queen", code: "&#9819;"},
  BRk : {name: "Black Rook", code: "&#9820;"},
  BBp : {name: "Black Bishop", code: "&#9821;"},
  BKt : {name: "Black Knight", code: "&#9822;"},
  BPn : {name: "Black Pawn", code: "&#9823;"}
 }

 let fromSpace,
     toSpace

'use strict'
const R = require('ramda')

const buildBoard = str => {
  let row = []
  let size = 8
  do {
    row.push(str.substring(0, size).split(''))
  } while((str = str.substring(size, str.length)) !== "")
  return row
}

const MakeFrontRow = (piece, board, color) => {

}

const makeBackRow = (piece, board, color) => {
  return R.zip('Rk, Kt, Bp, Qn, Kg, Bp, Kt, Rk')
  R.map(() color, new Str(8).split())
}



const makeStartingBoard = (board) => {

}


// var pieces = {
//   NONE : {name: "None", code: ""}
//   WHITE_KING : {name: "White King", code: "&#9812;"}
//   WHITE_QUEEN : {name: "White Queen", code: "&#9813;"}
//   WHITE_ROOK : {name: "White Rook", code: "&#9814;"}
//   WHITE_BISHOP: {name: "White Bishop", code: "&#9815;"}
//   WHITE_KNIGHT : {name: "White Knight", code: "&#9816;"}
//   WHITE_PAWN : {name: "White Pawn", code: "&#9817;"}
//   BLACK_KING : {name: "Black King", code: "&#9818;"}
//   BLACK_QUEEN : {name: "Black Queen", code: "&#9819;"}
//   BLACK_ROOK : {name: "Black Rook", code: "&#9820;"}
//   BLACK_BISHOP : {name: "Black Bishop", code: "&#9821;"}
//   BLACK_KNIGHT : {name: "Black Knight", code: "&#9822;"}
//   BLACK_PAWN : {name: "Black Pawn", code: "&#9823;"}
//
// }

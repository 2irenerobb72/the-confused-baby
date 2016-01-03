const createMove = (move, piece) => {
  return {
    move: move,
    piece: piece
  }
}

module.exports = {
  createMove: createMove
}

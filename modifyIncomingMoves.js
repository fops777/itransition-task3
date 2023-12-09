function modifyMoves(params) {
  let moves = [];

  params.forEach((value, index) => {
    let newObj = { [index + 1]: value };
    moves.push(newObj);
  });
  return moves;
}

module.exports = { modifyMoves };

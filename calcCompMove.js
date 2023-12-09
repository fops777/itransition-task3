function compMove(moves) {
  let random = Math.floor(Math.random() * moves.length + 1);

  let found = moves.find((obj) => Object.keys(obj)[0] == random);
  compMessage = Object.values(found)[0];
  return compMessage;
}

module.exports = { compMove };

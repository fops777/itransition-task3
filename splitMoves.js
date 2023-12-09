function splitMovesAroundElement(moves, myMove) {
  let prevHalf = [];
  let nextHalf = [];

  // Находим индекс элемента myMove
  const pivotIndex = moves.findIndex((obj) => Object.values(obj)[0] === myMove);

  let length = moves.length;

  // Распределяем половину след. эл-ов по кругу в массив nextHalf
  for (
    let i = (pivotIndex + 1) % length;
    i !== pivotIndex;
    i = (i + 1) % length
  ) {
    nextHalf.push(moves[i]);
  }

  // Распределяем половину пред. эл-ов по кругу в массив prevHalf
  for (
    let i = (pivotIndex - 1 + length) % length;
    i !== pivotIndex;
    i = (i - 1 + length) % length
  ) {
    prevHalf.push(moves[i]);
  }

  let nextHalfEls = nextHalf.length / 2;
  nextHalf.splice(nextHalfEls);

  let prevHalfEls = prevHalf.length / 2;
  prevHalf.splice(prevHalfEls);

  // Смотря на то как ходил робот, выводить сообщение о победе, проигрыше или ничьей
  if (nextHalf.some((item) => Object.values(item)[0] === compMessage)) {
    console.log("Ohh, you lose..");
  } else if (prevHalf.some((item) => Object.values(item)[0] === compMessage)) {
    console.log("YOU WIN!");
  } else if (myMove === compMessage) {
    console.log("Draw, try once again!");
  }
}

module.exports = { splitMovesAroundElement };

const Table = require("cli-table");
let words = [];

function generateTable(moves) {
  moves.forEach((el) => words.push(Object.values(el)[0]));

  const table = new Table({
    head: ["PC\\User >", ...words],
  });

  const keys = Object.keys(moves);

  for (let key of keys) {
    // Заполнение move-ов (красное)
    const row = { [words[key]]: [] };

    // заполнение самой таблицы
    for (let k of keys) {
      if (key === k) {
        row[words[key]].push("Draw");
      } else if ((parseInt(key) + 1) % keys.length === parseInt(k)) {
        row[words[key]].push("Win");
      } else row[words[key]].push("Lose");
    }

    table.push(row);
  }
  console.log(table.toString());
}

module.exports = { generateTable };

function printMenu(moves) {
  console.log("Available moves:");
  moves.forEach((obj) => {
    let key = Object.keys(obj)[0]; // Получить ключ объекта
    let value = obj[key]; // Получить значение объекта
    console.log(`${key} - ${value}`); // Вывести в формате "ключ - значение"
  });
  console.log("0 - exit");
  console.log("? - help");
}

module.exports = { printMenu };

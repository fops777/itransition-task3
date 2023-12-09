function checkIncomingArgs(...params) {
  let _isError = false;
  let isError = true;
  function printError(err) {
    console.log(err);
    _isError = true;
    // return;
  }

  // Проверка params на уникальность эл-ов
  const set = new Set();
  for (const element of params) {
    if (set.has(element)) {
      printError("Sorry, should be only uniq moves");
    }
    set.add(element);
  }
  if (!params.length) {
    printError("Sorry, you should to pass moves here(rock paper scissors).");
  } else if (params.length === 1) {
    printError("Sorry, quantity of arguments should be minimum 3.");
  } else if (params.length % 2 === 0) {
    printError("Sorry, quantity of arguments should be odd(3, 5, 7, 9, ...)");
  }

  return _isError ? isError : false;
}

module.exports = { checkIncomingArgs };

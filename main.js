let { checkIncomingArgs } = require("./incomingArgsCheck.js");
let { modifyMoves } = require("./modifyIncomingMoves.js");
let { keyGenerate } = require("./keyGenerate.js");
let { compMove } = require("./calcCompMove.js");
let { splitMovesAroundElement } = require("./splitMoves.js");
let { generateTable } = require("./generateTable.js");
let { calculateHMAC } = require("./calcHmac.js");
let { printMenu } = require("./printAvailableMoves.js");

function game(...params) {
  // Checking the correctness of passed parameters
  let isError = checkIncomingArgs(...params);

  // If passed args isn't correct stop app.
  if (isError) return;

  // From ['...', '...', '...'] to [{...}, {...}, {...},]
  let moves = modifyMoves(params);

  // Generate key
  let key = keyGenerate();

  // Calculate computer move
  let compMessage = compMove(moves);

  // Calculate and Print HMAC
  calculateHMAC(key, compMessage);

  // Print Menu
  printMenu(moves);

  // Ask for user move
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const message = "Enter your move: ";
  (function askQuestion() {
    rl.question(message, (answer) => {
      rl.setPrompt("Your move: ");

      if (answer === "0") return rl.close();
      if (answer === "?") {
        generateTable(moves);
        return rl.close();
      }
      let found = moves.find((obj) => Object.keys(obj)[0] == answer);

      if (!found) {
        printMenu(moves);
        askQuestion();
      } else {
        rl.prompt(true);
        let myMoveWord = Object.values(found)[0];
        rl.write(myMoveWord + "\n");
        console.log("Computer move: ", compMessage);
        splitMovesAroundElement(moves, myMoveWord);
        console.log("key: ", key);
        rl.close();
      }
    });
  })();
}

const args = process.argv.slice(2);
game(...args);

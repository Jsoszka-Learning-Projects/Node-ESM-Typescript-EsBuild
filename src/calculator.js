import { add } from "./operations/add.js";
import { subtract } from "./operations/subtract.js";
import colors from "@colors/colors"

/**@type {Array<string>} */
const args = process.argv.slice(2);
const [operation, xStr, yStr] = args;

const x = Number.parseInt(xStr);
const y = Number.parseInt(yStr);

switch (operation) {
  case "add":
    print(add(x, y));

    break;
  case "subtract":
    print(subtract(x, y));
    break;
  default:
    printError(`${operation} is not a supported operation`);
}

function print(message){
    console.log(colors.green(message))
}

function printError(message){
    console.log(colors.red(message))
}

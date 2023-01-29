import { add } from "./operations/add.js";
import { subtract } from "./operations/subtract.js";
import colors from "@colors/colors"


const args = process.argv.slice(2);
const [operation, xStr, yStr] = args;

const x = Number.parseInt(xStr);
const y = Number.parseInt(yStr);

switch (operation) {
  case "add":
    print(await add(x, y).toString());

    break;
  case "subtract":
    print(subtract(x, y).toString());
    break;
  default:
    printError(`${operation} is not a supported operation`);
}

export function print(message: string){
    console.log(colors.green(message))
}

export function printError(message: string){
    console.log(colors.red(message))
}

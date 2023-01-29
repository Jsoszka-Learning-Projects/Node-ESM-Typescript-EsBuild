import {add} from "./operations/add.js"
import { subtract } from "./operations/subtract.js"

/**@type {Array<string>} */
const args = (process.argv.slice(2))

console.log(args)

const [operation, xStr, yStr] = args

const x = Number.parseInt(xStr)
const y = Number.parseInt(yStr)

switch(operation){
    case "add":
        console.log(add(x,y))

        break
    case "subtract":
        console.log(subtract(x,y))
        break
    default:
        console.log(`${operation} is not a supported operation`)
}




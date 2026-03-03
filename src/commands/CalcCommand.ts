import { BaseCommand } from "../BaseCommand";
import chalk from "chalk";

export class CalcCommand extends BaseCommand {
  readonly name = "calc";
  readonly description = "Simple calculator";
  readonly usage = "<num1> <operator> <num2>";

  run(args: string[]): void {
    if (args.length < 3) {
      console.error(chalk.red("Error: Missing arguments."));
      console.log(chalk.gray(`Usage: yashcli ${this.helpLine()}`));
      return;
    }

    const [aRaw, op, bRaw] = args;
    const a = parseFloat(aRaw);
    const b = parseFloat(bRaw);

    if (isNaN(a) || isNaN(b)) {
      console.error(chalk.red("Error: Numbers must be valid."));
      return;
    }

    let result: number;
    switch (op) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        if (b === 0) {
          console.error(chalk.red("Error: Division by zero."));
          return;
        }
        result = a / b;
        break;
      default:
        console.error(chalk.red(`Error: Unsupported operator '${op}'. Use +, -, *, /.`));
        return;
    }

    console.log(chalk.blue(`${a} ${op} ${b} = ${result}`));
  }
}

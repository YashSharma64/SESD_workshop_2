import { BaseCommand } from "../BaseCommand";
import chalk from "chalk";

export class GreetCommand extends BaseCommand {
  readonly name = "greet";
  readonly description = "Greet a user by name";
  readonly usage = "<name>";

  run(args: string[]): void {
    if (args.length === 0) {
      console.error(chalk.red("Error: Missing name."));
      console.log(chalk.gray(`Usage: yashcli ${this.helpLine()}`));
      return;
    }

    const name = args[0];
    console.log(chalk.green(`Hello, ${name}! 👋`));
  }
}

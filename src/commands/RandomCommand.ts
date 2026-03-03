import { BaseCommand } from "../BaseCommand";
import chalk from "chalk";

export class RandomCommand extends BaseCommand {
  readonly name = "random";
  readonly description = "Generate a random number";

  run(): void {
    const rand = Math.floor(Math.random() * 1000);
    console.log(chalk.magenta(`Random number: ${rand}`));
  }
}

import { BaseCommand } from "../BaseCommand";
import chalk from "chalk";

export class TimeCommand extends BaseCommand {
  readonly name = "time";
  readonly description = "Show current time";

  run(): void {
    const now = new Date();
    const formatted = now.toLocaleString();
    console.log(chalk.cyan(`Current time: ${formatted}`));
  }
}

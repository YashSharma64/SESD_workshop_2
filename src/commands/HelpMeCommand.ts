import { BaseCommand } from "../BaseCommand";
import chalk from "chalk";

export class HelpMeCommand extends BaseCommand {
  readonly name = "helpme";
  readonly description = "Custom help for yashcli";

  run(): void {
    console.log(chalk.bold.blue("yashcli — Simple OOP-based CLI"));
    console.log("");
    console.log(chalk.gray("Basic commands:"));
    console.log(chalk.cyan("  greet <name>   Greet a user"));
    console.log(chalk.cyan("  time           Show current time"));
    console.log(chalk.cyan("  random         Generate a random number"));
    console.log(chalk.cyan("  calc <a> <op> <b>  Simple calculator (+, -, *, /)"));
    console.log(chalk.cyan("  uuid           Generate a UUID"));
    console.log(chalk.cyan("  fileinfo <file>  Show file info"));
    console.log("");
    console.log(chalk.gray("API commands (coming soon):"));
    console.log(chalk.cyan("  github <user>  GitHub user info"));
    console.log(chalk.cyan("  weather <city> Weather info"));
    console.log(chalk.cyan("  quote          Random quote"));
    console.log("");
    console.log(chalk.gray("Global flags:"));
    console.log(chalk.cyan("  --help         Show help"));
    console.log(chalk.cyan("  --version      Show version"));
  }
}

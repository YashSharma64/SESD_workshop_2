import { BaseCommand } from "../BaseCommand";
import chalk from "chalk";
import { statSync } from "fs";

export class FileInfoCommand extends BaseCommand {
  readonly name = "fileinfo";
  readonly description = "Show file information";
  readonly usage = "<filename>";

  run(args: string[]): void {
    if (args.length === 0) {
      console.error(chalk.red("Error: Missing filename."));
      console.log(chalk.gray(`Usage: yashcli ${this.helpLine()}`));
      return;
    }

    const filename = args[0];
    try {
      const stats = statSync(filename);
      console.log(chalk.cyan(`File: ${filename}`));
      console.log(chalk.gray(`Size: ${stats.size} bytes`));
      console.log(chalk.gray(`Created: ${stats.birthtime.toLocaleString()}`));
      console.log(chalk.gray(`Modified: ${stats.mtime.toLocaleString()}`));
    } catch {
      console.error(chalk.red(`Error: File '${filename}' not found.`));
    }
  }
}

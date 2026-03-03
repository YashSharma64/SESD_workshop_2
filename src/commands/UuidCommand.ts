import { BaseCommand } from "../BaseCommand";
import chalk from "chalk";
import { randomUUID } from "crypto";

export class UuidCommand extends BaseCommand {
  readonly name = "uuid";
  readonly description = "Generate a unique id";

  run(): void {
    const id = randomUUID();
    console.log(chalk.yellow(`UUID: ${id}`));
  }
}

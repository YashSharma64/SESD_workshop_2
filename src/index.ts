import { Command } from "commander";
import chalk from "chalk";
import { GreetCommand } from "./commands/GreetCommand";
import { TimeCommand } from "./commands/TimeCommand";
import { RandomCommand } from "./commands/RandomCommand";

const greet = new GreetCommand();
const time = new TimeCommand();
const random = new RandomCommand();

const program = new Command();

program
  .name("yashcli")
  .description("A simple OOP-based CLI built with Node.js + TypeScript")
  .version("0.0.0");

program
  .command(greet.name)
  .description(greet.description)
  .argument("<name>", "Name to greet")
  .action((name) => greet.run([name]));

program
  .command(time.name)
  .description(time.description)
  .action(() => time.run());

program
  .command(random.name)
  .description(random.description)
  .action(() => random.run());

program.addHelpText(
  "after",
  `\n${chalk.gray("Phase 2: Basic commands (greet, time, random) implemented.")}`
);

if (process.argv.length <= 2) {
  program.outputHelp();
} else {
  program.parse(process.argv);
}

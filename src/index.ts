import { Command } from "commander";
import chalk from "chalk";
import { GreetCommand } from "./commands/GreetCommand";

const greet = new GreetCommand();

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

program.addHelpText(
  "after",
  `\n${chalk.gray("Phase 2: Adding basic commands. More coming soon.")}`
);

if (process.argv.length <= 2) {
  program.outputHelp();
} else {
  program.parse(process.argv);
}

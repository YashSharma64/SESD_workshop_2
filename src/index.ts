import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .name("yashcli")
  .description("A simple OOP-based CLI built with Node.js + TypeScript")
  .version("0.0.0");

program.addHelpText(
  "after",
  `\n${chalk.gray("Phase 1: CLI skeleton ready. Commands will be added in next phases.")}`
);

if (process.argv.length <= 2) {
  program.outputHelp();
} else {
  program.parse(process.argv);
}

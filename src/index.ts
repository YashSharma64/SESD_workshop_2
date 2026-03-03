import { Command } from "commander";
import chalk from "chalk";
import { GreetCommand } from "./commands/GreetCommand";
import { TimeCommand } from "./commands/TimeCommand";
import { RandomCommand } from "./commands/RandomCommand";
import { CalcCommand } from "./commands/CalcCommand";
import { UuidCommand } from "./commands/UuidCommand";
import { FileInfoCommand } from "./commands/FileInfoCommand";
import { HelpMeCommand } from "./commands/HelpMeCommand";

const greet = new GreetCommand();
const time = new TimeCommand();
const random = new RandomCommand();
const calc = new CalcCommand();
const uuid = new UuidCommand();
const fileinfo = new FileInfoCommand();
const helpme = new HelpMeCommand();

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

program
  .command(calc.name)
  .description(calc.description)
  .argument("<num1>", "First number")
  .argument("<operator>", "Operator (+, -, *, /)")
  .argument("<num2>", "Second number")
  .action((a, op, b) => calc.run([a, op, b]));

program
  .command(uuid.name)
  .description(uuid.description)
  .action(() => uuid.run());

program
  .command(fileinfo.name)
  .description(fileinfo.description)
  .argument("<filename>", "File to inspect")
  .action((file) => fileinfo.run([file]));

program
  .command(helpme.name)
  .description(helpme.description)
  .action(() => helpme.run());

program.addHelpText(
  "after",
  `\n${chalk.gray("Phase 3: All local commands implemented. API commands next.")}`
);

if (process.argv.length <= 2) {
  program.outputHelp();
} else {
  program.parse(process.argv);
}

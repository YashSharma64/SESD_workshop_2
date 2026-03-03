import { Command } from "commander";
import chalk from "chalk";
import { GreetCommand } from "./commands/GreetCommand";
import { TimeCommand } from "./commands/TimeCommand";
import { RandomCommand } from "./commands/RandomCommand";
import { CalcCommand } from "./commands/CalcCommand";
import { UuidCommand } from "./commands/UuidCommand";
import { FileInfoCommand } from "./commands/FileInfoCommand";
import { HelpMeCommand } from "./commands/HelpMeCommand";
import { GithubCommand } from "./commands/GithubCommand";
import { WeatherCommand } from "./commands/WeatherCommand";
import { QuoteCommand } from "./commands/QuoteCommand";

const greet = new GreetCommand();
const time = new TimeCommand();
const random = new RandomCommand();
const calc = new CalcCommand();
const uuid = new UuidCommand();
const fileinfo = new FileInfoCommand();
const helpme = new HelpMeCommand();
const github = new GithubCommand();
const weather = new WeatherCommand();
const quote = new QuoteCommand();

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

program
  .command(github.name)
  .description(github.description)
  .argument("<username>", "GitHub username")
  .action((user) => github.run([user]));

program
  .command(weather.name)
  .description(weather.description)
  .argument("<city>", "City name")
  .action((city) => weather.run([city]));

program
  .command(quote.name)
  .description(quote.description)
  .action(() => quote.run());

program.addHelpText(
  "after",
  `\n${chalk.gray("Phase 5: All 10 commands implemented. CLI complete.")}`
);

if (process.argv.length <= 2) {
  program.outputHelp();
} else {
  program.parse(process.argv);
}

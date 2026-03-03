import { BaseCommand } from "../BaseCommand";
import { QuoteService } from "../services/QuoteService";
import chalk from "chalk";

export class QuoteCommand extends BaseCommand {
  readonly name = "quote";
  readonly description = "Fetch a random quote";

  async run(): Promise<void> {
    try {
      const quote = await QuoteService.getQuote();
      console.log(chalk.cyan(`"${quote.content}"`));
      if (quote.author) console.log(chalk.gray(`— ${quote.author}`));
    } catch (err: any) {
      console.error(chalk.red(`Error: ${err.message}`));
    }
  }
}

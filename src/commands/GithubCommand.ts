import { BaseCommand } from "../BaseCommand";
import { GithubService } from "../services/GithubService";
import chalk from "chalk";

export class GithubCommand extends BaseCommand {
  readonly name = "github";
  readonly description = "Fetch GitHub user info";
  readonly usage = "<username>";

  async run(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.error(chalk.red("Error: Missing username."));
      console.log(chalk.gray(`Usage: yashcli ${this.helpLine()}`));
      return;
    }

    const username = args[0];
    try {
      const user = await GithubService.getUser(username);
      console.log(chalk.bold.blue(`@${user.login}`));
      if (user.name) console.log(chalk.gray(`Name: ${user.name}`));
      if (user.bio) console.log(chalk.gray(`Bio: ${user.bio}`));
      console.log(chalk.gray(`Public repos: ${user.public_repos}`));
      console.log(chalk.gray(`Followers: ${user.followers}`));
      console.log(chalk.gray(`Following: ${user.following}`));
      console.log(chalk.gray(`Joined: ${new Date(user.created_at).toLocaleDateString()}`));
    } catch (err: any) {
      console.error(chalk.red(`Error: ${err.message}`));
    }
  }
}

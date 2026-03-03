import { BaseCommand } from "../BaseCommand";
import { WeatherService } from "../services/WeatherService";
import chalk from "chalk";

export class WeatherCommand extends BaseCommand {
  readonly name = "weather";
  readonly description = "Fetch weather information";
  readonly usage = "<city>";

  async run(args: string[]): Promise<void> {
    if (args.length === 0) {
      console.error(chalk.red("Error: Missing city."));
      console.log(chalk.gray(`Usage: yashcli ${this.helpLine()}`));
      return;
    }

    const city = args[0];
    try {
      const weather = await WeatherService.getWeather(city);
      console.log(chalk.bold.blue(`Weather in ${weather.city}`));
      console.log(chalk.cyan(`Temperature: ${weather.temperature}°C`));
      console.log(chalk.gray(`Description: ${weather.description}`));
      console.log(chalk.gray(`Humidity: ${weather.humidity}%`));
      console.log(chalk.gray(`Wind: ${weather.wind} m/s`));
    } catch (err: any) {
      console.error(chalk.red(`Error: ${err.message}`));
    }
  }
}

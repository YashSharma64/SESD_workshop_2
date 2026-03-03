export abstract class BaseCommand {
  abstract readonly name: string;
  abstract readonly description: string;

  readonly usage?: string;

  constructor(usage?: string) {
    this.usage = usage;
  }

  abstract run(args: string[]): Promise<void> | void;

  helpLine(): string {
    const usagePart = this.usage ? ` ${this.usage}` : "";
    return `${this.name}${usagePart} - ${this.description}`;
  }
}

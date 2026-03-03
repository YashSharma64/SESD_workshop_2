import axios from "axios";

export interface Quote {
  content: string;
  author?: string;
}

export class QuoteService {
  private static readonly API_URL = "https://api.quotable.io/quotes/random";

  static async getQuote(): Promise<Quote> {
    try {
      const { data } = await axios.get(this.API_URL, { timeout: 5000 });
      const quote = Array.isArray(data) ? data[0] : data;
      return {
        content: quote.content,
        author: quote.author,
      };
    } catch (err: any) {
      if (err.code === "ENOTFOUND" || err.code === "ECONNREFUSED") {
        throw new Error("Quote service unreachable. Check your network or try again later.");
      }
      throw new Error("Failed to fetch quote.");
    }
  }
}

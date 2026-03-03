import axios from "axios";

export interface Quote {
  content: string;
  author?: string;
}

export class QuoteService {
  private static readonly API_URL = "https://api.quotable.io/random";

  static async getQuote(): Promise<Quote> {
    const { data } = await axios.get(this.API_URL);
    return {
      content: data.content,
      author: data.author,
    };
  }
}

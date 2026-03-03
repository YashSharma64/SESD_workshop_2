import axios from "axios";

export interface Quote {
  content: string;
  author?: string;
}

export class QuoteService {
  private static readonly API_URL = "https://api.quotable.io/quotes/random";
  private static readonly FALLBACK_QUOTES: Quote[] = [
    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { content: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { content: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
    { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  ];

  static async getQuote(): Promise<Quote> {
    try {
      const { data } = await axios.get(this.API_URL, { timeout: 3000 });
      const quote = Array.isArray(data) ? data[0] : data;
      return {
        content: quote.content,
        author: quote.author,
      };
    } catch {
      // Fallback to local quotes if API fails
      const randomIndex = Math.floor(Math.random() * this.FALLBACK_QUOTES.length);
      return this.FALLBACK_QUOTES[randomIndex];
    }
  }
}

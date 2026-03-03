import axios from "axios";

export interface GithubUser {
  login: string;
  id: number;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export class GithubService {
  private static readonly API_BASE = "https://api.github.com";

  static async getUser(username: string): Promise<GithubUser> {
    if (!username) throw new Error("Username is required");
    const url = `${this.API_BASE}/users/${username}`;
    const { data } = await axios.get<GithubUser>(url);
    return data;
  }
}

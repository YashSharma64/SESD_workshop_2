import axios from "axios";

export interface WeatherInfo {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  wind: number;
}

export class WeatherService {
  private static readonly API_BASE = "https://api.openweathermap.org/data/2.5";

  static async getWeather(city: string, apiKey?: string): Promise<WeatherInfo> {
    if (!city) throw new Error("City is required");
    const key = apiKey || process.env.WEATHER_API_KEY;
    if (!key) throw new Error("Weather API key is required (set WEATHER_API_KEY)");

    const url = `${this.API_BASE}/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric`;
    const { data } = await axios.get(url);
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    };
  }
}

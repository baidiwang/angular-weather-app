import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_KEY = "9da61fef8f174472a3c111630231610";
  BASE_URL = "http://api.weatherapi.com/v1";

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(query: string) {
    return this.httpClient.get(`${this.BASE_URL}/current.json?key=${this.API_KEY}&q=${query}`)
  }

  getForecastWeather(query: string) {
    return this.httpClient.get(`${this.BASE_URL}/forecast.json?key=${this.API_KEY}&q=${query}`)
  }
}

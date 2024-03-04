import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  BASE_URL = "http://localhost:8080/weather";

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(query: string) {
    return this.httpClient.get(`${this.BASE_URL}/current-weather?q=${query}`)
  }

  getForecastWeather(query: string) {
    return this.httpClient.get(`${this.BASE_URL}/forecast-weather?q=${query}`)
  }
}

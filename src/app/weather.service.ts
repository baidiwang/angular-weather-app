import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  BASE_URL = 'http://localhost:8080/weather'; // set to the weather routes of Express server.

  //uses Angular's HttpClient to make these HTTP requests. The constructor injects the HttpClient service into the WeatherService class.
  constructor(private httpClient: HttpClient) {}

  // methods to fetch the current weather (getCurrentWeather) and weather forecasts (getForecastWeather), both of which make GET requests to the server. The server then processes these requests and returns weather data.
  getCurrentWeather(query: string) {
    return this.httpClient.get(`${this.BASE_URL}/current-weather?q=${query}`);
  }

  getForecastWeather(query: string) {
    return this.httpClient.get(`${this.BASE_URL}/forecast-weather?q=${query}`);
  }
}

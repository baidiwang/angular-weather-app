import { Component } from '@angular/core';
import {WeatherService} from "../weather.service";
import {FavoriteService} from "../favorite.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  query = "New York";
  queryTemp = "New York";
  data: any = null;
  favorites: string[] = [];

  constructor(
    private weatherService: WeatherService,
    private favoriteService: FavoriteService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getWeather();
    this.getFavorites();
  }

  getWeather() {
    this.weatherService.getCurrentWeather(this.query).subscribe(res => {
     this.data = res;
    });
  }

  handleSearch() {
    this.query = this.queryTemp;
    this.getWeather();
  }

  getFavorites() {
    this.favorites = this.favoriteService.getAll()
  }

  addToFavorite(name: string) {
    this.favoriteService.add(name);
    this.getFavorites();
  }

  removeFavorite(name: string) {
    this.favoriteService.remove(name);
    this.getFavorites();
  }

  toFavorites() {
    this.router.navigateByUrl("/favorites")
  }
}

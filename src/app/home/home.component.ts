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
  favorites: any[] = [];

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
     this.favoriteService.getAll().subscribe((favorites: any) => {
       this.favorites = favorites;
     })
  }

  addToFavorite(favorite: string) {
    this.favoriteService.add(favorite).subscribe(() => {
      this.getFavorites();
    });
  }

  removeFavorite(name: string) {
    this.favoriteService.remove(name).subscribe(() => {
      this.getFavorites();
    });
  }

  toFavorites() {
    this.router.navigateByUrl("/favorites")
  }

  get hasFavorite() {
    return this.favorites.some((item: any) => item.name === this.data.location.name)
  }
}

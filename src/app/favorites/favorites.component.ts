import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {FavoriteService} from "../favorite.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  data: any = [];

  constructor(
    private weatherService: WeatherService,
    private favoriteService: FavoriteService,
  ) {
  }

  ngOnInit(): void {
    this.getCurrentByFavorites();
  }

  getCurrentByFavorites() {
    this.data = [];
    this.favoriteService.getAll().subscribe((favorites: any) => {
      for (let i = 0; i < favorites.length; i++) {
        this.weatherService.getCurrentWeather(favorites[i].name)
          .subscribe(res => {
            this.data.push(res);
          })
      }
    });
  }

  removeFavorite(name: string) {
    this.favoriteService.remove(name).subscribe(() => {
      this.getCurrentByFavorites();
    });
  }
}

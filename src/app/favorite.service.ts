import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorites: string[] = [];

  constructor() {
    let favorites: any = localStorage.getItem("favorites")
    if (favorites) {
      this.favorites = JSON.parse(favorites);
    }
  }

  getAll() {
    return this.favorites;
  }

  add(name: string) {
    this.favorites.push(name);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  remove(name: string) {
    this.favorites = this.favorites.filter(item => item !== name);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  has(name: string) {
    return !!this.favorites.find(item => item === name);
  }
}

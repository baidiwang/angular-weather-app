import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

// this service handles interactions with the favorite-related backend routes.
export class FavoriteService {
  BASE_URL = 'http://localhost:8080/favorite';

  // uses HttpClient for HTTP requests and returns observables.
  constructor(private httpClient: HttpClient) {}

  // provides methods to get all favorite locations (getAll), add a new favorite (add), remove a favorite (remove), and check if a favorite exists (has).
  // Those  correspond to different HTTP methods(GET, POST, DELETE) and endpoints defined in my Express server's favorite routes.
  getAll() {
    return this.httpClient.get(this.BASE_URL);
  }

  add(favorite: any) {
    console.log(favorite);
    return this.httpClient.post(this.BASE_URL, favorite);
  }

  remove(name: string) {
    return this.httpClient.delete(`${this.BASE_URL}/${name}`);
  }

  has(name: string) {
    return this.httpClient.get(`${this.BASE_URL}/${name}`);
  }
}

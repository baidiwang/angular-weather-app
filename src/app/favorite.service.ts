import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  BASE_URL = "http://localhost:8080/favorite";

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.BASE_URL);
  }

  add(favorite: any) {
    console.log(favorite)
    return this.httpClient.post(this.BASE_URL, favorite);
  }

  remove(name: string) {
    return this.httpClient.delete(`${this.BASE_URL}/${name}`);
  }

  has(name: string) {
    return this.httpClient.get(`${this.BASE_URL}/${name}`);
  }
}

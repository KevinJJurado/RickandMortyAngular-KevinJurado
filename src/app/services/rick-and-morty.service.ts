import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {


  constructor(private http: HttpClient) {}

  getApi(url:string) {
    return this.http.get(url)
  }
  getNumberRandom(limit: number) {
    return Math.floor(Math.random() * limit + 1)
  }

}

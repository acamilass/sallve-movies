import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  searchMovieByTitle(title: string) {
    const url = 'http://www.omdbapi.com/?t=' + title + '&apikey=8b3123eb';
    return this.http.get(url);
  }

  constructor(private http: HttpClient) { }

}

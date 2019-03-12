import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  searchMovieByTitle(title: string) {
    const url = 'http://www.omdbapi.com/?t=' + title + '&apikey=8b3123eb';
    return this.http.get(url)
      .pipe(map((response: Response) => {
        return response;
      }));
  }

  constructor(private http: HttpClient) { }

}

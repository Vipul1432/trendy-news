import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&lang=hi&apikey=58619df2226dd9a446de6f15e539fc81';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(this.apiUrl);
  }
}

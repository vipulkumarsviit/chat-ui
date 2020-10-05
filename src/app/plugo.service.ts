import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlugoService {

  constructor(private http: HttpClient) { }

  getRandomQuotes(id) {
    return this.http.get('http://localhost:3000/quotes/' + id);
  }

  getAnswer(query: string) {
    let params: HttpParams = new HttpParams();
    params = params.append('query', query);
    return this.http.get('http://localhost:5000/sakhi', {
      params
    });
  }
}

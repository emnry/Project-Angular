import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {}

  getAll() : Observable<any>{
    return this.http.get<any>("http://localhost:3000/articles");
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/articles/`+id);
  }

  save(article:any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/articles/save",article);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/articles/`+id);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private BASE_URL: string = 'http://localhost:8000/api/';
  
  constructor(private http: HttpClient) { }
  
  public get<T>(url: string): Observable<any>
  {
    return this.http.get(this.BASE_URL + url);
  }
}

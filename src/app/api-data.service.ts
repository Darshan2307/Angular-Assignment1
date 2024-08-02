import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=618002310941ba6eaf3fc19b38253caa';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http
      .get<any[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  private get httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}

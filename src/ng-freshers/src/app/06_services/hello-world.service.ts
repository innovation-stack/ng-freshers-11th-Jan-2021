import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelloWorldService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}

// CalendarComponent   CalendarComponent   CalendarComponent
// CalendarService     CalendarService     CalendarService
//                    AuthService

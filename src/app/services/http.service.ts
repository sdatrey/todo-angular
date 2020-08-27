import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
   logIn(data: { email:string, password: string }){
      return this.http.post('https://todo-project-20e1d.firebaseio.com/todo.json',data);
  }
  
}

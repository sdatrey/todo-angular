import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
    signUp(data: { username:string, email:string, password:string  }){
          return this.http.post('https://auth-ts.herokuapp.com/api/auth/register' , data)
    }
   logIn(data: { email:string, password: string }){
      return this.http.post('https://auth-ts.herokuapp.com/api/auth/login',data);
  }
  
}

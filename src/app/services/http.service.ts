import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modals/user.modal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
    signUp(data: User): Observable<{token: string}>{
          return this.http.post<{token: string}>('https://auth-ts.herokuapp.com/api/auth/register' , data);
    }
   logIn(data: User): Observable<string>{
      return this.http.post<{token: string}>('https://auth-ts.herokuapp.com/api/auth/login',data).pipe(
        map((res) => res.token)
      );
  }


}

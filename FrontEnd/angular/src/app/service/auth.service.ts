import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from 'rxjs';
import {first,catchError,tap } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url_reg="http://localhost:8080/api/register" ;
  private url_log="http://localhost:8080/api/login" ;


  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  id: Pick<User, "id">;
  
  httpOptions:{headers: HttpHeaders}={
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  }
  constructor(private http:HttpClient , private errorHandlerService :ErrorHandlerService ,private router: Router) { }

  signup(user:Omit<User,"id">): Observable<User>{

    return this.http.post<User>(this.url_reg,user,this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("signup"))

    );
  }

login(
  email: Pick<User, "email">,
  password: Pick<User, "password">,

): Observable<{
  token: string
  id: Pick<User, "id">;
}> {
  
  return this.http
    .post(this.url_log, { email, password }, this.httpOptions)
    .pipe(
      first(Object),
      tap((tokenObject:  { token: string; id: Pick<User, "id"> }) => {
        this.id = tokenObject.id;
        localStorage.setItem("token", tokenObject.token);
        this.isUserLoggedIn$.next(true);
     
        this.router.navigate(["book"]);
      }),
      catchError(
        this.errorHandlerService.handleError<{
          token: string;
          id: Pick<User, "id">;
        }>("login")
      )
    );
}
 }




// { token: string; id: Pick<User, "id"> }

//   login(email:Pick<User,"email">,password:Pick<User,"password">): Observable<
//   {token:string;id:Pick<User,"id">;
// }>{

//     return this.http
//     .post(this.url_log,{email,password},this.httpOptions)
//     .pipe(
//       first(),
//       tap((tokenObject:{token:string;id:Pick<User,"id">})),
//       catchError(this.errorHandlerService.handleError<{token:string;id:Pick<User,"id">}>("login"))

//     );
//   }
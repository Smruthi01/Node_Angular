import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import {HttpClient} from '@angular/common/http';
import {map, skipWhile, tap} from 'rxjs/operators'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private url_book="http://localhost:8080/api/book" ;

  constructor(private http : HttpClient,private router: Router) { }
  getData(){
    return this.http.get('https://gist.github.com/Smruthi01/043ea57e1e3bd6d46aa6d9beb5c4e93a.js')
      .pipe(
        map((response:[]) => response.map(item => item['name']))
      )
      }

  // book() : Observable<any>{
    
  //   return this.http.post<Book>(this.url_book,book,this.httpOptions).pipe(
  //     first(),
  //     catchError(this.errorHandlerService.handleError<User>("signup"))

  //   );

  // }
}

// //src="https://gist.github.com/Smruthi01/043ea57e1e3bd6d46aa6d9beb5c4e93a.js




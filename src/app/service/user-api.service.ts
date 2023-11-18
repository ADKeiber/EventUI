import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/User';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {

  private _url: string = "http://localhost:8090/user/";

  
  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<User>{
    return this.http.get<User>(this._url + email).pipe(catchError(this.errorHandler));
  }
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this._url + "id/"+ id).pipe(catchError(this.errorHandler));
  }
  createUser(user: User){
    return this.http.post(this._url + 'new', user);
  }

  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>(this._url).pipe(catchError(this.errorHandler));
  }

  updateUser(id: number, user:User) {
    return this.http.put(this._url +"update/" + id, user);
  }

  deleteUser(email: string) {
    return this.http.delete(this._url + "delete/" + email);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }
}

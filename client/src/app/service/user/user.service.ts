import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserDto } from 'src/app/Dto/user.Dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.api + 'users';

  constructor(public httpClient: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public createUser(user: UserDto): Observable<UserDto> {
    return this.httpClient.post<UserDto>(this.apiUrl, user, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  public getUserByEmail(email: string): Observable<UserDto> {
    return this.httpClient.get<UserDto>(this.apiUrl + '/' + email)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  public deActiveUser(id: string): Observable<UserDto> {
    return this.httpClient
      .put<UserDto>(this.apiUrl + '/de-active/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}

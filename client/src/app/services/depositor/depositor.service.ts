import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DepositorDto } from 'src/app/dtos/depositor.dto';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepositorService {

  base_path = environment.api + 'depositors';

  constructor(public httpClient: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getDepo(): Observable<DepositorDto[]> {
    return this.httpClient.get<DepositorDto[]>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Create a new item
  public createDepo(depo: DepositorDto[]): Observable<DepositorDto[]> {
    return this.httpClient.post<DepositorDto[]>(this.base_path, depo, this.httpOptions)
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
  }
}

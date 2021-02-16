import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DeliverAreaDto } from 'src/app/Dto/deliver-area.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliverAreaService {

  apiUrl = environment.api + 'delivery-areas';

  constructor(public httpClient: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public getDeliverArea(): Observable<DeliverAreaDto[]> {
    return this.httpClient.get<DeliverAreaDto[]>(this.apiUrl)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  public getDeliverAreaById(id: string): Observable<DeliverAreaDto> {
    return this.httpClient.get<DeliverAreaDto>(this.apiUrl + "/" + id)
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

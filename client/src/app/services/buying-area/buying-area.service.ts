import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BuyingAreaDto } from 'src/app/dtos/buying-area.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuyingAreaService {

  apiUrl = environment.api + 'buying-areas';

  constructor(public httpClient: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public createBuyingArea(buying: BuyingAreaDto): Observable<BuyingAreaDto> {
    return this.httpClient.post<BuyingAreaDto>(this.apiUrl, buying, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  public getBuyingArea(): Observable<BuyingAreaDto[]> {
    return this.httpClient.get<BuyingAreaDto[]>(this.apiUrl)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  public getBuyingAreaById(id: string): Observable<BuyingAreaDto> {
    return this.httpClient.get<BuyingAreaDto>(this.apiUrl + '/' + id)
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

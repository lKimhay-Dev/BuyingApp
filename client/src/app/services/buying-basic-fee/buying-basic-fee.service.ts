import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BuyingBasicFeeDto } from 'src/app/dtos/buying-basic-fee.dto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BuyingBasicFeeService {

  base_path = environment.api + 'buying-basic-fees';

  constructor(public httpClient: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getBuyingFee(): Observable<BuyingBasicFeeDto> {
    return this.httpClient.get<BuyingBasicFeeDto>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  public createBuyingFee(buying: BuyingBasicFeeDto): Observable<BuyingBasicFeeDto> {
    return this.httpClient.post<BuyingBasicFeeDto>(this.base_path, buying, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // public updateProduct(product: Product): Observable<Product> {
  //   return this.httpClient
  //     .put<Product>(this.apiUrl + '/' + product.id, product, httpOptions)
  //     .pipes(
  //       retry(2),
  //       catchError(this.handleError)
  //     );
  // }

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

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RetailerDto } from 'src/app/dtos/retailer.dto';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RetailerService {

    base_path = environment.api + 'retailers';

    constructor(public httpClient: HttpClient) {
    }

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    public getRetailer(): Observable<RetailerDto[]> {
        return this.httpClient.get<RetailerDto[]>(this.base_path)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    public getRetailerById(retailerId: string): Observable<RetailerDto> {
        return this.httpClient.get<RetailerDto>(this.base_path + '/' + retailerId)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    // Create a new item
    public createRetailer(retailer: RetailerDto): Observable<RetailerDto> {
        return this.httpClient.post<RetailerDto>(this.base_path, retailer, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    public deActiveRetailer(id: string): Observable<RetailerDto> {
        return this.httpClient
            .put<RetailerDto>(this.base_path + '/de-active/' + id, this.httpOptions)
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

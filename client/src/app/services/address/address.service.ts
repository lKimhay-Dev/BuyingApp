import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    private kakao = environment.kakao;

    private httpOptions: any = {
        headers: new HttpHeaders({
            Authorization: this.kakao.apiKey
        })
    };

    constructor(public httpClient: HttpClient) {
    }

    public kakaoSearch(text = ''): Observable<any> {
        this.httpOptions.params = {
            query: text.trim()
        };
        return this.httpClient
            .get(this.kakao.searchAddressApi, this.httpOptions)
            .pipe(
                catchError(error => {
                    return throwError(error);
                })
            );
    }

    public kakaoSearchByKeyword(text = ''): Observable<any> {
        this.httpOptions.params = {
            query: text.trim()
        };
        return this.httpClient
            .get(this.kakao.searchByKeywordApi, this.httpOptions)
            .pipe(
                catchError(error => {
                    return throwError(error);
                })
            );
    }
}

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import moment from 'moment';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    apiUrl = environment.api + 'authenticate';

    constructor(public httpClient: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    public authenticate(token) {
        return this.httpClient
            .post<any>(this.apiUrl, {token}, this.httpOptions)
            .pipe(catchError(this.errorResponse));
    }

    setLocalStorage(data) {
        const expiresAt = moment().add(data.expires[0], data.expires[1]);
        localStorage.setItem('email', data.email);
        localStorage.setItem('token', data.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt));
    }

    logout() {
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
    }

    isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    errorResponse(error: HttpErrorResponse) {
        return throwError(`${error.statusText}`);
    }
}

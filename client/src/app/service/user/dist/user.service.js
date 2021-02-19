"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var environment_1 = require("src/environments/environment");
var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = environment_1.environment.api + 'users';
        // Http Options
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    UserService.prototype.createUser = function (user) {
        return this.httpClient.post(this.apiUrl, user, this.httpOptions)
            .pipe(operators_1.retry(2), operators_1.catchError(this.handleError));
    };
    UserService.prototype.getUserByEmail = function (email) {
        return this.httpClient.get(this.apiUrl + '/' + email)
            .pipe(operators_1.retry(2), operators_1.catchError(this.handleError));
    };
    UserService.prototype.deActiveUser = function (id) {
        return this.httpClient
            .put(this.apiUrl + '/de-active/' + id, this.httpOptions)
            .pipe(operators_1.retry(2), operators_1.catchError(this.handleError));
    };
    UserService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return rxjs_1.throwError('Something bad happened; please try again later.');
    };
    ;
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

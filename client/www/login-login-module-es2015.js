(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-title >\n  <ion-img src=\"./assets/img/img_login_text.png\" class=\"size_img\"></ion-img>\n</ion-title>\n<ion-content class=\"img_background\">\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-grid class=\"footer-bg\">\n      <ion-row class=\"ion-align-items-center\">\n\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button expand=\"block\" [hidden]=\"isGoogleLogin\" (click)=\"doLogin()\" size=\"large\" class=\"round\" color=\"light\">\n            <ion-img src=\"./assets/img/icon_google.png\" class=\"gg-img\"></ion-img>\n            <span p___>&nbsp; google로 로그인</span>\n            <ion-img src=\"./assets/img/icon_more.png\" class=\"more-img\"></ion-img>\n          </ion-button>\n\n          <ion-button expand=\"block\" [hidden]=\"!isGoogleLogin\" (click)=\"doLogout()\" size=\"large\" class=\"round\" color=\"light\">\n            <ion-img src=\"./assets/img/icon_google.png\" class=\"gg-img\"></ion-img>\n            <span p___>&nbsp; 로그 아웃</span>\n            <ion-icon name=\"log-out-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







// import { GooglePlus } from '@ionic-native/google-plus/ngx';
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        // providers: [
        //   GooglePlus,
        // ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".size_img {\n  width: 202px;\n  height: 144px;\n  font-size: 14px;\n}\n\n.gg-img {\n  width: 24px;\n  height: 24px;\n}\n\n.more-img {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 5px;\n}\n\n.round {\n  border-radius: 8px;\n}\n\n.coler {\n  color: #ffffff;\n  font-weight: bold;\n}\n\n.size_icon {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n\nion-content.img_background {\n  --background: url('img_bg.png') 0 0/100% 100% no-repeat;\n}\n\n.btn-top {\n  margin-top: 250px;\n}\n\nspan[p___] {\n  margin-right: 48px;\n  height: 24px;\n  width: 113px;\n  letter-spacing: -0.32px;\n  font-size: 16px;\n}\n\n.p__ {\n  margin-bottom: 125px;\n}\n\n.footer-bg {\n  background: #eff7ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBUkY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNDLFVBQUE7QUFOSDs7QUFRQTtFQUdDLGtCQUFBO0FBUEQ7O0FBU0E7RUFDRyxjQUFBO0VBQ0EsaUJBQUE7QUFOSDs7QUFRQztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUxIOztBQU9BO0VBQ0UsdURBQUE7QUFKRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBT0E7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSkg7O0FBT0E7RUFDQyxvQkFBQTtBQUpEOztBQU1BO0VBQ0MsbUJBQUE7QUFIRCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNwYW5bcF9fX117XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxMzBweDtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgZm9udC1mYW1pbHk6IFwiTm90b1NhbnNDSktLUi1SZWd1bGFyXCI7XG4vLyAgICAgY29sb3I6ICMyYjJhMmE7XG4vLyAgICAgd2lkdGg6IDExM3B4O1xuLy8gICAgIGhlaWdodDogMTVweDtcbi8vICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzJweDtcbi8vIH1cbi5zaXplX2ltZ3tcbiAgd2lkdGg6IDIwMnB4O1xuICBoZWlnaHQ6IDE0NHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZ2ctaW1ne1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLm1vcmUtaW1ne1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICByaWdodDogNXB4O1xufVxuLnJvdW5ke1xuIC8vIHdpZHRoOiAzMjhweDtcbiAvLyBoZWlnaHQ6IDU2cHg7XG4gYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmNvbGVye1xuICAgY29sb3I6ICNmZmZmZmY7XG4gICBmb250LXdlaWdodDogYm9sZDtcbn1cbiAuc2l6ZV9pY29ue1xuICAgd2lkdGg6IDI0cHg7XG4gICBoZWlnaHQ6IDI0cHg7XG4gICBmb250LXNpemU6IDE2cHg7XG4gfVxuaW9uLWNvbnRlbnQuaW1nX2JhY2tncm91bmR7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvaW1nX2JnLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG4uYnRuLXRvcHtcbiAgbWFyZ2luLXRvcDogMjUwcHg7XG59XG5cbiAgXG5zcGFuW3BfX19de1xuIG1hcmdpbi1yaWdodDogNDhweDtcbiBoZWlnaHQ6IDI0cHg7XG4gICB3aWR0aDogMTEzcHg7XG4gICBsZXR0ZXItc3BhY2luZzogLTAuMzJweDtcbiAgIGZvbnQtc2l6ZTogMTZweDtcbiBcbn1cbi5wX197XG4gbWFyZ2luLWJvdHRvbTogMTI1cHg7XG59XG4uZm9vdGVyLWJne1xuIGJhY2tncm91bmQ6ICNlZmY3ZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");








let LoginPage = class LoginPage {
    constructor(google, fireAuth, platform, router, authService, navCtrl) {
        this.google = google;
        this.fireAuth = fireAuth;
        this.platform = platform;
        this.router = router;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.isGoogleLogin = false;
        this.isGoogleLogin = localStorage.getItem('isRegister') == 'true' ? true : false;
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.router.navigate(['/home']);
        });
    }
    ngOnInit() {
        this.fireAuth.getRedirectResult().then(result => {
            localStorage.setItem('token', '');
        });
    }
    doLogin() {
        if (this.platform.is('cordova') && this.platform.is('android')) {
            this.google.login({}).then(user => {
                this.authService.authenticate(user.accessToken).subscribe(result => {
                    localStorage.setItem('token', user.accessToken);
                    localStorage.setItem('email', user.email);
                    localStorage.setItem('isRegister', "false");
                    this.router.navigate(['/home']);
                });
            }).catch((error) => {
                alert(error);
            });
        }
        else {
            this.fireAuth.signInWithRedirect(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider());
        }
    }
    doLogout() {
        this.fireAuth.signOut().then(() => {
            localStorage.setItem('isRegister', "false");
            localStorage.removeItem('token');
            window.location.href = '/login';
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map
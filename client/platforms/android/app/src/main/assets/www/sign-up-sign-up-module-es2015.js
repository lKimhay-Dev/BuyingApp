(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-row>\n      <ion-button [routerLink]=\"['/']\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <ion-img  class=\"size_icon\" src=\"./assets/img/icon_back.png\"></ion-img>\n      </ion-button>\n      <ion-title class=\"txt\">회원가입</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n \n    <ion-title class=\"P__\">\n      <ion-col>\n        <ion-router-link href=\"#\" color__>아래내용에 동의해주세요.</ion-router-link> \n      </ion-col>\n    </ion-title>\n      \n    <ion-title class=\"test\">\n      <h6 class=\"ion-no-padding ion-no-margin size \">원활한 서비서 제공을 위해 이용약관 등의 내용에</h6>\n      <h6 class=\"ion-no-padding ion-no-margin size\">동의해주세요.</h6>\n    </ion-title>\n    \n  <ion-list>\n    <ion-item>\n      <ion-label>모두 동의합니다</ion-label>\n      <ion-checkbox slot=\"start\"\n      class=\"txb\"\n      [(ngModel)]=\"masterCheck\"\n      [indeterminate]=\"isIndeterminate\"\n        (click)=\"checkMaster($event)\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item *ngFor=\"let item of checkBoxList\">\n      <ion-label><span class=\"underline\" class=\"size-lable\">{{item.value}} </span><span class=\"note\" *ngIf=\"item.required\">(필수)</span></ion-label>\n      <ion-checkbox slot=\"start\" \n      class=\"txb\"\n      [(ngModel)]=\"item.isChecked\" \n      (ionChange)=\"checkEvent()\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  \n  <ion-button class=\"btn\" (click)=\"next()\" expand=\"block\" [disabled]=\"!agreements\">다음</ion-button>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/sign-up/sign-up-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");







let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-router-link[color__] {\n  color: #4848f1;\n  font-weight: bold;\n  width: 192px;\n  height: 27px;\n  font-size: 18px;\n  letter-spacing: -0.36px;\n}\n\n.arow-back {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.P__ {\n  margin-top: 25px;\n}\n\n.underline {\n  text-decoration: underline;\n}\n\n.note {\n  color: orangered;\n  font-size: 14px;\n  width: 95px;\n  height: 21px;\n  letter-spacing: -0.28px;\n}\n\n.test {\n  margin-top: 5px;\n  font-size: 14px;\n  width: 328px;\n  letter-spacing: -0.28px;\n  line-height: 20px;\n}\n\n.size_icon {\n  width: 40px;\n  height: 30px;\n  font-size: 16px;\n}\n\n.txt {\n  font-weight: bold;\n  width: 73px;\n  height: 40px;\n  letter-spacing: -0.4sp;\n  letter-spacing: -0.4px;\n  font-size: 20px;\n}\n\n.h6 {\n  font-size: 14px;\n  width: 328px;\n  letter-spacing: -0.28px;\n  line-height: 20px;\n}\n\n.size {\n  width: 328px;\n  letter-spacing: -0.28px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #544f4f;\n}\n\n.size-lable {\n  font-size: 14px;\n  width: 95px;\n  height: 21px;\n  letter-spacing: -0.28px;\n}\n\n.txb {\n  width: 24px;\n  height: 24px;\n  font-size: 14px;\n}\n\n.btn {\n  height: 48px;\n  margin: 15px 15px 15px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0M7RUFDRyxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSwwQkFBQTtBQUlKOztBQUZBO0VBQ0ssZ0JBQUE7RUFDQSxlQUFBO0VBQ0QsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUtKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFVSjs7QUFSQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVdKOztBQVJBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0FBV0oiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdXRlci1saW5rW2NvbG9yX19de1xuICAgIGNvbG9yOiByZ2IoNzIsIDcyLCAyNDEpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxOTJweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xuIH1cbiAuYXJvdy1iYWNre1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5QX197XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi51bmRlcmxpbmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4ubm90ZXtcbiAgICAgY29sb3I6b3JhbmdlcmVkO1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDk1cHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuXG4gIH1cbi50ZXN0e1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDMyOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnNpemVfaWNvbntcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLnR4dHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogNzNweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRzcDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5oNntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDMyOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnNpemV7XG4gICAgd2lkdGg6IDMyOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzU0NGY0Zjtcbn1cbi5zaXplLWxhYmxle1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogOTVweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG59XG4udHhie1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbn1cbi5idG57XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let SignUpPage = class SignUpPage {
    constructor(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.checkBoxList = [
            {
                value: "서비스 약관 동의",
                required: true,
                isChecked: false
            }, {
                value: "개인정보 처리방침 동의",
                required: true,
                isChecked: false
            }, {
                value: "만 14세 이상입니다",
                required: true,
                isChecked: false
            }, {
                value: "알림 수신 동의",
                required: false,
                isChecked: false
            }
        ];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.user = JSON.parse(params["user"]);
        });
    }
    checkMaster() {
        setTimeout(() => {
            this.checkBoxList.forEach(obj => {
                obj.isChecked = this.masterCheck;
            });
        });
    }
    checkEvent() {
        const totalItems = this.checkBoxList.length;
        let checked = 0;
        let isAgreement = 0;
        this.checkBoxList.map(obj => {
            if (obj.isChecked)
                checked++;
            if (obj.isChecked && obj.required == true)
                isAgreement++;
        });
        //If all required are checked enable Next Button
        isAgreement == 3 ? this.agreements = true : this.agreements = false;
        if (checked > 0 && checked < totalItems) {
            //If even one item is checked but not all
            this.isIndeterminate = true;
            this.masterCheck = false;
        }
        else if (checked == totalItems) {
            //If all are checked
            this.masterCheck = true;
            this.isIndeterminate = false;
        }
        else {
            //If none is checked
            this.isIndeterminate = false;
            this.masterCheck = false;
        }
    }
    next() {
        let navigationExtras = {
            queryParams: {
                user: JSON.stringify(this.user)
            }
        };
        this.navCtrl.navigateForward(['sign-up/select-region'], navigationExtras);
    }
};
SignUpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")).default]
    })
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map
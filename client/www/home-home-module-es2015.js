(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu side=\"start\" content-id=\"main-content\">\n    <ion-header class=\"ion-no-border\">\n      <ion-toolbar translucent color=\"primary\">\n        <ion-avatar smallImg slot=\"start\">\n          <ion-img [src]=\"profile\"></ion-img>\n        </ion-avatar>\n        <ion-title padingName>\n          <p class=\"ion-no-margin ion-no-padding\" info>{{username}}</p>\n          <p padingName class=\"ion-no-margin ion-no-padding\">{{email}}</p>\n        </ion-title>\n        <ion-icon marginIconClose name=\"close\" slot=\"end\" (click)=\"closeMenu()\" ></ion-icon>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-item [routerLink]=\"['/acc-management']\">\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          <ion-label>계정관리</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          <ion-label>사용설명</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          <ion-label>이용약관</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          <ion-label>개인 정보 처리 방침</ion-label>\n        </ion-item>\n        <ion-item (click)=\"goChangePurchaseFee()\">\n          <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n          <ion-label>기본 사입비 변경</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <div class=\"ion-page ion-no-padding\" id=\"main-content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title class=\"ion-text-center\" info >사입하다</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-menu-button color=\"primary\"></ion-menu-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      \n      <ion-fab horizontal=\"end\" vertical=\"bottom\" edge slot=\"fixed\" minio>\n        <ion-fab-button color=\"light\" >\n          <ion-icon name=\"add-outline\" color=\"primary\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"start\">\n          <ion-button color=\"light\" class=\"ion-no-margin\" [routerLink]=\"['/register-retailer']\" >주문서등록</ion-button>\n        </ion-fab-list>\n      </ion-fab>\n\n      <!-- <ion-chip outline btn_down color=\"tertiary\" class=\"ion-float-end\">\n        <ion-label>주문서등록</ion-label>\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\n      </ion-chip> -->\n\n\n      <ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button tab=\"order\">\n            <ion-icon name=\"reader-outline\"></ion-icon>\n            <ion-label>주문</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab=\"buy\">\n            <ion-icon name=\"bag-handle-outline\"></ion-icon>\n            <ion-label>사입</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button (click)=\"goHome()\">\n            <ion-icon name=\"arrow-redo-circle-outline\"></ion-icon>\n          </ion-tab-button>\n\n          <ion-tab-button tab=\"calculate\">\n            <ion-icon name=\"card-outline\"></ion-icon>\n            <ion-label>정산</ion-label>\n          </ion-tab-button>\n\n          <ion-tab-button tab=\"retailer\">\n            <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n            <ion-label>소매처</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar>\n      </ion-tabs>\n\n      <ion-img src=\"./assets/img/deli2.jpg\"></ion-img>\n      <h6 class=\"ion-text-center\">사입 전, 당일 주문서를 등록해주세요!</h6>\n      \n    </ion-content>\n  </div>\n</ion-app>\n");

/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user/user.service */ "./src/app/service/user/user.service.ts");





let AuthGuard = class AuthGuard {
    constructor(router, authService, userService) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
    }
    canActivate() {
        const token = localStorage.getItem('token');
        const isRegister = localStorage.getItem('isRegister');
        if (token) {
            if (isRegister && isRegister === 'true') {
                return true;
            }
            else {
                this.router.navigate(['/sign-up']);
            }
        }
        else {
            this.router.navigate(['/login']);
        }
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");





const routes = [
    {
        path: "home",
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
        children: [
            {
                path: 'order',
                loadChildren: () => __webpack_require__.e(/*! import() | order-order-module */ "order-order-module").then(__webpack_require__.bind(null, /*! ./order/order.module */ "./src/app/home/order/order.module.ts")).then(m => m.OrderPageModule)
            },
            {
                path: 'buy',
                loadChildren: () => __webpack_require__.e(/*! import() | buy-buy-module */ "buy-buy-module").then(__webpack_require__.bind(null, /*! ./buy/buy.module */ "./src/app/home/buy/buy.module.ts")).then(m => m.BuyPageModule)
            },
            {
                path: 'calculate',
                loadChildren: () => __webpack_require__.e(/*! import() | calculate-calculate-module */ "calculate-calculate-module").then(__webpack_require__.bind(null, /*! ./calculate/calculate.module */ "./src/app/home/calculate/calculate.module.ts")).then(m => m.CalculatePageModule)
            },
            {
                path: 'retailer',
                loadChildren: () => Promise.all(/*! import() | retailer-retailer-module */[__webpack_require__.e("default~retailer-retailer-module~search-tailer-search-tailer-module"), __webpack_require__.e("common"), __webpack_require__.e("retailer-retailer-module")]).then(__webpack_require__.bind(null, /*! ./retailer/retailer.module */ "./src/app/home/retailer/retailer.module.ts")).then(m => m.RetailerPageModule)
            },
            {
                path: "",
                redirectTo: "/home",
                pathMatch: "full",
            },
        ],
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
    },
    {
        path: 'register-retailer',
        loadChildren: () => Promise.all(/*! import() | register-retailer-register-retailer-module */[__webpack_require__.e("common"), __webpack_require__.e("register-retailer-register-retailer-module")]).then(__webpack_require__.bind(null, /*! ./register-retailer/register-retailer.module */ "./src/app/home/register-retailer/register-retailer.module.ts")).then(m => m.RegisterRetailerPageModule)
    },
    {
        path: 'search-location',
        loadChildren: () => __webpack_require__.e(/*! import() | search-location-search-location-module */ "search-location-search-location-module").then(__webpack_require__.bind(null, /*! ./search-location/search-location.module */ "./src/app/home/search-location/search-location.module.ts")).then(m => m.SearchLocationPageModule)
    },
    {
        path: 'search-tailer',
        loadChildren: () => Promise.all(/*! import() | search-tailer-search-tailer-module */[__webpack_require__.e("default~retailer-retailer-module~search-tailer-search-tailer-module"), __webpack_require__.e("search-tailer-search-tailer-module")]).then(__webpack_require__.bind(null, /*! ./search-tailer/search-tailer.module */ "./src/app/home/search-tailer/search-tailer.module.ts")).then(m => m.SearchTailerPageModule)
    },
    {
        path: 'edit',
        loadChildren: () => __webpack_require__.e(/*! import() | retailer-edit-edit-module */ "retailer-edit-edit-module").then(__webpack_require__.bind(null, /*! ./retailer/edit/edit.module */ "./src/app/home/retailer/edit/edit.module.ts")).then(m => m.EditPageModule)
    },
    {
        path: 'home/retailer/detail',
        loadChildren: () => __webpack_require__.e(/*! import() | retailer-detail-detail-module */ "retailer-detail-detail-module").then(__webpack_require__.bind(null, /*! ./retailer/detail/detail.module */ "./src/app/home/retailer/detail/detail.module.ts")).then(m => m.DetailPageModule)
    },
    {
        path: 'buying-basic-fee',
        loadChildren: () => __webpack_require__.e(/*! import() | buying-basic-fee-buying-basic-fee-module */ "buying-basic-fee-buying-basic-fee-module").then(__webpack_require__.bind(null, /*! ./buying-basic-fee/buying-basic-fee.module */ "./src/app/home/buying-basic-fee/buying-basic-fee.module.ts")).then(m => m.BuyingBasicFeePageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-custom-menu {\n  --width: 500px;\n}\n\nion-title[info] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #4848f1;\n}\n\np[info] {\n  font-size: 16px;\n  font-weight: bold;\n}\n\nion-fab[minio] {\n  margin-bottom: 100px;\n}\n\nion-avatar[smallImg] {\n  width: 60px;\n  height: 60px;\n  margin: 50px 0 10px 10px;\n}\n\nion-title[padingName] {\n  margin: 50px 0 11px -11px;\n}\n\np[padingName] {\n  font-size: 14px;\n  padding-top: 8px;\n}\n\nion-icon[marginIconClose] {\n  margin: 0px 18px 100px 0px;\n  font-size: 23px;\n}\n\nion-chip[btn_down] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0Usb0JBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLW1lbnUge1xuICAtLXdpZHRoOiA1MDBweDtcbn1cbmlvbi10aXRsZVtpbmZvXXtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDpib2xkO1xuICBjb2xvcjogcmdiKDcyLCA3MiwgMjQxKTtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbnBbaW5mb117XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuaW9uLWZhYlttaW5pb10ge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuaW9uLWF2YXRhcltzbWFsbEltZ10ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDUwcHggMCAxMHB4IDEwcHg7XG59XG5cbmlvbi10aXRsZVtwYWRpbmdOYW1lXSB7XG4gIG1hcmdpbjogNTBweCAwIDExcHggLTExcHg7XG59XG5cbnBbcGFkaW5nTmFtZV0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbmlvbi1pY29uW21hcmdpbkljb25DbG9zZV0ge1xuICBtYXJnaW46IDBweCAxOHB4IDEwMHB4IDBweDtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG5pb24tY2hpcFtidG5fZG93bl17XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user/user.service */ "./src/app/service/user/user.service.ts");





let HomePage = class HomePage {
    constructor(router, menu, userService) {
        this.router = router;
        this.menu = menu;
        this.userService = userService;
        this.profile = 'https://images.macrumors.com/t/6jfiBfTMQZ_y6TfR50NZ9F9vJiU=/800x0/filters:quality(90)/article-new/2019/04/guest-user-250x250.jpg?lossy';
        this.username = '손님';
        this.email = 'guestuser@gmail.com';
    }
    ngOnInit() {
        let email = localStorage.getItem('email');
        this.userService.getUserByEmail(email).subscribe(res => {
            this.username = res.username;
            this.email = res.email;
            this.profile = res.guimg;
        });
    }
    goHome() {
        this.router.navigate(['/home']);
    }
    goChangePurchaseFee() {
        this.router.navigate(['/change-purchase-fee']);
    }
    closeMenu() {
        this.menu.close();
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map
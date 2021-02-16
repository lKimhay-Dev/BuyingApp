(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acc-management-acc-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/acc-management/acc-management.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/acc-management/acc-management.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-button [routerLink]=\"['/']\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <ion-icon slot=\"icon-only\" class=\"arow-back\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-title>계정관리</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item [routerLink]=\"['/login']\">\n    <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    <ion-label>로그인</ion-label>\n  </ion-item>\n \n  <ion-item [routerLink]=\"['/register']\">\n    <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    <ion-label>등록 취소</ion-label>\n  </ion-item>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/menu-page/acc-management/acc-management-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/menu-page/acc-management/acc-management-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AccManagementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccManagementPageRoutingModule", function() { return AccManagementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _acc_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./acc-management.page */ "./src/app/menu-page/acc-management/acc-management.page.ts");




const routes = [
    {
        path: '',
        component: _acc_management_page__WEBPACK_IMPORTED_MODULE_3__["AccManagementPage"]
    }
];
let AccManagementPageRoutingModule = class AccManagementPageRoutingModule {
};
AccManagementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccManagementPageRoutingModule);



/***/ }),

/***/ "./src/app/menu-page/acc-management/acc-management.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/menu-page/acc-management/acc-management.module.ts ***!
  \*******************************************************************/
/*! exports provided: AccManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccManagementPageModule", function() { return AccManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _acc_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acc-management-routing.module */ "./src/app/menu-page/acc-management/acc-management-routing.module.ts");
/* harmony import */ var _acc_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acc-management.page */ "./src/app/menu-page/acc-management/acc-management.page.ts");







let AccManagementPageModule = class AccManagementPageModule {
};
AccManagementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _acc_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccManagementPageRoutingModule"]
        ],
        declarations: [_acc_management_page__WEBPACK_IMPORTED_MODULE_6__["AccManagementPage"]]
    })
], AccManagementPageModule);



/***/ }),

/***/ "./src/app/menu-page/acc-management/acc-management.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/menu-page/acc-management/acc-management.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".arow-back {\n  font-size: 25px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1wYWdlL2FjYy1tYW5hZ2VtZW50L2FjYy1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWVudS1wYWdlL2FjYy1tYW5hZ2VtZW50L2FjYy1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcm93LWJhY2t7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/menu-page/acc-management/acc-management.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/menu-page/acc-management/acc-management.page.ts ***!
  \*****************************************************************/
/*! exports provided: AccManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccManagementPage", function() { return AccManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AccManagementPage = class AccManagementPage {
    constructor() { }
    ngOnInit() {
    }
};
AccManagementPage.ctorParameters = () => [];
AccManagementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-acc-management',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./acc-management.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/acc-management/acc-management.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./acc-management.page.scss */ "./src/app/menu-page/acc-management/acc-management.page.scss")).default]
    })
], AccManagementPage);



/***/ })

}]);
//# sourceMappingURL=acc-management-acc-management-module-es2015.js.map
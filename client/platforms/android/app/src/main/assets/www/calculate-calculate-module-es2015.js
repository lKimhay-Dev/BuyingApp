(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculate-calculate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/calculate/calculate.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/calculate/calculate.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>calculate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/calculate/calculate-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/home/calculate/calculate-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CalculatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatePageRoutingModule", function() { return CalculatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _calculate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculate.page */ "./src/app/home/calculate/calculate.page.ts");




const routes = [
    {
        path: '',
        component: _calculate_page__WEBPACK_IMPORTED_MODULE_3__["CalculatePage"]
    }
];
let CalculatePageRoutingModule = class CalculatePageRoutingModule {
};
CalculatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalculatePageRoutingModule);



/***/ }),

/***/ "./src/app/home/calculate/calculate.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/calculate/calculate.module.ts ***!
  \****************************************************/
/*! exports provided: CalculatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatePageModule", function() { return CalculatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calculate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculate-routing.module */ "./src/app/home/calculate/calculate-routing.module.ts");
/* harmony import */ var _calculate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculate.page */ "./src/app/home/calculate/calculate.page.ts");







let CalculatePageModule = class CalculatePageModule {
};
CalculatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calculate_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculatePageRoutingModule"]
        ],
        declarations: [_calculate_page__WEBPACK_IMPORTED_MODULE_6__["CalculatePage"]]
    })
], CalculatePageModule);



/***/ }),

/***/ "./src/app/home/calculate/calculate.page.scss":
/*!****************************************************!*\
  !*** ./src/app/home/calculate/calculate.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2FsY3VsYXRlL2NhbGN1bGF0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/calculate/calculate.page.ts":
/*!**************************************************!*\
  !*** ./src/app/home/calculate/calculate.page.ts ***!
  \**************************************************/
/*! exports provided: CalculatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatePage", function() { return CalculatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CalculatePage = class CalculatePage {
    constructor() { }
    ngOnInit() {
    }
};
CalculatePage.ctorParameters = () => [];
CalculatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calculate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/calculate/calculate.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calculate.page.scss */ "./src/app/home/calculate/calculate.page.scss")).default]
    })
], CalculatePage);



/***/ })

}]);
//# sourceMappingURL=calculate-calculate-module-es2015.js.map
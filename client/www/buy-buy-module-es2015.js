(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buy-buy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/buy.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/buy.page.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>buy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/buy/buy-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/buy/buy-routing.module.ts ***!
  \************************************************/
/*! exports provided: BuyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageRoutingModule", function() { return BuyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _buy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buy.page */ "./src/app/home/buy/buy.page.ts");




const routes = [
    {
        path: '',
        component: _buy_page__WEBPACK_IMPORTED_MODULE_3__["BuyPage"]
    }
];
let BuyPageRoutingModule = class BuyPageRoutingModule {
};
BuyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuyPageRoutingModule);



/***/ }),

/***/ "./src/app/home/buy/buy.module.ts":
/*!****************************************!*\
  !*** ./src/app/home/buy/buy.module.ts ***!
  \****************************************/
/*! exports provided: BuyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageModule", function() { return BuyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _buy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buy-routing.module */ "./src/app/home/buy/buy-routing.module.ts");
/* harmony import */ var _buy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buy.page */ "./src/app/home/buy/buy.page.ts");







let BuyPageModule = class BuyPageModule {
};
BuyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buy_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyPageRoutingModule"]
        ],
        declarations: [_buy_page__WEBPACK_IMPORTED_MODULE_6__["BuyPage"]]
    })
], BuyPageModule);



/***/ }),

/***/ "./src/app/home/buy/buy.page.scss":
/*!****************************************!*\
  !*** ./src/app/home/buy/buy.page.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYnV5L2J1eS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/buy/buy.page.ts":
/*!**************************************!*\
  !*** ./src/app/home/buy/buy.page.ts ***!
  \**************************************/
/*! exports provided: BuyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPage", function() { return BuyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BuyPage = class BuyPage {
    constructor() { }
    ngOnInit() {
    }
};
BuyPage.ctorParameters = () => [];
BuyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./buy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buy/buy.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./buy.page.scss */ "./src/app/home/buy/buy.page.scss")).default]
    })
], BuyPage);



/***/ })

}]);
//# sourceMappingURL=buy-buy-module-es2015.js.map
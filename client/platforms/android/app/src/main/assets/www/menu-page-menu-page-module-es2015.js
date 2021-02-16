(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-page-menu-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/menu-page.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/menu-page.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>menu-page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/menu-page/menu-page-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/menu-page/menu-page-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MenuPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPagePageRoutingModule", function() { return MenuPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-page.page */ "./src/app/menu-page/menu-page.page.ts");




const routes = [
    {
        path: 'menu-page',
        component: _menu_page_page__WEBPACK_IMPORTED_MODULE_3__["MenuPagePage"]
    },
    {
        path: 'acc-management',
        loadChildren: () => __webpack_require__.e(/*! import() | acc-management-acc-management-module */ "acc-management-acc-management-module").then(__webpack_require__.bind(null, /*! ./acc-management/acc-management.module */ "./src/app/menu-page/acc-management/acc-management.module.ts")).then(m => m.AccManagementPageModule)
    },
    {
        path: 'change-purchase-fee',
        loadChildren: () => Promise.all(/*! import() | change-purchase-fee-change-purchase-fee-module */[__webpack_require__.e("common"), __webpack_require__.e("change-purchase-fee-change-purchase-fee-module")]).then(__webpack_require__.bind(null, /*! ./change-purchase-fee/change-purchase-fee.module */ "./src/app/menu-page/change-purchase-fee/change-purchase-fee.module.ts")).then(m => m.ChangePurchaseFeePageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | register-register-module */[__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null, /*! ./register/register.module */ "./src/app/menu-page/register/register.module.ts")).then(m => m.RegisterPageModule)
    }
];
let MenuPagePageRoutingModule = class MenuPagePageRoutingModule {
};
MenuPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPagePageRoutingModule);



/***/ }),

/***/ "./src/app/menu-page/menu-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/menu-page/menu-page.module.ts ***!
  \***********************************************/
/*! exports provided: MenuPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPagePageModule", function() { return MenuPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-page-routing.module */ "./src/app/menu-page/menu-page-routing.module.ts");
/* harmony import */ var _menu_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-page.page */ "./src/app/menu-page/menu-page.page.ts");







let MenuPagePageModule = class MenuPagePageModule {
};
MenuPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPagePageRoutingModule"],
        ],
        declarations: [_menu_page_page__WEBPACK_IMPORTED_MODULE_6__["MenuPagePage"]]
    })
], MenuPagePageModule);



/***/ }),

/***/ "./src/app/menu-page/menu-page.page.scss":
/*!***********************************************!*\
  !*** ./src/app/menu-page/menu-page.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtcGFnZS9tZW51LXBhZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/menu-page/menu-page.page.ts":
/*!*********************************************!*\
  !*** ./src/app/menu-page/menu-page.page.ts ***!
  \*********************************************/
/*! exports provided: MenuPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPagePage", function() { return MenuPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MenuPagePage = class MenuPagePage {
    constructor() { }
    ngOnInit() {
    }
};
MenuPagePage.ctorParameters = () => [];
MenuPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/menu-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-page.page.scss */ "./src/app/menu-page/menu-page.page.scss")).default]
    })
], MenuPagePage);



/***/ })

}]);
//# sourceMappingURL=menu-page-menu-page-module-es2015.js.map
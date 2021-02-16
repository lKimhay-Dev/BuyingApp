(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-select-region-select-region-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-area/modal-area.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-area/modal-area.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-row>\n      <ion-button (click)=\"closeModal()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <ion-img  class=\"controler\" src=\"./assets/img/icon_back.png\" ></ion-img>\n      </ion-button>\n      <ion-title class=\"txt\">주 사입 지역 선택</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-radio-group >\n      <ion-item *ngFor=\"let area of stateBuyArea\" (click)=\"selectArea($event)\">\n        <ion-radio class=\"index\" value={{area._id}} slot=\"start\"></ion-radio>\n        <ion-label class=\"index_\">{{area.area_ko}}</ion-label>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-row>\n      <ion-button (click)=\"closeModal()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <ion-img  class=\"controler\" src=\"./assets/img/icon_back.png\" ></ion-img>\n      </ion-button>\n      <ion-title class=\"txt\">주 배송 지역 선택</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-radio-group>\n      <ion-item *ngFor=\"let area of stateDeliverArea\" (click)=\"selectArea($event)\">\n        <ion-radio class=\"index\" value={{area._id}} slot=\"start\"></ion-radio>\n        <ion-label class=\"index_\">{{area.area_ko}}</ion-label>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/select-region.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/select-region.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <h6 class=\"Ja\">주 사입 및 배송 지역을 선택해 주세요.</h6>\n\n  <label class=\"style_txt\">주 사입 지역</label>\n  <ion-button class=\"btn\" (click)=\"modelBuyingArea()\" color=\"light\" expand=\"block\">\n    {{buyArea}}\n    <ion-img class=\"ion-float-left\" src=\"./assets/img/icon_more.png\"></ion-img>\n  </ion-button>\n\n  <br />\n\n  <label class=\"style_txt\">주 배송 지역</label>\n  <ion-button  class=\"btn\" (click)=\"modelDeliverArea()\" color=\"light\" expand=\"block\">{{deliverArea}}\n    <ion-img  class=\"ion-float-left\" src=\"./assets/img/icon_more.png\"\n    ></ion-img>\n  </ion-button>\n  <div class=\"style-size\">\n    <ion-button style=\"width: 35%;\" color=\"light\">건너뛰기 </ion-button>\n    <ion-button (click)=\"next()\" style=\"width: 60%;\" color=\"primary\" [disabled]=\"!seletedArea\">다음 </ion-button>\n    </div>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/service/buying-area/buying-area.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/buying-area/buying-area.service.ts ***!
  \************************************************************/
/*! exports provided: BuyingAreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyingAreaService", function() { return BuyingAreaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let BuyingAreaService = class BuyingAreaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + 'buying-areas';
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    createBuyingArea(buying) {
        return this.httpClient.post(this.apiUrl, buying, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getBuyingArea() {
        return this.httpClient.get(this.apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getBuyingAreaById(id) {
        return this.httpClient.get(this.apiUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
    ;
};
BuyingAreaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BuyingAreaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], BuyingAreaService);



/***/ }),

/***/ "./src/app/sign-up/select-region/modal-area/modal-area.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/sign-up/select-region/modal-area/modal-area.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".controler {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n\n.txt {\n  width: 139px;\n  height: 40px;\n  font-size: 16px;\n  letter-spacing: -0.4px;\n  color: black;\n  font-weight: bold;\n}\n\n.index_ {\n  letter-spacing: -0.32px;\n  font-size: 16px;\n  width: 44px;\n  height: 24px;\n}\n\n.index {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zZWxlY3QtcmVnaW9uL21vZGFsLWFyZWEvbW9kYWwtYXJlYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBT0E7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NlbGVjdC1yZWdpb24vbW9kYWwtYXJlYS9tb2RhbC1hcmVhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5hcm93LWJhY2t7XG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuLmNvbnRyb2xlcntcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG59XG4udHh0e1xuICAgIHdpZHRoOiAxMzlweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi5pbmRleF97XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjMycHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGhlaWdodDogMjRweDtcbn1cblxuLmluZGV4e1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sign-up/select-region/modal-area/modal-area.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sign-up/select-region/modal-area/modal-area.page.ts ***!
  \*********************************************************************/
/*! exports provided: ModalAreaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAreaPage", function() { return ModalAreaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_buying_area_buying_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/buying-area/buying-area.service */ "./src/app/service/buying-area/buying-area.service.ts");




let ModalAreaPage = class ModalAreaPage {
    constructor(modalController, buyingAreaService) {
        this.modalController = modalController;
        this.buyingAreaService = buyingAreaService;
    }
    ngOnInit() {
        this.buyingAreaService.getBuyingArea().subscribe(res => {
            this.stateBuyArea = res;
        });
    }
    selectArea(event) {
        // console.log(event.target.value);
        this.modalController.dismiss(event.target.value);
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
ModalAreaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_service_buying_area_buying_area_service__WEBPACK_IMPORTED_MODULE_3__["BuyingAreaService"] }
];
ModalAreaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-area',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-area.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-area/modal-area.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-area.page.scss */ "./src/app/sign-up/select-region/modal-area/modal-area.page.scss")).default]
    })
], ModalAreaPage);



/***/ }),

/***/ "./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".controler {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n\n.txt {\n  width: 139px;\n  height: 40px;\n  font-size: 16px;\n  letter-spacing: -0.4px;\n  color: black;\n  font-weight: bold;\n}\n\n.index_ {\n  letter-spacing: -0.32px;\n  font-size: 16px;\n  width: 44px;\n  height: 24px;\n}\n\n.index {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zZWxlY3QtcmVnaW9uL21vZGFsLWRlbGl2ZXItYXJlYS9tb2RhbC1kZWxpdmVyLWFyZWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU9BO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zZWxlY3QtcmVnaW9uL21vZGFsLWRlbGl2ZXItYXJlYS9tb2RhbC1kZWxpdmVyLWFyZWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmFyb3ctYmFja3tcbi8vICAgICBmb250LXNpemU6IDI1cHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG4uY29udHJvbGVye1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG5cbn1cbi50eHR7XG4gICAgd2lkdGg6IDEzOXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLmluZGV4X3tcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzJweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uaW5kZXh7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgIFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ModalDeliverAreaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDeliverAreaPage", function() { return ModalDeliverAreaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_deliver_area_deliver_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/deliver-area/deliver-area.service */ "./src/app/service/deliver-area/deliver-area.service.ts");




let ModalDeliverAreaPage = class ModalDeliverAreaPage {
    constructor(modalController, deliverAreaService) {
        this.modalController = modalController;
        this.deliverAreaService = deliverAreaService;
    }
    ngOnInit() {
        this.deliverAreaService.getDeliverArea().subscribe(res => {
            this.stateDeliverArea = res;
        });
    }
    selectArea(event) {
        // console.log(event.target.value);
        this.modalController.dismiss(event.target.value);
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
ModalDeliverAreaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_service_deliver_area_deliver_area_service__WEBPACK_IMPORTED_MODULE_3__["DeliverAreaService"] }
];
ModalDeliverAreaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-deliver-area',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-deliver-area.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-deliver-area.page.scss */ "./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.scss")).default]
    })
], ModalDeliverAreaPage);



/***/ }),

/***/ "./src/app/sign-up/select-region/select-region-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sign-up/select-region/select-region-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SelectRegionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRegionPageRoutingModule", function() { return SelectRegionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_region_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-region.page */ "./src/app/sign-up/select-region/select-region.page.ts");




const routes = [
    {
        path: '',
        component: _select_region_page__WEBPACK_IMPORTED_MODULE_3__["SelectRegionPage"]
    },
    {
        path: 'modal-area',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-area-modal-area-module */ "modal-area-modal-area-module").then(__webpack_require__.bind(null, /*! ./modal-area/modal-area.module */ "./src/app/sign-up/select-region/modal-area/modal-area.module.ts")).then(m => m.ModalAreaPageModule)
    },
    {
        path: 'modal-deliver-area',
        loadChildren: () => __webpack_require__.e(/*! import() | modal-deliver-area-modal-deliver-area-module */ "modal-deliver-area-modal-deliver-area-module").then(__webpack_require__.bind(null, /*! ./modal-deliver-area/modal-deliver-area.module */ "./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.module.ts")).then(m => m.ModalDeliverAreaPageModule)
    }
];
let SelectRegionPageRoutingModule = class SelectRegionPageRoutingModule {
};
SelectRegionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectRegionPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-up/select-region/select-region.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/sign-up/select-region/select-region.module.ts ***!
  \***************************************************************/
/*! exports provided: SelectRegionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRegionPageModule", function() { return SelectRegionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_region_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-region-routing.module */ "./src/app/sign-up/select-region/select-region-routing.module.ts");
/* harmony import */ var _select_region_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-region.page */ "./src/app/sign-up/select-region/select-region.page.ts");







let SelectRegionPageModule = class SelectRegionPageModule {
};
SelectRegionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _select_region_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectRegionPageRoutingModule"]
        ],
        declarations: [_select_region_page__WEBPACK_IMPORTED_MODULE_6__["SelectRegionPage"]]
    })
], SelectRegionPageModule);



/***/ }),

/***/ "./src/app/sign-up/select-region/select-region.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/sign-up/select-region/select-region.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".style-size {\n  width: 100%;\n  margin-top: 390px;\n}\n\n.Ja {\n  margin-top: 25px;\n  width: 328px;\n  height: 27px;\n  color: #2e50cb;\n  font-size: 18px;\n  letter-spacing: -0.36px;\n  font-weight: bold;\n  margin-left: 15px;\n}\n\nion-text[start] {\n  margin-right: 155px;\n  font-size: 16px;\n  width: 95px;\n  height: 24px;\n  letter-spacing: -0.32px;\n}\n\nion-text[start1] {\n  margin-right: 87px;\n  font-size: 16px;\n}\n\n.btn {\n  height: 56px;\n  margin: 15px 15px 15px 15px;\n}\n\n.y {\n  width: 36%;\n  height: 45px;\n  margin-left: 117px;\n  margin-top: 100%;\n}\n\nspan.txt_hide {\n  visibility: hidden;\n}\n\n.style_txt {\n  width: 70px;\n  height: 21px;\n  color: black;\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  margin-left: 15px;\n}\n\n.size_icon {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n\n.size {\n  width: 86.9px;\n  height: 40px;\n  font-size: 16px;\n  letter-spacing: -0.28px;\n  color: aliceblue;\n  margin-top: 100%;\n}\n\n.ion-float-left {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n  position: absolute;\n  right: 5px;\n}\n\n.ion-button {\n  border: 1px solid #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zZWxlY3QtcmVnaW9uL3NlbGVjdC1yZWdpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNDLGlCQUFBO0FBQUw7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBRUksWUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUZBO0VBQ0ksc0JBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2VsZWN0LXJlZ2lvbi9zZWxlY3QtcmVnaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnN0eWxlLXNpemV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgIG1hcmdpbi10b3A6IDM5MHB4O1xufVxuLkphe1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgd2lkdGg6IDMyOHB4O1xuICAgIGhlaWdodDogMjdweDtcbiAgICBjb2xvcjogIzJlNTBjYjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbn1cbmlvbi10ZXh0W3N0YXJ0XXtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1NXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogOTVweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjMycHg7XG59XG5cbmlvbi10ZXh0W3N0YXJ0MV17XG4gICAgbWFyZ2luLXJpZ2h0OiA4N3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5idG57XG4gICAgXG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMTVweDtcbn1cbi55e1xuICAgIHdpZHRoOiAzNiU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMTdweDtcbiAgICBtYXJnaW4tdG9wOiAxMDAlO1xufVxuc3Bhbi50eHRfaGlkZSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnN0eWxlX3R4dHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5zaXplX2ljb257XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zaXple1xuICAgIHdpZHRoOiA4Ni45cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIG1hcmdpbi10b3A6IDEwMCU7XG59XG5cbi5pb24tZmxvYXQtbGVmdHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgXG59XG5cbi5pb24tYnV0dG9ue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG59Il19 */");

/***/ }),

/***/ "./src/app/sign-up/select-region/select-region.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/sign-up/select-region/select-region.page.ts ***!
  \*************************************************************/
/*! exports provided: SelectRegionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRegionPage", function() { return SelectRegionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_buying_area_buying_area_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/buying-area/buying-area.service */ "./src/app/service/buying-area/buying-area.service.ts");
/* harmony import */ var src_app_service_deliver_area_deliver_area_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/deliver-area/deliver-area.service */ "./src/app/service/deliver-area/deliver-area.service.ts");
/* harmony import */ var _modal_area_modal_area_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-area/modal-area.page */ "./src/app/sign-up/select-region/modal-area/modal-area.page.ts");
/* harmony import */ var _modal_deliver_area_modal_deliver_area_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal-deliver-area/modal-deliver-area.page */ "./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.ts");








let SelectRegionPage = class SelectRegionPage {
    constructor(modalController, buyingAreaService, deliverAreaService, route, navCtrl) {
        this.modalController = modalController;
        this.buyingAreaService = buyingAreaService;
        this.deliverAreaService = deliverAreaService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.buyArea = "-- 선택해 주세요 --";
        this.deliverArea = "-- 선택해 주세요 --";
        this.seletedArea = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.user = JSON.parse(params["user"]);
        });
        // console.log(this.user);
    }
    modelBuyingArea() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_area_modal_area_page__WEBPACK_IMPORTED_MODULE_6__["ModalAreaPage"],
                componentProps: { area: this.buyArea },
            });
            modal.onDidDismiss()
                .then((data) => {
                if (data['data'] != null) {
                    this.buyingAreaService.getBuyingAreaById(data['data']).subscribe(res => {
                        this.buyAreaId = res._id;
                        this.buyArea = res.area_ko;
                        this.seletedArea = true;
                    });
                }
                else {
                    this.buyArea = "-- 선택해 주세요 --";
                    this.seletedArea = false;
                }
            });
            return yield modal.present();
        });
    }
    modelDeliverArea() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_deliver_area_modal_deliver_area_page__WEBPACK_IMPORTED_MODULE_7__["ModalDeliverAreaPage"],
                componentProps: { area: this.deliverArea },
            });
            modal.onDidDismiss()
                .then((data) => {
                if (data['data'] != null) {
                    this.deliverAreaService.getDeliverAreaById(data['data']).subscribe(res => {
                        this.deliverAreaId = res._id;
                        this.deliverArea = res.area_ko;
                        this.seletedArea = true;
                    });
                }
                else {
                    this.buyArea = "-- 선택해 주세요 --";
                    this.seletedArea = false;
                }
            });
            return yield modal.present();
        });
    }
    next() {
        let navigationExtras = {
            queryParams: {
                user: JSON.stringify(this.user),
                area: "buyArea," + this.buyAreaId + ",deliverArea," + this.deliverAreaId
            }
        };
        this.navCtrl.navigateForward(['buying-basic-fee'], navigationExtras);
    }
    dismissModal() {
        this.modalController.dismiss();
    }
};
SelectRegionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_service_buying_area_buying_area_service__WEBPACK_IMPORTED_MODULE_4__["BuyingAreaService"] },
    { type: src_app_service_deliver_area_deliver_area_service__WEBPACK_IMPORTED_MODULE_5__["DeliverAreaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
SelectRegionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-region',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-region.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/select-region.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-region.page.scss */ "./src/app/sign-up/select-region/select-region.page.scss")).default]
    })
], SelectRegionPage);



/***/ })

}]);
//# sourceMappingURL=sign-up-select-region-select-region-module-es2015.js.map
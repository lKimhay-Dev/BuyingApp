(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-select-region-select-region-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-area/modal-area.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-area/modal-area.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSignUpSelectRegionModalAreaModalAreaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-row>\n      <ion-button (click)=\"closeModal()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <ion-img  class=\"controler\" src=\"./assets/img/icon_back.png\" ></ion-img>\n      </ion-button>\n      <ion-title class=\"txt\">주 사입 지역 선택</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-radio-group >\n      <ion-item *ngFor=\"let area of stateBuyArea\" (click)=\"selectArea($event)\">\n        <ion-radio class=\"index\" value={{area._id}} slot=\"start\"></ion-radio>\n        <ion-label class=\"index_\">{{area.area_ko}}</ion-label>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSignUpSelectRegionModalDeliverAreaModalDeliverAreaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-row>\n      <ion-button (click)=\"closeModal()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <ion-img  class=\"controler\" src=\"./assets/img/icon_back.png\" ></ion-img>\n      </ion-button>\n      <ion-title class=\"txt\">주 배송 지역 선택</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-radio-group>\n      <ion-item *ngFor=\"let area of stateDeliverArea\" (click)=\"selectArea($event)\">\n        <ion-radio class=\"index\" value={{area._id}} slot=\"start\"></ion-radio>\n        <ion-label class=\"index_\">{{area.area_ko}}</ion-label>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/select-region.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/select-region.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSignUpSelectRegionSelectRegionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content >\n  <h6 class=\"Ja\">주 사입 및 배송 지역을 선택해 주세요.</h6>\n\n  <label class=\"style_txt\">주 사입 지역</label>\n  <ion-button class=\"btn\" (click)=\"modelBuyingArea()\" color=\"light\" expand=\"block\">\n    {{buyArea}}\n    <ion-img class=\"ion-float-left\" src=\"./assets/img/icon_more.png\"></ion-img>\n  </ion-button>\n\n  <br />\n\n  <label class=\"style_txt\">주 배송 지역</label>\n  <ion-button  class=\"btn\" (click)=\"modelDeliverArea()\" color=\"light\" expand=\"block\">{{deliverArea}}\n    <ion-img  class=\"ion-float-left\" src=\"./assets/img/icon_more.png\"\n    ></ion-img>\n  </ion-button>\n  <!-- <div class=\"style-size\">\n    <ion-button style=\"width: 40%;height: 48px;--border-radius: 8px\" color=\"light\">건너뛰기 </ion-button>\n    <ion-button (click)=\"next()\" style=\"margin-left: 20px;width: 35%;height: 48px;--border-radius: 8px\" color=\"primary\" [disabled]=\"!seletedArea\">다음 </ion-button>\n  </div> -->\n  <ion-row  class=\"btn-row\">\n    <ion-col size=\"4\">\n      <ion-button style=\"width: 100%;height: 100%;--border-radius: 8px\" color=\"light\">건너뛰기 </ion-button>\n    </ion-col>\n    <ion-col size=\"8\">\n      <ion-button (click)=\"next()\" style=\"width: 100%;height: 100%;--border-radius: 8px\" color=\"primary\" [disabled]=\"!seletedArea\">다음 </ion-button>\n    </ion-col>\n  </ion-row>\n  \n</ion-content>  ";
      /***/
    },

    /***/
    "./src/app/service/buying-area/buying-area.service.ts":
    /*!************************************************************!*\
      !*** ./src/app/service/buying-area/buying-area.service.ts ***!
      \************************************************************/

    /*! exports provided: BuyingAreaService */

    /***/
    function srcAppServiceBuyingAreaBuyingAreaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyingAreaService", function () {
        return BuyingAreaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var BuyingAreaService = /*#__PURE__*/function () {
        function BuyingAreaService(httpClient) {
          _classCallCheck(this, BuyingAreaService);

          this.httpClient = httpClient;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + 'buying-areas'; // Http Options

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(BuyingAreaService, [{
          key: "createBuyingArea",
          value: function createBuyingArea(buying) {
            return this.httpClient.post(this.apiUrl, buying, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getBuyingArea",
          value: function getBuyingArea() {
            return this.httpClient.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getBuyingAreaById",
          value: function getBuyingAreaById(id) {
            return this.httpClient.get(this.apiUrl + '/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              console.error('An error occurred:', error.error.message);
            } else {
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
          }
        }]);

        return BuyingAreaService;
      }();

      BuyingAreaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      BuyingAreaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], BuyingAreaService);
      /***/
    },

    /***/
    "./src/app/sign-up/select-region/modal-area/modal-area.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/sign-up/select-region/modal-area/modal-area.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSignUpSelectRegionModalAreaModalAreaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".controler {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n\n.txt {\n  width: 139px;\n  height: 40px;\n  font-size: 16px;\n  letter-spacing: -0.4px;\n  color: black;\n  font-weight: bold;\n}\n\n.index_ {\n  letter-spacing: -0.32px;\n  font-size: 16px;\n  width: 44px;\n  height: 24px;\n}\n\n.index {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zZWxlY3QtcmVnaW9uL21vZGFsLWFyZWEvbW9kYWwtYXJlYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBT0E7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NlbGVjdC1yZWdpb24vbW9kYWwtYXJlYS9tb2RhbC1hcmVhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5hcm93LWJhY2t7XG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuLmNvbnRyb2xlcntcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG59XG4udHh0e1xuICAgIHdpZHRoOiAxMzlweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi5pbmRleF97XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjMycHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiA0NHB4O1xuICAgIGhlaWdodDogMjRweDtcbn1cblxuLmluZGV4e1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICBcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/sign-up/select-region/modal-area/modal-area.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/sign-up/select-region/modal-area/modal-area.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ModalAreaPage */

    /***/
    function srcAppSignUpSelectRegionModalAreaModalAreaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalAreaPage", function () {
        return ModalAreaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_service_buying_area_buying_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/buying-area/buying-area.service */
      "./src/app/service/buying-area/buying-area.service.ts");

      var ModalAreaPage = /*#__PURE__*/function () {
        function ModalAreaPage(modalController, buyingAreaService) {
          _classCallCheck(this, ModalAreaPage);

          this.modalController = modalController;
          this.buyingAreaService = buyingAreaService;
        }

        _createClass(ModalAreaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.buyingAreaService.getBuyingArea().subscribe(function (res) {
              _this.stateBuyArea = res;
            });
          }
        }, {
          key: "selectArea",
          value: function selectArea(event) {
            // console.log(event.target.value);
            this.modalController.dismiss(event.target.value);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }]);

        return ModalAreaPage;
      }();

      ModalAreaPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_service_buying_area_buying_area_service__WEBPACK_IMPORTED_MODULE_3__["BuyingAreaService"]
        }];
      };

      ModalAreaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-area',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./modal-area.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-area/modal-area.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./modal-area.page.scss */
        "./src/app/sign-up/select-region/modal-area/modal-area.page.scss"))["default"]]
      })], ModalAreaPage);
      /***/
    },

    /***/
    "./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSignUpSelectRegionModalDeliverAreaModalDeliverAreaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".controler {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n\n.txt {\n  width: 139px;\n  height: 40px;\n  font-size: 16px;\n  letter-spacing: -0.4px;\n  color: black;\n  font-weight: bold;\n}\n\n.index_ {\n  letter-spacing: -0.32px;\n  font-size: 16px;\n  width: 44px;\n  height: 24px;\n}\n\n.index {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zZWxlY3QtcmVnaW9uL21vZGFsLWRlbGl2ZXItYXJlYS9tb2RhbC1kZWxpdmVyLWFyZWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU9BO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zZWxlY3QtcmVnaW9uL21vZGFsLWRlbGl2ZXItYXJlYS9tb2RhbC1kZWxpdmVyLWFyZWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmFyb3ctYmFja3tcbi8vICAgICBmb250LXNpemU6IDI1cHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG4uY29udHJvbGVye1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG5cbn1cbi50eHR7XG4gICAgd2lkdGg6IDEzOXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLmluZGV4X3tcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzJweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uaW5kZXh7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgIFxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.ts ***!
      \*************************************************************************************/

    /*! exports provided: ModalDeliverAreaPage */

    /***/
    function srcAppSignUpSelectRegionModalDeliverAreaModalDeliverAreaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalDeliverAreaPage", function () {
        return ModalDeliverAreaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_service_deliver_area_deliver_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/deliver-area/deliver-area.service */
      "./src/app/service/deliver-area/deliver-area.service.ts");

      var ModalDeliverAreaPage = /*#__PURE__*/function () {
        function ModalDeliverAreaPage(modalController, deliverAreaService) {
          _classCallCheck(this, ModalDeliverAreaPage);

          this.modalController = modalController;
          this.deliverAreaService = deliverAreaService;
        }

        _createClass(ModalDeliverAreaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.deliverAreaService.getDeliverArea().subscribe(function (res) {
              _this2.stateDeliverArea = res;
            });
          }
        }, {
          key: "selectArea",
          value: function selectArea(event) {
            // console.log(event.target.value);
            this.modalController.dismiss(event.target.value);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }]);

        return ModalDeliverAreaPage;
      }();

      ModalDeliverAreaPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_service_deliver_area_deliver_area_service__WEBPACK_IMPORTED_MODULE_3__["DeliverAreaService"]
        }];
      };

      ModalDeliverAreaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-deliver-area',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./modal-deliver-area.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./modal-deliver-area.page.scss */
        "./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.scss"))["default"]]
      })], ModalDeliverAreaPage);
      /***/
    },

    /***/
    "./src/app/sign-up/select-region/select-region-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/sign-up/select-region/select-region-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SelectRegionPageRoutingModule */

    /***/
    function srcAppSignUpSelectRegionSelectRegionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectRegionPageRoutingModule", function () {
        return SelectRegionPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _select_region_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./select-region.page */
      "./src/app/sign-up/select-region/select-region.page.ts");

      var routes = [{
        path: '',
        component: _select_region_page__WEBPACK_IMPORTED_MODULE_3__["SelectRegionPage"]
      }, {
        path: 'modal-area',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-area-modal-area-module */
          "modal-area-modal-area-module").then(__webpack_require__.bind(null,
          /*! ./modal-area/modal-area.module */
          "./src/app/sign-up/select-region/modal-area/modal-area.module.ts")).then(function (m) {
            return m.ModalAreaPageModule;
          });
        }
      }, {
        path: 'modal-deliver-area',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modal-deliver-area-modal-deliver-area-module */
          "modal-deliver-area-modal-deliver-area-module").then(__webpack_require__.bind(null,
          /*! ./modal-deliver-area/modal-deliver-area.module */
          "./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.module.ts")).then(function (m) {
            return m.ModalDeliverAreaPageModule;
          });
        }
      }];

      var SelectRegionPageRoutingModule = function SelectRegionPageRoutingModule() {
        _classCallCheck(this, SelectRegionPageRoutingModule);
      };

      SelectRegionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SelectRegionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sign-up/select-region/select-region.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/sign-up/select-region/select-region.module.ts ***!
      \***************************************************************/

    /*! exports provided: SelectRegionPageModule */

    /***/
    function srcAppSignUpSelectRegionSelectRegionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectRegionPageModule", function () {
        return SelectRegionPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _select_region_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./select-region-routing.module */
      "./src/app/sign-up/select-region/select-region-routing.module.ts");
      /* harmony import */


      var _select_region_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./select-region.page */
      "./src/app/sign-up/select-region/select-region.page.ts");

      var SelectRegionPageModule = function SelectRegionPageModule() {
        _classCallCheck(this, SelectRegionPageModule);
      };

      SelectRegionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_region_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectRegionPageRoutingModule"]],
        declarations: [_select_region_page__WEBPACK_IMPORTED_MODULE_6__["SelectRegionPage"]]
      })], SelectRegionPageModule);
      /***/
    },

    /***/
    "./src/app/sign-up/select-region/select-region.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/sign-up/select-region/select-region.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSignUpSelectRegionSelectRegionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".style-size {\n  width: 100%;\n  margin-top: 390px;\n}\n\n.Ja {\n  margin-top: 25px;\n  width: 328px;\n  height: 27px;\n  color: #2e50cb;\n  font-size: 18px;\n  letter-spacing: -0.36px;\n  font-weight: bold;\n  margin-left: 15px;\n}\n\nion-text[start] {\n  margin-right: 155px;\n  font-size: 16px;\n  width: 95px;\n  height: 24px;\n  letter-spacing: -0.32px;\n}\n\nion-text[start1] {\n  margin-right: 87px;\n  font-size: 16px;\n}\n\n.btn {\n  height: 56px;\n  margin: 15px 15px 15px 15px;\n  --border-radius: 8px;\n}\n\n.y {\n  width: 36%;\n  height: 45px;\n  margin-left: 117px;\n  margin-top: 100%;\n}\n\nspan.txt_hide {\n  visibility: hidden;\n}\n\n.style_txt {\n  width: 70px;\n  height: 21px;\n  color: black;\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  margin-left: 15px;\n}\n\n.size_icon {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n}\n\n.size {\n  width: 86.9px;\n  height: 40px;\n  font-size: 16px;\n  letter-spacing: -0.28px;\n  color: aliceblue;\n  margin-top: 100%;\n}\n\n.ion-float-left {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n  position: absolute;\n  right: 5px;\n}\n\n.ion-button {\n  border: 1px solid #888;\n}\n\n.btn-row {\n  padding: 0 10px;\n  height: 48px;\n  position: fixed;\n  left: 0;\n  bottom: 15px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zZWxlY3QtcmVnaW9uL3NlbGVjdC1yZWdpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNDLGlCQUFBO0FBQUw7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksWUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBS0o7O0FBREE7RUFDSSxzQkFBQTtBQUlKOztBQURBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NlbGVjdC1yZWdpb24vc2VsZWN0LXJlZ2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zdHlsZS1zaXple1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICBtYXJnaW4tdG9wOiAzOTBweDtcbiAgICAgXG59XG4uSmF7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB3aWR0aDogMzI4cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIGNvbG9yOiAjMmU1MGNiO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcblxufVxuaW9uLXRleHRbc3RhcnRde1xuICAgIG1hcmdpbi1yaWdodDogMTU1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiA5NXB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzJweDtcbn1cblxuaW9uLXRleHRbc3RhcnQxXXtcbiAgICBtYXJnaW4tcmlnaHQ6IDg3cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmJ0bntcbiAgICBcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAxNXB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnl7XG4gICAgd2lkdGg6IDM2JTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDExN3B4O1xuICAgIG1hcmdpbi10b3A6IDEwMCU7XG59XG5zcGFuLnR4dF9oaWRlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uc3R5bGVfdHh0e1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnNpemVfaWNvbntcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLnNpemV7XG4gICAgd2lkdGg6IDg2LjlweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgbWFyZ2luLXRvcDogMTAwJTtcbn1cblxuLmlvbi1mbG9hdC1sZWZ0e1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICBcbn1cblxuLmlvbi1idXR0b257XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbn1cblxuLmJ0bi1yb3d7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/sign-up/select-region/select-region.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/sign-up/select-region/select-region.page.ts ***!
      \*************************************************************/

    /*! exports provided: SelectRegionPage */

    /***/
    function srcAppSignUpSelectRegionSelectRegionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectRegionPage", function () {
        return SelectRegionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_service_buying_area_buying_area_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/buying-area/buying-area.service */
      "./src/app/service/buying-area/buying-area.service.ts");
      /* harmony import */


      var src_app_service_deliver_area_deliver_area_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/deliver-area/deliver-area.service */
      "./src/app/service/deliver-area/deliver-area.service.ts");
      /* harmony import */


      var _modal_area_modal_area_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modal-area/modal-area.page */
      "./src/app/sign-up/select-region/modal-area/modal-area.page.ts");
      /* harmony import */


      var _modal_deliver_area_modal_deliver_area_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modal-deliver-area/modal-deliver-area.page */
      "./src/app/sign-up/select-region/modal-deliver-area/modal-deliver-area.page.ts");

      var SelectRegionPage = /*#__PURE__*/function () {
        function SelectRegionPage(modalController, buyingAreaService, deliverAreaService, route, navCtrl) {
          _classCallCheck(this, SelectRegionPage);

          this.modalController = modalController;
          this.buyingAreaService = buyingAreaService;
          this.deliverAreaService = deliverAreaService;
          this.route = route;
          this.navCtrl = navCtrl;
          this.buyArea = "-- 선택해 주세요 --";
          this.deliverArea = "-- 선택해 주세요 --";
          this.seletedArea = false;
        }

        _createClass(SelectRegionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "modelBuyingArea",
          value: function modelBuyingArea() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_area_modal_area_page__WEBPACK_IMPORTED_MODULE_6__["ModalAreaPage"],
                        componentProps: {
                          area: this.buyArea
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data['data'] != null) {
                          _this3.buyingAreaService.getBuyingAreaById(data['data']).subscribe(function (res) {
                            _this3.buyAreaId = res._id;
                            _this3.buyArea = res.area_ko;
                            _this3.seletedArea = true;
                          });
                        } else {
                          _this3.buyArea = "-- 선택해 주세요 --";
                          _this3.seletedArea = false;
                        }
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "modelDeliverArea",
          value: function modelDeliverArea() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _modal_deliver_area_modal_deliver_area_page__WEBPACK_IMPORTED_MODULE_7__["ModalDeliverAreaPage"],
                        componentProps: {
                          area: this.deliverArea
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data['data'] != null) {
                          _this4.deliverAreaService.getDeliverAreaById(data['data']).subscribe(function (res) {
                            _this4.deliverAreaId = res._id;
                            _this4.deliverArea = res.area_ko;
                            _this4.seletedArea = true;
                          });
                        } else {
                          _this4.buyArea = "-- 선택해 주세요 --";
                          _this4.seletedArea = false;
                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "next",
          value: function next() {
            var navigationExtras = {
              queryParams: {
                area: "buyArea," + this.buyAreaId + ",deliverArea," + this.deliverAreaId
              }
            };
            this.navCtrl.navigateForward(['buying-basic-fee'], navigationExtras);
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalController.dismiss();
          }
        }]);

        return SelectRegionPage;
      }();

      SelectRegionPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: src_app_service_buying_area_buying_area_service__WEBPACK_IMPORTED_MODULE_4__["BuyingAreaService"]
        }, {
          type: src_app_service_deliver_area_deliver_area_service__WEBPACK_IMPORTED_MODULE_5__["DeliverAreaService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      SelectRegionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-region',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./select-region.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/select-region/select-region.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./select-region.page.scss */
        "./src/app/sign-up/select-region/select-region.page.scss"))["default"]]
      })], SelectRegionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sign-up-select-region-select-region-module-es5.js.map
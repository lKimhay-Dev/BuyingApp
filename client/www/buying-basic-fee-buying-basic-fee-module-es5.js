(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buying-basic-fee-buying-basic-fee-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buying-basic-fee/buying-basic-fee.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/buying-basic-fee/buying-basic-fee.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeBuyingBasicFeeBuyingBasicFeePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n  <!-- <Form > -->\n    <ion-item>\n      <ion-title class=\"purc-label_\">기본 사입비를 입력해 주세요.</ion-title>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"purc-label\">사입비(기본)</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"size\" slot=\"end\">원</ion-label>\n      <ion-input placeholder=\"사입비\" type=\"number\" [(ngModel)]=\"buying_fee\" (ionChange)='chkVal($event.target.value)'></ion-input>\n    </ion-item>\n\n    <ion-item >\n      <ion-text>기본 사입비 변경은 \n        <span class=\"note\">전체메뉴>기본 사입비 변경</span>\n        탭에서 하실 수 있습니다.\n      </ion-text>\n    </ion-item>\n\n    <ion-button (click)=\"next()\" class=\"cus-round\" [disabled]=\"!getVal\" color=\"primary\" expand=\"block\" fill=\"solid\">\n      다음\n    </ion-button>\n  <!-- </Form> -->\n\n\n  \n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/buying-basic-fee/buying-basic-fee-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/home/buying-basic-fee/buying-basic-fee-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: BuyingBasicFeePageRoutingModule */

    /***/
    function srcAppHomeBuyingBasicFeeBuyingBasicFeeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyingBasicFeePageRoutingModule", function () {
        return BuyingBasicFeePageRoutingModule;
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


      var _buying_basic_fee_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buying-basic-fee.page */
      "./src/app/home/buying-basic-fee/buying-basic-fee.page.ts");

      var routes = [{
        path: '',
        component: _buying_basic_fee_page__WEBPACK_IMPORTED_MODULE_3__["BuyingBasicFeePage"]
      }];

      var BuyingBasicFeePageRoutingModule = function BuyingBasicFeePageRoutingModule() {
        _classCallCheck(this, BuyingBasicFeePageRoutingModule);
      };

      BuyingBasicFeePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BuyingBasicFeePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/buying-basic-fee/buying-basic-fee.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/home/buying-basic-fee/buying-basic-fee.module.ts ***!
      \******************************************************************/

    /*! exports provided: BuyingBasicFeePageModule */

    /***/
    function srcAppHomeBuyingBasicFeeBuyingBasicFeeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyingBasicFeePageModule", function () {
        return BuyingBasicFeePageModule;
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


      var _buying_basic_fee_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./buying-basic-fee-routing.module */
      "./src/app/home/buying-basic-fee/buying-basic-fee-routing.module.ts");
      /* harmony import */


      var _buying_basic_fee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./buying-basic-fee.page */
      "./src/app/home/buying-basic-fee/buying-basic-fee.page.ts");

      var BuyingBasicFeePageModule = function BuyingBasicFeePageModule() {
        _classCallCheck(this, BuyingBasicFeePageModule);
      };

      BuyingBasicFeePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _buying_basic_fee_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyingBasicFeePageRoutingModule"]],
        declarations: [_buying_basic_fee_page__WEBPACK_IMPORTED_MODULE_6__["BuyingBasicFeePage"]]
      })], BuyingBasicFeePageModule);
      /***/
    },

    /***/
    "./src/app/home/buying-basic-fee/buying-basic-fee.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/home/buying-basic-fee/buying-basic-fee.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeBuyingBasicFeeBuyingBasicFeePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".purc-label {\n  width: 62px;\n  height: 18px;\n  font-size: 12px;\n  letter-spacing: -0.24px;\n  margin-top: 25px;\n  margin-left: 9px;\n  color: gray;\n}\n\n.dateOfChange {\n  padding: 15px 15px 15px 25px;\n  color: gray;\n}\n\n.date {\n  margin: 3px 0 0 10px;\n}\n\n.detail {\n  padding: 0px 15px 15px 25px;\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  line-height: 20px;\n  width: 312px;\n  height: 40px;\n}\n\n.note {\n  color: orangered;\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  line-height: 20px;\n}\n\n.cus-round {\n  padding: 0 10px;\n  height: 48px;\n  --border-radius: 10px;\n  position: fixed;\n  left: 0;\n  bottom: 15px;\n  width: 100%;\n}\n\n.purc-label_ {\n  color: blue;\n  margin-top: 16px;\n  width: 328px;\n  height: 27px;\n  font-size: 18px;\n  letter-spacing: -0.36px;\n  font-weight: bold;\n}\n\n.size {\n  color: gray;\n  font-size: 14px;\n  width: 13px;\n  height: 21px;\n  letter-spacing: -0.28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9idXlpbmctYmFzaWMtZmVlL2J1eWluZy1iYXNpYy1mZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2J1eWluZy1iYXNpYy1mZWUvYnV5aW5nLWJhc2ljLWZlZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVyYy1sYWJlbHtcbiAgICAvLyBwYWRkaW5nOiAzMHB4IDE1cHggMTVweCAyNXB4O1xuICAgIHdpZHRoOiA2MnB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgXG59XG4uZGF0ZU9mQ2hhbmdle1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDI1cHg7XG4gICAgY29sb3I6IGdyYXk7XG59XG4uZGF0ZXtcbiAgICBtYXJnaW46IDNweCAwIDAgMTBweDtcbn1cbi5kZXRhaWx7XG4gICAgcGFkZGluZzogMHB4IDE1cHggMTVweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMzEycHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLm5vdGV7XG4gICAgY29sb3I6b3JhbmdlcmVkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5jdXMtcm91bmR7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7ICBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHVyYy1sYWJlbF97XG4gICAgY29sb3I6IGJsdWU7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB3aWR0aDogMzI4cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxufVxuLnNpemV7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcblxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/home/buying-basic-fee/buying-basic-fee.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/home/buying-basic-fee/buying-basic-fee.page.ts ***!
      \****************************************************************/

    /*! exports provided: BuyingBasicFeePage */

    /***/
    function srcAppHomeBuyingBasicFeeBuyingBasicFeePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuyingBasicFeePage", function () {
        return BuyingBasicFeePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var BuyingBasicFeePage = /*#__PURE__*/function () {
        function BuyingBasicFeePage(navCtrl, route, fb) {
          _classCallCheck(this, BuyingBasicFeePage);

          this.navCtrl = navCtrl;
          this.route = route;
          this.fb = fb;
          this.buyingfeeForm = this.fb.group({
            // buying_fee: [''],
            create_date: [Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(Date.now(), 'yyyy.MM.dd', 'en-US')]
          });
        }

        _createClass(BuyingBasicFeePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              _this.area = params["area"];
            });
          }
        }, {
          key: "chkVal",
          value: function chkVal(val) {
            val != "" ? this.getVal = true : this.getVal = false;
          }
        }, {
          key: "next",
          value: function next() {
            var navigationExtras = {
              queryParams: {
                area: this.area,
                fee: this.buying_fee
              }
            };
            this.navCtrl.navigateForward(['register-retailer'], navigationExtras);
          }
        }]);

        return BuyingBasicFeePage;
      }();

      BuyingBasicFeePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      };

      BuyingBasicFeePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-buying-basic-fee",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./buying-basic-fee.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/buying-basic-fee/buying-basic-fee.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./buying-basic-fee.page.scss */
        "./src/app/home/buying-basic-fee/buying-basic-fee.page.scss"))["default"]]
      })], BuyingBasicFeePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=buying-basic-fee-buying-basic-fee-module-es5.js.map
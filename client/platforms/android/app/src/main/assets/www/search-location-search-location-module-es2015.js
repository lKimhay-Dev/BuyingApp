(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-location-search-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/search-location/search-location.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/search-location/search-location.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/home/retailer']\">\n        <ion-icon slot=\"icon-only\" class=\"arow-back\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-title class=\"title\">우편번호 검색</ion-title>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<div #daum_popup \n  style=\"display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;\">\n</div>\n");

/***/ }),

/***/ "./src/app/home/search-location/search-location-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/search-location/search-location-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SearchLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLocationPageRoutingModule", function() { return SearchLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-location.page */ "./src/app/home/search-location/search-location.page.ts");




const routes = [
    {
        path: '',
        component: _search_location_page__WEBPACK_IMPORTED_MODULE_3__["SearchLocationPage"]
    }
];
let SearchLocationPageRoutingModule = class SearchLocationPageRoutingModule {
};
SearchLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchLocationPageRoutingModule);



/***/ }),

/***/ "./src/app/home/search-location/search-location.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/search-location/search-location.module.ts ***!
  \****************************************************************/
/*! exports provided: SearchLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLocationPageModule", function() { return SearchLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-location-routing.module */ "./src/app/home/search-location/search-location-routing.module.ts");
/* harmony import */ var _search_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-location.page */ "./src/app/home/search-location/search-location.page.ts");







let SearchLocationPageModule = class SearchLocationPageModule {
};
SearchLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchLocationPageRoutingModule"]
        ],
        declarations: [_search_location_page__WEBPACK_IMPORTED_MODULE_6__["SearchLocationPage"]]
    })
], SearchLocationPageModule);



/***/ }),

/***/ "./src/app/home/search-location/search-location.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/home/search-location/search-location.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: -0.4px;\n}\n\n.arow-back {\n  color: black;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zZWFyY2gtbG9jYXRpb24vc2VhcmNoLWxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zZWFyY2gtbG9jYXRpb24vc2VhcmNoLWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5hcm93LWJhY2t7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/search-location/search-location.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/search-location/search-location.page.ts ***!
  \**************************************************************/
/*! exports provided: SearchLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLocationPage", function() { return SearchLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_assets_js_postcode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/js/postcode.js */ "./src/assets/js/postcode.js");




let SearchLocationPage = class SearchLocationPage {
    constructor(renderer, router, route, ngZone) {
        this.renderer = renderer;
        this.router = router;
        this.route = route;
        this.ngZone = ngZone;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.fee = params["fee"];
        });
        Object(src_assets_js_postcode_js__WEBPACK_IMPORTED_MODULE_3__["postcode"])(this.renderer, this.popup.nativeElement, data => this.ngZone.run(() => {
            let navigationExtras = {
                state: {
                    data: data.address,
                    fee: this.fee
                }
            };
            this.router.navigate(['/register-retailer'], navigationExtras);
        }));
    }
};
SearchLocationPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
SearchLocationPage.propDecorators = {
    popup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['daum_popup', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true },] }]
};
SearchLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/search-location/search-location.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-location.page.scss */ "./src/app/home/search-location/search-location.page.scss")).default]
    })
], SearchLocationPage);



/***/ }),

/***/ "./src/assets/js/postcode.js":
/*!***********************************!*\
  !*** ./src/assets/js/postcode.js ***!
  \***********************************/
/*! exports provided: postcode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postcode", function() { return postcode; });
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
script.onload = () => console.log('daum postcode loaded');

/**
 * 스크립트 삽입
 */
var before = document.getElementsByTagName('script')[0];
before.parentNode.insertBefore(script, before);

/**
 *
 * @param {@angular/core/Renderer2} renderer
 * @param {@angular/core/ElementRef.nativeElement} elem
 * @param {주소선택완료시 콜백} callback
 */
function postcode(renderer, elem, callback) {
    new daum.Postcode({
        oncomplete: data => {
            callback(data);
            elem.style.display = 'none';
        },
        width: '100%',
        height: '100%',
        maxSuggestItems: 5
    }).embed(elem);

    /**
     * 창크기 조정, 팝업창 센터로
     */
    var width = 100;
    var height = 100;
    var borderWidth = 1;

    renderer.setStyle(elem, 'display', 'block');
    renderer.setStyle(elem, 'width', width + '%');
    renderer.setStyle(elem, 'height', height + '%');
    renderer.setStyle(elem, 'border', borderWidth + 'px solid');
    renderer.setStyle(elem, 'top','8%');
}

/***/ })

}]);
//# sourceMappingURL=search-location-search-location-module-es2015.js.map
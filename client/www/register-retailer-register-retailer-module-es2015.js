(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-retailer-register-retailer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/register-retailer/register-retailer.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/register-retailer/register-retailer.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-row>\n      <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/home/retailer']\">\n        <ion-icon slot=\"icon-only\" class=\"arow-back\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n      <ion-title class=\"info\">거래처(소매처)를 등록해주세요</ion-title>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n      <form>\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon  name=\"newspaper-outline\"></ion-icon>소매업채명 <ion-text color=\"warning\">(필수)</ion-text> </ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"data.retailer_name\" name=\"retailer_name\"></ion-input>\n        </ion-item>\n\n        <ion-item >\n          <ion-label position=\"floating\">\n            <ion-icon name=\"phone-portrait-outline\"></ion-icon>전화번호<ion-text color=\"warning\">(필수)</ion-text></ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"data.phone_number\" name=\"phone_number\"></ion-input>\n        </ion-item>\n\n        <ion-item >\n          <ion-label position=\"floating\">\n            <ion-icon name=\"location-outline\"></ion-icon>주소<ion-text color=\"warning\">(필수)</ion-text>\n          </ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"data.address_ko\" name=\"address\"></ion-input>\n          <ion-button class=\"btn\" (click)=\"goSearchLocate()\" color=\"light\" slot=\"end\">주소 검색</ion-button>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon name=\"person-outline\"></ion-icon>입륵자명</ion-label>\n          <ion-input type=\"text\" id=\"child0\" name=\"name\"></ion-input>\n          <!-- <ion-input type=\"text\" [(ngModel)]=\"depo.name\" name=\"name\"></ion-input> -->\n        </ion-item>\n\n        <div id=\"showInputField\">\n      </div>\n\n        <ion-item>\n          <ion-icon name=\"add-outline\" (click)=\"addDepositor()\"></ion-icon>\n          <ion-icon name=\"remove-outline\" (click)=\"removeDepositor()\"></ion-icon>\n        </ion-item>\n\n        <ion-item >\n          <ion-label class=\"info\">입금자명이 업체명과 다를 경우 입력해주세요</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=\"lable-size \">사입비</ion-label>\n          <ion-icon name=\"remove-outline\" (click)=\"decrement()\"></ion-icon>\n          <p class=\"ion-padding\" >{{ fee }} 원</p>\n          <ion-icon name=\"add-outline\" (click)=\"increment()\"></ion-icon>\n          <ion-label class=\"ion-text-end\">기본</ion-label>\n          \n        </ion-item>\n        <ion-input type=\"number\" value=\"{{ fee }}\" [(ngModel)]=\"data.buying_fee\" name=\"buying_fee\" hidden></ion-input>\n\n        <!-- <ion-button class=\"btn-size\" (click)=\"addRetailHandler()\" expand=\"block\" >시작하기</ion-button> -->\n      </form>\n    </ion-list>\n    \n    <ion-button class=\"btn-size\" (click)=\"addRetailHandler()\" expand=\"block\" >시작하기</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Dto/user.Dto.ts":
/*!*********************************!*\
  !*** ./src/app/Dto/user.Dto.ts ***!
  \*********************************/
/*! exports provided: UserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDto", function() { return UserDto; });
class UserDto {
}


/***/ }),

/***/ "./src/app/home/register-retailer/register-retailer-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/register-retailer/register-retailer-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterRetailerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRetailerPageRoutingModule", function() { return RegisterRetailerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_retailer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-retailer.page */ "./src/app/home/register-retailer/register-retailer.page.ts");




const routes = [
    {
        path: '',
        component: _register_retailer_page__WEBPACK_IMPORTED_MODULE_3__["RegisterRetailerPage"]
    }
];
let RegisterRetailerPageRoutingModule = class RegisterRetailerPageRoutingModule {
};
RegisterRetailerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterRetailerPageRoutingModule);



/***/ }),

/***/ "./src/app/home/register-retailer/register-retailer.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/register-retailer/register-retailer.module.ts ***!
  \********************************************************************/
/*! exports provided: RegisterRetailerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRetailerPageModule", function() { return RegisterRetailerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_retailer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-retailer-routing.module */ "./src/app/home/register-retailer/register-retailer-routing.module.ts");
/* harmony import */ var _register_retailer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-retailer.page */ "./src/app/home/register-retailer/register-retailer.page.ts");







let RegisterRetailerPageModule = class RegisterRetailerPageModule {
};
RegisterRetailerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _register_retailer_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterRetailerPageRoutingModule"]
        ],
        declarations: [_register_retailer_page__WEBPACK_IMPORTED_MODULE_6__["RegisterRetailerPage"]]
    })
], RegisterRetailerPageModule);



/***/ }),

/***/ "./src/app/home/register-retailer/register-retailer.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/home/register-retailer/register-retailer.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".arow-back {\n  font-size: 25px;\n  font-weight: bold;\n}\n\nion-title.info {\n  font-size: 18px;\n  font-weight: bold;\n  color: #4848f1;\n  width: 234px;\n  height: 27px;\n  letter-spacing: -0.36px;\n}\n\nion-label.info {\n  font-size: 14px;\n  color: #4848f1;\n  letter-spacing: -0.28px;\n  width: 255px;\n  height: 21px;\n}\n\n.btn {\n  height: 35px;\n  width: 100px;\n  letter-spacing: -0.28px;\n  font-size: 14px;\n  width: 103px;\n  height: 48px;\n}\n\n.btn-size {\n  letter-spacing: -0.28px;\n  font-size: 14px;\n  --border-radius: 10px;\n  padding: 0 10px;\n  height: 48px;\n  position: fixed;\n  left: 0;\n  bottom: 15px;\n  width: 100%;\n}\n\n.lable-size {\n  font-size: 16px;\n  letter-spacing: -0.32px;\n  width: 44px;\n  height: 24px;\n}\n\n.txtsize {\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  width: 26px;\n  height: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZWdpc3Rlci1yZXRhaWxlci9yZWdpc3Rlci1yZXRhaWxlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBS0o7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVnaXN0ZXItcmV0YWlsZXIvcmVnaXN0ZXItcmV0YWlsZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFyb3ctYmFja3tcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tdGl0bGUuaW5mb3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM0ODQ4ZjE7XG4gICAgd2lkdGg6IDIzNHB4O1xuICAgIGhlaWdodDogMjdweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbn1cbmlvbi1sYWJlbC5pbmZve1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzQ4NDhmMTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICB3aWR0aDogMjU1cHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xufVxuLmJ0bntcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAzcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xufVxuLmJ0bi1zaXple1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJsZS1zaXple1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzJweDtcbiAgICB3aWR0aDogNDRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG59XG4udHh0c2l6ZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/register-retailer/register-retailer.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/register-retailer/register-retailer.page.ts ***!
  \******************************************************************/
/*! exports provided: RegisterRetailerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRetailerPage", function() { return RegisterRetailerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_Retailer_retailer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/Retailer/retailer.service */ "./src/app/service/Retailer/retailer.service.ts");
/* harmony import */ var _service_depositor_depositor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/depositor/depositor.service */ "./src/app/service/depositor/depositor.service.ts");
/* harmony import */ var _Dto_retailer_Dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Dto/retailer.Dto */ "./src/app/Dto/retailer.Dto.ts");
/* harmony import */ var _Dto_buyingBasicFee_Dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Dto/buyingBasicFee.Dto */ "./src/app/Dto/buyingBasicFee.Dto.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_buying_basic_fee_buying_basic_fee_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/buying-basic-fee/buying-basic-fee.service */ "./src/app/service/buying-basic-fee/buying-basic-fee.service.ts");
/* harmony import */ var src_app_service_deliver_area_deliver_area_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/deliver-area/deliver-area.service */ "./src/app/service/deliver-area/deliver-area.service.ts");
/* harmony import */ var src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/user/user.service */ "./src/app/service/user/user.service.ts");
/* harmony import */ var src_app_Dto_user_Dto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Dto/user.Dto */ "./src/app/Dto/user.Dto.ts");












let RegisterRetailerPage = class RegisterRetailerPage {
    constructor(router, navCtrl, route, retailerService, depositorService, buyingFeeService, deliverAreaService, userService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.retailerService = retailerService;
        this.depositorService = depositorService;
        this.buyingFeeService = buyingFeeService;
        this.deliverAreaService = deliverAreaService;
        this.userService = userService;
        this.childCount = 0;
        this.data = new _Dto_retailer_Dto__WEBPACK_IMPORTED_MODULE_5__["RetailerDto"]();
        this.dataFee = new _Dto_buyingBasicFee_Dto__WEBPACK_IMPORTED_MODULE_6__["BuyingBasicFeeDto"]();
        this.dataUser = new src_app_Dto_user_Dto__WEBPACK_IMPORTED_MODULE_11__["UserDto"]();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data.address_ko = this.router.getCurrentNavigation().extras.state.data;
                this.mfee = this.router.getCurrentNavigation().extras.state.fee;
                this.mArea = this.router.getCurrentNavigation().extras.state.area;
            }
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.area = params["area"] || this.mArea;
            this.fee = params["fee"] || this.mfee;
        });
    }
    increment() {
        let increFee = +this.fee;
        increFee += 500;
        this.fee = increFee;
    }
    decrement() {
        let decreFee = +this.fee;
        decreFee -= 500;
        this.fee = decreFee;
    }
    goSearchLocate() {
        let navigationExtras = {
            queryParams: {
                fee: this.fee,
                area: this.area
            }
        };
        this.navCtrl.navigateForward(['search-location'], navigationExtras);
    }
    addDepositor() {
        this.childCount++;
        let row = document.createElement('div');
        row.className = 'row';
        row.innerHTML = ` 
    
      <ion-item>
      <ion-label position="floating">
        <ion-icon name="person-outline"></ion-icon>입륵자명</ion-label>
      <ion-input id="child` + this.childCount + `" type="text"></ion-input>
    </ion-item>`;
        document.querySelector('#showInputField').appendChild(row);
    }
    removeDepositor() {
        let element = document.getElementById("showInputField");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    addRetailHandler() {
        let deposNames = [];
        for (let i = 0; i <= this.childCount; i++) {
            let name = document.getElementById("child" + i).value;
            deposNames.push({ name });
        }
        // Data Create Buying Fee
        this.dataFee.buying_fee = +this.fee;
        this.dataFee.create_date = new Date();
        this.dataUser.email = localStorage.getItem('email');
        this.dataUser.buying_area_id = this.area.split(",")[1];
        this.dataUser.delivery_area_id = this.area.split(",")[3];
        this.depositorService.createDepo(deposNames).subscribe(depos => {
            this.data.depositors = depos;
            this.data.buying_fee = +this.fee;
            this.retailerService.createRetailer(this.data).subscribe(res => {
                this.buyingFeeService.createBuyingFee(this.dataFee).subscribe(res => {
                    this.userService.updateUser(this.dataUser).subscribe(res => {
                        localStorage.setItem('isRegister', 'true');
                        localStorage.setItem('isLogin', 'true');
                        this.router.navigate(['/']);
                    });
                });
            });
        });
    }
};
RegisterRetailerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_Retailer_retailer_service__WEBPACK_IMPORTED_MODULE_3__["RetailerService"] },
    { type: _service_depositor_depositor_service__WEBPACK_IMPORTED_MODULE_4__["DepositorService"] },
    { type: src_app_service_buying_basic_fee_buying_basic_fee_service__WEBPACK_IMPORTED_MODULE_8__["BuyingBasicFeeService"] },
    { type: src_app_service_deliver_area_deliver_area_service__WEBPACK_IMPORTED_MODULE_9__["DeliverAreaService"] },
    { type: src_app_service_user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }
];
RegisterRetailerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-retailer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register-retailer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/register-retailer/register-retailer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register-retailer.page.scss */ "./src/app/home/register-retailer/register-retailer.page.scss")).default]
    })
], RegisterRetailerPage);



/***/ }),

/***/ "./src/app/service/Retailer/retailer.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/Retailer/retailer.service.ts ***!
  \******************************************************/
/*! exports provided: RetailerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerService", function() { return RetailerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let RetailerService = class RetailerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.base_path = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + 'retailers';
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getRetailer() {
        return this.httpClient.get(this.base_path)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getRetailerById(retailerId) {
        return this.httpClient.get(this.base_path + '/' + retailerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Create a new item
    createRetailer(retailer) {
        return this.httpClient.post(this.base_path, retailer, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deActiveRetailer(id) {
        return this.httpClient
            .put(this.base_path + '/de-active/' + id, this.httpOptions)
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
RetailerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RetailerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RetailerService);



/***/ }),

/***/ "./src/app/service/depositor/depositor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/depositor/depositor.service.ts ***!
  \********************************************************/
/*! exports provided: DepositorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositorService", function() { return DepositorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let DepositorService = class DepositorService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.base_path = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + 'depositors';
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getDepo() {
        return this.httpClient.get(this.base_path)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Create a new item
    createDepo(depo) {
        return this.httpClient.post(this.base_path, depo, this.httpOptions)
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
DepositorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DepositorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DepositorService);



/***/ })

}]);
//# sourceMappingURL=register-retailer-register-retailer-module-es2015.js.map
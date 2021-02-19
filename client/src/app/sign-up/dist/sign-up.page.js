"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignUpPage = void 0;
var core_1 = require("@angular/core");
var SignUpPage = /** @class */ (function () {
    function SignUpPage(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.checkBoxList = [
            {
                value: "서비스 약관 동의",
                required: true,
                isChecked: false
            }, {
                value: "개인정보 처리방침 동의",
                required: true,
                isChecked: false
            }, {
                value: "만 14세 이상입니다",
                required: true,
                isChecked: false
            }, {
                value: "알림 수신 동의",
                required: false,
                isChecked: false
            }
        ];
    }
    SignUpPage.prototype.ngOnInit = function () {
        this.route.queryParams.subscribe(function (params) {
            var token = params.token;
            if (token != null) {
            }
        });
    };
    SignUpPage.prototype.checkMaster = function () {
        var _this = this;
        setTimeout(function () {
            _this.checkBoxList.forEach(function (obj) {
                obj.isChecked = _this.masterCheck;
            });
        });
    };
    SignUpPage.prototype.checkEvent = function () {
        var totalItems = this.checkBoxList.length;
        var checked = 0;
        var isAgreement = 0;
        this.checkBoxList.map(function (obj) {
            if (obj.isChecked)
                checked++;
            if (obj.isChecked && obj.required == true)
                isAgreement++;
        });
        //If all required are checked enable Next Button
        isAgreement == 3 ? this.agreements = true : this.agreements = false;
        if (checked > 0 && checked < totalItems) {
            //If even one item is checked but not all
            this.isIndeterminate = true;
            this.masterCheck = false;
        }
        else if (checked == totalItems) {
            //If all are checked
            this.masterCheck = true;
            this.isIndeterminate = false;
        }
        else {
            //If none is checked
            this.isIndeterminate = false;
            this.masterCheck = false;
        }
    };
    SignUpPage.prototype.next = function () {
        var navigationExtras = {
            queryParams: {
                user: JSON.stringify(this.user)
            }
        };
        this.navCtrl.navigateForward(['sign-up/select-region'], navigationExtras);
    };
    SignUpPage = __decorate([
        core_1.Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.page.html',
            styleUrls: ['./sign-up.page.scss']
        })
    ], SignUpPage);
    return SignUpPage;
}());
exports.SignUpPage = SignUpPage;

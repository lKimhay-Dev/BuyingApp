"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomePage = void 0;
var core_1 = require("@angular/core");
var HomePage = /** @class */ (function () {
    function HomePage(menu, navCtrl, storage) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    HomePage.prototype.ngOnInit = function () {
        alert("isLogin: ");
        // const localData = JSON.parse(JSON.parse(localStorage.getItem('userData')));
        // const localData = JSON.parse(localStorage.getItem('userData'));
        // alert("localData: "+localData)
        // // // If user not login, go to login
        // if(localData == null) this.navCtrl.navigateRoot('/login');
        // // // If localData is no data then get default
        // this.profile = localData != null ? 
        //                   localData['profile']
        //                   :
        //                   'https://images.macrumors.com/t/6jfiBfTMQZ_y6TfR50NZ9F9vJiU=/800x0/filters:quality(90)/article-new/2019/04/guest-user-250x250.jpg?lossy';
        // this.username = localData != null ? 
        //                   localData['name']
        //                   :
        //                   '손님';
        // this.email = localData != null ? 
        //                   localData['email']
        //                   :
        //                   'guestuser@gmail.com';
    };
    HomePage.prototype.closeMenu = function () {
        this.menu.close();
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss']
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;

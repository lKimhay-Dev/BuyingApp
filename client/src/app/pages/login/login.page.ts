import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(
        private google: GooglePlus,
        private platform: Platform,
        private router: Router,
        private authService: AuthService,
        public navCtrl: NavController
    ) {
    }

    ngOnInit() {

    }

    isLogin() {
        return this.authService.isLoggedIn();
    }

    loginHandler() {
        this.google.login({}).then(user => {
            console.log(user);
            this.authService.authenticate(user.accessToken).subscribe(async result => {
                this.authService.setLocalStorage(result);
                await this.router.navigate(['/']);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    logoutHandler() {
        this.google.trySilentLogin({}).then(() => {
            this.google.logout().then(async () => {
                this.authService.logout();
                await this.router.navigate(['/login']);
            });
        });
    }
}

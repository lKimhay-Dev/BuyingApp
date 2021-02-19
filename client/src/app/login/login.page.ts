import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { UserService } from '../service/user/user.service';
import { Storage } from '@ionic/storage';
import { AuthService } from '../service/auth/auth.service';
import { BuyingAreaService } from '../service/buying-area/buying-area.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private google: GooglePlus,
    private fireAuth: AngularFireAuth,
    private platform: Platform,
    private router: Router,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    this.fireAuth.getRedirectResult().then(result => {
      localStorage.setItem('token', '');
    })
  }

  doLogin() {
    if (this.platform.is('cordova') && this.platform.is('android')) {
      this.google.login({}).then(user => {
        this.authService.authenticate(user.accessToken).subscribe(result => {
          localStorage.setItem('token', user.accessToken);
          localStorage.setItem('email', user.email);
          this.router.navigate(['/sign-up']);
        })
      }).catch((error) => {
        alert(error)
      });

    } else {
      this.fireAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }

  doLogout() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
    });
  }
}
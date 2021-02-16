import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user = null;
  public loading: any;
  public isGoogleLogin: boolean = false;

  constructor(
    private google: GooglePlus,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth,
    private platform: Platform,
    public navCtrl: NavController
  ) { }

  async ngOnInit() {
    this.isGoogleLogin = JSON.parse(localStorage.getItem('isLogin'));
  }

  doLogin() {
    let params: any;
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(success => {
      console.log('success in google login');
      this.user = success.user;
      // Save user data to Local Storage
      var user = {
        profile: success.user.photoURL,
        name: success.user.displayName,
        email: success.user.email,
        uid: "600fcab0eac97643eeb34f0f"
      };
      // localStorage.setItem('userData', JSON.stringify(user) || '{}')
      // localStorage.setItem('isLogin', 'true');

      let navigationExtras: NavigationExtras = {
        queryParams: {
          user: JSON.stringify(user)
        }
      };
      this.navCtrl.navigateForward(['sign-up'], navigationExtras);

    }).catch(err => {
      console.log(err.message, 'error in google login');
    });
  }
  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
        .credential(accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((success) => {
        alert('successfully');
        this.user = success.user;
        this.loading.dismiss();
      });

  }

  doLogout() {
    this.fireAuth.signOut().then(() => {
      localStorage.setItem('isLogin', 'false');
      localStorage.removeItem('userData');
      window.location.href = '/home';
      this.isGoogleLogin = false;
    });
  }

}
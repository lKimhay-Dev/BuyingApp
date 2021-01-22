import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

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
    private platform: Platform
  ){ }

  async ngOnInit() {
    this.isGoogleLogin = JSON.parse(localStorage.getItem('isLogin'));
  }

  doLogin(){
    let params: any;
    if (this.platform.is('cordova')) {
      if (this.platform.is('android')) {
        params = {
          webClientId: '916958793295-ohiv26d4qaka48devre8dm0ej15e4pan.apps.googleusercontent.com', //  webclientID 'string'
          offline: true
        };
      } else {
        params = {};
      }
      this.google.login(params)
      .then((response) => {
        const { idToken, accessToken } = response;
        this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
        console.log(error);
        alert('error:' + JSON.stringify(error));
      });
    } else{
      console.log('Loading...');
      this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(success => {
        console.log('success in google login', success);
        this.user =  success.user;
        // Save user data to Local Storage
        var user = {
          profile: success.user.photoURL,
          name: success.user.displayName,
          email: success.user.email
        };
        localStorage.setItem('userData', JSON.stringify(user) || '{}')
        localStorage.setItem('isLogin', 'true');
        
        window.location.href = '/home';
      }).catch(err => {
        console.log(err.message, 'error in google login');
      });
    }
  }
  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
        .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
            .credential(accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((success) => {
        alert('successfully');
        this.user =  success.user;
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

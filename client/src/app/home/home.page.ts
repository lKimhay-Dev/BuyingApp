
import { Component, OnInit } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;
  profile: String;
  username: String;
  email: String;

  constructor(
    private menu:MenuController, 
    private navCtrl:NavController
  )
  { }

  ngOnInit() {
    // Get user data from Local Storage
    const localData = JSON.parse(JSON.parse(localStorage.getItem('userData')));
    
    // If user not login, go to login
    if(localData == null) this.navCtrl.navigateRoot('/login');
    
    // If localData is no data then get default
    this.profile = localData != null ? 
                      localData.profile
                      :
                      'https://images.macrumors.com/t/6jfiBfTMQZ_y6TfR50NZ9F9vJiU=/800x0/filters:quality(90)/article-new/2019/04/guest-user-250x250.jpg?lossy';
    this.username = localData != null ? 
                      localData.name
                      :
                      '손님';
    this.email = localData != null ? 
                      localData.email
                      :
                      'guestuser@gmail.com';
  }
  closeMenu(){
    this.menu.close();
  }

}
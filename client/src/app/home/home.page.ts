
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController,NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;
  profile: string = 'https://images.macrumors.com/t/6jfiBfTMQZ_y6TfR50NZ9F9vJiU=/800x0/filters:quality(90)/article-new/2019/04/guest-user-250x250.jpg?lossy';
  username: string ='손님';
  email: string = 'guestuser@gmail.com';

  constructor(
    private router: Router,
    private menu:MenuController, 
    private userService: UserService
  )
  {}

  ngOnInit() {
    let email = localStorage.getItem('email');
    this.userService.getUserByEmail(email).subscribe(res => {
      this.username = res.username;
      this.email = res.email;
      this.profile = res.guimg;
    })
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  goChangePurchaseFee(){
    this.router.navigate(['/change-purchase-fee']);
  }
  

  closeMenu(){
    this.menu.close();
  }

}
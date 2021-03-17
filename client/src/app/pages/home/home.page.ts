import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    user: any;
    profile = '';
    username = '';
    email = '';

    constructor(
        private router: Router,
        private menu: MenuController,
        private userService: UserService
    ) { }

    ngOnInit() {
        const email = localStorage.getItem('email');
        this.userService.getUserByEmail(email).subscribe(res => {
            this.username = res.username;
            this.email = res.email;
            this.profile = res.guimg;
        });
    }

    async goHome() {
        await this.router.navigate(['/home']);
    }

    async goChangePurchaseFee() {
        await this.router.navigate(['/change-purchase-fee']);
    }

    async closeMenu() {
        await this.menu.close();
    }

}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-acc-management',
    templateUrl: './acc-management.page.html',
    styleUrls: ['./acc-management.page.scss'],
})
export class AccManagementPage implements OnInit {

    constructor(private menuController: MenuController) {
    }

    ngOnInit() {
    }

    async closeMenu() {
       await this.menuController.close();
    }
}

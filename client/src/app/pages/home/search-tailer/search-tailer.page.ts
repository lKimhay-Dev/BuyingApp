import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RetailerService } from 'src/app/services/Retailer/retailer.service';

@Component({
    selector: 'app-search-tailer',
    templateUrl: './search-tailer.page.html',
    styleUrls: ['./search-tailer.page.scss'],
})
@Pipe({
    name: 'orderBy'
})
export class SearchTailerPage implements OnInit, PipeTransform {

    transform = orderBy;

    retailers: any = [];
    sortBy = 'create_date';
    sortOpt = 'desc';

    constructor(
        private retailerService: RetailerService,
        public navCtrl: NavController
    ) {
    }

    ngOnInit() {
        this.retailerService.getRetailer().subscribe(res => this.retailers = res);
    }

    async getDetail(item) {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                retailers: JSON.stringify(item)
            }
        };
        await this.navCtrl.navigateForward(['home/retailers/detail'], navigationExtras);
    }

}

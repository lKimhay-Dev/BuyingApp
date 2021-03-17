import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { BuyingBasicFeeDto } from 'src/app/dtos/buying-basic-fee.dto';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-buying-basic-fee',
    templateUrl: './buying-basic-fee.page.html',
    styleUrls: ['./buying-basic-fee.page.scss'],
})
export class BuyingBasicFeePage implements OnInit {
    buyingForm: FormGroup;
    area: any;
    user: any;
    buyingFee: any;
    data: BuyingBasicFeeDto;
    getVal: boolean;

    constructor(
        public navCtrl: NavController,
        private route: ActivatedRoute,
        public fb: FormBuilder
    ) {
        this.buyingForm = this.fb.group({
            // buyingFee: [''],
            create_date: [formatDate(Date.now(), 'yyyy.MM.dd', 'en-US')]
        });
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.area = params.area;
        });
    }

    chkVal(val) {
        val !== '' ? this.getVal = true : this.getVal = false;
    }

    next() {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                area: this.area,
                fee: this.buyingFee
            }
        };
        this.navCtrl.navigateForward(['register-retailer'], navigationExtras);
    }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { RetailerService } from 'src/app/services/Retailer/retailer.service';
import { DepositorService } from 'src/app/services/depositor/depositor.service';
import { RetailerDto } from 'src/app/dtos/retailer.dto';
import { BuyingBasicFeeDto } from 'src/app/dtos/buying-basic-fee.dto';
import { NavController } from '@ionic/angular';
import { BuyingBasicFeeService } from 'src/app/services/buying-basic-fee/buying-basic-fee.service';
import { DeliverAreaService } from 'src/app/services/deliver-area/deliver-area.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserDto } from 'src/app/dtos/user.dto';

@Component({
    selector: 'app-register-retailer',
    templateUrl: './register-retailer.page.html',
    styleUrls: ['./register-retailer.page.scss'],
})
export class RegisterRetailerPage implements OnInit {

    retailerDto: RetailerDto;
    buyingBasicFeeDto: BuyingBasicFeeDto;
    defFee: number;
    userDto: UserDto;
    user: any;
    area: any;
    fee: number;
    mUser: any; // temp store fee value from model location
    mArea: any;
    mFee: any;
    mDefFee: number;

    childCount = 0;

    constructor(
        private router: Router,
        public navCtrl: NavController,
        private route: ActivatedRoute,
        private retailerService: RetailerService,
        private depositorService: DepositorService,
        private buyingFeeService: BuyingBasicFeeService,
        private deliverAreaService: DeliverAreaService,
        private userService: UserService
    ) {
        this.retailerDto = new RetailerDto();
        this.buyingBasicFeeDto = new BuyingBasicFeeDto();
        this.userDto = new UserDto();
        this.route.queryParams.subscribe(() => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.retailerDto.address_zone_no = this.router.getCurrentNavigation().extras.state.address_zone_no;
                this.retailerDto.address_ko = this.router.getCurrentNavigation().extras.state.address_ko;
                this.mFee = this.router.getCurrentNavigation().extras.state.fee;
                this.mArea = this.router.getCurrentNavigation().extras.state.area;
                this.mDefFee = this.router.getCurrentNavigation().extras.state.mDefFee;
            }
        });
        this.fee = history.state.mDefFee;
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.area = params.area || this.mArea;
            this.fee = params.fee || this.mFee;
            this.defFee = params.fee || this.mDefFee;
        });
    }

    increment() {
        let increaseFee = +this.fee;
        increaseFee += 500;
        this.fee = increaseFee;
    }

    decrement() {
        let decreaseFee = +this.fee;
        decreaseFee -= 500;
        this.fee = decreaseFee;
    }

    async goSearchLocate() {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                fee: this.fee,
                area: this.area,
                defFee: this.defFee
            }
        };
        await this.navCtrl.navigateForward(['search-location'], navigationExtras);
    }

    addDepositor() {
        this.childCount++;
        const row = document.createElement('div');
        row.className = 'row';
        row.innerHTML = `

      <ion-item class="showInputField">
      <ion-label position="floating">
        <ion-icon name="person-outline"></ion-icon>입륵자명</ion-label>
      <ion-input id="child` + this.childCount + `" type="text"></ion-input>
    </ion-item>`;
        document.querySelector('#showInputField').appendChild(row);

    }

    removeDepositor() {
        const element = document.getElementById('showInputField');
        // console.log(element.lastChild);
        this.childCount--;
        element.removeChild(element.lastChild);
        // console.log(this.childCount);
    }

    addRetailHandler() {
        let depositNames = [];
        for (let i = 0; i <= this.childCount; i++) {
            const name = (document.getElementById('child' + i) as HTMLInputElement).value;
            if(name != "") depositNames.push({name});
        }
        
        // console.log(this.childCount);
        // console.log(depositNames);
        
        // Data Create Buying Fee
        this.buyingBasicFeeDto.buying_fee = this.defFee;
        this.buyingBasicFeeDto.create_date = new Date();

        this.userDto.email = localStorage.getItem('email');
        this.userDto.buying_area_id = this.area.split(',')[1];
        this.userDto.delivery_area_id = this.area.split(',')[3];

        this.depositorService.createDepo(depositNames).subscribe(deposit => {
            this.retailerDto.depositors = deposit;
            this.retailerDto.buying_fee = +this.fee;

            this.retailerService.createRetailer(this.retailerDto).subscribe(() => {
                this.buyingFeeService.createBuyingFee(this.buyingBasicFeeDto).subscribe(() => {
                    this.userService.updateUser(this.userDto).subscribe(async () => {
                        localStorage.setItem('isRegister', 'true');
                        localStorage.setItem('isLogin', 'true');
                        await this.router.navigate(['/']);
                    });
                });
            });
            this.clearForm();
        });
    }

    clearForm() {
        const element = document.getElementById('showInputField');
        this.retailerDto.retailer_name = '';
        this.retailerDto.phone_number = '';
        this.retailerDto.address_zone_no = '';
        this.retailerDto.address_ko = '';
        element.removeChild(element.lastChild);

        // for (let i = 0; i <= this.childCount; i++) {
        //     document.getElementById('child' + i).innerHTML = '';
        // }
    }

    phoneNoFormatHandler() {
        let phoneNo = this.retailerDto.phone_number;
        phoneNo = phoneNo.replace(/\D/gi, '');

        if (phoneNo.length <= 3) {
            phoneNo = phoneNo.replace(/^(\d{0,3})/, '$1');
        } else if (phoneNo.length <= 6) {
            phoneNo = phoneNo.replace(/^(\d{0,3})(\d{0,3})/, '$1-$2');
        } else if (phoneNo.length <= 9) {
            phoneNo = phoneNo.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '$1-$2-$3');
        } else {
            phoneNo = phoneNo.substring(0, 10);
            phoneNo = phoneNo.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '$1-$2-$3');
        }
        this.retailerDto.phone_number = phoneNo;
    }
}


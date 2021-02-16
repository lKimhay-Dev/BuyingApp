import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { RetailerService } from '../../service/Retailer/retailer.service';
import { DepositorService } from '../../service/depositor/depositor.service';
import { RetailerDto } from '../../Dto/retailer.Dto';
import { BuyingBasicFeeDto } from '../../Dto/buyingBasicFee.Dto';
import { BuyingAreaDto } from '../../Dto/buyingArea.Dto';
import { DepositorDto } from '../../Dto/depositor.Dto';
import { NavController } from '@ionic/angular';
import { BuyingBasicFeeService } from 'src/app/service/buying-basic-fee/buying-basic-fee.service';
import { BuyingAreaService } from 'src/app/service/buying-area/buying-area.service';
import { DeliverAreaService } from 'src/app/service/deliver-area/deliver-area.service';
import { UserService } from 'src/app/service/user/user.service';
import { UserDto } from 'src/app/Dto/user.Dto';

@Component({
  selector: 'app-register-retailer',
  templateUrl: './register-retailer.page.html',
  styleUrls: ['./register-retailer.page.scss'],
})
export class RegisterRetailerPage implements OnInit {

  data: RetailerDto;
  dataFee: BuyingBasicFeeDto;
  dataUser: UserDto;
  user: any;
  area: any;
  fee: any;
  mfee: any; // temp store fee value from model location

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
    this.data = new RetailerDto();
    this.dataFee = new BuyingBasicFeeDto();
    this.dataUser = new UserDto();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data.address_ko = this.router.getCurrentNavigation().extras.state.data;
        this.mfee = this.router.getCurrentNavigation().extras.state.fee;
      }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params["user"];
      this.area = params["area"];
      this.fee = params["fee"] || this.mfee
      console.log(params);
    });
  }

  increment() {
    let increFee = Number(this.fee);
    increFee += 500;
    this.fee = increFee;
  }

  decrement() {
    let decreFee = Number(this.fee);
    decreFee -= 500;
    this.fee = decreFee;
  }

  goSearchLocate() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          fee: this.fee
      }
    };
    this.navCtrl.navigateForward(['search-location'], navigationExtras);
  }

  childCount = 0;
  addDepositor() {
    this.childCount++;
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = ` 
    
      <ion-item>
      <ion-label position="floating">
        <ion-icon name="person-outline"></ion-icon>입륵자명</ion-label>
      <ion-input id="child`+ this.childCount + `" type="text"></ion-input>
    </ion-item>`;
    document.querySelector('#showInputField').appendChild(row);
  }

  removeDepositor() {
    let element = document.getElementById("showInputField");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  
  addRetailHandler() {
    let deposNames = [];
    for (let i = 0; i <= this.childCount; i++) {
      let name = (document.getElementById("child" + i) as HTMLInputElement).value;
      deposNames.push({name})
    }

    // Data Create Buying Fee
    this.dataFee.buying_fee = this.fee;
    this.dataFee.create_date = new Date();

    // Data Create User
    var user = JSON.parse(JSON.parse(this.user));
    this.dataUser.username = user.name;
    this.dataUser.email = user.email;
    this.dataUser.buying_area_id = this.area.split(",")[1];
    this.dataUser.delivery_area_id = this.area.split(",")[3];

    this.depositorService.createDepo(deposNames).subscribe(depos => {
      this.data.depositors = depos;

      this.retailerService.createRetailer(this.data).subscribe(res => {

        this.buyingFeeService.createBuyingFee(this.dataFee).subscribe(res => {
          
          this.userService.createUser(this.dataUser).subscribe(res => {
            console.log(res);
            localStorage.setItem('userData', this.user || '{}')
            localStorage.setItem('isLogin', 'true');

            this.router.navigate(['home']);
          })
        })
      })
    });

  }

}


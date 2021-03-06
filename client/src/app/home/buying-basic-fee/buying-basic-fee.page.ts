import { formatDate } from "@angular/common";
import { Component, NgZone, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BuyingBasicFeeService } from '../../service/buying-basic-fee/buying-basic-fee.service';
import { BuyingBasicFeeDto } from '../../Dto/buyingBasicFee.Dto';
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-buying-basic-fee",
  templateUrl: "./buying-basic-fee.page.html",
  styleUrls: ["./buying-basic-fee.page.scss"],
})
export class BuyingBasicFeePage implements OnInit {
  buyingfeeForm: FormGroup;
  area: any;
  user: any;
  buying_fee: any;
  data:BuyingBasicFeeDto;
  getVal:boolean;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public fb: FormBuilder
  ) {
    this.buyingfeeForm = this.fb.group({
      // buying_fee: [''],
      create_date: [formatDate(Date.now(), 'yyyy.MM.dd', 'en-US')]
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.area =params["area"];
    });
  }

  chkVal(val){
    val != "" ? this.getVal = true : this.getVal = false;
  }

  next(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          area: this.area,
          fee: this.buying_fee
      }
    };
    this.navCtrl.navigateForward(['register-retailer'], navigationExtras);
  }
    
  }

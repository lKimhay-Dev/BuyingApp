import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyingBasicFeeService } from '../../service/buying-basic-fee/buying-basic-fee.service';
import { BuyingBasicFeeDto } from '../../Dto/buyingBasicFee.Dto';
 

@Component({
  selector: 'app-change-purchase-fee',
  templateUrl: './change-purchase-fee.page.html',
  styleUrls: ['./change-purchase-fee.page.scss'],
})
export class ChangePurchaseFeePage implements OnInit {

  updateBasicFeeForm: FormGroup;
  id: string;
  data: BuyingBasicFeeDto

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private buyingFeeService:BuyingBasicFeeService
  ){
    this.data=new BuyingBasicFeeDto();
  }   

  ngOnInit() { 
    this.buyingFeeService.getBuyingFee().subscribe(res =>{
      this.data.buying_fee = res.buying_fee;
    })
  }

  modifyFee() {
    this.data.update_date = new Date(Date.now());
  }
  
  updateForm() {
    this.buyingFeeService.createBuyingFee(this.data).subscribe((response) => {
      this.router.navigate(['home']);
    });
  }
 
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage{

  isIndeterminate:boolean;
  masterCheck:boolean;
  checkBoxList:any;
  agreements:boolean;

  constructor(
    private router: Router,
  ){
    this.checkBoxList = [
      {
        value:"서비스 약관 동의",
        required:true,
        isChecked:false
      },{
        value:"개인정보 처리방침 동의",
        required:true,
        isChecked:false
      },{
        value:"만 14세 이상입니다",
        required:true,
        isChecked:false
      },{
        value:"알림 수신 동의",
        required:false,
        isChecked:false
      }
    ];
  }

  checkMaster() {
    setTimeout(()=>{
      this.checkBoxList.forEach(obj => {
        obj.isChecked = this.masterCheck;
      });
    });
  }

  checkEvent() {
    const totalItems = this.checkBoxList.length;
    let checked = 0;
    let isAgreement = 0;
    this.checkBoxList.map(obj => {
      if (obj.isChecked) checked++;
      if (obj.isChecked && obj.required==true) isAgreement ++;
    });

    //If all required are checked enable Next Button
    isAgreement == 3 ? this.agreements = true : this.agreements = false;
    
    if (checked > 0 && checked < totalItems) {
      //If even one item is checked but not all
      this.isIndeterminate = true;
      this.masterCheck = false;
    } else if (checked == totalItems) {
      //If all are checked
      this.masterCheck = true;
      this.isIndeterminate = false;
    } else {
      //If none is checked
      this.isIndeterminate = false;
      this.masterCheck = false;
    }
  }

  next(){
    this.router.navigate(['/sign-up/select-region']);
  }

}

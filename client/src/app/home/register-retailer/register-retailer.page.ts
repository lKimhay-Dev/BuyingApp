import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-retailer',
  templateUrl: './register-retailer.page.html',
  styleUrls: ['./register-retailer.page.scss'],
})
export class RegisterRetailerPage implements OnInit {
  
  AddRegisterRetailer:FormGroup;
  public number=3000;

  constructor(
    private router: Router,
  ) {
   }

  ngOnInit() { 
  }

   increment () {
    this.number+=500;
  }
  
   decrement () {
    this.number-=500;
  }

  goSearchLocate(){
    this.router.navigate(['/search-location']);
  }


  addDepositor(){
    let row = document.createElement('div');   
      row.className = 'row'; 
      row.innerHTML = ` 
    
      <ion-item>
      <ion-label position="floating">
        <ion-icon name="person-outline"></ion-icon>입륵자명</ion-label>
      <ion-input  type="text"></ion-input>
    </ion-item>`; 
      document.querySelector('#showInputField').appendChild(row); 
  } 

  removeDepositor(){
    
    let element = document.getElementById("showInputField");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  AddRegisterRetailerForm(){

  }

}

import { formatDate } from "@angular/common";
import { Component, NgZone, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-buying-basic-fee",
  templateUrl: "./buying-basic-fee.page.html",
  styleUrls: ["./buying-basic-fee.page.scss"],
})
export class BuyingBasicFeePage implements OnInit {
  buyingfeeForm: FormGroup;

  constructor(
    private zone: NgZone,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.buyingfeeForm = this.fb.group({
      buying_fee: [''],
      create_date: [formatDate(Date.now(), 'yyyy.MM.dd', 'en-US')]
    })
  }

  ngOnInit() {
    
  }

  onFormSubmit() {}

  }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarModalOptions,DayConfig } from 'ion2-calendar';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

// ====== Ion2-calendar =========================
  daysConfig: DayConfig[] = [];
  dateRange: { from: string; to: string; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  optionsRange: CalendarModalOptions = {
    pickMode: 'range',
    color: 'danger',
    canBackwardsSelected: true,
    monthFormat: 'YYYY 년 MM 월 ',
    // monthPickerFormat:['일월','이월','삼월','사월','오월','유월','칠월','팔월','구월','시월','십일월','십이월'],
    weekdays: ['일', '월', '화', '수', '목', '금', '토'],
    daysConfig: this.daysConfig
  };
// ==================================================================

  retailer: any;
  startDate;
  endDate;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // for (let i = 0; i < 31; i++) {
    //   // this.daysConfig.push({
    //   //   date: new Date(2021, 1, i + 1),
    //   //   subTitle: `$${i + 1}`,
    //   //   cssClass: 'test'
    //   // });
    this.daysConfig.push({
      date: new Date(2021, 1, 9),
      cssClass: 'cp'
    })
    this.daysConfig.push({
      date: new Date(2021, 1, 12),
      cssClass: 'ar'
    })
      
    this.route.queryParams.subscribe(params => {
      this.retailer = JSON.parse(params["data"]);
    });
  }

  onChange($event) {
    this.startDate = $event.from._d;
    this.endDate = $event.to._d;
    console.log("From: " + this.startDate + " To: " + this.endDate);
  }
  
  purHistory(){
    alert("Comming Soon!");
  }

}

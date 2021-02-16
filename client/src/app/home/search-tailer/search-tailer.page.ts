import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { RetailerService } from '../../service/Retailer/retailer.service';
import { orderBy } from 'lodash';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

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

  data:any=[];
  sortBy: string = "create_date";
  sortOpt: string = "desc";

  constructor(
    private retailerService:RetailerService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.retailerService.getRetailer().subscribe(res =>this.data=res)
  }

  getDetail(item){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          data: JSON.stringify(item)
      }
    };
    this.navCtrl.navigateForward(['home/retailer/detail'], navigationExtras);
  }

}

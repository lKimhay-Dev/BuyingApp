import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular'
import { ModalTailerPage } from './modal-tailer/modal-tailer.page'
import { RetailerService } from '../../service/Retailer/retailer.service';
import { RetailerDto } from '../../Dto/retailer.Dto';
import { orderBy } from 'lodash';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.page.html',
  styleUrls: ['./retailer.page.scss'],
})

@Pipe({
  name: 'orderBy'
})

export class RetailerPage implements OnInit, PipeTransform {

  transform = orderBy;

  datas: any = [];
  sortBy: string = "create_date";
  sortOpt: string = "desc";

  constructor(
    private modalController: ModalController,
    private retailerService: RetailerService,
    public navCtrl: NavController
  ) {
    this.datas = new RetailerDto();
  }

  ngOnInit() {
    this.retailerService.getRetailer().subscribe(res => {
      this.datas = res
    });
  }

  getDetail(item){
    console.log(item);
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
          data: JSON.stringify(item)
      }
    };
    this.navCtrl.navigateForward(['home/retailer/detail'], navigationExtras);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalTailerPage,
      cssClass: 'my-custom-modal-css'
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data']);
        switch (data['data']){
          case '등록순': {
            this.sortBy = "create_date";
            this.sortOpt = "desc";
            break;
          }
          case '오름차순': {
            this.sortBy = "retailer_name";
            this.sortOpt = "asc";
            break;
          }
          case '내림차순': {
            this.sortBy = "retailer_name";
            this.sortOpt = "desc";
            break;
          }
          default: { 
            this.sortBy = "create_date";
            this.sortOpt = "desc";
            break; 
         } 
        }
      });
    return await modal.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { BuyingAreaService } from 'src/app/service/buying-area/buying-area.service';
import { DeliverAreaService } from 'src/app/service/deliver-area/deliver-area.service';
import { ModalAreaPage } from './modal-area/modal-area.page';
import { ModalDeliverAreaPage } from './modal-deliver-area/modal-deliver-area.page';

@Component({
  selector: 'app-select-region',
  templateUrl: './select-region.page.html',
  styleUrls: ['./select-region.page.scss'],
})
export class SelectRegionPage implements OnInit {

  user: any;
  area: any;
  buyAreaId: any;
  buyArea: string = "-- 선택해 주세요 --";
  deliverAreaId: any;
  deliverArea: string = "-- 선택해 주세요 --";
  seletedArea = false;

  constructor(
    private modalController: ModalController,
    private buyingAreaService: BuyingAreaService,
    private deliverAreaService: DeliverAreaService,
    private route: ActivatedRoute,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params["user"]);
    });
    // console.log(this.user);
  }

  async modelBuyingArea() {
    const modal = await this.modalController.create({
      component: ModalAreaPage,
      componentProps: { area: this.buyArea },
    });
    modal.onDidDismiss()
      .then((data) => {
        if(data['data'] != null){
          this.buyingAreaService.getBuyingAreaById(data['data']).subscribe(res => {
            this.buyAreaId = res._id;
            this.buyArea = res.area_ko;
            this.seletedArea = true;
          })
        } else {
          this.buyArea = "-- 선택해 주세요 --"
          this.seletedArea = false;
        }
      });
    return await modal.present();
  }
  
  async modelDeliverArea() {
    const modal = await this.modalController.create({
      component: ModalDeliverAreaPage,
      componentProps: { area: this.deliverArea },
    });
    modal.onDidDismiss()
      .then((data) => {
        if(data['data'] != null){
          this.deliverAreaService.getDeliverAreaById(data['data']).subscribe(res => {
            this.deliverAreaId = res._id;
            this.deliverArea = res.area_ko;
            this.seletedArea = true;
          })
        } else {
          this.buyArea = "-- 선택해 주세요 --"
          this.seletedArea = false;
        }
      });
    return await modal.present();
  }

  next(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          user: JSON.stringify(this.user),
          area: "buyArea,"+this.buyAreaId+",deliverArea,"+this.deliverAreaId
      }
    };
    this.navCtrl.navigateForward(['buying-basic-fee'], navigationExtras);
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
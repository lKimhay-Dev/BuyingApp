import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { RetailerDto } from 'src/app/Dto/retailer.Dto';
import { RetailerService } from '../../../../service/Retailer/retailer.service';
 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage{

  data: RetailerDto

  constructor(
    private modalCtrl: ModalController,
    private retialerService:RetailerService,
    private navParams: NavParams
    ) { }

  ngOnInit(){
    const id: string = this.navParams.get('id');
    this.retialerService.getRetailerById(id).subscribe(res => {
      this.data = res
      console.log(this.data);
    });
  }
  
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}

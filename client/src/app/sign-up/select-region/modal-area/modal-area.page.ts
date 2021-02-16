import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BuyingAreaService } from 'src/app/service/buying-area/buying-area.service';

@Component({
  selector: 'app-modal-area',
  templateUrl: './modal-area.page.html',
  styleUrls: ['./modal-area.page.scss'],
})
export class ModalAreaPage implements OnInit {

  stateBuyArea: any;

  constructor(
    private modalController: ModalController,
    private buyingAreaService: BuyingAreaService
  ) { }

  ngOnInit() {
    this.buyingAreaService.getBuyingArea().subscribe(res => {
      this.stateBuyArea = res;
    })
  }

  selectArea(event) {
    // console.log(event.target.value);
    this.modalController.dismiss(event.target.value);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}

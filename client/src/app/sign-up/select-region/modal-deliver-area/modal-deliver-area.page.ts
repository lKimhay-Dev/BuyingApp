import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeliverAreaService } from 'src/app/service/deliver-area/deliver-area.service';

@Component({
  selector: 'app-modal-deliver-area',
  templateUrl: './modal-deliver-area.page.html',
  styleUrls: ['./modal-deliver-area.page.scss'],
})
export class ModalDeliverAreaPage implements OnInit {

  stateDeliverArea: any;

  constructor(
    private modalController: ModalController,
    private deliverAreaService: DeliverAreaService) { }

  ngOnInit() {
    this.deliverAreaService.getDeliverArea().subscribe(res => {
      this.stateDeliverArea = res;
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

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-area',
  templateUrl: './modal-area.page.html',
  styleUrls: ['./modal-area.page.scss'],
})
export class ModalAreaPage implements OnInit {

  stateBuyArea: any;

  constructor(private modalController: ModalController) 
  { 
    // this.stateBuyArea = [
    //   {
    //     value:"등록순",
    //     required:true,
    //     isChecked:false
    //   },{
    //     value:"오름차순",
    //     required:true,
    //     isChecked:false
    //   },{
    //     value:"내림차순",
    //     required:true,
    //     isChecked:false
    //   }
    // ];
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}

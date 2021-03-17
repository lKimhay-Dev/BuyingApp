import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-tailer',
  templateUrl: './modal-tailer.page.html',
  styleUrls: ['./modal-tailer.page.scss'],
})
export class ModalTailerPage implements OnInit {

  items: Array<any>;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.items = [
      { label: '등록순'},
      { label: '오름차순'},
      { label: '내림차순'}
  ];
  }

  selectSort(event) {
    console.log(event.target.value);
    this.modalController.dismiss(event.target.value);
  }

}

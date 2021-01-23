import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-letra-modal',
  templateUrl: './letra-modal.component.html',
  styleUrls: ['./letra-modal.component.scss'],
})
export class LetraModalComponent implements OnInit {

  @Input() letra: string;
  @Input() nombre: string;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}

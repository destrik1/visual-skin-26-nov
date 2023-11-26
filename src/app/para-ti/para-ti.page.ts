import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-para-ti',
  templateUrl: './para-ti.page.html',
  styleUrls: ['./para-ti.page.scss'],
})
export class ParaTiPage implements OnInit {
  nombreUsuario: string = '';

  constructor(public alertController: AlertController) {
   }

  ngOnInit() {
  }
}
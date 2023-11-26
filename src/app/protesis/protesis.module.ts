import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtesisPageRoutingModule } from './protesis-routing.module';

import { ProtesisPage } from './protesis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtesisPageRoutingModule
  ],
  declarations: [ProtesisPage]
})
export class ProtesisPageModule {}

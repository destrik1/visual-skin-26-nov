import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParaTiPageRoutingModule } from './para-ti-routing.module';

import { ParaTiPage } from './para-ti.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParaTiPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ParaTiPage]
})
export class ParaTiPageModule {}

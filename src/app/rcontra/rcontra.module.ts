import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RcontraPageRoutingModule } from './rcontra-routing.module';

import { RcontraPage } from './rcontra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RcontraPageRoutingModule
  ],
  declarations: [RcontraPage]
})
export class RcontraPageModule {}

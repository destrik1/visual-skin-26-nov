import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtesisPage } from './protesis.page';

const routes: Routes = [
  {
    path: '',
    component: ProtesisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtesisPageRoutingModule {}

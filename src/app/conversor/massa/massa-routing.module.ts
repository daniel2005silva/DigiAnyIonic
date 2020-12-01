import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassaPage } from './massa.page';

const routes: Routes = [
  {
    path: '',
    component: MassaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MassaPageRoutingModule {}

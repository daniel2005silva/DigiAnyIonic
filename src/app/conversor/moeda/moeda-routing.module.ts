import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoedaPage } from './moeda.page';

const routes: Routes = [
  {
    path: '',
    component: MoedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoedaPageRoutingModule {}

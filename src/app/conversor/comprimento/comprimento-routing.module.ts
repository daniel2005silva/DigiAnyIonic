import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprimentoPage } from './comprimento.page';

const routes: Routes = [
  {
    path: '',
    component: ComprimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprimentoPageRoutingModule {}

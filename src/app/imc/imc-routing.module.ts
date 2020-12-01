import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImcPage } from './imc.page';

const routes: Routes = [
  {
    path: '',
    component: ImcPage
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImcPageRoutingModule {}

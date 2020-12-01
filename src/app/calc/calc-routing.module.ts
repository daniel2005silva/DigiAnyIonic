import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcPage } from './calc.page';

const routes: Routes = [
  {
    path: '',
    component: CalcPage
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
export class CalcPageRoutingModule {}

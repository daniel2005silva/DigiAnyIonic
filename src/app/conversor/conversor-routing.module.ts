import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversorPage } from './conversor.page';

const routes: Routes = [
  {
    path: '',
    component: ConversorPage
  },
 
  {
    path: 'comprimento',
    loadChildren: () => import('./comprimento/comprimento.module').then( m => m.ComprimentoPageModule)
  },
  {
    path: 'massa',
    loadChildren: () => import('./massa/massa.module').then( m => m.MassaPageModule)
  },
  {
    path: 'capacidade',
    loadChildren: () => import('./capacidade/capacidade.module').then( m => m.CapacidadePageModule)
  },
  {
    path: 'temperatura',
    loadChildren: () => import('./temperatura/temperatura.module').then( m => m.TemperaturaPageModule)
  },
  {
    path: 'moeda',
    loadChildren: () => import('./moeda/moeda.module').then( m => m.MoedaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversorPageRoutingModule {}

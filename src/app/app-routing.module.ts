import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'calc',
    loadChildren: () => import('./calc/calc.module').then( m => m.CalcPageModule)
  },
  {
    path: 'imc',
    loadChildren: () => import('./imc/imc.module').then( m => m.ImcPageModule)
  },
  {
    path: 'conversor',
    loadChildren: () => import('./conversor/conversor.module').then( m => m.ConversorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

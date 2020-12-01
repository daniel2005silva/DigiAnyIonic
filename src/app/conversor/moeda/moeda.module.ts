import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoedaPageRoutingModule } from './moeda-routing.module';

import { MoedaPage } from './moeda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoedaPageRoutingModule
  ],
  declarations: [MoedaPage]
})
export class MoedaPageModule {}

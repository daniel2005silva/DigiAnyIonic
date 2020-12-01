import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MassaPageRoutingModule } from './massa-routing.module';

import { MassaPage } from './massa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MassaPageRoutingModule
  ],
  declarations: [MassaPage]
})
export class MassaPageModule {}

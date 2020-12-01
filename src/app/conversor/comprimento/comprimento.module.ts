import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprimentoPageRoutingModule } from './comprimento-routing.module';

import { ComprimentoPage } from './comprimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprimentoPageRoutingModule
  ],
  declarations: [ComprimentoPage]
})
export class ComprimentoPageModule {}

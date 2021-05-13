import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicrolessonPageRoutingModule } from './microlesson-routing.module';

import { MicrolessonPage } from './microlesson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicrolessonPageRoutingModule
  ],
  declarations: [MicrolessonPage]
})
export class MicrolessonPageModule {}

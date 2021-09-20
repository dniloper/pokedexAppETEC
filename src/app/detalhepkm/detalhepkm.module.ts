import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhepkmPageRoutingModule } from './detalhepkm-routing.module';

import { DetalhepkmPage } from './detalhepkm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhepkmPageRoutingModule
  ],
  declarations: [DetalhepkmPage]
})
export class DetalhepkmPageModule {}

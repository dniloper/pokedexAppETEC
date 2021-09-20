import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhepkmPage } from './detalhepkm.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhepkmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhepkmPageRoutingModule {}

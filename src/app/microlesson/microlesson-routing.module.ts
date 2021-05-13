import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicrolessonPage } from './microlesson.page';

const routes: Routes = [
  {
    path: '',
    component: MicrolessonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicrolessonPageRoutingModule {}

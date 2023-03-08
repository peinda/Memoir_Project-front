import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @ts-ignore
import { CouvertureAppliPage } from './couverture-appli.page';

const routes: Routes = [
  {
    path: '',
    component: CouvertureAppliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouvertureAppliPageRoutingModule {}

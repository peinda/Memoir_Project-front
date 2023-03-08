import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    redirectTo: 'couverture-appli',
    pathMatch: 'full'
  },
  {
    path: 'couverture-appli',
    loadChildren: () => import('./views/pages/couverture-appli/couverture-appli.module').then(m => m.CouvertureAppliPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'verification-tel',
    loadChildren: () => import('./views/pages/verification-tel/verification-tel.module').then( m => m.VerificationTelPageModule)
  },
  {
    path: 'create-compte',
    loadChildren: () => import('./views/pages/create-compte/create-compte.module').then( m => m.CreateComptePageModule)
  },
  {
    path: 'verification-code',
    loadChildren: () => import('./views/pages/verification-code/verification-code.module').then( m => m.VerificationCodePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

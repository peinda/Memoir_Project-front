import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'produit',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        loadChildren: () => import('../../Views/home/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'produit',
        loadChildren: () => import('../../Views/home/produit/produit.module').then( m => m.ProduitPageModule)
      },
      {
        path: 'panier',
        loadChildren: () => import('../../Views/home/panier/panier.module').then( m => m.PanierPageModule)
      },
      {
        path: 'historique',
        loadChildren: () => import('../../Views/home/historique/historique.module').then( m => m.HistoriquePageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}


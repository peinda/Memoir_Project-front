import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import {StorageService} from "../../../Core/Services/storage.service";

@Component({
  selector: 'app-couverture-appli',
  templateUrl: './couverture-appli.page.html',
  styleUrls: ['./couverture-appli.page.scss'],
})
export class CouvertureAppliPage implements OnInit {

  constructor(private loading: LoadingController, private router: Router) { }

  ngOnInit() {

    this.loading.create({
      cssClass: 'Classe',
    })
      .then(chargement => {

        chargement.present();
        setTimeout(() => {
          chargement.dismiss();
          this.router.navigate(['verification-tel']);
        }, 1000);
        // @ts-ignore
        this.loading.close;

      }) ;
  }
}

import { Component, OnInit } from '@angular/core';
import {CartModalPage} from "./cart-modal/cart-modal.page";
import {ModalController} from "@ionic/angular";
import {ProductService} from "../../../Core/Services/product.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {
  dataProduct: any;
  base64_response: any;
  constructor(private modalCtrl: ModalController, private produitSrv: ProductService) {}
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.produitSrv.getProducts().subscribe(
      (data: any) => {
        this.dataProduct = data['hydra:member'];
        this.base64_response = data['hydra:member'].photo;
        console.log(this.dataProduct);
      },
      error => {
        console.log(error);
      }
    );
  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    })
    modal.present();
  }

}

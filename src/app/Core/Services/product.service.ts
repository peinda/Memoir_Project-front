import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public baseUrl = environment.baseUrl;
  public productUrl = '/admin/produits';

  constructor( private http: HttpClient, private router: Router) {
  }
  getProducts() {
    return this.http.get<any>(this.baseUrl + this.productUrl);
  }
  getProductsById(id: number){
    return this.http.get<any>( this.baseUrl + this.productUrl + '/' + id );
  }
}

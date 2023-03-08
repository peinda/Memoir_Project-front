import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Storage} from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  helpers: any;
  public baseUrl = environment.baseUrl;
  public authentifUrl ='/login_check';
  constructor(private http: HttpClient, private router: Router, private storage: Storage) {}
  authentif(data: any){
    return this.http.post<any>(this.baseUrl + this.authentifUrl, data);
  }


  decodeToken(token: any) {
    this.helpers = new JwtHelperService();
    return this.helpers.decodeToken(token);
  }


}

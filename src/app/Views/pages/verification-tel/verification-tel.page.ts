// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {AlertController, LoadingController} from "@ionic/angular";
import {AuthService} from "../../../Core/Services/auth.service";
import {Storage} from "@ionic/storage";


@Component({
  selector: 'app-verification-tel',
  templateUrl: './verification-tel.page.html',
  styleUrls: ['./verification-tel.page.scss'],
})
export class VerificationTelPage implements OnInit {
  veritelForm = this.formBuilder.group({
      // eslint-disable-next-line max-len
      username: ['', [Validators.required, Validators.pattern('^7[7|6|8|0|5][0-9]{7}$')]],
      password: ['passer123'],
    }
  );
  submitted = false;
  constructor(private storage: Storage, private router: Router, private formBuilder: FormBuilder, private authSrv: AuthService, private alertCtrl: AlertController, private loadingController: LoadingController) {}

  ngOnInit() {}
  get username() { return this.veritelForm.get('username'); }
  get errorControl(){ return this.veritelForm.controls; }

  // @ts-ignore
  async onSubmit() {
    await this.storage.create();
    this.submitted = true;
    if (this.veritelForm.invalid) {
      return null;
    }
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.veritelForm.value.password = 'passer123';
    this.authSrv.authentif(this.veritelForm.value).subscribe(
      async data => {
        await this.storage.set('token', data.token);
        // const tokenDecode = this.authSrv.decodeToken(data.token);
        await loading.dismiss();
        // this.veritelForm.reset();

        await this.router.navigate(['/home']);
      },
      async (error: any) => {
        await loading.dismiss();
        console.log('not');
        await this.presentAlert();
      }
    );
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'error',
      buttons: ['OK']
    });
    await alert.present();
  }
}


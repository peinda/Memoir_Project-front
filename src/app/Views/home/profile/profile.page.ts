import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
    const token = this.storage.get('token');
    console.log(token);
  }

}

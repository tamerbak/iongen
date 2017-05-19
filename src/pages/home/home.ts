import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isWeb:boolean = false;
  tabBarElement:any;

  constructor(public navCtrl: NavController, private platform: Platform) {

    this.isWeb = !platform.is('cordova');

    //this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
  }
  ionViewDidEnter()
  {
    //this.tabBarElement.style.display = 'none';

  }

  goToPage(){
    //this.navCtrl.push()
  }

}

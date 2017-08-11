import {Component, ViewChild} from '@angular/core';
import {NavController, Platform, App, ViewController, Events} from 'ionic-angular';
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isWeb:boolean = false;
  tabBarElement:any;
  @ViewChild('contentMenu') nav2;

  constructor(public navCtrl: NavController,
              private platform: Platform,
              public appCtrl:App,
              public viewCtrl:ViewController, public event:Events) {

    this.isWeb = !platform.is('cordova');

    //this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
  }
  ionViewDidEnter()
  {
    //this.tabBarElement.style.display = 'none';

  }

  goToPage(){
    //this.appCtrl.getRootNav().push(AboutPage);
    //this.appCtrl.getActiveNav().push(ContactPage);
    //debugger;
    this.event.publish('navigate:side', {page:ContactPage});
    //this.navCtrl.push(ContactPage);
    //this.nav2.push(ContactPage);
    //this.viewCtrl.getNav().push(ContactPage);
    //let nav:any = this.appCtrl.getRootNav().getActiveChildNav();
    //nav..push(ContactPage);
    //this.navCtrl.push()
  }

}

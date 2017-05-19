import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {Platform} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ContactPage;

  tabBarElement:any;

  constructor(private platform:Platform) {

    //".tabbar.show-tabbar" --> visibility: hidden

    let test: any = document.getElementsByClassName('tabbar.show-tabbar');

    this.tabBarElement = document.querySelector('#tabs');
    /*if (!platform.is('cordova')){
      document.getElementsByClassName('tabbar show-tabbar')[0].style.visibility = 'hidden';
    }*/

  }


  ionViewWillEnter(){
    if (!this.platform.is('cordova')){
      this.tabBarElement = document.querySelector('#tabs');
      this.tabBarElement.style.height = "calc(100% + 56px)";
    }
  }
}

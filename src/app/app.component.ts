import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
var test:boolean;

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
  @ViewChild('contentMenu') nav2;

  rootPage:any = TabsPage;
  rootPage2:any = AboutPage;
  rootPage3:any = AboutPage;

  cards: any;
  listTitle:string;
  appPages: PageInterface[] = [
    { title: 'Schedule', name: 'Tabs', component: TabsPage, tabComponent: "", index: 0, icon: 'calendar' },
    { title: 'Speakers', name: 'Tabs', component: TabsPage, tabComponent: "", index: 1, icon: 'contacts' },
    { title: 'Map', name: 'Tabs', component: TabsPage, tabComponent: "", index: 2, icon: 'map' },
    { title: 'About', name: 'Tabs', component: TabsPage, tabComponent: "", index: 3, icon: 'information-circle' }
  ];
  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', component: "", icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: "", icon: 'help' },
    { title: 'Logout', name: 'Tabs', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', component: "", icon: 'log-in' },
    { title: 'Support', name: 'SupportPage', component: "", icon: 'help' },
    { title: 'Signup', name: 'SignupPage', component: "", icon: 'person-add' }
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public event:Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.listTitle = "Ma liste des cartes";

    this.cards = [{
      title: "Jobyer 1",
      content: "contenu 1",
      actionName: "action 1"
    },{
      title: "Jobyer 2",
      content: "contenu 2",
      actionName: "action 2"
    },{
      title: "Jobyer 3",
      content: "contenu 3",
      actionName: "action 3"
    },{
      title: "Jobyer 4",
      content: "contenu 4",
      actionName: "action 4"
    },{
      title: "Jobyer 5",
      content: "contenu 5",
      actionName: "action 5"
    }]


  }

  ngOnInit() {
    this.event.subscribe('navigate:side', (data:any) => {
      this.nav2.push(data.page);
    });
  }


  openPage(){

  }

  openTutorial(){

  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

  /*ionViewDidEnter(){
    if (!this.platform.is('cordova')){
      debugger;
      document.getElementsByClassName('tabbar show-tabbar')[0].style.visibility = 'hidden';
    }
  }*/
}

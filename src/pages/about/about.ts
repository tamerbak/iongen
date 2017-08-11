import {Component, ViewChild} from '@angular/core';
import {NavController, App, ViewController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  title:string;
  content:string;
  actionName:string;
  cards: any;
  listTitle:string;
  actions: any;
  @ViewChild('contentMenu') nav;

  constructor(public navCtrl: NavController, public appCtrl: App, public viewCtrl:ViewController) {

    this.title = "un autre titre dynamique";
    this.content = "un autre texte de détails..";
    this.actionName = "Action 2";

    this.listTitle = "Ma liste des cartes";

    this.actions = [{
      label:"test",
      action : () => {this.goToPage()}
    }, {
      label:"test2",
      action : () => {this.goToPage2()}
    }
    ];

    debugger;
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

  goToPage() {
    //debugger;
    this.appCtrl.getRootNav().push(ContactPage);
    //this.viewCtrl.getNav().push(ContactPage);

    //this.navCtrl.push(ContactPage);
  }

  goToPage2() {
    //debugger;
    //this.appCtrl.getRootNav().push(ContactPage);
    //this.viewCtrl.getNav().push(ContactPage);

    this.navCtrl.push(ContactPage);
  }


}

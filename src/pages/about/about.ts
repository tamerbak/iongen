import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController) {

    this.title = "un autre titre dynamique";
    this.content = "un autre texte de détails..";
    this.actionName = "Action 2";

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

  goToPage() {
    this.navCtrl.push(ContactPage);
  }

}

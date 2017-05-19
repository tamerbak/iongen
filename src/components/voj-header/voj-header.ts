import {Component, Input} from '@angular/core';
import {Platform} from "ionic-angular";

/**
 * Generated class for the VojHeader component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'voj-header',
  templateUrl: 'voj-header.html'
})
export class VojHeader {

  text: string;
  isWeb:boolean;

  @Input('first-segment') firstSegment: string;
  @Input('second-segment') secondSegment: string;

  @Input('account-button-title') accountButtonTitle: string;
  @Input('mission-button-title') missionButtonTitle: string;
  @Input('offer-button-title') offerButtonTitle: string;
  @Input('search-button-title') searchButtonTitle: string;


  constructor(private platform: Platform) {
    console.log('Hello VojHeader Component');
    this.text = 'Hello World';
    this.isWeb = !this.platform.is('cordova');
    this.firstSegment = 'Map';
    this.secondSegment = 'Liste';
    this.accountButtonTitle = 'Compte';
    this.missionButtonTitle = 'Missions';
    this.offerButtonTitle = 'Annonces';
    this.searchButtonTitle = 'Recherche';

  }

}

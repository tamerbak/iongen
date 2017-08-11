import {Component, Input} from '@angular/core';

/**
 * Generated class for the VojCard component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'voj-card',
  templateUrl: 'voj-card.html'
})
export class VojCard {

  //text: string;
  backgroundImage:any;
  //input property of the search bar that we can update via property binding
  @Input('title') title: string;
  @Input('content') content: string;
  @Input('action-name') actionName: string;
  @Input('cover') cover:string;
  @Input('thumbnail') thumbnail:string;
  @Input('subtitle1') subtitle1:string;
  @Input('subtitle2') subtitle2:string;
  @Input('subtitle1-icon') subtitleIcon1:string;
  @Input('subtitle2-icon') subtitleIcon2:string;
  @Input('note') note:string;
  @Input('buttons') buttons: Array <{label : string, action: Function}>;

  constructor() {
    console.log('Hello VojCard Component');
    //this.cover = "assets/img/advance-card-bttf.png";
    //this.text = 'Hello World';
  }

  launchAction(event) {
    debugger;
    //this.actions.;
  }

}

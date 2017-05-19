import { Component } from '@angular/core';
import {Platform} from "ionic-angular";

/**
 * Generated class for the VojFooter component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'voj-footer',
  templateUrl: 'voj-footer.html'
})
export class VojFooter {

  text: string;
  isWeb:boolean;

  constructor(private platform:Platform) {
    console.log('Hello VojFooter Component');
    this.text = 'Hello World';
    this.isWeb = !this.platform.is('cordova');
  }

}

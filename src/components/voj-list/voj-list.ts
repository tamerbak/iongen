import {Component, Input} from '@angular/core';

/**
 * Generated class for the VojList component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'voj-list',
  templateUrl: 'voj-list.html'
})
export class VojList {

  @Input('cards') cards: any;
  @Input('title') title: string;

  constructor() {
    console.log('Hello VojList Component');

  }

}

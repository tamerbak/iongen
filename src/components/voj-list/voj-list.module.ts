import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VojList } from './voj-list';
import {VojCardModule} from "../voj-card/voj-card.module";

@NgModule({
  declarations: [
    VojList,
  ],
  imports: [
    VojCardModule,
    IonicPageModule.forChild(VojList),
  ],
  exports: [
    VojList
  ]
})
export class VojListModule {}

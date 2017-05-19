import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VojHeader } from './voj-header';

@NgModule({
  declarations: [
    VojHeader,
  ],
  imports: [
    IonicPageModule.forChild(VojHeader),
  ],
  exports: [
    VojHeader
  ]
})
export class VojHeaderModule {}

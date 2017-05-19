import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VojFooter } from './voj-footer';

@NgModule({
  declarations: [
    VojFooter,
  ],
  imports: [
    IonicPageModule.forChild(VojFooter),
  ],
  exports: [
    VojFooter
  ]
})
export class VojFooterModule {}

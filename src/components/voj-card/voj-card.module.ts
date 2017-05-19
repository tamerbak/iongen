import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VojCard } from './voj-card';

@NgModule({
  declarations: [
    VojCard,
  ],
  imports: [
    IonicPageModule.forChild(VojCard),
  ],
  exports: [
    VojCard
  ]
})
export class VojCardModule {}

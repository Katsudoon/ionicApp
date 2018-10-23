import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { APIPage } from './API';

@NgModule({
  declarations: [
    APIPage,
  ],
  imports: [
    IonicPageModule.forChild(APIPage),
  ],
})
export class APIPageModule {}

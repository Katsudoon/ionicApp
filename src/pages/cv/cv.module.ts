import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CvPage } from './cv';
import { CardCvComponent } from '../../components/card-cv/card-cv';

@NgModule({
  declarations: [
    CvPage,
    CardCvComponent
  ],
  imports: [
    IonicPageModule.forChild(CvPage),
  ],
})
export class CvPageModule {}

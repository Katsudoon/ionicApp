import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-cv',
  templateUrl: 'cv.html',
})
export class CvPage {

  pdfSrc: string = 'assets/CV_Alexis_Gauthier_Developpeur-Android-IOS_2018.pdf';

  share(){
    this.socialSharing.share(null, "This is my resume", "www/assets/CV_Alexis_Gauthier_Developpeur-Android-IOS_2018.pdf", null).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {

  }

  ionViewDidLoad() {

  }
}
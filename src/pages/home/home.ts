import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PortfolioPage } from '../portfolio/portfolio';
import { CvPage } from '../cv/cv';
import { AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputMail:string;
  inputmessage:string;
  inputTitre:string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private emailComposer: EmailComposer) {

  }

  send() {

    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send
      }
    });

    let email = {
      to: 'alexgauth.work@gmail.com',
      cc: this.inputMail,
      bcc: [''],
      subject: this.inputTitre,
      body: this.inputmessage,
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);

    let alert = this.alertCtrl.create({
      title: 'Merci !',
      subTitle: 'Je vous repond des que possible.',
      buttons: ['Fermer']
    });
    alert.present();
  }

  goToCv() {
    this.navCtrl.push(CvPage);
  }
  goToPortfolio() {
    this.navCtrl.push(PortfolioPage);
  }

}

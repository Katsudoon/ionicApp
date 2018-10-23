import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { APIPage } from '../API/API';
import { LinkedinPage } from '../linkedin/linkedin';
import { MapPage } from '../map/map';


/**
 * Generated class for the PortfolioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {

  goToApi() {
    this.navCtrl.push(APIPage);
  }
  goTolinkedin() {
    this.navCtrl.push(LinkedinPage);
  }
  goToMap() {
    this.navCtrl.push(MapPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }



}

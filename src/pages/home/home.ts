import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PortfolioPage } from '../portfolio/portfolio';
import { CvPage } from '../cv/cv';
import { PresentationPage } from '../presentation/presentation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToCv() {
    this.navCtrl.push(CvPage);
  }
  goToPortfolio() {
    this.navCtrl.push(PortfolioPage);
  }
  goToPresentation() {
    this.navCtrl.push(PresentationPage);
  }

}

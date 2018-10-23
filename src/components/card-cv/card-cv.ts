import { Component } from '@angular/core';

/**
 * Generated class for the CardCvComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-cv',
  templateUrl: 'card-cv.html'
})
export class CardCvComponent {

  text: string;
  title: string;

  constructor() {
    console.log('Hello CardCvComponent Component');
  }

}

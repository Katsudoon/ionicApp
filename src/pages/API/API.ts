import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';



@Component({
  selector: 'page-API',
  templateUrl: 'API.html',
})
export class APIPage {

  weatherInfo: Object;
  inputTown:string;
  hidden = false;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherProvider: WeatherProvider) {
  }

getWeather(){
  this.weatherProvider.currentWeather(this.inputTown, 'be').subscribe((json) => {
    this.weatherInfo = json
    this.hidden = true;
    console.log(this.weatherInfo)}
  )
}

  ionViewDidLoad() {

  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  baseurl = 'http://api.openweathermap.org/data/2.5';
  appId = '590b866c305e060d7c1acdfee8d275dc';

  constructor(public http: HttpClient) {

  }

  currentWeather(city:string, country:string){

    var params = { 'APPID': this.appId, 'q': city + ',' + country, 'units': 'metric' };
    var reqOpts = { params: new HttpParams()};
    if(params){
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
    return this.http.get(this.baseurl+'/weather', reqOpts)
  }

}
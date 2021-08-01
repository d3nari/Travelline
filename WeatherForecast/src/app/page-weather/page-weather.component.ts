import { Component, OnInit, OnDestroy} from '@angular/core';
import { DataService } from "../service/data.service";
import { Subscription } from 'rxjs';
  import * as delay from 'delay';

@Component({
  selector: 'app-page-weather',
  templateUrl: './page-weather.component.html',
  styleUrls: ['./page-weather.component.css']
})
export class PageWeatherComponent implements OnInit, OnDestroy {

  forecast: any = null;
  subscription: any;
  hasForecast: boolean = false;
  temperature: string = '';
  humidity: string = '';

  constructor(private data: DataService) { }

  async ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(forecast => {
      this.forecast = forecast;
      this.hasForecast = !!Object.keys(forecast).length;    
    })
    console.log(this.forecast)
    await delay(900)
    this.checkWeather();
    console.log(this.temperature)
    console.log(this.humidity)
  }

  checkWeather(): void {
    this.checkTemp();

  }
  
  checkTemp(): void {
    if (this.forecast.main.temp > 14)
    {
      this.temperature = 'summer'; 
    }
    else
    {
      this.temperature = 'winter';
    }

    this.forecast.main.humidity < 30 ? this.humidity = 'sunny' : this.forecast.main.humidity  < 40 ? this.humidity = 'sunny_clouds' : this.forecast.main.humidity < 60 ? this.humidity = 'clouds' : this.forecast.main.humidity < 80 ? this.humidity = 'rain_clouds' : this.humidity = 'hard_clouds'; 

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}

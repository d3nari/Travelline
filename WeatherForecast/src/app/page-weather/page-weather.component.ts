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
  hasWind: boolean = false;
  hasTemp: boolean = false;
  hasHum: boolean = false;
  temperature: string = '';
  humidity: string = '';
  hasEror: boolean = false;
  
  constructor(private data: DataService) { }

  async ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(forecast => {
      this.forecast = forecast;
      this.hasEror = Object.keys(forecast).length == 0 ;
      this.hasForecast = Object.keys(forecast).length > 1;    
    })
    console.log(this.forecast)
    await delay(700)
    this.validateForecastValue()
    this.checkWeather();
  }

  checkWeather(): void {
    this.checkTemp();
  }
  
  checkTemp(): void {
    if (this.forecast.main.temp > 25)
    {
      this.temperature = 'summer'; 
    }
    else
    {
      this.temperature = 'winter';
    }
    this.forecast.main.humidity < 30 ? this.humidity = 'sunny' : this.forecast.main.humidity  < 40 ? this.humidity = 'sunny_clouds' : this.forecast.main.humidity < 60 ? this.humidity = 'clouds' : this.forecast.main.humidity < 80 ? this.humidity = 'rain_clouds' : this.humidity = 'hard_clouds'; 
  }

  isNumber(value: any) 
  {
    return typeof value === 'number' && isFinite(value);
  }

  validateForecastValue(): void {
    if (this.forecast && this.forecast.wind && this.isNumber(this.forecast.wind.speed))
    {
      this.hasWind = true;
    }
    if (this.forecast && this.forecast.main && this.isNumber(this.forecast.main.temp))
    {
      this.hasTemp = true;
    }
    if (this.forecast && this.forecast.main && this.isNumber(this.forecast.main.humidity))
    {
      this.hasHum = true;
    }
  }

  ngOnDestroy() {
    this.forecast = {}
    this.subscription.unsubscribe();
  }
}

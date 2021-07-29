import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherForecastServiceService } from '../weather-forecast-service.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../normalize.css']
  
})

export class HomeComponent implements OnInit {
  forecasts: any = [];
  cityname: any = [];

  baseForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private weatherForecastServiceService: WeatherForecastServiceService) {}


  ngOnInit(): void {
  }

  getForecast(): void {
    this.forecasts = this.weatherForecastServiceService.getForecast(this.cityname).subscribe(data => console.log(data));
  }

  getCityName(): void {
    this.cityname = document.getElementsByTagName("input")[0].value;
    console.log(this.cityname)
    this.getForecast();
  }
}
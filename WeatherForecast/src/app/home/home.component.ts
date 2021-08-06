import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherForecastService } from '../weather-forecast-service.service';
import { DataService } from "../service/data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})

export class HomeComponent implements OnInit, OnDestroy {
  forecasts: any = [];
  cityname: any = [];
  cities: any = [];
  userCity: string = '';
  message: object = {};
  subscription: any;

  baseForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private weatherForecastService: WeatherForecastService, private data: DataService) {}

  cityList: any[] = [
    { name:'Abakan'},
    { name:'Azov'},
    { name:"Alexandrov"},
    { name:"Aleksin"},
    { name:"Almetyevsk"},
    { name:"Anapa"},
    { name:"Angarsk"},
    { name:"Anzhero"},
    { name:"Apatity"},
    { name:"Arzamas"},
    { name:"Armavir"},
    { name:"Norilsk"},
    { name:"Moscow"},
    { name:"London"},
    { name:"Paris"},
    { name:"Kazan"},
    { name:"Kabul"},
    { name:"Algiers"},
    { name:"Minsk"},
    { name:"Ottawa"},
    { name:"Beijing"},
    { name:"Moroni"},
    { name:"Tegucigalpa"},
    { name:"Jakarta"},
    { name:"Dublin"},
    { name: "Dudinka"},
    { name: "Murmansk"},  
    { name: "McMurdo Station"}
  ]

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage(forecasts: any) {
    this.data.changeMessage(forecasts)
  }

  getForecast(): void {
    this.newMessage({name: this.cityname})
    this.forecasts = this.weatherForecastService.getForecast(this.cityname).subscribe(data => {
      this.newMessage(data);
      console.log(data)
    });
  }

  getCityName(): void {
    this.cityname = document.getElementsByTagName("input")[0].value;
    this.getForecast();
  }

  changeCity(keyword: any): void {
    this.userCity = keyword;
    if (keyword == '')
    {
      this.cities = []
    }
    else
    {
      this.cities = this.cityList.filter(city => city.name.startsWith(keyword)); 
      if (this.cities.length > 3)
      {
        this.cities.length = 3;
      }
      if (this.cities.length == 0)
      {
        this.cities.push({id: 1, name: 'Неправильно введен город!'})
      }
    }  
  }

  onSelect(city: string): void {
    this.userCity = city;
  }

}
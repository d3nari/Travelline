import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherForecastService } from '../weather-forecast-service.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})

export class HomeComponent implements OnInit {
  forecasts: any = [];
  cityname: any = [];
  cities: any = [];
  userCity: string = '';

  baseForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private weatherForecastService: WeatherForecastService) {}

  cityList: any[] = [
    {id: 1, name:'Abakan'},
    {id: 1, name:'Azov'},
    {id: 1, name:"Alexandrov"},
    {id: 1, name:"Aleksin"},
    {id: 1, name:"Almetyevsk"},
    {id: 1, name:"Anapa"},
    {id: 1, name:"Angarsk"},
    {id: 1, name:"Anzhero"},
    {id: 1, name:"Apatity"},
    {id: 1, name:"Arzamas"},
    {id: 1, name:"Armavir"},
    {id: 1, name:"Arseniev"},
    {id: 1, name:"Moscow"},
  ]

  ngOnInit(): void {
  }

  getForecast(): void {
    this.forecasts = this.weatherForecastService.getForecast(this.cityname).subscribe(data => console.log(data));
  }

  getCityName(): void {
    this.cityname = document.getElementsByTagName("input")[0].value;
    console.log(this.cityname)
    this.getForecast();
  }

  changeCity(keyword: any): void {
    this.userCity = keyword;
    console.log('keyword', keyword);
    this.cities = this.cityList.filter(city => city.name.startsWith(keyword)); 
    if (this.cities.length > 3)
    {
      this.cities.length = 3;
    }
    console.log(this.cities);
  }

  onSelect(city: string): void {
    this.userCity = city;
  }

}
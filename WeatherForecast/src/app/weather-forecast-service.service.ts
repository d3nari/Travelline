import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherForecastServiceService {

  constructor(private http: HttpClient) { }

  getForecast(cityname: string)  {
    return this.http.get<object>('https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=75c605720f058a5b8f807e00252375fc&units=metric');
  }
}

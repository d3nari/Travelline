import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-page-weather',
  templateUrl: './page-weather.component.html',
  styleUrls: ['./page-weather.component.css']
})
export class PageWeatherComponent implements OnInit {
  @Input() cityName : string = ""; 
  constructor() { }

  ngOnInit(): void {
  }

}

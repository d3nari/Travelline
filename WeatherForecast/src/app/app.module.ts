import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherForecastServiceService } from './weather-forecast-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PageWeatherComponent } from './page-weather/page-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageWeatherComponent,
    PageWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherForecastServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

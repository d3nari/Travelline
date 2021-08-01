import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherForecastService } from './weather-forecast-service.service';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { PageWeatherComponent } from './page-weather/page-weather.component';
import { RouterModule } from '@angular/router';

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
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'app-page-weather', component: PageWeatherComponent }, 
    ])
  ],
  providers: [WeatherForecastService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

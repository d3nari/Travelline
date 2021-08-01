import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageWeatherComponent } from './page-weather/page-weather.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page-weather', component: PageWeatherComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

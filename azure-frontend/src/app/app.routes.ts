import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
